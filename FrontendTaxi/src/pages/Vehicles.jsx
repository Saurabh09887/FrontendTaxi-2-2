import { useState, useEffect } from "react";
import BookingModal from "../components/BookingModal";
import Api from "../api/Api";

const fallbackVehicleImage =
  "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1920";

const taxis = [
 
  {
    _id: "default-sedan",
    name: "Sedan",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 55%",
    seats: 4,
    pricePerDay: 2500,
    features: ["AC", "Comfort Ride", "Airport Friendly", "GPS"],
  },
  {
    _id: "default-suv",
    name: "SUV",
    image: "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 55%",
    seats: 6,
    pricePerDay: 3800,
    features: ["Extra Space", "6 Seater", "Outstation", "Luggage Friendly"],
  },
  {
    _id: "default-swift",
    name: "Swift",
    image: "https://images.pexels.com/photos/30662798/pexels-photo-30662798.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 80%",
    seats: 4,
    pricePerDay: 1400,
    features: ["Compact", "Fuel Efficient", "City Friendly", "AC"],
  },

 
  {
    _id: "default-ertiga",
    name: "Ertiga",
    image: "https://images.pexels.com/photos/37029578/pexels-photo-37029578.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 50%",
    seats: 7,
    pricePerDay: 3200,
    features: ["7 Seater", "AC", "Family Friendly", "Spacious"],
  },
  {
    _id: "default-santro",
    name: "Santro",
    image: "https://images.pexels.com/photos/8984923/pexels-photo-8984923.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 50%",
    seats: 4,
    pricePerDay: 1600,
    features: ["Compact", "Comfortable", "Fuel Efficient", "AC"],
  },
  {
    _id: "default-wagonr",
    name: "Wagon R",
    image: "https://images.pexels.com/photos/33117400/pexels-photo-33117400.jpeg?auto=compress&cs=tinysrgb&w=1920",
    imagePosition: "center 50%",
    seats: 4,
    pricePerDay: 1500,
    features: ["Budget Hatchback", "City Friendly", "Fuel Efficient", "AC"],
  },
];

