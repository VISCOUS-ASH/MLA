"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function TermsPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        title="Terms of Use"
        subtitle="Legal"
        description="Please read these terms carefully before using our website or services."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using the Media Lift Advisor website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Services Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Media Lift Advisor provides digital marketing services including but not limited to SEO, social media management, content marketing, branding, graphic design, and web development. Specific service details, pricing, and deliverables are outlined in individual service agreements or proposals.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software, is the property of Media Lift Advisor or its content suppliers and is protected by intellectual property laws. You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Reproduce, distribute, or modify any content without written permission</li>
                <li>Use our trademarks or branding without prior authorization</li>
                <li>Copy or exploit any part of our services for commercial purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Client Responsibilities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When engaging our services, clients agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information necessary for service delivery</li>
                <li>Respond to requests for feedback and approvals within reasonable timeframes</li>
                <li>Pay all fees according to the agreed payment schedule</li>
                <li>Not use our services for any unlawful or unauthorized purpose</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Media Lift Advisor shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our services. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                Both parties agree to maintain the confidentiality of any proprietary information shared during the course of our engagement. This obligation survives termination of the business relationship.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">7. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate ongoing services with written notice. Upon termination, the client shall pay for all services rendered up to the termination date. Deliverables completed before termination shall be provided to the client.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">8. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through arbitration or in the appropriate courts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">9. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes indicates your acceptance of the new terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">10. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us at <a href="mailto:info@medialiftadvisor.com" className="text-[#C9A227] hover:underline">info@medialiftadvisor.com</a>.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <p className="text-sm text-gray-400">
                Last updated: June 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
