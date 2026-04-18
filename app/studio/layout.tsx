import { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'Studio - Servia Consulting',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This layout overrides the root layout completely for the studio route
  // This prevents headers, footers, and other site-wide components from appearing
  return (
    <>
      <style>{`
        body {
          padding-top: 0 !important;
          margin: 0;
          overflow: hidden;
        }
        header { display: none !important; }
        #scroll-progress { display: none !important; }
        #back-to-top { display: none !important; }
        #cookie-consent { display: none !important; }
        #tawk-to { display: none !important; }
      `}</style>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        background: '#1a1a1a',
        zIndex: 9999
      }}>
        {children}
      </div>
    </>
  )
}
