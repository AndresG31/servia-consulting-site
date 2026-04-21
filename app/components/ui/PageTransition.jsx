'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const prevPathname = useRef(null)

  useEffect(() => {
    // Skip on first mount — page is already visible
    if (prevPathname.current === null) {
      prevPathname.current = pathname
      return
    }
    // Only animate when the path actually changes
    if (prevPathname.current === pathname) return
    prevPathname.current = pathname

    setVisible(false)
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <div
      className="transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  )
}
