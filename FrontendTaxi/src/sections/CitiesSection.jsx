import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Api from "../api/Api";

const cities = [
  { name: "Mumbai", tier: "metro", state: "MH", rides: "2.4K" },
  { name: "Delhi", tier: "metro", state: "DL", rides: "2.1K" },
  { name: "Bengaluru", tier: "metro", state: "KA", rides: "1.8K" },
  { name: "Hyderabad", tier: "metro", state: "TG", rides: "1.3K" },
  { name: "Chennai", tier: "metro", state: "TN", rides: "1.1K" },
  { name: "Kolkata", tier: "metro", state: "WB", rides: "0.9K" },
  { name: "Pune", tier: "tier1", state: "MH", rides: "780" },
  { name: "Ahmedabad", tier: "tier1", state: "GJ", rides: "640" },
  { name: "Jaipur", tier: "tier1", state: "RJ", rides: "520" },
  { name: "Surat", tier: "tier1", state: "GJ", rides: "470" },
  { name: "Lucknow", tier: "tier1", state: "UP", rides: "410" },
  { name: "Chandigarh", tier: "tier1", state: "CH", rides: "380" },
  { name: "Kochi", tier: "tier2", state: "KL", rides: "260" },
  { name: "Indore", tier: "tier2", state: "MP", rides: "240" },
  { name: "Nagpur", tier: "tier2", state: "MH", rides: "220" },
  { name: "Visakhapatnam", tier: "tier2", state: "AP", rides: "190" },
  { name: "Bhopal", tier: "tier2", state: "MP", rides: "170" },
  { name: "Agra", tier: "tier2", state: "UP", rides: "160" },
  { name: "Vadodara", tier: "tier2", state: "GJ", rides: "150" },
  { name: "Nashik", tier: "tier2", state: "MH", rides: "130" },
];

const stats = [
  { value: "20+", label: "Cities" },
  { value: "12K+", label: "Daily Rides" },
  { value: "98%", label: "On-Time" },
  { value: "4.8\u2605", label: "Avg. Rating" },
];

const filters = [
  { key: "all", label: "All", count: cities.length },
  { key: "metro", label: "Metro", count: cities.filter((c) => c.tier === "metro").length },
  { key: "tier1", label: "Tier 1", count: cities.filter((c) => c.tier === "tier1").length },
  { key: "tier2", label: "Tier 2", count: cities.filter((c) => c.tier === "tier2").length },
];

