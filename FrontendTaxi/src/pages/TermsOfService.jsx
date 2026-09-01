const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By downloading, installing or using the Prajapati Travel mobile application or website (collectively, the 'Platform'), you agree to be bound by these Terms of Service ('Terms').",
      "If you do not agree to these Terms, please do not use our Platform. We recommend reading these Terms carefully before making a booking.",
      "These Terms constitute a legally binding agreement between you ('User') and Prajapati Travel Pvt. Ltd. ('Company', 'we', 'us').",
    ],
  },
  {
    title: "2. Eligibility",
    content: [
      "You must be at least 18 years of age to create an account and use Prajapati Travel services.",
      "By registering, you confirm that all information provided is accurate, current and complete.",
      "Prajapati Travel reserves the right to suspend or terminate accounts where eligibility requirements are not met.",
      "Corporate accounts may be created by authorised representatives of registered businesses.",
    ],
  },
  {
    title: "3. Our Services",
    content: [
      "Prajapati Travel operates as an intermediary technology platform connecting passengers with independent driver-partners.",
      "We offer: City Cab, Airport Transfer, Outstation, Corporate, Hourly Rental, and Women Safety+ services.",
      "Service availability, pricing and coverage areas may vary by city and are subject to change without prior notice.",
      "Prajapati Travel does not guarantee continuous, uninterrupted access to the Platform and is not liable for outages caused by third-party infrastructure.",
    ],
  },
  {
    title: "4. Booking & Cancellation",
    content: [
      "Bookings are confirmed only upon receiving an in-app or SMS confirmation from Prajapati Travel.",
      "**Free Cancellation:** Allowed up to 1 hour before scheduled pickup time at no charge.",
      "**Late Cancellation (within 1 hour):** A cancellation fee of ₹50 or 10% of fare (whichever is higher) applies.",
      "**No-Show:** If a driver arrives and the passenger is unreachable for 10 minutes, the booking may be marked as a no-show and a ₹100 fee applies.",
      "Prajapati Travel reserves the right to cancel a booking due to driver unavailability, safety concerns or force majeure events with a full refund.",
    ],
  },
  {
    title: "5. Fares & Payments",
    content: [
      "Fares are calculated based on distance, time, vehicle category and service type. The fare shown at booking is the amount you pay — no surge pricing.",
      "Accepted payment methods: UPI, credit/debit cards, net banking, digital wallets and cash.",
      "In case of tolls, parking fees or inter-state permits, additional charges apply and will be communicated upfront.",
      "All fares are inclusive of applicable GST. GST invoices are available within the app for Corporate accounts.",
      "Refunds for valid claims are processed within 5–7 business days to the original payment method.",
    ],
  },
  {
    title: "6. User Responsibilities",
    content: [
      "Users must not use the Platform for any unlawful purpose or in violation of these Terms.",
      "You are responsible for maintaining the confidentiality of your account credentials. Report any unauthorised access immediately.",
      "You agree not to carry prohibited, hazardous or illegal items during any Prajapati Travel ride.",
      "Abusive, threatening or discriminatory behaviour toward drivers or support staff is grounds for immediate account suspension.",
      "You must not share your account with third parties or book rides on behalf of others without their knowledge.",
    ],
  },
  {
    title: "7. Driver Standards",
    content: [
      "All driver-partners on the Prajapati Travel platform are independently contracted and not employees of the Company.",
      "Drivers undergo Aadhaar KYC, police background verification, and a 40-hour training programme before activation.",
      "Prajapati Travel maintains the right to remove any driver-partner who fails to meet our safety and quality standards.",
      "While we take reasonable steps to vet drivers, Prajapati Travel does not guarantee the conduct of any individual driver-partner.",
    ],
  },
  {
    title: "8. Limitation of Liability",
    content: [
      "Prajapati Travel's total aggregate liability for any claim shall not exceed the fare paid for the specific ride giving rise to the claim.",
      "We are not liable for indirect, incidental, special or consequential damages including loss of income, data or goodwill.",
      "Prajapati Travel is not responsible for items left behind in vehicles. However, we will make reasonable efforts to facilitate recovery.",
      "We are not liable for delays or service failures caused by traffic conditions, natural disasters, government actions or other force majeure events.",
    ],
  },
  {
    title: "9. Intellectual Property",
    content: [
      "All content on the Platform, including logos, graphics, software and trademarks, is the exclusive property of Prajapati Travel Pvt. Ltd.",
      "You may not reproduce, distribute or create derivative works from any Platform content without written permission.",
      "User-generated content (reviews, feedback) submitted to Prajapati Travel is licensed to us on a royalty-free, worldwide basis.",
    ],
  },
  {
    title: "10. Governing Law & Disputes",
    content: [
      "These Terms are governed by the laws of the Republic of India.",
      "Any disputes shall first be attempted to be resolved amicably within 30 days of written notice.",
      "Unresolved disputes shall be submitted to binding arbitration under the Arbitration and Conciliation Act, 1996, with a sole arbitrator appointed by mutual consent.",
      "The seat of arbitration shall be New Delhi, India. All proceedings shall be conducted in English.",
      "Nothing in these Terms limits your statutory rights under the Consumer Protection Act, 2019.",
    ],
  },
  {
    title: "11. Changes to These Terms",
    content: [
      "Prajapati Travel may revise these Terms at any time. We will provide at least 14 days' notice for material changes via in-app notification or email.",
      "Continued use of the Platform after the effective date of revised Terms constitutes your acceptance.",
      "It is your responsibility to review these Terms periodically.",
    ],
  },
  {
    title: "12. Contact Us",
    content: [
      "**Legal Enquiries:** kumarsaurabh1484@gmail.com",
      "**Customer Support:** kumarsaurabh1484@gmail.com | +91 8445521634 /9718136587 ",
      "**Registered Office:** Prajapati Travel Pvt. Ltd., Mansrovar colony Gajraula",
      "**CIN:** U60221DL2020PTC000001 | **GSTIN:** 07AABCS1234A1Z5",
    ],
  },
];

const TermsOfService = () => {
  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16" style={{ background: "linear-gradient(135deg,#1c0a00 0%,#431407 50%,#1c0a00 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5">
            <svg className="w-3.5 h-3.5 text-[#EA580C]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            The rules and guidelines that govern your use of Sharma Travel. Please read them carefully.
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
              <p className="text-stone-900 font-bold text-sm mb-1">Please read before using our services</p>
              <p className="text-stone-500 text-sm leading-relaxed">
                These Terms apply to all users of the Prajapati Travel platform. By continuing to use our app or website, you acknowledge that you have read and understood these Terms. For legal queries, contact{" "}
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
              <a href="/privacy" className="text-[#EA580C] hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;
