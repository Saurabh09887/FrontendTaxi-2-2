import { useState } from "react";
import { Link } from "react-router-dom";
const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for occasional riders",
    price: 999,
    rides: "10 rides",
    validity: "30 days",
    popular: false,
    features: ["10 city rides (up to 15 km)", "Mini / Hatchback cab", "Standard AC", "UPI & Card payments", "Email support"],
    notIncluded: ["Airport transfers", "Outstation trips", "Priority support"],
  },
  {
    name: "Commuter",
    subtitle: "Best for daily office commuters",
    price: 2499,
    rides: "25 rides",
    validity: "30 days",
    popular: true,
    features: ["25 city rides (up to 25 km)", "Sedan or Mini category", "Premium AC cab", "2 free airport transfers", "Priority support", "UPI, Card & Wallet"],
    notIncluded: ["Outstation trips"],
  },
  {
    name: "Elite",
    subtitle: "For frequent business travellers",
    price: 4999,
    rides: "Unlimited",
    validity: "30 days",
    popular: false,
    features: ["Unlimited city rides", "SUV & Sedan category", "Premium AC cab", "4 free airport transfers", "2 outstation trips (200 km)", "24/7 priority support", "Free cancellations", "Dedicated account manager"],
    notIncluded: [],
  },
];
const addons = [
  { name: "Airport Transfer", price: "Rs. 399", desc: "Single airport pickup or drop, any time.", icon: "✈" },
  { name: "Outstation Day Pack", price: "Rs. 1,499", desc: "Full-day outstation trip up to 300 km.", icon: "🗺" },
  { name: "Corporate Monthly", price: "Custom", desc: "Tailored plan for businesses with 5+ employees.", icon: "🏢" },
  { name: "Hourly Rental (4 hrs)", price: "Rs. 749", desc: "4-hour city rental with unlimited stops.", icon: "⏱" },
];
const Packages = () => {
  const [billing, setBilling] = useState("monthly");
  const displayPrice = (price) => {
    const amt = billing === "quarterly" ? Math.round(price * 3 * 0.8) : price;
    return "Rs. " + amt.toLocaleString("en-IN");
  };
  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {/* ── HERO ───────────────────────────────── */}
      <section className="relative pt-24 pb-16 sm:pt-36 sm:pb-32 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&auto=format&fit=crop&q=90"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* No overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.55) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFFBF7]" style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 border border-white/20 text-orange-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            Prajapati Travel Packages
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,1)" }}>
            Ride more,<br />
            <span style={{ color: "#EA580C", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>pay less.</span>
          </h1>
          <p className="text-white text-lg max-w-lg mx-auto mb-10" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
            Pre-paid ride packs. Predictable pricing. No surge. No surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["No hidden charges", "Cancel anytime", "20+ cities", "Save up to 40%"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-sm text-white border border-white/30 bg-black/30 rounded-full px-4 py-1.5" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
                <span style={{ color: "#EA580C" }}>✓</span> {t}
              </span>
            ))}
          </div>
          <div className="inline-flex bg-white/8 border border-white/15 rounded-2xl p-1">
            {["monthly", "quarterly"].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-7 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${billing === b ? "bg-[#EA580C] text-white shadow-lg" : "text-stone-400 hover:text-white"}`}
              >
                {b}
                {b === "quarterly" && (
                  <span className="ml-1.5 text-xs font-semibold px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/20">
                    -20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* ── PLANS ──────────────────────────────── */}
      <section className="pt-6 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300"
                style={plan.popular ? {
                  background: "#fff",
                  border: "2px solid #EA580C",
                  boxShadow: "0 32px 80px -12px rgba(234,88,12,0.28), 0 0 0 1px rgba(234,88,12,0.08)",
                  transform: "translateY(-12px)",
                } : {
                  background: "#fff",
                  border: "1.5px solid #fde8d8",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                }}
              >
                {/* Header band */}
                <div
                  className="px-6 pt-7 pb-6"
                  style={plan.popular
                    ? { background: "linear-gradient(135deg,#EA580C 0%,#f97316 100%)" }
                    : plan.name === "Elite"
                    ? { background: "linear-gradient(135deg,#1c1917 0%,#292524 100%)" }
                    : { background: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)" }
                  }
                >
                  {plan.popular && (
                    <div className="flex justify-center mb-3">
                      <span className="bg-white text-orange-600 text-[10px] font-extrabold px-3 py-1 rounded-full tracking-widest shadow-sm uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <p className={`text-xs font-extrabold uppercase tracking-widest mb-1 ${plan.popular ? "text-orange-100" : plan.name === "Elite" ? "text-stone-400" : "text-orange-300"}`}>{plan.name}</p>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-orange-100" : plan.name === "Elite" ? "text-stone-400" : "text-stone-500"}`}>{plan.subtitle}</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className={`text-[2.5rem] font-black leading-none ${plan.popular ? "text-white" : plan.name === "Elite" ? "text-white" : "text-stone-900"}`}>{displayPrice(plan.price)}</span>
                    <span className={`text-sm mb-1 ml-1 ${plan.popular ? "text-orange-200" : plan.name === "Elite" ? "text-stone-500" : "text-stone-400"}`}>/{billing === "monthly" ? "mo" : "qtr"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm mt-2">
                    <span className={`font-bold px-2.5 py-0.5 rounded-full text-xs ${plan.popular ? "bg-white/20 text-white" : plan.name === "Elite" ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-600"}`}>{plan.rides}</span>
                    <span className={plan.popular ? "text-orange-200" : "text-stone-400"}>• Valid {plan.validity}</span>
                  </div>
                </div>
                {/* Features */}
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-stone-700">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "#fff7ed" }}>
                          <svg className="w-3 h-3" style={{ color: "#EA580C" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-stone-300">
                        <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-stone-50">
                          <svg className="w-3 h-3 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center font-bold py-3.5 rounded-2xl text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={plan.popular
                      ? { background: "linear-gradient(135deg,#EA580C,#f97316)", color: "#fff", boxShadow: "0 8px 24px rgba(234,88,12,0.35)" }
                      : plan.name === "Elite"
                      ? { background: "#1c1917", color: "#fff" }
                      : { background: "#fff7ed", border: "1.5px solid #fdba74", color: "#c2410c" }
                    }
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-xs mt-8">All prices inclusive of GST. Rides expire on validity date.</p>
        </div>
      </section>
      {/* ── ADD-ONS ────────────────────────────── */}
      <section className="py-24 bg-[#FEF3E8]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-widest mb-4">Add-ons</span>
            <h2 className="text-4xl font-extrabold text-stone-900">Need something extra?</h2>
            <p className="text-stone-500 mt-3">Enhance any plan with individual add-ons, billed separately.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {addons.map((addon) => (
              <div key={addon.name} className="flex items-center gap-6 bg-white border border-orange-100 rounded-2xl px-8 py-7 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform" style={{ background: "linear-gradient(135deg,#fff7ed,#ffedd5)" }}>
                  {addon.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-stone-900 font-bold text-base">{addon.name}</p>
                  <p className="text-stone-400 text-sm mt-1 leading-relaxed">{addon.desc}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-[#EA580C] font-extrabold text-2xl">{addon.price}</p>
                  <p className="text-stone-300 text-xs mt-0.5">per use</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── FAQ ────────────────────────────────── */}
      <section className="py-20 bg-[#FFFBF7]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-widest mb-3">FAQ</span>
            <h2 className="text-3xl font-extrabold text-stone-900">Common questions</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Can I use my package in multiple cities?", a: "Yes! Your package works across all 20+ cities that Prajapati Travel operates in." },
              { q: "What happens to unused rides?", a: "Unused rides expire at the end of the validity period and cannot be carried forward." },
              { q: "Can I upgrade my plan mid-month?", a: "Yes, you can upgrade at any time. The remaining value of your current plan is adjusted." },
              { q: "Is there a refund policy?", a: "Unused packages can be refunded within 7 days of purchase, minus a 10% processing fee." },
            ].map((faq) => (
              <details key={faq.q} className="group bg-white border border-orange-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-stone-900 text-sm list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-stone-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pt-3 pb-5 text-stone-500 text-sm leading-relaxed border-t border-orange-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(135deg,#1c1917,#292524)" }}
      >
        <div className="max-w-xl mx-auto px-4">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">Still deciding?</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Not sure which plan?</h2>
          <p className="text-stone-400 text-base mb-8">Talk to our team and we will help you pick the perfect plan for your needs.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="bg-[#EA580C] hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg">
              Talk to us
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-7 py-3 rounded-xl text-sm transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Packages;