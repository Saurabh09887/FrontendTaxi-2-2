import { useEffect, useState } from "react";
import Api from "../api/Api";
import contact from "../assets/contact.jpg";
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [contactInfoData, setContactInfoData] = useState(null);
  const [faqItems, setFaqItems] = useState([]);

  const fallbackFaqs = [
    {
      q: "How do I book a ride?",
      a: "Download the Prajapati Travel app, enter your pickup and drop location, choose your cab type, and confirm. Your driver will arrive in minutes.",
    },
    {
      q: "What payment methods are accepted?",
      a: "We accept Cash, UPI (PhonePe, GPay, Paytm), Debit/Credit Cards, and SwiftWallet for a seamless experience.",
    },
    {
      q: "Can I pre-book a ride for tomorrow?",
      a: "Yes! You can pre-book rides up to 7 days in advance. Ideal for airport transfers, hospital visits, or important meetings.",
    },
    {
      q: "Is Prajapati Travel safe for women?",
      a: "Absolutely. All our drivers are background-verified. We have a Women's Safety+ service with SOS button, live trip sharing, and a 24/7 safety helpline.",
    },
  ];

  useEffect(() => {
    const loadPageData = async () => {
      try {
        const [contactInfoResponse, faqResponse] = await Promise.allSettled([
          Api.get("/contact-info"),
          Api.get("/faq"),
        ]);

        if (contactInfoResponse.status === "fulfilled") {
          setContactInfoData(contactInfoResponse.value.data);
        } else {
          setContactInfoData(null);
        }

        if (faqResponse.status === "fulfilled") {
          const faqData = Array.isArray(faqResponse.value.data)
            ? faqResponse.value.data
            : Array.isArray(faqResponse.value.data?.faqs)
            ? faqResponse.value.data.faqs
            : [];

          setFaqItems(
            faqData.map((item) => ({
              q: item.question || item.q || "",
              a: item.answer || item.a || "",
            }))
          );
        } else {
          setFaqItems([]);
        }
      } catch {
        setContactInfoData(null);
        setFaqItems([]);
      }
    };

    loadPageData();
  }, []);

  const heroTitle = heroData?.title || "We're here to help";
  const heroSubtitle =
    heroData?.subtitle ||
    "Have a question, feedback, or need support? Our team is ready to assist you with anything you need.";
  const heroImage =
    heroData?.image ||
    heroData?.imageUrl ||
    contact;

  const phoneInfo = contactInfoData?.phone;
  const emailInfo = contactInfoData?.email;
  const headquartersInfo = contactInfoData?.headquarters;
  const supportInfo = contactInfoData?.support;
  const socialLinks = contactInfoData?.social;

  const contactInfo = [
    {
      key: "phone",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: phoneInfo
        ? `${phoneInfo.primary}${phoneInfo.secondary ? ` / ${phoneInfo.secondary}` : ""}`
        : "+91 8445521634",
      sub: phoneInfo?.hours || "Mon-Sat, 9am-8pm IST",
    },
    {
      key: "email",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: emailInfo?.address || "kumarsaurabh1484@gmail.com",
      sub: emailInfo?.responseTime || "We reply within 24 hours",
    },
    {
      key: "headquarters",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Headquarters",
      value: headquartersInfo?.name || "Prajapati Travel India Pvt Ltd",
      sub: headquartersInfo?.address || "Mansrovar colony,Gajraula,Amroha"
    },
    {
      key: "support",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: "Support",
      value: supportInfo?.title || "24/7 In-app Support",
      sub: supportInfo?.description || "Use the SOS button in the app for emergencies",
    },
  ];

  const socials = [
    {
      key: "twitter",
      href: socialLinks?.twitter || "#",
      label: "Twitter",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.735-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      key: "instagram",
      href: socialLinks?.instagram || "#",
      label: "Instagram",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
    },
    {
      key: "linkedin",
      href: socialLinks?.linkedin || "#",
      label: "LinkedIn",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      key: "facebook",
      href: socialLinks?.facebook || "#",
      label: "Facebook",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await Api.post("/contact", form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <main className="bg-[#FFFBF7] min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-32 sm:pt-44 sm:pb-44 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover"
          style={{ backgroundImage: `url('${heroImage}')`, backgroundPosition: "center 30%" }}
        />
        {/* Curved white bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#FEF3E8]" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
        <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 bg-black/30 border border-white/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block" />
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-4xl font-extrabold text-white mb-6" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
            {heroTitle}
          </h1>
          <p className="text-white text-sm max-w-xl mx-auto" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}>
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 bg-[#FEF3E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 bg-white border border-orange-100 rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-12 h-12 bg-orange-50 border border-orange-200 rounded-xl flex items-center justify-center text-[#EA580C] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-1">{item.label}</p>
                    <p className="text-stone-900 font-semibold text-sm">{item.value}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm">
                <p className="text-stone-500 text-xs font-bold uppercase tracking-wide mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.key}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-orange-50 hover:bg-[#EA580C] border border-orange-200 hover:border-[#EA580C] rounded-xl flex items-center justify-center text-[#EA580C] hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-orange-100 rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-stone-900 font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-stone-500 text-sm mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#EA580C] font-bold hover:text-orange-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-stone-900 font-bold text-xl mb-6">Send us a message</h2>
                    {error && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                      </p>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-600 text-sm font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Saurabh Prajapati"
                    className="w-full bg-orange-50/60 border border-orange-200 text-stone-900 placeholder-stone-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-orange-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 text-sm font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 8445521634"
                        className="w-full bg-orange-50/60 border border-orange-200 text-stone-900 placeholder-stone-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-orange-50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-stone-600 text-sm font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="saurabh@example.com"
                        className="w-full bg-orange-50/60 border border-orange-200 text-stone-900 placeholder-stone-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-orange-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-600 text-sm font-semibold mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-orange-50/60 border border-orange-200 text-stone-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-orange-50 transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Support</option>
                        <option value="driver">Driver Issue</option>
                        <option value="payment">Payment Problem</option>
                        <option value="corporate">Corporate Enquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-stone-600 text-sm font-semibold mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full bg-orange-50/60 border border-orange-200 text-stone-900 placeholder-stone-400 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#EA580C] focus:bg-orange-50 transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#EA580C] hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FEF3E8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-stone-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {(faqItems.length ? faqItems : fallbackFaqs).map((faq) => (
              <details key={faq.q} className="group bg-white border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
                  <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-stone-900 font-semibold text-sm list-none">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-stone-600 text-sm leading-relaxed border-t border-orange-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
