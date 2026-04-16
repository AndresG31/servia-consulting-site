import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'Terms of Service | Servia Consulting',
  description: 'Review the terms and conditions governing use of Servia Consulting services and website.',
}

export default function TermsPage() {
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
              Terms of <span className="text-emerald-400">Service</span>
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
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing our website or engaging Servia Consulting ("Company," "we," "us") for services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">2. Services</h2>
              <p>
                Servia Consulting provides business consulting, operational strategy, financial analysis, and related professional services. The specific scope, deliverables, timeline, and fees for any engagement will be outlined in a separate written agreement or proposal signed by both parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">3. Use of Our Website</h2>
              <p>You agree to use this website only for lawful purposes. You may not:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Reproduce, distribute, or modify any content without our written permission</li>
                <li>Use the site in any way that could damage or impair its availability</li>
                <li>Attempt to gain unauthorized access to any portion of the site</li>
                <li>Use automated tools to scrape or harvest data from the site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and images — is the property of Servia Consulting and protected by applicable intellectual property laws. Nothing on this site grants you any license to use our intellectual property without express written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">5. Confidentiality</h2>
              <p>
                In the course of an engagement, both parties may share confidential business information. Each party agrees to keep such information confidential and not disclose it to third parties without prior written consent, except as required by law. Specific confidentiality terms will be detailed in any signed service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">6. Disclaimer of Warranties</h2>
              <p>
                Our website and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be error-free, uninterrupted, or free of viruses. Consulting advice is provided in good faith based on the information available at the time of engagement; results may vary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Servia Consulting shall not be liable for any indirect, incidental, special, or consequential damages arising from use of our website or services. Our total liability for any claim related to a consulting engagement shall not exceed the fees paid for that specific engagement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. These links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">9. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts located in Bexar County, Texas.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">10. Changes to These Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting to this page with an updated date. Continued use of our site or services after changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-700 mb-3">11. Contact Us</h2>
              <p>
                For questions about these Terms of Service, contact us at:<br />
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
