import { useEffect, useState } from "react";
import Api from "../api/Api";

const BookingModal = ({ open, onClose, item, type = "taxi", initialDays = 1 }) => {
  const [form, setForm] = useState({ name: "", mobile: "", from: "", to: "", days: initialDays });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({ name: "", mobile: "", from: "", to: "", days: initialDays || 1 });
      setSubmitted(false);
    }
  }, [open, initialDays]);

  if (!open) return null;

  const pricePerDay = item?.pricePerDay || 0;
  const days = Number(form.days) || 1;
  const total = pricePerDay * days;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const bookingData = {
        name: form.name,
        mobile: form.mobile,
        from: form.from,
        to: form.to,
        days: Number(form.days),
      };
      
      // Add taxiId or driverId based on type
      if (type === "driver") {
        bookingData.driverId = item?._id || item?.id;
      } else {
        bookingData.taxiId = item?._id || item?.id;
      }
      
      // Use different endpoint based on type
      const endpoint = type === "driver" ? "/driver-book" : "/taxi-book";
      
      console.log(`${type} Booking Data:`, bookingData);
      const response = await Api.post(endpoint, bookingData);
      console.log(`${type} Booking API Response:`, response.data);
      
      if (response.data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg mx-4 my-8 overflow-hidden">
        {/* Header */}
        <div className="px-7 pt-6 pb-5 border-b border-gray-100 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {item?.image ? (
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-2xl object-cover border border-orange-100 shrink-0 bg-orange-50"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400";
                }}
              />
            ) : (
              <div
                className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center text-white font-extrabold text-lg"
                style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
              >
                {(item?.name || "?").charAt(0).toUpperCase()}
              </div>
            )}
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#EA580C]">
                Book {type === "driver" ? "Driver" : "Taxi"}
              </p>
              <h3 className="text-lg font-extrabold text-stone-900 truncate">{item?.name || "Booking"}</h3>
              {pricePerDay > 0 && (
                <p className="text-xs text-gray-500">₹{pricePerDay.toLocaleString("en-IN")} / day</p>
              )}
            </div>
          </div>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center px-8 py-12">
            <div className="w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-5">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-extrabold text-stone-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-500 text-sm mb-1">
              <span className="font-semibold text-gray-700">{form.name}</span>, your booking for{" "}
              <span className="font-semibold text-gray-700">{item?.name}</span> is received.
            </p>
            <p className="text-gray-500 text-sm mb-1">
              {form.from} → {form.to} · {days} day{days > 1 ? "s" : ""}
            </p>
            {pricePerDay > 0 && (
              <p className="text-gray-500 text-sm mb-6">
                Estimated total: <span className="font-extrabold text-[#EA580C]">₹{total.toLocaleString("en-IN")}</span>
              </p>
            )}
            <p className="text-gray-400 text-xs mb-6">We'll call you on {form.mobile} shortly to confirm.</p>
            <button
              onClick={onClose}
              className="px-7 py-3 rounded-2xl text-white font-bold text-sm"
              style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">Mobile No *</label>
                <input
                  name="mobile"
                  type="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9+\\-\\s]{7,15}"
                  placeholder="+91 9540980478"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">From *</label>
                <input
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  required
                  placeholder="Pickup location"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 mb-1.5">To *</label>
                <input
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  required
                  placeholder="Drop location"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1.5">Number of Days *</label>
              <input
                name="days"
                type="number"
                min={1}
                max={60}
                value={form.days}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
              />
            </div>

            {pricePerDay > 0 && (
              <div className="bg-orange-50 border border-orange-100 rounded-xl px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-semibold text-stone-600">
                  ₹{pricePerDay.toLocaleString("en-IN")} × {days} day{days > 1 ? "s" : ""}
                </span>
                <span className="text-base font-extrabold text-[#EA580C]">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-2xl text-white font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
              >
                {loading ? "Booking..." : "Confirm Booking →"}
              </button>
              <p className="text-center text-[11px] text-gray-400 mt-2.5">
                By booking, you agree to Prajapati Travel's terms & conditions.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
