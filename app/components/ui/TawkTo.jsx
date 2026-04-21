'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const TAWK_PROPERTY_ID = '69d2a4bab8aa781c3b3109d4'
const TAWK_WIDGET_ID = '1jlfd6ts4'

export default function TawkTo() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname?.startsWith('/studio')) return

    const s = document.createElement('script')
    s.async = true
    s.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`
    s.charset = 'UTF-8'
    s.setAttribute('crossorigin', '*')
    document.head.appendChild(s)

    return () => {
      if (document.head.contains(s)) document.head.removeChild(s)
    }
  }, [pathname])

  return null
}
