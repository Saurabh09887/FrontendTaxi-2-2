import { useState } from "react";

const features = [
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Pickup",
    desc: "Average pickup time under 5 minutes in metro cities. No waiting, no stress.",
    stat: "< 5 min",
    statLabel: "Avg. pickup",
    color: "orange",
    details: [
      "Smart driver-matching algorithm picks the nearest available cab",
      "Live ETA updates every 5 seconds with map preview",
      "Auto-reassign if a driver delays — zero impact on your trip",
    ],
    metrics: [
      { k: "3.8 min", v: "Median pickup" },
      { k: "20+", v: "Metro cities" },
      { k: "98%", v: "On-time rate" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "100% Safe",
    desc: "Verified drivers, live GPS tracking, SOS button & 24/7 customer support.",
    stat: "24/7",
    statLabel: "Support",
    color: "blue",
    details: [
      "Every driver background-verified with police clearance & Aadhaar KYC",
      "In-app SOS button connects to local police & emergency contacts instantly",
      "Trip-share with family — they see live location & ETA in real time",
    ],
    metrics: [
      { k: "100%", v: "KYC verified" },
      { k: "<30s", v: "SOS response" },
      { k: "5\u2605", v: "Safety rating" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Live Tracking",
    desc: "Track your driver's real-time location. Share your trip with family for safety.",
    stat: "Real-time",
    statLabel: "GPS",
    color: "green",
    details: [
      "High-accuracy GPS refresh every 3 seconds during the ride",
      "Route deviation alerts notify you & support team immediately",
      "Shareable live link works on WhatsApp, SMS & email — no app needed",
    ],
    metrics: [
      { k: "3 sec", v: "GPS refresh" },
      { k: "Auto", v: "Route alerts" },
      { k: "1-tap", v: "Trip share" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Best Fares",
    desc: "Transparent pricing with no hidden charges. Pay by cash, card, or UPI.",
    stat: "0%",
    statLabel: "Hidden fees",
    color: "amber",
    details: [
      "Upfront fare estimate before you book — no meter surprises",
      "No surge pricing during peak hours, festivals or rain",
      "Pay any way: UPI, cards, wallets, net banking or cash",
    ],
    metrics: [
      { k: "0%", v: "Surge pricing" },
      { k: "8+", v: "Payment modes" },
      { k: "GST", v: "Itemised bill" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Pro Drivers",
    desc: "Background-verified, trained, and rated drivers committed to your comfort.",
    stat: "1,200+",
    statLabel: "Verified pros",
    color: "purple",
    details: [
      "Mandatory 40-hour training program covering safety, etiquette & navigation",
      "Continuous performance monitoring with rider feedback after every trip",
      "Drivers below 4.5\u2605 rating retrained or removed from the platform",
    ],
    metrics: [
      { k: "40 hrs", v: "Training" },
      { k: "4.8\u2605", v: "Avg. rating" },
      { k: "5+ yrs", v: "Avg. experience" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Pre-book Rides",
    desc: "Schedule your ride up to 7 days in advance. Never miss a flight or meeting.",
    stat: "7 days",
    statLabel: "In advance",
    color: "rose",
    details: [
      "Schedule airport, meeting or outstation rides up to 7 days ahead",
      "Auto-reminder 30 mins before pickup with driver details",
      "Free cancellation up to 1 hour before pickup time",
    ],
    metrics: [
      { k: "7 days", v: "Lead time" },
      { k: "30 min", v: "Auto reminder" },
      { k: "Free", v: "Cancellation" },
    ],
  },
];

const colorMap = {
  orange: { chip: "bg-orange-50 text-[#EA580C] ring-orange-100", bar: "from-[#EA580C] to-[#f97316]", hover: "group-hover:text-[#EA580C]", text: "text-[#EA580C]", soft: "bg-orange-50/70" },
  blue: { chip: "bg-blue-50 text-blue-600 ring-blue-100", bar: "from-blue-500 to-blue-400", hover: "group-hover:text-blue-600", text: "text-blue-600", soft: "bg-blue-50/70" },
  green: { chip: "bg-emerald-50 text-emerald-600 ring-emerald-100", bar: "from-emerald-500 to-emerald-400", hover: "group-hover:text-emerald-600", text: "text-emerald-600", soft: "bg-emerald-50/70" },
  amber: { chip: "bg-amber-50 text-amber-600 ring-amber-100", bar: "from-amber-500 to-amber-400", hover: "group-hover:text-amber-600", text: "text-amber-600", soft: "bg-amber-50/70" },
  purple: { chip: "bg-purple-50 text-purple-600 ring-purple-100", bar: "from-purple-500 to-purple-400", hover: "group-hover:text-purple-600", text: "text-purple-600", soft: "bg-purple-50/70" },
  rose: { chip: "bg-rose-50 text-rose-600 ring-rose-100", bar: "from-rose-500 to-rose-400", hover: "group-hover:text-rose-600", text: "text-rose-600", soft: "bg-rose-50/70" },
};

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="relative bg-[#FEF3E8] py-10 sm:py-14 lg:py-16 overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur ring-1 ring-orange-100 text-[#EA580C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            Why Choose Prajapati Travel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-stone-900 leading-[1.1] tracking-tight">
            The smarter way <span className="block sm:inline text-[#EA580C]">to ride</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base lg:text-lg mt-4 sm:mt-5 max-w-xl lg:max-w-2xl mx-auto leading-relaxed px-2">
            Experience the best cab service in India \u2014 built for comfort, safety, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-start">
          {features.map((feature, i) => {
            const c = colorMap[feature.color];
            const isOpen = openIndex === i;
            return (
              <article
                key={feature.title}
                className={`group relative bg-white border rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 transition-all duration-300 overflow-hidden flex flex-col ${
                  isOpen
                    ? "border-orange-300 shadow-[0_20px_40px_-15px_rgba(234,88,12,0.25)] -translate-y-1"
                    : "border-orange-100/80 shadow-[0_2px_10px_-4px_rgba(234,88,12,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.25)] hover:-translate-y-1 hover:border-orange-200"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.bar} transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />

                <div className="flex items-start justify-between gap-3 mb-4 sm:mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ring-1 ${c.chip} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-base sm:text-lg font-extrabold text-stone-900 leading-none">{feature.stat}</div>
                    <div className="text-[10px] sm:text-[11px] text-stone-400 font-medium uppercase tracking-wide mt-1">{feature.statLabel}</div>
                  </div>
                </div>

                <h3 className={`text-stone-900 font-extrabold text-lg sm:text-xl mb-2 transition-colors duration-300 ${c.hover}`}>
                  {feature.title}
                </h3>
                <p className="text-stone-500 text-sm sm:text-[15px] leading-relaxed">{feature.desc}</p>

                {/* Expandable details */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-2.5 mb-4">
                      {feature.details.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-stone-600 leading-relaxed">
                          <svg className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`grid grid-cols-3 gap-2 rounded-xl ${c.soft} p-3`}>
                      {feature.metrics.map((m) => (
                        <div key={m.v} className="text-center">
                          <div className={`text-sm font-extrabold ${c.text} leading-none`}>{m.k}</div>
                          <div className="text-[10px] text-stone-500 font-medium uppercase tracking-wide mt-1">{m.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className={`mt-5 pt-4 border-t border-orange-50 flex items-center text-xs sm:text-sm font-bold transition-colors text-left ${
                    isOpen ? c.text : "text-stone-400 group-hover:text-[#EA580C]"
                  }`}
                >
                  {isOpen ? "Show less" : "Learn more"}
                  <svg
                    className={`w-4 h-4 ml-1.5 transform transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
