import chromium from '@sparticuz/chromium-min'
import puppeteer from 'puppeteer-core'
import {
  auditCategories,
  getPerformanceBand,
  getCategoryBand,
} from '../audit/auditData'

export function buildHtml(scores) {
  const totalItems = auditCategories.reduce((acc, cat) => acc + cat.items.length, 0)
  const answeredItems = Object.keys(scores).length
  const totalScore = Object.values(scores).reduce((acc, v) => acc + v, 0)
  const maxScore = totalItems * 2
  const overallPct = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0
  const band = getPerformanceBand(overallPct)

  const categoryStats = auditCategories.map(cat => {
    const catScore = cat.items.reduce((acc, item) => acc + (scores[item.id] ?? 0), 0)
    const catMax = cat.items.length * 2
    const catPct = Math.round((catScore / catMax) * 100)
    const answered = cat.items.filter(item => scores[item.id] !== undefined).length
    return { ...cat, catScore, catMax, catPct, answered, band: getCategoryBand(catPct) }
  })

  const weakestCategories = [...categoryStats]
    .filter(c => c.answered === c.items.length)
    .sort((a, b) => a.catPct - b.catPct)
    .slice(0, 3)

  const scoreDistribution = [
    { label: 'Not in Place',       value: 0, color: '#ef4444' },
    { label: 'Partially in Place', value: 1, color: '#eab308' },
    { label: 'Fully in Place',     value: 2, color: '#059669' },
  ].map(t => ({
    ...t,
    count: Object.values(scores).filter(x => x === t.value).length,
    pct: Math.round((Object.values(scores).filter(x => x === t.value).length / totalItems) * 100),
  }))

  const bandColorMap = {
    'Optimized':   '#059669',
    'Established': '#3b82f6',
    'Developing':  '#eab308',
    'Critical':    '#ef4444',
  }
  const bandHex = bandColorMap[band.label] ?? '#059669'

  const catBandColorMap = {
    'Strong':       '#059669',
    'Good':         '#3b82f6',
    'Needs Work':   '#eab308',
    'Critical Gap': '#ef4444',
  }

  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Restaurant Audit Results — Servia Consulting</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; padding: 40px 48px; color: #111; background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-size: 13px; min-height: 1123px; display: flex; flex-direction: column; }
    .header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 3px solid #059669; }
    .header h1 { color: #065f46; font-size: 22px; font-weight: 900; margin-bottom: 3px; }
    .header .subtitle { color: #6b7280; font-size: 12px; }
    .header .date { font-size: 11px; color: #9ca3af; }
    .score-hero { display: flex; align-items: center; gap: 28px; background: #f0fdf4; border: 1px solid #d1fae5; border-radius: 12px; padding: 24px 28px; margin-bottom: 28px; }
    .score-num { font-size: 72px; font-weight: 900; line-height: 1; flex-shrink: 0; }
    .score-meta { flex: 1; }
    .band-pill { display: inline-block; color: #fff; padding: 4px 16px; border-radius: 999px; font-weight: 700; font-size: 13px; margin-bottom: 10px; }
    .overall-bar-bg { background: #e5e7eb; border-radius: 5px; height: 10px; width: 100%; margin-bottom: 8px; }
    .overall-bar-fill { height: 10px; border-radius: 5px; }
    .bar-note { font-size: 11px; color: #6b7280; margin-bottom: 8px; }
    .band-desc { font-size: 12px; color: #374151; line-height: 1.6; }
    .body-cols { display: flex; gap: 24px; flex: 1; }
    .col-left { flex: 1.6; display: flex; flex-direction: column; }
    .col-right { flex: 1; display: flex; flex-direction: column; }
    .section-title { color: #065f46; font-size: 13px; font-weight: 800; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 2px solid #d1fae5; }
    table { width: 100%; border-collapse: collapse; font-size: 12px; flex: 1; }
    th { background: #f0fdf4; color: #065f46; font-weight: 700; text-align: left; padding: 9px 10px; }
    td { padding: 9px 10px; border-bottom: 1px solid #f3f4f6; vertical-align: middle; }
    .bar-cell { width: 100px; }
    .bar-bg { background: #e5e7eb; border-radius: 4px; height: 8px; width: 100px; overflow: hidden; }
    .bar-fill { height: 8px; border-radius: 4px; display: block; }
    .priority-item { display: flex; align-items: center; gap: 12px; background: #f0fdf4; border-radius: 9px; padding: 14px 14px; margin-bottom: 10px; border-left: 3px solid #059669; }
    .rank { width: 26px; height: 26px; border-radius: 50%; background: #059669; color: #fff; font-size: 11px; font-weight: 900; text-align: center; line-height: 26px; flex-shrink: 0; }
    .priority-text { flex: 1; }
    .priority-title { font-size: 12px; font-weight: 700; margin-bottom: 2px; }
    .priority-sub { font-size: 11px; color: #6b7280; }
    .priority-pct { font-size: 17px; font-weight: 900; flex-shrink: 0; }
    .dist-section { margin-top: 20px; }
    .dist-row { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
    .dist-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
    .dist-label { font-size: 11px; flex: 1; }
    .dist-bar-bg { background: #e5e7eb; border-radius: 3px; height: 7px; flex: 1.2; overflow: hidden; }
    .dist-bar-fill { height: 7px; border-radius: 3px; display: block; }
    .dist-nums { font-size: 11px; font-weight: 700; width: 46px; text-align: right; white-space: nowrap; }
    .footer { margin-top: 24px; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb; padding-top: 10px; display: flex; justify-content: space-between; }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>Restaurant Audit Framework</h1>
      <div class="subtitle">Servia Consulting — Diagnostic Report</div>
    </div>
    <div class="date">${dateStr}</div>
  </div>
  <div class="score-hero">
    <div class="score-num" style="color:${bandHex}">${overallPct}%</div>
    <div class="score-meta">
      <div class="band-pill" style="background:${bandHex}">${band.label}</div>
      <div class="overall-bar-bg"><div class="overall-bar-fill" style="width:${overallPct}%;background:${bandHex}"></div></div>
      <div class="bar-note">${answeredItems} of ${totalItems} criteria scored</div>
      <div class="band-desc">${band.desc}</div>
    </div>
  </div>
  <div class="body-cols">
    <div class="col-left">
      <div class="section-title">Category Breakdown</div>
      <table>
        <tr><th>Category</th><th>Score</th><th>Status</th><th class="bar-cell">Progress</th></tr>
        ${categoryStats.map(cat => {
          const hex = catBandColorMap[cat.band.label] ?? '#059669'
          return `<tr>
            <td>${cat.title}</td>
            <td><strong>${cat.catPct}%</strong></td>
            <td style="color:${hex};font-weight:600;white-space:nowrap">${cat.band.label}</td>
            <td class="bar-cell"><div class="bar-bg"><div class="bar-fill" style="width:${cat.catPct}%;background:${hex}"></div></div></td>
          </tr>`
        }).join('')}
      </table>
    </div>
    <div class="col-right">
      ${weakestCategories.length > 0 ? `
      <div class="section-title">Priority Focus Areas</div>
      ${weakestCategories.map((cat, i) => {
        const hex = catBandColorMap[cat.band.label] ?? '#059669'
        return `<div class="priority-item">
          <div class="rank">${i + 1}</div>
          <div class="priority-text">
            <div class="priority-title">${cat.title}</div>
            <div class="priority-sub">${cat.catMax - cat.catScore} pts available</div>
          </div>
          <div class="priority-pct" style="color:${hex}">${cat.catPct}%</div>
        </div>`
      }).join('')}
      ` : ''}
      <div class="dist-section">
        <div class="section-title" style="margin-top:${weakestCategories.length > 0 ? '14px' : '0'}">Score Distribution</div>
        ${scoreDistribution.map(t => `
        <div class="dist-row">
          <div class="dist-dot" style="background:${t.color}"></div>
          <div class="dist-label">${t.label}</div>
          <div class="dist-bar-bg"><div class="dist-bar-fill" style="width:${t.pct}%;background:${t.color}"></div></div>
          <div class="dist-nums" style="color:${t.color}">${t.count} · ${t.pct}%</div>
        </div>`).join('')}
      </div>
    </div>
  </div>
  <div class="footer">
    <span>Generated by Servia Consulting · Restaurant Audit Framework</span>
    <span>${answeredItems} of ${totalItems} criteria scored</span>
  </div>
</body>
</html>`
}

export async function generatePdf(scores) {
  const html = buildHtml(scores)
  const isLocal = process.env.NODE_ENV === 'development'

  const browser = await puppeteer.launch({
    args: isLocal ? ['--no-sandbox', '--disable-setuid-sandbox'] : chromium.args,
    executablePath: isLocal
      ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      : await chromium.executablePath(
          'https://github.com/Sparticuz/chromium/releases/download/v143.0.0/chromium-v143.0.0-pack.tar'
        ),
    headless: true,
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'networkidle0' })

  const pdf = await page.pdf({
    format: 'A4',
    landscape: false,
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  })

  await browser.close()
  return pdf
}
