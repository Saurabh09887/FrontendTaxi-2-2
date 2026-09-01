import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../api/Api";
import saurabhImage from "../assets/Saurabh.jpg";
import anmolImage from "../assets/Anmol.jpg";
import shivangiImage from "../assets/Shivangi.jpg";
import nisthaImage from "../assets/Nishtha.jpg";

const milestones = [
  { year: "2020", title: "The Spark", desc: "Prajapati Travel founded in Mumbai with just 50 verified drivers serving 1 city." },
  { year: "2021", title: "Going Digital", desc: "Launched our mobile app with live tracking, transparent fares & UPI payments." },
  { year: "2023", title: "PAN-India", desc: "Expanded to 12 cities with 600+ verified drivers and round-the-clock support." },
  { year: "2026", title: "Scale & Trust", desc: "20+ cities, 1,200+ pro drivers, 50K+ happy riders \u2014 and growing every month." },
];

const values = [
  {
    title: "Safety First",
    desc: "Every driver background-verified, every trip GPS-tracked, every ride covered by insurance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Transparent Pricing",
    desc: "Upfront fares, no surge, no hidden charges. What you see is what you pay \u2014 always.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Driver Respect",
    desc: "Fair earnings, weekly payouts, training programs and 24/7 driver support \u2014 our drivers come first.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Made for India",
    desc: "Hindi, English & 8 regional languages. Cash, UPI, cards \u2014 built for every Indian commuter.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Saurabh Prajapati",
    role: "Founder & CEO",
    desc: "15+ years in mobility & technology leadership across India.",
    initials: "RS",
    bg: "linear-gradient(135deg,#EA580C,#f97316)",
    img: saurabhImage,
  },
  {
    name: "Anmol Chaudhary",
    role: "Co-Founder & CTO",
    desc: "10+ years building scalable platforms for Indian startups.",
    initials: "AI",
    bg: "linear-gradient(135deg,#3b82f6,#6366f1)",
    img: anmolImage,
  },
  {
    name: "shivangi Sharma",
    role: "Head of Operations",
    desc: "Expert in driver onboarding & city expansion strategy.",
    initials: "SV",
    bg: "linear-gradient(135deg,#22c55e,#10b981)",
    img: shivangiImage,
  },
  {
    name: "Nistha Rajput",
    role: "Head of Marketing",
    desc: "Brand storyteller with a passion for growth marketing.",
    initials: "PN",
    bg: "linear-gradient(135deg,#ec4899,#f43f5e)",
    img: nisthaImage,
  },
];

const trustLogos = [
  { label: "ISO 27001 Certified" },
  { label: "RBI Approved Payments" },
  { label: "DPDP Act Compliant" },
  { label: "GST Registered" },
  { label: "Startup India Recognised" },
];