const Vehicles = ({ embedded = false }) => {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [daysMap, setDaysMap] = useState(() =>
    Object.fromEntries(taxis.map((t) => [t.name, 1]))
  );
  
  // Hero data from API
  const [heroData, setHeroData] = useState({
    badge: "Prajapati Travel Taxis",
    title: "Book any Taxi, for any number of days",
    subtitle: "Choose from our fleet of comfortable vehicles",
    description: "Choose your taxi, pick how many days you need it, and book instantly. Transparent per-day pricing — no surge, no surprises.",
    stats: [
      { label: "Taxi Types", value: "6" },
      { label: "Active Fleet", value: "12,000+" },
      { label: "Cities Covered", value: "20+" },
      { label: "Avg. Wait Time", value: "4 min" },
    ]
  });
  const [loading, setLoading] = useState(true);
  
  // Taxis data from API
  const [taxisData, setTaxisData] = useState(taxis);
  const [taxisLoading, setTaxisLoading] = useState(true);

  useEffect(() => {
    const fetchTaxiHero = async () => {
      try {
        const response = await Api.get("/taxi-hero");
        console.log("Taxi Hero API Response:", response.data);
        if (response.data.success && response.data.hero) {
          const { badge, title, subtitle, description, stats } = response.data.hero;
          setHeroData({
            badge: badge || "Prajapati Travel Taxis",
            title: title || "Book any Taxi, for any number of days",
            subtitle: subtitle || "Choose from our fleet of comfortable vehicles",
            description: description || heroData.description,
            stats: stats && stats.length > 0 ? stats : heroData.stats
          });
        }
      } catch (error) {
        console.error("Error fetching taxi hero data:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchTaxis = async () => {
      try {
        const response = await Api.get("/taxi");
        console.log("Taxis API Response:", response.data);
        if (response.data.success && response.data.taxis && response.data.taxis.length > 0) {
          const apiTaxis = response.data.taxis.map(taxi => {
            const imageUrl = taxi.image 
              ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${taxi.image}` 
              : fallbackVehicleImage;
            console.log(`Taxi: ${taxi.name}, Image URL: ${imageUrl}`);
            return {
              _id: taxi._id,
              name: taxi.name,
              image: imageUrl,
              imagePosition: "center 55%",
              seats: taxi.seats,
              pricePerDay: taxi.pricePerDay,
              features: taxi.features || [],
              badge: taxi.badge
            };
          });
          setTaxisData(apiTaxis);
          // Update daysMap with new taxis
          setDaysMap(Object.fromEntries(apiTaxis.map((t) => [t.name, 1])));
        }
      } catch (error) {
        console.error("Error fetching taxis data:", error);
      } finally {
        setTaxisLoading(false);
      }
    };

    fetchTaxiHero();
    fetchTaxis();
  }, []);

  const setDays = (name, value) => {
    const v = Math.max(1, Math.min(60, Number(value) || 1));
    setDaysMap((prev) => ({ ...prev, [name]: v }));
  };

  const openBooking = (taxi) => {
    setSelected(taxi);
    setShowForm(true);
  };

  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {!embedded && (
      <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #fff7ed 0%, #FEF3E8 60%, #fff7ed 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle, #EA580C, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #EA580C, transparent 70%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide mb-5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z" />
            </svg>
            {loading ? "Loading..." : heroData.badge}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-5 leading-tight">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <>
                {heroData.title.split(',')[0]},{" "}
                <span className="text-[#EA580C]">{heroData.title.split(',').slice(1).join(',')}</span>
              </>
            )}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            {loading ? <span className="animate-pulse">Loading...</span> : heroData.description}
          </p>
        </div>

        {/* Stats bar */}
        <div className="relative max-w-4xl mx-auto mt-6 px-4">
          <div className="bg-white border border-orange-100 rounded-3xl shadow-sm grid grid-cols-2 sm:grid-cols-4 divide-x divide-orange-100">
            {heroData.stats.map((s, index) => (
              <div key={s.label || index} className="py-5 text-center">
                <div className="text-2xl font-extrabold text-[#EA580C]">{s.value}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {/* Fleet Section */}
      <section id="fleet" className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            All Available Taxis
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pick a taxi, choose how many days you need it, and tap Book Now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {taxisData.map((v) => {
            const days = daysMap[v.name] || 1;
            const total = v.pricePerDay * days;
            return (
              <div
                key={v.name}
                role="button"
                tabIndex={0}
                onClick={() => openBooking(v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openBooking(v);
                  }
                }}
                className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden group flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: v.imagePosition }}
                    onError={(e) => {
                      e.currentTarget.src = fallbackVehicleImage;
                    }}
                  />
                  {v.badge && (
                    <span className="absolute top-3 left-3 bg-white text-[#EA580C] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {v.badge}
                    </span>
                  )}
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-extrabold text-stone-900">{v.name}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <svg className="w-3.5 h-3.5 text-[#EA580C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {v.seats} seats
                    </span>
                  </div>

                  <div className="text-xs text-gray-500 border-t border-gray-100 pt-3">
                    {v.features.slice(0, 3).join(" • ")}
                  </div>

                  {/* Days picker */}
                  <div
                    className="bg-orange-50/60 border border-orange-100 rounded-xl p-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <label className="block text-[11px] font-bold text-stone-600 uppercase tracking-wide mb-2">
                      Book for how many days?
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDays(v.name, days - 1);
                        }}
                        className="w-9 h-9 rounded-lg bg-white border border-orange-200 text-[#EA580C] font-bold hover:bg-orange-100 transition-colors"
                        aria-label="decrease days"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={60}
                        value={days}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => setDays(v.name, e.target.value)}
                        className="flex-1 text-center bg-white border border-orange-200 rounded-lg py-1.5 text-sm font-bold text-stone-900 focus:outline-none focus:border-orange-400"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDays(v.name, days + 1);
                        }}
                        className="w-9 h-9 rounded-lg bg-white border border-orange-200 text-[#EA580C] font-bold hover:bg-orange-100 transition-colors"
                        aria-label="increase days"
                      >
                        +
                      </button>
                      <span className="text-xs font-semibold text-stone-500 ml-1">
                        day{days > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">
                        ₹{v.pricePerDay.toLocaleString("en-IN")} × {days} day{days > 1 ? "s" : ""}
                      </div>
                      <div className="text-base font-extrabold text-[#EA580C]">
                        ₹{total.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <button
                      onClick={() => openBooking(v)}
                      className="text-xs font-bold text-white px-4 py-2.5 rounded-xl shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
                      style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                    >
                      Book Now →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        open={showForm}
        onClose={() => setShowForm(false)}
        item={selected}
        type="taxi"
        initialDays={selected ? daysMap[selected.name] || 1 : 1}
      />
    </main>
  );
};

export default Vehicles;
