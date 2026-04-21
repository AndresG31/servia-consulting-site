import ScrollFadeIn from '../components/ui/ScrollFadeIn'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Cookie Policy | Servia Consulting',
  description: 'Learn how Servia Consulting uses cookies and similar tracking technologies on our website.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-emerald-950">

      {/* Hero Section */}
      <section className="relative bg-emerald-950 overflow-hidden min-h-[320px]">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center">
            <div className="w-20 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4">
              Cookie <span className="text-emerald-400">Policy</span>
            </h1>
            <p className="text-gray-400 text-sm mt-4">Last updated: April 13, 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners. Cookies do not contain personally identifiable information on their own, but they may be linked to personal information we hold about you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">2. How We Use Cookies</h2>
              <p>Servia Consulting uses cookies for the following purposes:</p>

              <div className="mt-4 space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-800 mb-1">Essential Cookies</h3>
                  <p className="text-sm">Required for the website to function properly. These cannot be disabled. They enable core functionality such as security, session management, and accessibility.</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-800 mb-1">Analytics Cookies</h3>
                  <p className="text-sm">Help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve the site experience. (e.g., Google Analytics)</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <h3 className="font-bold text-emerald-800 mb-1">Preference Cookies</h3>
                  <p className="text-sm">Remember your choices and settings (such as cookie consent preferences) to provide a more personalized experience on return visits.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">3. Third-Party Cookies</h2>
              <p>
                Some cookies on our site are set by third-party services we use, such as analytics providers and live chat tools. These third parties have their own privacy policies and we recommend reviewing them. We do not control what information these parties collect through their cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">4. Cookie Duration</h2>
              <p>Cookies can be either session-based or persistent:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Session cookies</strong> are temporary and deleted when you close your browser.</li>
                <li><strong>Persistent cookies</strong> remain on your device for a set period or until you delete them manually.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">5. Managing Your Cookie Preferences</h2>
              <p>
                When you first visit our site, you will be presented with a cookie consent banner where you can accept or decline non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting the site.
              </p>
              <p className="mt-3">
                You can also control cookies directly through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>View and delete cookies already stored on your device</li>
                <li>Block cookies from specific or all websites</li>
                <li>Be notified before a cookie is placed</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500">
                Note: Disabling certain cookies may affect the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated date. We encourage you to review this page occasionally to stay informed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">7. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at:<br />
                <strong>Servia Consulting</strong><br />
                San Antonio, Texas<br />
                <a href="mailto:info@serviaconsulting.com" className="text-emerald-600 hover:text-emerald-700 underline">info@serviaconsulting.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
