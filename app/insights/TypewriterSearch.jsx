'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function TypewriterSearch({ newsources, previewSourceNames, previewAssociations, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [placeholderText, setPlaceholderText] = useState('')
  const [activePhraseIndex, setActivePhraseIndex] = useState(0)
  const [previewFading, setPreviewFading] = useState(false)
  const [filteredSources, setFilteredSources] = useState([])

  useEffect(() => {
    const phrases = previewSourceNames.map(n => n + '...')
    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timeout

    const type = () => {
      const current = phrases[phraseIndex]
      if (!deleting) {
        charIndex++
        setPlaceholderText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          setActivePhraseIndex(phraseIndex)
          setPreviewFading(false)
          deleting = true
          timeout = setTimeout(type, 5000)
        } else {
          timeout = setTimeout(type, 60)
        }
      } else {
        charIndex--
        setPlaceholderText(current.slice(0, charIndex))
        if (charIndex === 0) {
          setPreviewFading(true)
          deleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          timeout = setTimeout(type, 400)
        } else {
          timeout = setTimeout(type, 30)
        }
      }
    }

    timeout = setTimeout(type, 800)
    return () => clearTimeout(timeout)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!searchTerm) { setFilteredSources([]); return }
    const lower = searchTerm.toLowerCase()
    setFilteredSources(
      newsources.filter(s =>
        s.name.toLowerCase().includes(lower) ||
        s.description.toLowerCase().includes(lower) ||
        s.category.toLowerCase().includes(lower)
      )
    )
  }, [searchTerm, newsources])

  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false)
    if (showDropdown) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [showDropdown])

  const previewSource = newsources.find(s => s.name === previewSourceNames[activePhraseIndex])

  return (
    <div className="max-w-2xl mx-auto relative">
      <div className="relative" onClick={(e) => { e.stopPropagation(); setShowDropdown(true) }}>
        <input
          type="text"
          placeholder={searchTerm ? 'Search news sources...' : placeholderText}
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setShowDropdown(true) }}
          onFocus={() => setShowDropdown(true)}
          className="w-full px-6 py-4 pl-14 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-colors search-glow"
        />
        <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {searchTerm && (
          <button
            onClick={(e) => { e.stopPropagation(); setSearchTerm(''); setShowDropdown(false) }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && searchTerm && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-2 border-emerald-600/30 rounded-2xl shadow-2xl shadow-emerald-500/20 overflow-hidden z-[60] max-h-96 overflow-y-auto">
          {filteredSources.length > 0 ? (
            <>
              <div className="px-4 py-3 bg-emerald-600/20 border-b border-emerald-600/30">
                <p className="text-emerald-400 text-sm font-semibold">
                  {filteredSources.length} source{filteredSources.length !== 1 ? 's' : ''} found
                </p>
              </div>
              {filteredSources.map((source, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.preventDefault(); e.stopPropagation()
                    window.open(source.url, '_blank', 'noopener,noreferrer')
                    setSearchTerm(''); setShowDropdown(false)
                  }}
                  className="w-full px-6 py-4 hover:bg-emerald-600/20 transition-all text-left border-b border-white/5 last:border-b-0 group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    {source.iconImage ? (
                      <div className={`${source.logoSize ?? 'w-12 h-12'} relative flex-shrink-0 rounded-lg overflow-hidden bg-white`}>
                        <Image src={source.iconImage} alt={`${source.name} logo`} fill className={`object-contain ${source.logoPadding ?? 'p-1'}`} />
                      </div>
                    ) : (
                      <div className="text-3xl">{source.icon}</div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-bold group-hover:text-emerald-400 transition-colors">{source.name}</h4>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-1">{source.description}</p>
                      <div className="mt-1">
                        <span className="inline-block bg-emerald-600/20 text-emerald-400 text-xs px-2 py-1 rounded-full">{source.category}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </>
          ) : (
            <div className="px-6 py-8 text-center">
              <div className="text-4xl mb-2">🔍</div>
              <p className="text-gray-400">No sources match &ldquo;{searchTerm}&rdquo;</p>
              <p className="text-gray-500 text-sm mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      )}

      {/* Typewriter Preview Card */}
      {!searchTerm && previewSource && (
        <>
          <a
            href={previewSource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full mt-4"
            style={{ opacity: previewFading ? 0 : 1, transition: 'opacity 0.35s ease' }}
          >
            <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${previewSource.color} flex flex-row items-stretch`}>
              <div className="flex-1 px-10 py-10 flex flex-col justify-center relative z-10 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-white font-bold text-2xl leading-tight">{previewSource.name}</span>
                  <svg className="w-6 h-6 text-white/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-white/80 text-base leading-relaxed mb-4 line-clamp-3">{previewSource.description}</p>
                <span className="inline-block self-start bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-1.5 rounded-full">
                  {previewSource.category}
                </span>
              </div>
              <div className="w-24 sm:w-40 md:w-56 lg:w-72 flex-shrink-0 relative bg-white">
                {previewSource.iconImage ? (
                  <Image src={previewSource.iconImage} alt={`${previewSource.name} logo`} fill className={`object-contain ${previewSource.logoPadding ?? 'p-3'}`} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-8xl">{previewSource.icon}</div>
                )}
              </div>
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
            </div>
          </a>

          {(() => {
            const assoc = previewAssociations[previewSourceNames[activePhraseIndex]]
            if (!assoc) return null
            return (
              <div
                className="w-full mt-1 px-5 py-3 rounded-xl bg-emerald-900/60 backdrop-blur-sm border border-emerald-700/40 flex items-center gap-3"
                style={{ opacity: previewFading ? 0 : 1, transition: 'opacity 0.35s ease' }}
              >
                <p className="text-emerald-300 text-sm leading-snug">{assoc.text}</p>
              </div>
            )
          })()}
        </>
      )}
    </div>
  )
}
