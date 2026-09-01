import { useState, useEffect } from "react";
import BookingModal from "../components/BookingModal";
import Api from "../api/Api";

const drivers = [
  {
    name: "Ramesh Kumar",
    photo:
      "https://images.pexels.com/photos/13624160/pexels-photo-13624160.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Mumbai",
    experience: "8 yrs",
    rating: 4.9,
    trips: 4200,
    languages: ["Hindi", "English", "Marathi"],
    vehicle: "Sedan – Maruti Dzire",
    pricePerDay: 1800,
  },
  {
    name: "Suresh Yadav",
    photo:
      "https://images.pexels.com/photos/16928842/pexels-photo-16928842.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Delhi",
    experience: "6 yrs",
    rating: 4.8,
    trips: 3100,
    languages: ["Hindi", "English"],
    vehicle: "SUV – Toyota Innova",
    pricePerDay: 2400,
  },
  {
    name: "Anil Sharma",
    photo:
      "https://images.pexels.com/photos/11947250/pexels-photo-11947250.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Jaipur",
    experience: "10 yrs",
    rating: 5.0,
    trips: 5600,
    languages: ["Hindi", "English", "Rajasthani"],
    vehicle: "Sedan – Honda City",
    pricePerDay: 2000,
  },
  {
    name: "Mahesh Reddy",
    photo:
      "https://images.pexels.com/photos/15316018/pexels-photo-15316018.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Hyderabad",
    experience: "5 yrs",
    rating: 4.7,
    trips: 2300,
    languages: ["Telugu", "Hindi", "English"],
    vehicle: "SUV – Hyundai Creta",
    pricePerDay: 2200,
  },
  {
    name: "Vikram Singh",
    photo:
      "https://images.pexels.com/photos/35161055/pexels-photo-35161055.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Bengaluru",
    experience: "7 yrs",
    rating: 4.9,
    trips: 3800,
    languages: ["Kannada", "Hindi", "English"],
    vehicle: "Sedan – Toyota Etios",
    pricePerDay: 1900,
  },
  {
    name: "Imran Khan",
    photo:
      "https://images.pexels.com/photos/19159279/pexels-photo-19159279.png?auto=compress&cs=tinysrgb&w=400",
    city: "Lucknow",
    experience: "9 yrs",
    rating: 4.8,
    trips: 4500,
    languages: ["Hindi", "Urdu", "English"],
    vehicle: "Tempo Traveller – 12 Seater",
    pricePerDay: 4800,
  },
  {
    name: "Pradeep Nair",
    photo:
      "https://images.pexels.com/photos/1856477/pexels-photo-1856477.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Chennai",
    experience: "4 yrs",
    rating: 4.6,
    trips: 1800,
    languages: ["Tamil", "Hindi", "English"],
    vehicle: "Sedan – Maruti Ciaz",
    pricePerDay: 1700,
  },
  {
    name: "Rajiv Bose",
    photo:
      "https://images.pexels.com/photos/2601464/pexels-photo-2601464.jpeg?auto=compress&cs=tinysrgb&w=400",
    city: "Kolkata",
    experience: "11 yrs",
    rating: 5.0,
    trips: 6200,
    languages: ["Bengali", "Hindi", "English"],
    vehicle: "SUV – Mahindra XUV",
    pricePerDay: 2500,
  },
];

