import { useState, useEffect } from "react";
import Api from "../api/Api";


const Card = ({ t }) => {
  const imgName = t.img || t.image;
  
  let imgSrc = null;
  if (typeof imgName === "string" && imgName.trim() !== "") {
    if (imgName.startsWith("http")) {
      imgSrc = imgName;
    } else {
      // Clean the path: remove leading slashes and redundant 'uploads/' if present
      const cleanPath = imgName.replace(/^\/+/, "").replace(/^uploads\/+/, "");
      imgSrc = `${Api.defaults.baseURL.replace("/api", "")}/uploads/${cleanPath}`;
    }
  }

  return (
    <div className="shrink-0 w-72 sm:w-80 bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-orange-200 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-orange-100 shrink-0 relative bg-stone-100">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={t.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                console.log("Image failed to load:", imgSrc);
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget.nextSibling;
                if (fallback) fallback.style.display = "flex";
              }}
            />
          )}
          <div
            className={`${!imgSrc ? "flex" : "hidden"} w-full h-full items-center justify-center text-white text-sm font-bold`}
            style={{ background: t.bg || "linear-gradient(135deg, #EA580C, #f97316)" }}
          >
            {t.name ? t.name.charAt(0) : "T"}
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-stone-900 font-bold text-sm truncate">{t.name}</p>
          <p className="text-stone-400 text-xs truncate">{t.city}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-3 h-3 ${i < t.rating ? "text-amber-400" : "text-stone-200"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
        &ldquo;{t.text}&rdquo;
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [paused, setPaused] = useState(false);
  const [testimonials, setTestimonials] = useState([]);


  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { data } = await Api.get("/testimonial");
        console.log("Testimonials API Response:", data);

        if (data.success) {
          // Check testimonials, data, or testimonial fields
          const list = data.testimonials || data.data || (data.testimonial ? [data.testimonial] : []);
          setTestimonials(list);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  const loop = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#FEF3E8] pt-10 sm:pt-14 lg:pt-16 pb-4 sm:pb-6 overflow-hidden">
      <style>{`
        @keyframes st-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .st-track { animation: st-marquee 40s linear infinite; }
        .st-track.paused { animation-play-state: paused; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-white ring-1 ring-orange-100 text-[#EA580C] text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] px-3 sm:px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-[1.1] tracking-tight">
            Loved by riders <span className="text-[#EA580C]">across India</span>
          </h2>
          <p className="text-stone-500 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto px-2">
            Don&apos;t just take our word for it — here&apos;s what our riders say about Prajapati Travel.
            <span className="hidden sm:inline"> Tap any card to pause.</span>
          </p>
        </div>
      </div>

      <div
        className="relative group cursor-pointer"
        onClick={() => setPaused((p) => !p)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setPaused((p) => !p);
          }
        }}
        aria-label={paused ? "Resume testimonials" : "Pause testimonials"}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 z-10"
          style={{ background: "linear-gradient(to right, #FEF3E8, transparent)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 z-10"
          style={{ background: "linear-gradient(to left, #FEF3E8, transparent)" }}
        />

        {paused && (
          <span className="absolute top-2 left-1/2 -translate-x-1/2 z-20 bg-stone-900/85 text-white text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
            Paused — tap to resume
          </span>
        )}

        <div className={`flex gap-4 sm:gap-5 w-max st-track ${paused ? "paused" : ""}`}>
          {loop.map((t, i) => (
            <Card key={`${t._id || t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;







