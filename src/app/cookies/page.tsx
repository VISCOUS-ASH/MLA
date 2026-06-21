"use client";

import PageHeader from "@/components/ui/PageHeader";

export default function CookiesPage() {
  return (
    <div className="overflow-hidden">
      <PageHeader
        title="Cookie Policy"
        subtitle="Legal"
        description="This policy explains how we use cookies and similar technologies on our website."
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. What Are Cookies?</h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information to the website owners.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Media Lift Advisor uses cookies for the following purposes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-6 py-3 text-left text-sm font-bold text-gray-900">Cookie Type</th>
                      <th className="border border-gray-200 px-6 py-3 text-left text-sm font-bold text-gray-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-600">
                    <tr>
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-gray-900">Essential</td>
                      <td className="border border-gray-200 px-6 py-4">Required for the website to function properly. Cannot be disabled.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-gray-900">Analytics</td>
                      <td className="border border-gray-200 px-6 py-4">Help us understand how visitors interact with our website.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-gray-900">Marketing</td>
                      <td className="border border-gray-200 px-6 py-4">Used to deliver relevant advertisements and track campaign performance.</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="border border-gray-200 px-6 py-4 font-semibold text-gray-900">Functional</td>
                      <td className="border border-gray-200 px-6 py-4">Remember your preferences and settings for a better experience.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                You can control and manage cookies through your browser settings. Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for certain websites. Please note that disabling certain cookies may impact the functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Please refer to the respective privacy policies of these third parties for more information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about our use of cookies, please contact us at <a href="mailto:hello@medialift.com" className="text-[#FFB800] hover:underline">hello@medialift.com</a>.
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