const CitiesSection = () => {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [citiesData, setCitiesData] = useState(cities);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await Api.get("/cities");
        console.log("Cities API Response:", response.data);
       
        if (response.data?.cities?.length) {
          setCitiesData(response.data.cities);
        }
 {
          setCitiesData(response.data.cities);
        }
      } catch (error) {
        console.error("Error fetching cities data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  const filters = useMemo(() => [
    { key: "all", label: "All", count: citiesData.length },
    { key: "metro", label: "Metro", count: citiesData.filter((c) => c.tier === "metro").length },
    { key: "tier1", label: "Tier 1", count: citiesData.filter((c) => c.tier === "tier1").length },
    { key: "tier2", label: "Tier 2", count: citiesData.filter((c) => c.tier === "tier2").length },
  ], [citiesData]);

  const visible = useMemo(() => {
    return citiesData.filter((c) => {
      const matchTier = filter === "all" || c.tier === filter;
      const matchQuery = c.name.toLowerCase().includes(query.toLowerCase());
      return matchTier && matchQuery;
    });
  }, [filter, query, citiesData]);

  return (
    <section className="relative bg-[#FFFBF7] py-10 sm:py-14 lg:py-16 overflow-hidden">
      {/* decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-32 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 w-72 h-72 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white ring-1 ring-orange-100 text-[#EA580C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              Our Coverage
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-stone-900 leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Rides available in
              <span className="block text-[#EA580C] mt-1">20+ Indian Cities</span>
            </h2>

            <p className="text-stone-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
              From the bustling streets of Mumbai to the tech hubs of Bengaluru \u2014 Prajapati Travel is expanding rapidly across India. Your reliable ride is just a tap away.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-7 sm:mb-8 max-w-md mx-auto lg:mx-0 lg:max-w-none">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-orange-100 rounded-xl py-3 sm:py-3.5 text-center shadow-sm hover:border-orange-200 hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-base sm:text-xl font-extrabold text-[#EA580C] leading-none">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-stone-400 font-medium mt-1.5 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-6 py-3 sm:py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
                style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-800 font-bold px-6 py-3 sm:py-3.5 rounded-xl border border-orange-200 hover:border-[#EA580C] hover:text-[#EA580C] transition-all duration-200 text-sm sm:text-base"
              >
                Request a City
              </Link>
            </div>
          </div>

          {/* Right - Cities Card */}
          <div className="relative">
            <div className="bg-white border border-orange-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7 shadow-[0_10px_40px_-15px_rgba(234,88,12,0.18)]">
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                <div className="min-w-0">
                  <h3 className="text-sm sm:text-base font-extrabold text-stone-900 truncate">
                    Live Service Cities
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-400 mt-0.5">
                    Real-time availability across India
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Live
                </span>
              </div>

              {/* Search */}
              <div className="relative mb-3">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search city..."
                  className="w-full pl-9 pr-9 py-2.5 text-sm bg-orange-50/40 border border-orange-100 rounded-xl text-stone-700 placeholder:text-stone-400 focus:outline-none focus:border-orange-300 focus:bg-white transition-colors"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[#EA580C] p-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* Tier filter pills */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {filters.map((f) => {
                  const active = filter === f.key;
                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setFilter(f.key)}
                      className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-2.5 py-1.5 rounded-lg border transition-all ${
                        active
                          ? "bg-[#EA580C] border-[#EA580C] text-white shadow-sm"
                          : "bg-white border-orange-100 text-stone-600 hover:border-orange-300 hover:text-[#EA580C]"
                      }`}
                    >
                      {f.label}
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${active ? "bg-white/20 text-white" : "bg-orange-50 text-[#EA580C]"}`}>
                        {f.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* City chips */}
              <div className="flex flex-wrap gap-2 min-h-[120px]">
                {visible.length === 0 ? (
                  <div className="w-full text-center py-8 text-sm text-stone-400">
                    No cities match \u201C{query}\u201D
                  </div>
                ) : (
                  visible.map((city) => {
                    const isMetro = city.tier === "metro";
                    const isTier1 = city.tier === "tier1";
                    return (
                      <span
                        key={city.name}
                        title={`${city.rides} daily rides \u00b7 ${city.state}`}
                        className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-default hover:-translate-y-0.5 ${
                          isMetro
                            ? "bg-orange-50 border-orange-300 text-[#EA580C] hover:shadow-md hover:shadow-orange-200/50"
                            : isTier1
                            ? "bg-white border-orange-200 text-stone-700 hover:bg-orange-50 hover:text-[#EA580C]"
                            : "bg-white border-orange-100 text-stone-600 hover:bg-orange-50 hover:text-[#EA580C] hover:border-orange-200"
                        }`}
                      >
                        {isMetro && <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />}
                        {city.name}
                        <span className="text-[10px] font-bold text-stone-400 group-hover:text-[#EA580C]/70 ml-0.5">
                          {city.state}
                        </span>
                      </span>
                    );
                  })
                )}
                {filter === "all" && !query && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-orange-50/60 border border-dashed border-orange-300 text-orange-500">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    More soon
                  </span>
                )}
              </div>

              {/* Footer: legend + counter */}
              <div className="mt-5 pt-4 border-t border-orange-50 flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-stone-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                    Metro
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-200" />
                    Tier 1
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-100 border border-orange-200" />
                    Tier 2
                  </span>
                </div>
                <span className="font-bold text-stone-700">
                  Showing <span className="text-[#EA580C]">{visible.length}</span> / {citiesData.length}
                </span>
              </div>
            </div>

            {/* Floating coverage badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 lg:-top-5 lg:-right-5 bg-white border border-orange-100 rounded-2xl shadow-lg px-4 py-3 items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-stone-400 font-medium uppercase tracking-wide">Coverage growth</div>
                <div className="text-sm font-extrabold text-stone-900">+8 cities / yr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
