import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../api/Api";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: "City Cab",
    desc: "Quick, affordable rides within the city. Ideal for daily commutes, shopping trips and local errands.",
    features: ["Available 24/7", "Multiple stops allowed", "AC & Non-AC options", "Fare from \u20B949"],
    color: "orange",
    badge: "Most Popular",
    image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From \u20B949",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
    ),
    title: "Airport Transfer",
    desc: "Stress-free, on-time airport pickups and drops. Pre-book up to 7 days in advance with flight tracking.",
    features: ["Flight delay tracking", "Meet & greet option", "Free 60-min waiting", "All major airports"],
    color: "blue",
    badge: "Recommended",
    image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From \u20B9499",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    title: "Outstation",
    desc: "Comfortable long-distance trips to any destination. One-way and round-trip options available.",
    features: ["One-way & round-trip", "Experienced highway drivers", "Clean comfortable cars", "Flexible pickup time"],
    color: "green",
    badge: null,
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From \u20B912/km",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    title: "Corporate",
    desc: "Managed mobility solutions for businesses. Employee transport, client pickups and event travel.",
    features: ["Centralised billing", "Dedicated account manager", "Custom monthly plans", "GST invoices"],
    color: "purple",
    badge: "For Business",
    image: "https://images.pexels.com/photos/2402648/pexels-photo-2402648.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Custom plans",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: "Hourly Rental",
    desc: "Book a cab by the hour for shopping, meetings or city tours. Driver stays with you all day.",
    features: ["Flexible 2\u201312 hrs", "Multiple stops allowed", "Same driver throughout", "Starting \u20B9149/hr"],
    color: "amber",
    badge: null,
    image: "https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "From \u20B9149/hr",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: "Women Safety+",
    desc: "Rides exclusively with women-verified safe drivers, live trip share and instant SOS support.",
    features: ["Verified safe drivers", "SOS panic button", "Live trip sharing", "24/7 safety helpline"],
    color: "pink",
    badge: "New",
    image: "https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "Same as City Cab",
  },
];

const colorMap = {
  orange: { chip: "bg-orange-50 text-[#EA580C] ring-orange-100", check: "text-[#EA580C]", badge: "bg-[#EA580C] text-white", bar: "from-[#EA580C] to-[#f97316]" },
  blue:   { chip: "bg-blue-50 text-blue-600 ring-blue-100",       check: "text-blue-500",   badge: "bg-blue-500 text-white",  bar: "from-blue-500 to-blue-400" },
  green:  { chip: "bg-emerald-50 text-emerald-600 ring-emerald-100", check: "text-emerald-500", badge: "bg-emerald-500 text-white", bar: "from-emerald-500 to-emerald-400" },
  purple: { chip: "bg-purple-50 text-purple-600 ring-purple-100", check: "text-purple-500", badge: "bg-purple-500 text-white", bar: "from-purple-500 to-purple-400" },
  amber:  { chip: "bg-amber-50 text-amber-600 ring-amber-100",     check: "text-amber-500",  badge: "bg-amber-500 text-white",  bar: "from-amber-500 to-amber-400" },
  pink:   { chip: "bg-rose-50 text-rose-600 ring-rose-100",        check: "text-rose-500",   badge: "bg-rose-500 text-white",   bar: "from-rose-500 to-rose-400" },
};

const trustStats = [
  { value: "12K+", label: "Daily Rides" },
  { value: "20+", label: "Cities" },
  { value: "1,200+", label: "Pro Drivers" },
  { value: "4.8\u2605", label: "App Rating" },
];

const faqs = [
  { q: "How do I cancel a ride?", a: "Cancellation is free up to 1 hour before pickup. Use the in-app cancel button \u2014 no questions asked, no hidden fees." },
  { q: "Are all drivers verified?", a: "Yes. Every Prajapati Travel driver completes background checks, Aadhaar KYC, police clearance and a 40-hour training program before going live." },
  { q: "What payment methods are accepted?", a: "We accept UPI, all major credit/debit cards, popular wallets, net banking and cash \u2014 your choice on every trip." },
  { q: "Do you offer corporate accounts?", a: "Absolutely. Reach out via the Corporate service card for centralised billing, monthly invoicing and a dedicated account manager." },
  { q: "Is surge pricing applied during peak hours?", a: "No. Prajapati Travel uses upfront, transparent fares \u2014 the price you see at booking is the price you pay, peak hours or not." },
];

