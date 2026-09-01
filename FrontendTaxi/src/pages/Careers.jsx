import { useState } from "react";
import { Link } from "react-router-dom";

const openings = [
  {
    id: 1,
    title: "Senior React Developer",
    department: "Engineering",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "3–5 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "City Operations Manager",
    department: "Operations",
    location: "Delhi, NCR",
    type: "Full-time",
    experience: "2–4 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customer Support Lead",
    department: "Support",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    experience: "1–3 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Mumbai, Maharashtra",
    type: "Full-time",
    experience: "2–5 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2–4 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Driver Partner Onboarding Exec",
    department: "Operations",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "1–2 years",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const perks = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pay",
    desc: "Market-leading salaries with performance bonuses and ESOPs for senior roles.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Health & Wellness",
    desc: "Full medical insurance for you and your family. Mental health support included.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Flexible Work",
    desc: "Hybrid & remote-first roles. Flexible hours so you can do your best work.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Learning Budget",
    desc: "₹50,000/year for courses, conferences, and books. We invest in your growth.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Free Rides",
    desc: "Unlimited Prajapati Travel credits for you. Travel to work stress-free, on us.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Great Team",
    desc: "Work alongside talented people who care deeply about what they build.",
  },
];

const departments = ["All", "Engineering", "Operations", "Marketing", "Design", "Support"];

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeFilter === "All"
    ? openings
    : openings.filter((j) => j.department === activeFilter);

  const openModal = (job) => {
    setSelectedJob(job);
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const closeModal = () => setSelectedJob(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FFFBF7]">
      {/* Hero */}
      <section className="relative pt-36 pb-32 sm:pt-44 sm:pb-44 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&auto=format&fit=crop&q=90')",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.60) 100%)" }}
        />
        {/* Curved bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-[#FFFBF7]"
          style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }}
        />

        <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-black/30 border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
            We're Hiring
          </span>
          <h1
            className="text-5xl sm:text-6xl font-extrabold text-white mb-6"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}
          >
            Build the future of{" "}
            <span style={{ color: "#f97316", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
              urban mobility
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl text-white/90 max-w-2xl"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            Join a passionate team building India's most reliable ride-hailing platform. Shape the way millions move.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="px-8 py-3 rounded-xl font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
            >
              View Open Roles
            </a>
            <Link
              to="/about"
              className="px-8 py-3 rounded-xl font-bold text-white text-sm bg-white/20 border border-white/30 hover:bg-white/30 transition"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#FFFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Team Members" },
              { value: "12", label: "Cities" },
              { value: "4.8★", label: "Glassdoor Rating" },
              { value: "2020", label: "Founded" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-orange-100 rounded-2xl shadow-sm px-6 py-6">
                <div className="text-3xl font-extrabold text-[#EA580C]">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-[#FEF3E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Why Prajapati Travel
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Perks that actually <span className="text-[#EA580C]">matter</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              We take care of our people so they can do their best work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6 flex gap-4 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-[#EA580C]">
                  {p.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-[#FFFBF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Find your <span className="text-[#EA580C]">perfect role</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              We're growing fast across engineering, operations, marketing, and more.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {departments.map((dep) => (
              <button
                key={dep}
                onClick={() => setActiveFilter(dep)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                  activeFilter === dep
                    ? "bg-[#EA580C] text-white border-[#EA580C]"
                    : "bg-white text-gray-600 border-orange-100 hover:border-orange-300"
                }`}
              >
                {dep}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="flex flex-col gap-4">
            {filtered.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-orange-100 rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-orange-300 transition group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white transition">
                  {job.icon}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg">{job.title}</div>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.experience}
                    </span>
                    <span className="text-xs bg-orange-50 text-[#EA580C] border border-orange-100 px-2 py-0.5 rounded-lg font-medium">
                      {job.department}
                    </span>
                    <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-lg font-medium">
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => openModal(job)}
                  className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition"
                  style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                >
                  Apply Now
                </button>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-16 text-gray-400 text-sm">
                No openings in this department right now. Check back soon!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#FEF3E8]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Don't see your role?{" "}
            <span className="text-[#EA580C]">Write to us.</span>
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            We're always on the lookout for exceptional talent. Send us your resume and we'll keep it on file for future openings.
          </p>
          <a
            href="mailto:kumarsurabh1484@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm"
            style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Your Resume
          </a>
        </div>
      </section>
      {/* Apply Modal */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-4 overflow-y-auto"
          style={{ background: "rgba(0,0,0,0.55)" }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-orange-100">
              <div>
                <div className="font-extrabold text-gray-900 text-lg">{selectedJob.title}</div>
                <div className="text-xs text-gray-400 mt-0.5">{selectedJob.department} · {selectedJob.location}</div>
              </div>
              <button
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-orange-50 hover:bg-orange-100 text-gray-500 hover:text-[#EA580C] transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-2">Application Sent!</h3>
                  <p className="text-gray-500 text-sm mb-6">Thanks for applying to <strong>{selectedJob.title}</strong>. We'll review your application and get back to you within 5–7 business days.</p>
                  <button
                    onClick={closeModal}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Saurabh Prajapati"
                      className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="saurabh@email.com"
                      className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9540980478"
                      className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">Why do you want to join? <span className="text-red-400">*</span></label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about yourself, your experience, and why you're excited about this role..."
                      className="w-full border border-orange-100 rounded-xl px-4 py-2.5 text-sm text-gray-900 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-orange-100 transition resize-none"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition"
                      style={{ background: "linear-gradient(135deg,#EA580C,#f97316)" }}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
