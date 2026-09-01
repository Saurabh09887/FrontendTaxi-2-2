import { useState, useEffect } from "react";
import Api from "../api/Api";

const faqs = [
  { q: "How do I cancel a ride?", a: "Cancellation is free up to 1 hour before pickup. Use the in-app cancel button \u2014 no questions asked, no hidden fees." },
  { q: "Are all drivers verified?", a: "Yes. Every Prajapati Travel driver completes background checks, Aadhaar KYC, police clearance and a 40-hour training program before going live." },
  { q: "What payment methods are accepted?", a: "We accept UPI, all major credit/debit cards, popular wallets, net banking and cash \u2014 your choice on every trip." },
  { q: "Do you offer corporate accounts?", a: "Absolutely. Reach out via the Corporate service card for centralised billing, monthly invoicing and a dedicated account manager." },
  { q: "Is surge pricing applied during peak hours?", a: "No. Prajapati Travel uses upfront, transparent fares \u2014 the price you see at booking is the price you pay, peak hours or not." },
];

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [faqsData, setFaqsData] = useState(faqs);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await Api.get("/faq");
        console.log("FAQ API Response:", response.data);
        if (response.data.success && response.data.faqs && response.data.faqs.length > 0) {
          const formattedFaqs = response.data.faqs.map(faq => ({
            q: faq.question,
            a: faq.answer
          }));
          setFaqsData(formattedFaqs);
        }
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="pt-0 pb-14 sm:pb-20 bg-[#FEF3E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
            Common questions, <span className="text-[#EA580C]">clear answers</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Everything you need to know before booking your next Prajapati Travel ride.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={f.q}
                className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                  isOpen ? "border-orange-300 shadow-md" : "border-orange-100 hover:border-orange-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm sm:text-base ${isOpen ? "text-[#EA580C]" : "text-stone-900"}`}>
                    {f.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? "bg-[#EA580C] text-white rotate-180" : "bg-orange-50 text-[#EA580C]"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm text-stone-500 leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