const About = () => {
  const [aboutData, setAboutData] = useState({
    hero: {
      badge: "About Prajapati Travel",
      title: "Reliable rides, built for India.",
      subtitle: "Connecting India, one ride at a time",
      desc: "Founded in 2020 in Mumbai, Prajapati Travel was born out of frustration with unreliable cabs and surge pricing. Today, we power 12,000+ daily rides across 20+ Indian cities — with verified drivers, transparent fares and 24/7 support.",
      image: "/t.png",
      stats: [
        { value: "50K+", label: "Happy Riders" },
        { value: "1,200+", label: "Pro Drivers" },
        { value: "20+", label: "Cities" },
        { value: "4.8★", label: "App Rating" },
      ]
    },
    story: {
      title: "Our Story",
      desc1: "It started with a simple idea what if booking a cab was as easy and reliable as ordering food online? Our founders, tired of waiting 45 minutes for cabs that never arrived, decided to build the solution themselves.",
      desc2: "Starting with just 50 drivers in Mumbai, Prajapati Travel has grown to 1,200+ verified drivers across 20+ cities in just 6 years. We are proudly Indian, proudly local — understanding the unique needs of Indian commuters.",
      desc3: "From daily office commutes and airport transfers to outstation trips and corporate accounts — we have every mobility need covered.",
      image: "/t.png",
      stats: [
        { value: "2020", label: "Founded in Mumbai" },
        { value: "1,200+", label: "Verified Drivers" },
        { value: "20+", label: "Cities Covered" },
        { value: "50K+", label: "Happy Riders" },
        { value: "₹249", label: "Avg Ride Fare" },
        { value: "4.8★", label: "Play Store Rating" },
      ]
    },
    milestones: milestones,
    values: values,
    team: team,
    trustLogos: trustLogos
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await Api.get("/about");
        console.log("About API Response:", response.data);
        if (response.data.success && response.data.data) {
          const apiData = response.data.data;
          setAboutData({
            hero: {
              badge: apiData.hero?.badge || "About Prajapati Travel",
              title: apiData.hero?.title || "Reliable rides, built for India.",
              subtitle: apiData.hero?.subtitle || "Connecting India, one ride at a time",
              desc: apiData.hero?.desc || aboutData.hero.desc,
              image: apiData.hero?.image 
                ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${apiData.hero.image}` 
                : "/t.png",
              stats: apiData.hero?.stats && apiData.hero.stats.length > 0 ? apiData.hero.stats : aboutData.hero.stats
            },
            story: {
              title: apiData.story?.title || "Our Story",
              desc1: apiData.story?.desc1 || aboutData.story.desc1,
              desc2: apiData.story?.desc2 || aboutData.story.desc2,
              desc3: apiData.story?.desc3 || aboutData.story.desc3,
              image: apiData.story?.image 
                ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${apiData.story.image}` 
                : "/t.png",
              stats: apiData.story?.stats && apiData.story.stats.length > 0 ? apiData.story.stats : aboutData.story.stats
            },
            milestones: apiData.milestones && apiData.milestones.length > 0 ? apiData.milestones : milestones,
            values: apiData.values && apiData.values.length > 0 ? apiData.values.map(v => ({
              ...v,
              icon: values.find(val => val.title === v.title)?.icon || values[0].icon
            })) : values,
            team: team, // Will be updated by fetchTeam
            trustLogos: apiData.trustLogos && apiData.trustLogos.length > 0 ? apiData.trustLogos : trustLogos
          });
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTeam = async () => {
      try {
        const response = await Api.get("/team");
        console.log("Team API Response:", response.data);
        if (response.data.success && response.data.data && response.data.data.length > 0) {
          const teamData = response.data.data.map(t => ({
            name: t.name,
            role: t.role,
            desc: t.desc,
            img: t.img ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${t.img}` : team[0].img,
            initials: t.name?.split(' ').map(n => n[0]).join('') || "ST",
            bg: team[0].bg
          }));
          setAboutData(prev => ({ ...prev, team: teamData }));
        }
      } catch (error) {
        console.error("Error fetching team data:", error);
      }
    };

    fetchAboutData();
    fetchTeam();
  }, []);
  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      
      <section className="relative pt-28 sm:pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,88,12,0.08),_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-2 bg-white ring-1 ring-orange-100 text-[#EA580C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              {loading ? "Loading..." : aboutData.hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-5">
              {loading ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                <>
                  {aboutData.hero.title.split(',')[0]},
                  <span className="block text-[#EA580C] mt-1">{aboutData.hero.title.split(',')[1] || "built for India."}</span>
                </>
              )}
            </h1>
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {loading ? <span className="animate-pulse">Loading...</span> : aboutData.hero.desc}
            </p>
          </div>

          {/* Hero image with overlay stats */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_80px_-30px_rgba(234,88,12,0.35)] border border-orange-100 group">
            <img
              src={aboutData.hero.image}
              alt="Prajapati Travel premium sedan"
              className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Caption strip */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-white/95 text-[11px] font-bold uppercase tracking-wider">Live in 20+ cities</span>
            </div>

            {/* Overlay stats */}
            <div className="hidden sm:grid grid-cols-4 gap-3 sm:gap-4 absolute bottom-5 sm:bottom-6 left-5 right-5 sm:left-6 sm:right-6">
              {aboutData.hero.stats.map((s, index) => (
                <div key={s.label || index} className="text-center bg-white/12 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-3 py-3">
                  <p className="text-white font-extrabold text-lg sm:text-2xl leading-none">{s.value}</p>
                  <p className="text-white/75 text-[11px] sm:text-xs mt-1.5 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-4 sm:hidden gap-2 mt-3">
            {aboutData.hero.stats.map((s, index) => (
              <div key={s.label || index} className="text-center bg-white border border-orange-100 rounded-xl px-1 py-2.5 shadow-sm">
                <p className="text-[#EA580C] font-extrabold text-sm">{s.value}</p>
                <p className="text-stone-500 text-[10px] mt-0.5 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {aboutData.trustLogos.map((l, index) => (
              <span key={l.label} className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-stone-500 bg-white border border-orange-100 px-3 py-1.5 rounded-full">
                <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {l.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STORY ========== */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
                {aboutData.story.title}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight mb-5">
                From one Mumbai cab stand to all of India.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4">
                {aboutData.story.desc1}
              </p>
              <p className="text-stone-500 leading-relaxed mb-4">
                {aboutData.story.desc2}
              </p>
              <p className="text-stone-500 leading-relaxed mb-6">
                {aboutData.story.desc3}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#EA580C] font-bold hover:text-orange-700 transition-colors group"
              >
                Explore our services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right: image + stat cards */}
            <div className="space-y-4">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-orange-900/10 border border-orange-100">
                <img
                  src={aboutData.story.image}
                  alt="Prajapati Travel fleet"
                  className="w-full h-52 sm:h-60 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {aboutData.story.stats.map((stat, index) => (
                  <div
                    key={stat.label || index}
                    className="bg-white border border-orange-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center shadow-sm hover:border-orange-200 hover:-translate-y-0.5 transition-all"
                  >
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#EA580C] leading-none">{stat.value}</p>
                    <p className="text-stone-500 text-[11px] sm:text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TIMELINE ========== */}
      <section className="py-14 sm:py-20 bg-[#FEF3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Six years of building <span className="text-[#EA580C]">trust on Indian roads</span>
            </h2>
          </div>
          <div className="relative">
            {/* horizontal line on lg */}
            <div aria-hidden="true" className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-orange-200 via-[#EA580C]/50 to-orange-200" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {aboutData.milestones.map((m) => (
                <div key={m.year} className="relative bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-orange-900/20"
                      style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                    >
                      {m.year.slice(-2)}
                    </div>
                    <span className="text-2xl font-extrabold text-stone-900">{m.year}</span>
                  </div>
                  <h3 className="text-stone-900 font-bold text-base mb-1.5">{m.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES ========== */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Principles behind every ride
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {aboutData.values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-orange-100 rounded-2xl p-6 sm:p-7 hover:border-orange-200 hover:shadow-md hover:-translate-y-1 transition-all shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 ring-1 ring-orange-100 text-[#EA580C] mb-4">
                  {v.icon}
                </div>
                <h3 className="text-stone-900 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="py-14 sm:py-20 bg-[#FEF3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block text-[#EA580C] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-tight tracking-tight">
              Meet the team
            </h2>
            <p className="text-stone-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
              The people steering Prajapati Travel \u2014 obsessed with mobility, safety and customer experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {aboutData.team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-orange-100 rounded-2xl overflow-hidden hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all shadow-sm group"
              >
                <div className="relative overflow-hidden h-64 sm:h-72">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.nextSibling) e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-full hidden items-center justify-center text-white text-4xl font-extrabold absolute inset-0"
                    style={{ background: member.bg }}
                  >
                    {member.initials}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-stone-900 font-bold text-base sm:text-lg">{member.name}</h3>
                  <p className="text-[#EA580C] font-semibold text-xs sm:text-sm mt-0.5">{member.role}</p>
                  <p className="text-stone-400 text-xs mt-2 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
