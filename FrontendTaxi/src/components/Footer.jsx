import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Taxi", path: "/vehicles" },
  { name: "Driver", path: "/driver" },
  { name: "Contact", path: "/contact" },
];

const supportLinks = [
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
];

const socials = [
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const trustBadges = [
  {
    title: "Verified Drivers",
    sub: "100% background-checked",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "24/7 Live Support",
    sub: "Always here to help",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m-3.536-3.536a4 4 0 010-5.656M8.464 8.464a4 4 0 010 5.656M5.636 5.636a9 9 0 000 12.728" />
      </svg>
    ),
  },
  {
    title: "Secure Payments",
    sub: "UPI · Cards · Wallets",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-stone-950 text-stone-300 overflow-hidden">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #EA580C, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #f97316, transparent 70%)" }}
      />

      {/* Trust strip */}
      <div className="relative border-b border-stone-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {trustBadges.map((b) => (
            <div key={b.title} className="flex items-center gap-3">
              <span className="w-10 h-10 shrink-0 rounded-xl bg-orange-500/10 text-[#EA580C] flex items-center justify-center">
                {b.icon}
              </span>
              <div className="min-w-0">
                <div className="text-white text-sm font-bold truncate">{b.title}</div>
                <div className="text-stone-500 text-xs truncate">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link to="/" className="inline-block group">
              <img
                src="/logo.png"
                alt="Prajapati Travel"
                className="h-20 sm:h-24 w-auto object-contain bg-white rounded-xl px-3 py-1 group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mt-5 max-w-md">
              India&apos;s premium cab booking platform. Safe, reliable, and affordable rides across 20+ cities — available 24/7.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-[#EA580C] hover:text-[#EA580C] hover:bg-orange-500/10 text-stone-400 flex items-center justify-center transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-5 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#EA580C]" />
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-stone-400 hover:text-[#EA580C] hover:translate-x-0.5 transition-all group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-[#EA580C] mr-2.5 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-5 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#EA580C]" />
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-stone-400 hover:text-[#EA580C] hover:translate-x-0.5 transition-all group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-[#EA580C] mr-2.5 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-12 lg:col-span-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.18em] mb-5 inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#EA580C]" />
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:kumarsaurabh1484@gmail.com" className="flex items-start gap-3 text-stone-400 hover:text-[#EA580C] transition-colors group">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-stone-900 border border-stone-800 group-hover:border-[#EA580C] flex items-center justify-center text-[#EA580C] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wide">Email</div>
                    <div className="font-semibold truncate">kumarsaurabh1484@gmail.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918445521634" className="flex items-start gap-3 text-stone-400 hover:text-[#EA580C] transition-colors group">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-stone-900 border border-stone-800 group-hover:border-[#EA580C] flex items-center justify-center text-[#EA580C] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-2.26 1.13a11 11 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wide">Phone</div>
                    <div className="font-semibold">+91 8445521634 </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-stone-400">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-[#EA580C]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] text-stone-500 uppercase tracking-wide">Head Office</div>
                    <div className="font-semibold">Mansrovar colony, Gajraula, Amroha</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Prajapati Travel India Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
            <span className="hidden sm:inline text-stone-700">|</span>
            <span className="inline-flex items-center gap-1.5">
              Made with <span className="text-rose-500">&hearts;</span> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
