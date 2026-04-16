'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <div className="fixed top-0 left-0 right-0 z-[200] bg-emerald-500" style={{ height: '1px' }} />
  )
}
