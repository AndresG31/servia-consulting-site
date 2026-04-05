'use client'
import { useEffect } from 'react'

// To activate: create a free account at https://tawk.to
// Then replace TAWK_PROPERTY_ID and TAWK_WIDGET_ID below with your values
// Found in: Tawk.to Dashboard → Administration → Chat Widget → Direct Chat Link

const TAWK_PROPERTY_ID = '69d2a4bab8aa781c3b3109d4'
const TAWK_WIDGET_ID = '1jlfd6ts4'

export default function TawkTo() {
  useEffect(() => {

    const s = document.createElement('script')
    s.async = true
    s.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`
    s.charset = 'UTF-8'
    s.setAttribute('crossorigin', '*')
    document.head.appendChild(s)

    return () => {
      document.head.removeChild(s)
    }
  }, [])

  return null
}