const Driver = ({ embedded = false }) => {
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [daysMap, setDaysMap] = useState(() =>
    Object.fromEntries(drivers.map((d) => [d.name, 1]))
  );
  
  // Drivers data from API
  const [driversData, setDriversData] = useState(drivers);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await Api.get("/driver");
        console.log("Drivers API Response:", response.data);
        if (response.data.success && response.data.drivers && response.data.drivers.length > 0) {
          const apiDrivers = response.data.drivers.map(driver => ({
            _id: driver._id,
            name: driver.name,
            photo: driver.photo 
              ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${driver.photo}` 
              : "https://images.pexels.com/photos/13624160/pexels-photo-13624160.jpeg?auto=compress&cs=tinysrgb&w=400",
            city: driver.city,
            experience: driver.experience,
            rating: driver.rating,
            trips: driver.trips,
            languages: driver.languages || [],
            vehicle: driver.vehicle,
            pricePerDay: driver.pricePerDay,
            badge: driver.badge
          }));
          setDriversData(apiDrivers);
          setDaysMap(Object.fromEntries(apiDrivers.map((d) => [d.name, 1])));
        }
      } catch (error) {
        console.error("Error fetching drivers data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDrivers();
  }, []);

  const setDays = (name, value) => {
    const v = Math.max(1, Math.min(60, Number(value) || 1));
    setDaysMap((prev) => ({ ...prev, [name]: v }));
  };

  const openBooking = (driver) => {
    setSelected({ ...driver, image: driver.photo });
    setShowForm(true);
  };

  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {!embedded && (
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(234,88,12,0.08), transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-block text-[#EA580C] text-sm font-bold uppercase tracking-widest mb-4">
            Our Verified Drivers
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-5 leading-tight">
            Hire a trusted{" "}
            <span className="text-[#EA580C]">Prajapati Travel driver</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Browse all our background-verified drivers, see their experience, languages and per-day rates, and book in one tap.
          </p>

          <div className="max-w-3xl mx-auto bg-white border border-orange-100 rounded-3xl shadow-sm grid grid-cols-2 sm:grid-cols-4 divide-x divide-orange-100 mt-4">
            {[
              { label: "Verified Drivers", value: `${drivers.length}+` },
              { label: "Avg. Rating", value: "4.8★" },
              { label: "Cities", value: "20+" },
              { label: "Trips Done", value: "30K+" },
            ].map((s) => (
              <div key={s.label} className="py-5 text-center">
                <div className="text-2xl font-extrabold text-[#EA580C]">{s.value}</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Driver Grid */}
      <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 mb-3">
            Meet our Drivers
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose a driver, set how many days you need them, and tap Book Now.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {driversData.map((d) => {
            const days = daysMap[d.name] || 1;
            const total = d.pricePerDay * days;
            return (
              <div
                key={d._id || d.name}
                className="bg-white border border-orange-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-56 overflow-hidden bg-orange-50">
                  <img
                    src={d.photo}
                    alt={d.name}
                    className="w-full h-full object-cover"
                  />
                  {d.badge && (
                    <span className="absolute top-3 left-3 bg-white text-[#EA580C] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                      {d.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur text-[11px] font-extrabold text-[#EA580C] px-2.5 py-1 rounded-full border border-orange-100">
                    ★ {d.rating.toFixed(1)}
                  </span>
                  <span className="absolute bottom-3 right-3 bg-green-50 text-green-700 text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-green-200">
                    Verified
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 space-y-3 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-base font-extrabold text-stone-900">{d.name}</h3>
                    <p className="text-xs text-gray-500">
                      {d.city} · {d.experience} experience
                    </p>
                  </div>

                  <div className="text-xs text-stone-600 space-y-1.5 border-t border-gray-100 pt-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vehicle</span>
                      <span className="font-semibold text-right">{d.vehicle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Trips</span>
                      <span className="font-semibold">{d.trips.toLocaleString("en-IN")}+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Languages</span>
                      <span className="font-semibold text-right">{d.languages.join(", ")}</span>
                    </div>
                  </div>

                  {/* Days picker */}
                  <div className="bg-orange-50/60 border border-orange-100 rounded-xl p-3">
                    <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-wide mb-2">
                      Hire for how many days?
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setDays(d.name, days - 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-orange-200 text-[#EA580C] font-bold hover:bg-orange-100 transition-colors"
                        aria-label="decrease days"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        max={60}
                        value={days}
                        onChange={(e) => setDays(d.name, e.target.value)}
                        className="flex-1 text-center bg-white border border-orange-200 rounded-lg py-1 text-sm font-bold text-stone-900 focus:outline-none focus:border-orange-400"
                      />
                      <button
                        type="button"
                        onClick={() => setDays(d.name, days + 1)}
                        className="w-8 h-8 rounded-lg bg-white border border-orange-200 text-[#EA580C] font-bold hover:bg-orange-100 transition-colors"
                        aria-label="increase days"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">
                        ₹{d.pricePerDay.toLocaleString("en-IN")} × {days}d
                      </div>
                      <div className="text-base font-extrabold text-[#EA580C]">
                        ₹{total.toLocaleString("en-IN")}
                      </div>
                    </div>
                    <button
                      onClick={() => openBooking(d)}
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
        type="driver"
        initialDays={selected ? daysMap[selected.name] || 1 : 1}
      />
    </main>
  );
};

export default Driver;
