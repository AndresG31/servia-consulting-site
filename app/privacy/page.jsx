import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Privacy Policy | Servia Consulting',
  description: 'Learn how Servia Consulting collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
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
              Privacy <span className="text-emerald-400">Policy</span>
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
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">1. Introduction</h2>
              <p>
                Servia Consulting ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and company name provided through our contact forms or direct communication.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, browser type, IP address, and referring URLs collected automatically via cookies and analytics tools.</li>
                <li><strong>Communications:</strong> Messages or inquiries you send us via email or our contact form.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Improve our website and service offerings</li>
                <li>Send administrative communications (e.g., appointment confirmations)</li>
                <li>Analyze site traffic and usage patterns</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">We do not sell or rent your personal information to third parties.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">4. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience. For full details on how we use cookies and your choices, please see our <a href="/cookies" className="text-emerald-600 hover:text-emerald-700 underline">Cookie Policy</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">5. Third-Party Services</h2>
              <p>
                We may use trusted third-party services (e.g., analytics providers, email platforms) that collect data on our behalf. These parties are obligated to keep your information confidential and may not use it for any purpose other than providing services to us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">6. Data Retention</h2>
              <p>
                We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at <a href="mailto:info@serviaconsulting.com" className="text-emerald-600 hover:text-emerald-700 underline">info@serviaconsulting.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">8. Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of our site after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:<br />
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
