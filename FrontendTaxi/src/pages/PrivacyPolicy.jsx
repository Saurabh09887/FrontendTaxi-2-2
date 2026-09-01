const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "**Personal Identification:** Name, phone number, email address, and profile photo provided during account registration.",
      "**Location Data:** Real-time GPS data collected during active rides to facilitate driver matching, navigation and safety monitoring.",
      "**Payment Information:** Transaction details processed through our secure payment partners (Razorpay, PhonePe). We do not store full card numbers on our servers.",
      "**Device Information:** Device model, operating system version, app version, and unique device identifiers for app functionality and fraud prevention.",
      "**Usage Data:** Ride history, search queries, in-app interactions, and customer support conversations to improve service quality.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To connect you with nearby verified drivers and facilitate safe, efficient rides.",
      "To process payments and send ride receipts and billing statements.",
      "To send booking confirmations, trip updates, and important safety alerts via SMS or in-app notifications.",
      "To improve our algorithms, detect fraud, and maintain platform security.",
      "To personalise your experience — including ride suggestions, offers and relevant service updates.",
      "To comply with applicable Indian laws, regulations, and court orders.",
    ],
  },
  {
    title: "3. Sharing of Information",
    content: [
      "**With Drivers:** Your name, pickup/drop location, and phone number are shared with your assigned driver solely for trip completion.",
      "**With Payment Partners:** Transaction data is shared with authorised payment gateways under strict data processing agreements.",
      "**With Regulatory Authorities:** We may disclose information when required by law, court order, or government authority.",
      "**With Service Providers:** Trusted third parties (cloud hosting, analytics, customer support tools) bound by confidentiality obligations.",
      "We never sell, rent or trade your personal data to advertisers or unrelated third parties.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "Account data is retained for the duration of your active account plus 3 years after closure, as required under Indian tax and financial laws.",
      "Ride location data is retained for 12 months for safety and dispute resolution purposes.",
      "Payment records are retained for 7 years as mandated under the Income Tax Act, 1961.",
      "You may request deletion of non-mandatory data by contacting our support team.",
    ],
  },
  {
    title: "5. Your Rights",
    content: [
      "**Access & Portability:** Request a copy of your personal data held by PrajapatiTravel.",
      "**Correction:** Update inaccurate or incomplete information via the app's Profile section.",
      "**Deletion:** Request erasure of your account and associated data (subject to legal retention obligations).",
      "**Opt-Out:** Unsubscribe from marketing communications at any time via app settings or by emailing us.",
      "**Grievance Redressal:** Under the Digital Personal Data Protection Act, 2023, you may file a complaint with our Data Protection Officer.",
    ],
  },
  {
    title: "6. Cookies & Tracking",
    content: [
      "Our website uses first-party cookies for session management, preferences, and analytics.",
      "We use Google Analytics (data anonymised) to understand website traffic patterns.",
      "You may disable cookies via your browser settings; however, some features may not function correctly.",
      "We do not use cross-site tracking or serve targeted advertising cookies.",
    ],
  },
  {
    title: "7. Data Security",
    content: [
      "All data in transit is encrypted using TLS 1.3 protocols.",
      "Data at rest is encrypted using AES-256 industry-standard encryption.",
      "Access to personal data within our organisation is role-based and strictly limited.",
      "We undergo annual third-party security audits and hold ISO 27001 certification.",
      "In the event of a data breach affecting your rights, we will notify you within 72 hours as required by law.",
    ],
  },
  {
    title: "8. Children's Privacy",
    content: [
      "Prajapati Travel services are intended for users aged 18 and above.",
      "We do not knowingly collect personal data from minors. If we become aware that a minor has registered, the account will be promptly suspended.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy periodically. Material changes will be notified via in-app alert or email at least 14 days before taking effect.",
      "Continued use of Prajapati Travel after the effective date constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "10. Contact & Grievances",
    content: [
      "**Data Protection Officer:** Saurabh Prajapati | kumarsaurabh1484@gmail.com",
      "**Grievance Officer:** Available Mon–Sat, 10 AM – 6 PM IST",
      "**Email:** kumarsaurabh1484@gmail.com",
      "**Address:** Prajapati Travel Pvt. Ltd., Mansrovar colony, Gajraula, Amroha",
      "For complaints under the DPDP Act 2023, please write to kumarsaurabh1484@gmail.com with subject: 'DPDP Grievance'.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16" style={{ background: "linear-gradient(135deg,#1c0a00 0%,#431407 50%,#1c0a00 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5 text-[#EA580C]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/>
            </svg>
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            How Prajapati Travel collects, uses and protects your personal information. We believe in full transparency.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-white/50 text-xs">
            <span>Effective: 1 January 2025</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Last updated: 21 April 2026</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span>Governed by Indian Law</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro card */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 sm:p-6 mb-10 flex gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-stone-900 font-bold text-sm mb-1">Your privacy matters to us</p>
              <p className="text-stone-500 text-sm leading-relaxed">
                This policy applies to all Prajapati Travel products and services including our mobile app and website. By using our platform, you agree to the practices described here. Questions? Write to us at{" "}
                <a href="mailto:kumarsaurabh1484@gmail.com" className="text-[#EA580C] font-semibold hover:underline">kumarsaurabh1484@gmail.com</a>.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((sec) => (
              <div key={sec.title} className="bg-white border border-orange-100 rounded-2xl p-6 sm:p-7 shadow-sm">
                <h2 className="text-lg font-extrabold text-stone-900 mb-4 pb-3 border-b border-orange-100 flex items-center gap-2">
                  <span className="w-1.5 h-5 rounded-full bg-[#EA580C] inline-block shrink-0" />
                  {sec.title}
                </h2>
                <ul className="space-y-3">
                  {sec.content.map((item, i) => {
                    const parts = item.split(/\*\*(.*?)\*\*/g);
                    return (
                      <li key={i} className="flex gap-3 text-sm text-stone-600 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0" />
                        <span>
                          {parts.map((part, j) =>
                            j % 2 === 1 ? (
                              <strong key={j} className="text-stone-800 font-bold">{part}</strong>
                            ) : (
                              part
                            )
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-10 text-center">
            <p className="text-stone-400 text-xs">
              &copy; {new Date().getFullYear()} Prajapati Travel Pvt. Ltd. All rights reserved. &nbsp;|&nbsp;
              <a href="/terms" className="text-[#EA580C] hover:underline">Terms of Service</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
