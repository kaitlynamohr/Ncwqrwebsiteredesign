import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { MapPin, Phone, Mail, Facebook, ExternalLink, Send, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const subjects = [
  'General Inquiry',
  'Water Testing Services',
  'Research Collaboration',
  'Data Portal / HTLP Data',
  'Student Internships',
  'Media / Press',
  'Other',
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to the NCWQR team for research inquiries, water testing requests, collaboration opportunities, and more."
        imageUrl="https://images.unsplash.com/photo-1762075314727-bfa5da3c235e?w=1600&q=85"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: BLUE }}>
                  Find Us
                </p>
                <h2 className="mb-8" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f2942' }}>
                  Get in Touch
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF3FB' }}
                    >
                      <MapPin className="w-5 h-5" style={{ color: BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-0.5">Address</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Gillmor Science Hall<br />
                        Heidelberg University<br />
                        310 East Market Street<br />
                        Tiffin, OH 44883
                      </p>
                      <a
                        href="https://maps.google.com/?q=Gillmor+Science+Hall+Heidelberg+University+Tiffin+Ohio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold mt-2"
                        style={{ color: BLUE }}
                      >
                        View Campus Map <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF3FB' }}
                    >
                      <Phone className="w-5 h-5" style={{ color: BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-0.5">Phone</p>
                      <a href="tel:+14194483828" className="text-sm text-gray-600 hover:text-blue-700 transition-colors">
                        (419) 448-3828
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF3FB' }}
                    >
                      <Mail className="w-5 h-5" style={{ color: BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-0.5">Email</p>
                      <a
                        href="mailto:ncwqr@heidelberg.edu"
                        className="text-sm text-gray-600 hover:text-blue-700 transition-colors"
                      >
                        ncwqr@heidelberg.edu
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF3FB' }}
                    >
                      <Facebook className="w-5 h-5" style={{ color: BLUE }} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm mb-0.5">Social</p>
                      <a
                        href="https://www.facebook.com/NCWQR"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                      >
                        Follow us on Facebook <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick links */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: '#EBF3FB' }}
                >
                  <p className="text-sm font-semibold text-gray-700 mb-3">Quick Links</p>
                  <div className="space-y-2">
                    <a
                      href="https://www.heidelberg.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Heidelberg University
                    </a>
                    <a
                      href="https://ncwqr-data.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      HTLP Data Portal
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 lg:p-10"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: '#F0FDF4' }}
                    >
                      <CheckCircle className="w-9 h-9" style={{ color: GREEN }} />
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2942' }}>
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      Thank you for reaching out. A member of the NCWQR team will respond within 2 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="mt-6 text-sm font-semibold"
                      style={{ color: BLUE }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-8" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2942' }}>
                      Send a Message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                            style={{ focusRingColor: BLUE } as React.CSSProperties}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="jane@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:outline-none focus:ring-2"
                        >
                          <option value="">Select a subject...</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          value={form.message}
                          onChange={handleChange}
                          rows={6}
                          placeholder="Tell us how we can help..."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-800 placeholder-gray-400 resize-none focus:outline-none focus:ring-2"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm text-white transition-all"
                        style={{ backgroundColor: loading ? '#93C5FD' : BLUE }}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
          >
            <div
              className="relative h-72 flex items-center justify-center"
              style={{ backgroundColor: '#dde4ec' }}
            >
              <img
                src="https://images.unsplash.com/photo-1762075314727-bfa5da3c235e?w=1400&q=70"
                alt="Heidelberg University Campus"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 text-center">
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-white shadow-lg"
                  style={{ backgroundColor: BLUE }}
                >
                  <MapPin className="w-4 h-4" />
                  Gillmor Science Hall, Heidelberg University
                </div>
                <p className="mt-3 text-sm text-gray-700 bg-white/80 px-4 py-1.5 rounded-full">
                  Tiffin, Ohio 44883
                </p>
                <a
                  href="https://maps.google.com/?q=Gillmor+Science+Hall+Heidelberg+University+Tiffin+Ohio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold bg-white/90 px-4 py-2 rounded-full"
                  style={{ color: BLUE }}
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
