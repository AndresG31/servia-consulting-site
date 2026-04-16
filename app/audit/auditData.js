export const auditCategories = [
  {
    id: 'operations',
    title: 'Operations & Kitchen Management',
    description: 'Evaluate the efficiency and consistency of your back-of-house operations.',
    items: [
      { id: 'op1', label: 'Documented opening and closing procedures are followed daily' },
      { id: 'op2', label: 'Kitchen layout supports smooth, logical prep-to-plate workflow' },
      { id: 'op3', label: 'Equipment maintenance schedule is documented and current' },
      { id: 'op4', label: 'Inventory is counted on a set schedule (weekly or bi-weekly)' },
      { id: 'op5', label: 'Waste tracking and reduction practices are actively in use' },
      { id: 'op6', label: 'Food preparation standards and plating guides are documented' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial Performance',
    description: 'Assess how well your financials are monitored, managed, and optimized.',
    items: [
      { id: 'fin1', label: 'Food cost percentage is tracked weekly and benchmarked against target' },
      { id: 'fin2', label: 'Labor cost as a % of revenue is reviewed monthly' },
      { id: 'fin3', label: 'A formal P&L review is conducted at least monthly' },
      { id: 'fin4', label: 'Break-even point per week or month is known and monitored' },
      { id: 'fin5', label: 'Cash flow is actively managed with a rolling 30-day forecast' },
      { id: 'fin6', label: 'Revenue per available seat hour (RevPASH) is tracked during service' },
    ],
  },
  {
    id: 'menu',
    title: 'Menu & Product Quality',
    description: 'Review how strategically your menu is designed, priced, and maintained.',
    items: [
      { id: 'men1', label: 'Menu items are analyzed for profitability and popularity (menu engineering)' },
      { id: 'men2', label: 'Standardized recipes are written for every dish with portion controls' },
      { id: 'men3', label: 'Menu is reviewed and refreshed at least twice per year' },
      { id: 'men4', label: 'Pricing is set strategically, not just by marking up food cost' },
      { id: 'men5', label: 'Allergen and dietary information is documented and accessible' },
      { id: 'men6', label: 'Supplier quality is evaluated on a regular basis' },
    ],
  },
  {
    id: 'staff',
    title: 'Staff & Human Resources',
    description: 'Gauge the strength of your team, training programs, and leadership pipeline.',
    items: [
      { id: 'stf1', label: 'A structured onboarding and training program exists for all roles' },
      { id: 'stf2', label: 'Employee retention rate is tracked and above industry average' },
      { id: 'stf3', label: 'Formal performance reviews are conducted at least annually' },
      { id: 'stf4', label: 'Scheduling is optimized to match expected covers and reduce overtime' },
      { id: 'stf5', label: 'Clear channels for team communication and shift handoffs are in place' },
      { id: 'stf6', label: 'At least one manager or supervisor is being developed for a leadership role' },
    ],
  },
  {
    id: 'customer',
    title: 'Customer Experience',
    description: 'Measure how consistently you deliver exceptional experiences that drive loyalty.',
    items: [
      { id: 'cus1', label: 'Online reviews (Google, Yelp) are monitored and responded to within 48 hours' },
      { id: 'cus2', label: 'A guest satisfaction feedback mechanism is in place (surveys, comment cards, etc.)' },
      { id: 'cus3', label: 'Wait time and table turn standards are defined and tracked during service' },
      { id: 'cus4', label: 'A documented complaint resolution process exists for front-of-house staff' },
      { id: 'cus5', label: 'A loyalty or repeat-guest reward program is active' },
      { id: 'cus6', label: 'Reservation and waitlist management is handled through a system (not pen and paper)' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Brand',
    description: 'Evaluate your brand presence, visibility, and marketing effectiveness.',
    items: [
      { id: 'mkt1', label: 'Social media accounts are updated at least 3 times per week with original content' },
      { id: 'mkt2', label: 'Google Business Profile is claimed, complete, and updated regularly' },
      { id: 'mkt3', label: 'Local SEO basics are in place (consistent NAP, local keywords, website)' },
      { id: 'mkt4', label: 'An email or SMS marketing list is being actively built and used' },
      { id: 'mkt5', label: 'The restaurant participates in at least one community or local marketing event per quarter' },
      { id: 'mkt6', label: 'Brand visuals (logo, colors, photography) are consistent across all channels' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology & Systems',
    description: 'Identify gaps in your tech stack that may be limiting efficiency or revenue.',
    items: [
      { id: 'tec1', label: 'POS system provides detailed sales, labor, and menu performance reporting' },
      { id: 'tec2', label: 'Online ordering is integrated with your POS (not manually entered)' },
      { id: 'tec3', label: 'Third-party delivery platforms are managed through a single aggregator or integration' },
      { id: 'tec4', label: 'Data and analytics are reviewed weekly to drive decisions' },
      { id: 'tec5', label: 'Multiple digital payment options are available (tap, mobile wallets, etc.)' },
      { id: 'tec6', label: 'Table management or reservation software is used to optimize floor performance' },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Preventative Care',
    description: 'Assess how well your kitchen equipment, facilities, and systems are maintained to prevent costly downtime.',
    items: [
      { id: 'mnt1', label: 'A written preventative maintenance schedule exists for all major kitchen equipment' },
      { id: 'mnt2', label: 'Equipment service logs are kept and reviewed regularly (fryers, ovens, refrigeration, HVAC)' },
      { id: 'mnt3', label: 'Hood and exhaust systems are professionally cleaned on a documented schedule' },
      { id: 'mnt4', label: 'Refrigeration units are checked and calibrated regularly to ensure proper temperature holding' },
      { id: 'mnt5', label: 'A preferred vendor or service contract is in place for emergency equipment repairs' },
      { id: 'mnt6', label: 'Deep cleaning protocols for kitchen equipment are followed on a weekly and monthly basis' },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Safety',
    description: 'Confirm your operation is legally protected and safety-certified.',
    items: [
      { id: 'com1', label: 'All applicable health permits and licenses are current and displayed' },
      { id: 'com2', label: 'All food handlers have current food safety certifications' },
      { id: 'com3', label: 'A HACCP (Hazard Analysis Critical Control Points) plan is written and followed' },
      { id: 'com4', label: 'Fire safety equipment is inspected and staff is trained on emergency procedures' },
      { id: 'com5', label: 'Labor law requirements (breaks, overtime, tip reporting) are documented and followed' },
      { id: 'com6', label: "Insurance coverage (general liability, workers's comp, liquor) is reviewed annually" },
    ],
  },
]

export const SCORE_LABELS = ['Not in Place', 'Partially in Place', 'Fully in Place']
export const SCORE_COLORS = ['bg-red-500', 'bg-yellow-500', 'bg-emerald-600']
export const SCORE_TEXT   = ['text-red-400', 'text-yellow-400', 'text-emerald-400']

export const SCORE_PILL_SELECTED = [
  'bg-red-500 text-white border-red-500',
  'bg-yellow-500 text-white border-yellow-500',
  'bg-emerald-600 text-white border-emerald-600',
]

export const SCORE_BORDER_L = [
  'border-l-4 border-l-red-500',
  'border-l-4 border-l-yellow-500',
  'border-l-4 border-l-emerald-500',
]

export const SCORE_DOT_COLORS = ['bg-red-500', 'bg-yellow-500', 'bg-emerald-500']

export function getPerformanceBand(pct) {
  if (pct >= 86) return { label: 'Optimized',   color: 'text-emerald-400', bg: 'bg-emerald-600', desc: 'Your restaurant is operating at a high level. Focus on sustaining performance and innovating for growth.' }
  if (pct >= 71) return { label: 'Established', color: 'text-blue-400',    bg: 'bg-blue-600',    desc: 'Strong foundation is in place. Targeted improvements in weaker areas will push you to the next level.' }
  if (pct >= 41) return { label: 'Developing',  color: 'text-yellow-400',  bg: 'bg-yellow-600',  desc: 'Several critical systems need attention. A structured consulting engagement can accelerate your progress.' }
  return           { label: 'Critical',    color: 'text-red-400',     bg: 'bg-red-600',     desc: 'Fundamental operational gaps are putting your business at risk. Immediate strategic support is recommended.' }
}

export function getCategoryBand(pct) {
  if (pct >= 86) return { label: 'Strong',       color: 'text-emerald-400', bar: 'bg-emerald-600' }
  if (pct >= 71) return { label: 'Good',          color: 'text-blue-400',    bar: 'bg-blue-600' }
  if (pct >= 41) return { label: 'Needs Work',    color: 'text-yellow-400',  bar: 'bg-yellow-500' }
  return           { label: 'Critical Gap', color: 'text-red-400',     bar: 'bg-red-600' }
}

export const PERFORMANCE_BAND_DEFS = [
  { label: 'Critical',    range: '0 – 40%',   color: 'text-red-400',     border: 'border-red-800',     bg: 'bg-red-900/20',     glow: 'hover-glow-red',     desc: 'Fundamental operational gaps are present. Immediate strategic intervention is required to stabilize the business.' },
  { label: 'Developing',  range: '41 – 70%',  color: 'text-yellow-400',  border: 'border-yellow-800',  bg: 'bg-yellow-900/20',  glow: 'hover-glow-yellow',  desc: 'Core systems exist but are inconsistently applied. Structured consulting engagement will accelerate progress.' },
  { label: 'Established', range: '71 – 85%',  color: 'text-blue-400',    border: 'border-blue-800',    bg: 'bg-blue-900/20',    glow: 'hover-glow-blue',    desc: 'A strong foundation is in place. Focused improvements in weaker areas will unlock the next performance level.' },
  { label: 'Optimized',   range: '86 – 100%', color: 'text-emerald-400', border: 'border-emerald-800', bg: 'bg-emerald-900/20', glow: 'hover-glow-emerald', desc: 'Operating at a high level across most areas. Focus shifts to sustaining performance and competitive differentiation.' },
]
