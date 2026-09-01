
const AppDownloadSection = () => {
  return (
    <section className="bg-[#FFFBF7] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#EA580C]/5 via-orange-50 to-amber-50 border border-orange-100 rounded-3xl p-8 sm:p-12 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/50 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-[#EA580C] text-sm font-bold uppercase tracking-widest mb-4">
                Download the App
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-6">
                Book rides on the go
              </h2>
              <p className="text-stone-500 text-lg mb-8">
                Download the Prajapati Travel app and get your first ride free! Available on 
                Android and iOS. Book, track, and pay — all from your phone.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-2xl px-5 py-3 transition-all"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.23.06 2.06.68 2.78.68.74 0 2.07-.84 3.51-.71 1.41.13 2.45.88 2.87 1.95-2.57 1.47-2.16 4.87.11 5.98-.56 1.42-1.3 2.81-2.27 3.98M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <p className="text-stone-400 text-xs">Download on the</p>
                    <p className="text-white font-bold text-sm">App Store</p>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-stone-900 hover:bg-stone-800 border border-stone-700 rounded-2xl px-5 py-3 transition-all"
                >
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76a2 2 0 01-.68-.63 2 2 0 01-.31-1.08V2.06a2 2 0 01.3-1.08 2 2 0 01.69-.62L13.4 12.01 3.18 23.76zm9.83-9.07l2.43-2.43L5.2.98a2.25 2.25 0 00-1.23-.35l9.04 14.06zm4.13-1.13L13.97 12l3.17-3.16 1.74 1a1.34 1.34 0 010 2.32l-1.74 1zm-5.72 5.75l-9.04 3.33a2.25 2.25 0 001.06-.2l14.24-8.21-2.43-2.43-3.83 7.51z"/>
                  </svg>
                  <div>
                    <p className="text-stone-400 text-xs">Get it on</p>
                    <p className="text-white font-bold text-sm">Google Play</p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {["PS", "AM", "SR", "RG"].map((av, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                      style={{ background: ["linear-gradient(135deg,#ec4899,#f43f5e)", "linear-gradient(135deg,#3b82f6,#6366f1)", "linear-gradient(135deg,#22c55e,#10b981)", "linear-gradient(135deg,#f59e0b,#ea580c)"][i] }}
                    >
                      {av}
                    </div>
                  ))}
                </div>
                <p className="text-stone-500 text-sm">
                  <span className="text-stone-900 font-bold">50,000+</span> happy riders
                </p>
              </div>
            </div>

            {/* Taxi Image instead of phone mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-orange-200/40 rounded-3xl blur-3xl scale-90" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/15 border border-orange-100 group cursor-pointer">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661380236937-c93494cb7f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VGF4aXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Prajapati Travel cab"
                    className="w-full h-80 object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#EA580C] rounded-full flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-stone-900 font-bold text-sm">Ride booked!</p>
                        <p className="text-stone-500 text-xs">Driver arriving in 4 mins</p>
                      </div>
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