const Services = () => {
  const [booking, setBooking] = useState({ service: "", pickup: "", drop: "", date: "", time: "", passengers: "1" });
  const [booked, setBooked] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  
  // Hero section data from API
  const [heroData, setHeroData] = useState({
    badge: "Prajapati Travel Services",
    title: "A ride for every Indian journey",
    subtitle: "From quick city hops to multi-day outstation trips",
    description: "6 service types, transparent fares, 20+ cities. Your reliable ride is one tap away.",
    backgroundImage: "https://images.pexels.com/photos/20728898/pexels-photo-20728898.jpeg?auto=compress&cs=tinysrgb&w=1920",
    stats: trustStats
  });
  const [loading, setLoading] = useState(true);
  
  // Services data from API
  const [servicesData, setServicesData] = useState(services);
  const [servicesLoading, setServicesLoading] = useState(true);
  
  // FAQ data from API
  const [faqsData, setFaqsData] = useState(faqs);

  useEffect(() => {
    const fetchServiceHero = async () => {
      try {
        const response = await Api.get("/service-hero");
        console.log("Service Hero API Response:", response.data);
        if (response.data.success && response.data.hero) {
          const { badge, title, subtitle, description, backgroundImage, stats } = response.data.hero;
          setHeroData({
            badge: badge || "Prajapati Travel Services",
            title: title || "A ride for every Indian journey",
            subtitle: subtitle || "From quick city hops to multi-day outstation trips",
            description: description || "6 service types, transparent fares, 20+ cities. Your reliable ride is one tap away.",
            backgroundImage: backgroundImage 
              ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${backgroundImage}` 
              : "https://images.pexels.com/photos/20728898/pexels-photo-20728898.jpeg?auto=compress&cs=tinysrgb&w=1920",
            stats: stats && stats.length > 0 ? stats : trustStats
          });
        }
      } catch (error) {
        console.error("Error fetching service hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchServices = async () => {
      try {
        const response = await Api.get("/services");
        console.log("Services API Response:", response.data);
        if (response.data.success && response.data.services && response.data.services.length > 0) {
          const apiServices = response.data.services.map(service => ({
            ...service,
            image: service.image 
              ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${service.image}` 
              : service.image || "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: services.find(s => s.color === service.color)?.icon || services[0].icon
          }));
          setServicesData(apiServices);
        }
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setServicesLoading(false);
      }
    };

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
      }
    };

    fetchServiceHero();
    fetchServices();
    fetchFaqs();
  }, []);

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("/service-booking", booking);
      console.log("Booking API Response:", response.data);
      if (response.data.success) {
        setBooked(true);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      
      <section className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${heroData.backgroundImage}')` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full mb-5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#EA580C]" />
            </span>
            {loading ? "Loading..." : heroData.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <>
                {heroData.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(90deg,#EA580C,#f97316,#fb923c)" }}>
                  {heroData.title.split(" ").slice(-2).join(" ")}
                </span>
              </>
            )}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            {loading ? <span className="animate-pulse">Loading...</span> : heroData.subtitle}
          </p>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {loading ? <span className="animate-pulse">Loading...</span> : heroData.description}
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {heroData.stats.map((s, index) => (
              <div key={s.label || index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-3 py-3 sm:py-4 text-center">
                <p className="text-white font-extrabold text-lg sm:text-2xl leading-none">{s.value}</p>
                <p className="text-white/70 text-[10px] sm:text-xs mt-1.5 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Six ways Prajapati Travel <span className="text-[#EA580C]">moves India</span>
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              Choose the right service for your trip \u2014 every option backed by verified drivers, GPS tracking and 24/7 support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {servicesData.map((service) => {
              const c = colorMap[service.color];
              return (
                <article
                  key={service.title}
                  className="group relative bg-white border border-orange-100 hover:border-orange-200 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.25)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <span aria-hidden="true" className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.bar}`} />
                    {service.badge && (
                      <span className={`absolute top-3 left-3 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${c.badge} shadow-md`}>
                        {service.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur text-[11px] font-extrabold text-stone-900 px-2.5 py-1 rounded-full">
                      {service.price}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-11 h-11 rounded-xl ring-1 flex items-center justify-center shrink-0 ${c.chip}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-stone-900 font-extrabold text-lg leading-tight pt-1">{service.title}</h3>
                    </div>

                    <p className="text-stone-500 text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>

                    <ul className="space-y-2 mb-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-stone-600">
                          <svg className={`w-4 h-4 mt-0.5 shrink-0 ${c.check}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/"
                      className="mt-auto inline-flex items-center justify-center gap-2 text-white font-bold py-3 rounded-xl text-sm shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
                      style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                    >
                      Book {service.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== MAP + BOOKING ========== */}
      <section className="py-14 sm:py-20 bg-[#FEF3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Book a Ride
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Your pickup, <span className="text-[#EA580C]">right on the map</span>
            </h2>
            <p className="mt-3 text-stone-500 text-sm sm:text-base max-w-xl mx-auto">
              Enter your route details and confirm your booking instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-orange-100 bg-white">
            <div className="relative min-h-[420px] lg:min-h-[600px]">
              <iframe
                title="Prajapati Travel Map Delhi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.1800%2C28.5900%2C77.2700%2C28.6600&layer=mapnik"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm border border-orange-100 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-extrabold text-stone-900">Prajapati Travel</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wide">Delhi Coverage Zone</div>
                </div>
              </div>

              <div className="absolute z-10" style={{ top: "28%", left: "62%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#EA580C] border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
                    </svg>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C] mt-0.5" />
                  <div className="mt-1.5 bg-white border border-orange-200 rounded-xl px-2.5 py-1 shadow-sm text-center whitespace-nowrap">
                    <div className="text-xs font-extrabold text-[#EA580C]">Driver Location</div>
                    <div className="text-[10px] text-stone-400">Gajraula</div>
                  </div>
                </div>
              </div>

              <div className="absolute z-10" style={{ top: "55%", left: "30%" }}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-0.5" />
                  <div className="mt-1.5 bg-white border border-emerald-200 rounded-xl px-2.5 py-1 shadow-sm text-center whitespace-nowrap">
                    <div className="text-xs font-extrabold text-emerald-600">Your Location</div>
                    <div className="text-[10px] text-stone-400">Moradabad</div>
                  </div>
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="67%" y1="38%" x2="35%" y2="60%" stroke="#EA580C" strokeWidth="2.5" strokeDasharray="8 5" strokeLinecap="round" opacity="0.7" />
              </svg>

              <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-sm border border-emerald-100 rounded-xl px-3 py-2 shadow-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                <span className="text-xs font-bold text-stone-700">142 drivers online nearby</span>
              </div>
            </div>

            <div className="bg-white p-7 sm:p-8 lg:p-10 flex flex-col justify-center">
              {booked ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                    <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-stone-500 text-sm mb-1">From <span className="font-semibold text-stone-700">{booking.pickup}</span></p>
                  <p className="text-stone-500 text-sm mb-6">To <span className="font-semibold text-stone-700">{booking.drop}</span></p>
                  <div className="flex flex-col gap-3 w-full max-w-xs">
                    {[
                      { label: "Service", value: booking.service || "City Cab" },
                      { label: "Date & Time", value: `${booking.date} ${booking.time}` },
                      { label: "Passengers", value: booking.passengers },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between bg-orange-50 border border-orange-100 rounded-xl px-4 py-3">
                        <span className="text-xs text-stone-500">{row.label}</span>
                        <span className="text-xs font-bold text-stone-800">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setBooked(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                  >
                    Book Another Ride
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-extrabold text-stone-900 mb-1">Confirm your ride</h3>
                  <p className="text-stone-400 text-sm mb-6">Fill in the details and we will match you instantly.</p>

                  <form onSubmit={handleBook} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">Service Type</label>
                      <select
                        value={booking.service}
                        onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                        className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-stone-900 bg-white outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition appearance-none"
                      >
                        <option value="">Select a service</option>
                        {servicesData.map((s) => (
                          <option key={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">Pickup Location <span className="text-rose-400">*</span></label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/></svg>
                        </span>
                        <input
                          type="text"
                          required
                          value={booking.pickup}
                          onChange={(e) => setBooking({ ...booking, pickup: e.target.value })}
                          placeholder="Enter pickup address"
                          className="w-full border border-orange-100 rounded-xl pl-9 pr-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">Drop Location <span className="text-rose-400">*</span></label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#EA580C]">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                        </span>
                        <input
                          type="text"
                          required
                          value={booking.drop}
                          onChange={(e) => setBooking({ ...booking, drop: e.target.value })}
                          placeholder="Enter drop address"
                          className="w-full border border-orange-100 rounded-xl pl-9 pr-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1.5">Date <span className="text-rose-400">*</span></label>
                        <input
                          type="date"
                          required
                          value={booking.date}
                          onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                          className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-stone-700 mb-1.5">Time <span className="text-rose-400">*</span></label>
                        <input
                          type="time"
                          required
                          value={booking.time}
                          onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                          className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-stone-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 mb-1.5">Passengers</label>
                      <div className="flex gap-2">
                        {["1","2","3","4","4+"].map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setBooking({ ...booking, passengers: n })}
                            className={`flex-1 py-2 rounded-xl text-sm font-bold border transition ${
                              booking.passengers === n
                                ? "text-white border-[#EA580C]"
                                : "bg-white text-stone-600 border-orange-100 hover:border-orange-300"
                            }`}
                            style={booking.passengers === n ? { background: "linear-gradient(135deg,#EA580C,#f97316)" } : {}}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl text-sm font-extrabold text-white mt-1 transition hover:opacity-90 shadow-lg shadow-orange-900/20"
                      style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                    >
                      Confirm Booking
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Ride in <span className="text-[#EA580C]">4 simple steps</span>
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-3 max-w-md mx-auto leading-relaxed">
              From booking to destination \u2014 the smoothest ride experience, every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {[
              { step: "01", title: "Book a Ride", desc: "Open the app, enter pickup & drop, and confirm your booking in under 30 seconds.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", accent: true },
              { step: "02", title: "Driver Assigned", desc: "Our smart algorithm instantly matches you with the nearest available, top-rated driver.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", accent: false },
              { step: "03", title: "Track Live", desc: "Watch your driver arrive in real time on the map. Get ETA updates and share your trip.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", accent: false },
              { step: "04", title: "Reach & Pay", desc: "Arrive safely. Pay via UPI, Cash, Card or Wallet — whichever you prefer.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", accent: false },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative bg-white border border-orange-100 rounded-2xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all group"
              >
                <span className="absolute top-4 right-5 text-xs font-extrabold text-stone-200 select-none">
                  {item.step}
                </span>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                  style={item.accent
                    ? { background: "linear-gradient(135deg,#EA580C,#f97316)", color: "#fff" }
                    : { background: "#FEF3E8", color: "#EA580C", border: "1px solid #fed7aa" }
                  }
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>

                <div>
                  <div className="font-extrabold text-stone-900 text-base mb-1">{item.title}</div>
                  <div className="text-stone-500 text-sm leading-relaxed">{item.desc}</div>
                </div>

                {i < 3 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white border border-orange-100 rounded-full items-center justify-center shadow-sm">
                    <svg className="w-3.5 h-3.5 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-14 sm:py-20 bg-[#FEF3E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Common questions, <span className="text-[#EA580C]">clear answers</span>
            </h2>
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
    </main>
  );
};

export default Services;
