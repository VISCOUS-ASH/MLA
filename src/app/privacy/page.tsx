"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function PrivacyPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        title="Privacy Policy"
        subtitle="Legal"
        description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Media Lift Advisor, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Fill out a contact form or request a consultation</li>
                  <li>Subscribe to our newsletter or marketing communications</li>
                  <li>Apply for a job or submit your resume</li>
                  <li>Interact with our social media pages</li>
                  <li>Use our services or browse our website</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. How We Use Your Information</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Provide and improve our digital marketing services</li>
                  <li>Respond to your inquiries and send you requested information</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. For detailed information about the cookies we use, please see our Cookie Policy page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt out of marketing communications at any time</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">7. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@medialiftadvisor.com" className="text-[#FFB800] hover:underline">info@medialiftadvisor.com</a>.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8">
                <p className="text-sm text-gray-400">
                  Last updated: June 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
