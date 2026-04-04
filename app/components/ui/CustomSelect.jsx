'use client'

import React, { useState, useEffect, useRef } from 'react'

export default function CustomSelect({ id, name, value, onChange, options, placeholder }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const selected = options.find(o => o.value === value)

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-black text-left flex items-center justify-between focus:outline-none focus:border-emerald-600 transition-all"
      >
        <span className={selected ? 'text-black' : 'text-gray-400'}>
          {selected ? selected.label : placeholder}
        </span>
        <svg className={`w-4 h-4 text-emerald-400 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute z-50 w-full mt-1 bg-emerald-900 border border-emerald-700 rounded-lg shadow-xl overflow-hidden max-h-60 overflow-y-auto">
          {options.map(o => (
            <li
              key={o.value}
              onClick={() => { onChange(o.value); setOpen(false) }}
              className={`px-4 py-2.5 cursor-pointer text-sm transition-colors ${value === o.value ? 'bg-emerald-600 text-white' : 'text-white hover:bg-emerald-700'}`}
            >
              {o.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
