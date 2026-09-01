import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Api from "../api/Api";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    title: "Your trusted travel partner",
    subtitle: "Prajapati Travel — safe, reliable & affordable cab service across 20+ Indian cities. Verified drivers, fixed fares, available 24/7.",
    image: "/t.png",
    stats: [
      { value: "50K+", label: "Happy Riders" },
      { value: "1,200+", label: "Pro Drivers" },
      { value: "20+", label: "Cities" },
      { value: "4.8★", label: "App Rating" },
    ]
  });
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const response = await Api.get("/hero");
        console.log("Hero API Response:", response.data);
        if (response.data.success && response.data.hero) {
          const { title, subtitle, image, stats } = response.data.hero;
          // Backend serves uploads at /uploads route (not /api/uploads)
          const imageUrl = image 
            ? `${Api.defaults.baseURL.replace('/api', '')}/uploads/${image}` 
            : "/t.png";
          console.log("Image URL:", imageUrl);
          setHeroData({
            title: title || "Your trusted travel partner",
            subtitle: subtitle || "Prajapati Travel — safe, reliable & affordable cab service across 20+ Indian cities. Verified drivers, fixed fares, available 24/7.",
            image: imageUrl,
            stats: stats && stats.length > 0 ? stats : [
              { value: "50K+", label: "Happy Riders" },
              { value: "1,200+", label: "Pro Drivers" },
              { value: "20+", label: "Cities" },
              { value: "4.8★", label: "App Rating" },
            ]
          });
        }
      } catch (error) {
        console.error("Error fetching hero data:", error);
        // Keep default values on error
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="relative h-auto sm:h-[92vh] sm:min-h-[680px] sm:max-h-[900px] flex items-center overflow-hidden">
      
      <img
        src={heroData.image}
        alt="Prajapati Travel taxi"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={(e) => {
          console.error("Image failed to load:", heroData.image);
          e.target.src = "/t.png"; // Fallback to default image
        }}
      />

      
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10 sm:pt-24 sm:pb-12">
        <div className="max-w-2xl">

         
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
              Live in 20+ cities
            </span>
          </div>

         
          <div className="flex items-center gap-2.5 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
              <svg className="w-4 h-4 text-amber-400/50" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <span className="text-white/90 font-semibold text-sm">4.8</span>
            <span className="text-white/50 text-xs">· 12,400+ reviews</span>
          </div>

          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight mb-4">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              <>
                {heroData.title.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="relative inline-block">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(90deg,#EA580C,#f97316,#fb923c)" }}
                  >
                    {heroData.title.split(" ").slice(-2).join(" ")}
                  </span>
                </span>
              </>
            )}
          </h1>

         
          <p className="text-white text-base sm:text-lg leading-relaxed mb-7 max-w-lg drop-shadow-md">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              heroData.subtitle
            )}
          </p>

         
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <Link
              to="/vehicles"
              className="group inline-flex items-center gap-2 bg-[#EA580C] hover:bg-orange-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-orange-900/40 hover:shadow-orange-500/50 hover:-translate-y-0.5"
            >
              Book a Ride
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/driver"
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md hover:bg-white/15 text-white font-bold text-sm px-6 py-3 rounded-full border border-white/30 hover:border-white/60 transition-all duration-200"
            >
              Driver
            </Link>
          </div>

          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t border-white/15 max-w-lg">
            {heroData.stats.map((stat, index) => (
              <div key={stat.label || index}>
                <p className="text-xl sm:text-2xl font-extrabold text-white leading-none">{stat.value}</p>
                <p className="text-white/55 text-[11px] mt-1 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
