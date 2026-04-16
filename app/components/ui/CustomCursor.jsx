'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const glow = glowRef.current
    if (!cursor || !glow) return

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const shrink = () => cursor.classList.add('scale-75')
    const grow = () => cursor.classList.remove('scale-75')

    document.addEventListener('mousemove', move)
    document.addEventListener('mousedown', shrink)
    document.addEventListener('mouseup', grow)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', shrink)
      document.removeEventListener('mouseup', grow)
    }
  }, [])

  return (
    <>
      {/* Circular glow ring */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{
          willChange: 'transform',
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: '50%',
          border: '1.5px solid #0ecb7b',
          boxShadow: '0 0 8px #0ecb7b, 0 0 16px #0ecb7b44',
          opacity: 0.7,
        }}
      />

      {/* Arrow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] scale-100"
        style={{ willChange: 'transform', transition: 'scale 100ms ease' }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'drop-shadow(0 0 4px #0ecb7b) drop-shadow(0 0 10px #0ecb7b)' }}
        >
          <path d="M4 2L20 12L12 13.5L8 21L4 2Z" stroke="#0ecb7b" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      </div>
    </>
  )
}
