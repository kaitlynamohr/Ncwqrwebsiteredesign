import { PageHero } from '../components/PageHero';
import { ArrowRight, Beaker, Map, Database, Users, CheckCircle, ExternalLink, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const internActivities = [
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Field Sampling',
    desc: 'Collect water samples from streams and monitoring stations across northern Ohio — the same data that feeds NOAA\'s Lake Erie HAB forecasts.',
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    title: 'Lab Analysis',
    desc: 'Run chemical analyses using professional-grade instrumentation — ICP-MS, ion chromatography, spectrophotometry, and more.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data & Analysis',
    desc: 'Work with 50+ years of environmental data — learn statistical tools, GIS, and data visualization used by federal agencies.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Agency Collaboration',
    desc: 'Join meetings and field days alongside USDA, NOAA, USGS, and Ohio EPA partners — building your professional network from day one.',
  },
];

const reasons = [
  'Real-world experience with nationally significant research',
  'Mentored by scientists with federal agency partnerships',
  'Contribute to NOAA\'s annual Lake Erie HAB forecast',
  'Access to 55+ years of unique environmental datasets',
  'Build field, lab, and data analysis skills simultaneously',
  'Flexible positions available for academic credit',
  'Strong track record of students entering top graduate programs',
  'Located at Heidelberg University — a tight-knit liberal arts environment',
];

const faqs = [
  {
    q: 'Do I need to be a Heidelberg University student?',
    a: 'Most internship positions are open to current Heidelberg students, but we occasionally host students from other institutions and REU (Research Experience for Undergraduates) participants. Contact us to inquire.',
  },
  {
    q: 'What majors are a good fit?',
    a: 'Environmental Science, Biology, Chemistry, Geology, and related STEM fields. But motivated students from any background with a passion for water and environmental issues are encouraged to reach out.',
  },
  {
    q: 'Is the internship paid?',
    a: 'Some positions are paid through grant funding; others may qualify for academic credit through your department. Terms vary by position and availability of funding. We\'ll be transparent about compensation up front.',
  },
  {
    q: 'When do internships typically start?',
    a: 'We hire for summer and academic-year positions. Summer is the most active period for field work. Contact us in the spring semester for the best opportunity.',
  },
];

export function GetInvolved() {
  return (
    <div>
      <PageHero
        title="Do Real Science. Make a Real Impact."
        subtitle="Student internships at NCWQR put you on the front lines of nationally significant water quality research — before you graduate."
        imageUrl="images/people/candice-suzie.jpg"
      />

      {/* ── HERO STATEMENT ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, #0f2942, ${BLUE})` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-12 h-12 text-blue-300 mx-auto mb-5" />
          <blockquote
            className="text-white leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic' }}
          >
            "NCWQR student interns don't just observe science — they do it. Their work collects the
            data that informs real decisions, federal programs, and NOAA forecasts that protect
            drinking water for millions of people."
          </blockquote>
          <p className="text-blue-300 mt-4 text-sm">— NCWQR Research Team</p>
        </div>
      </section>

      {/* ── WHAT INTERNS DO ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
              The Experience
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              What Interns Do at NCWQR
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Hands-on from day one. No shadowing — actual science.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internActivities.map((act, i) => (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all text-center"
                style={{ borderTop: `4px solid ${BLUE}` }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-white"
                  style={{ backgroundColor: BLUE }}
                >
                  {act.icon}
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942' }}>
                  {act.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{act.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TWO COLUMNS ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Photo */}
          <div
            className="relative min-h-72 lg:min-h-[500px]"
            style={{
              backgroundImage: `url('/images/lab/classroom-gm.JPG')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(15,41,66,0.2)' }} />
          </div>

          {/* Why NCWQR */}
          <div
            className="px-8 sm:px-12 py-16"
            style={{ backgroundColor: '#F8FAFC' }}
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: BLUE }}>
                Why NCWQR?
              </p>
              <h2 className="mb-6" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f2942' }}>
                An Experience You Won't Find Elsewhere
              </h2>
              <ul className="space-y-3">
                {reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: GREEN }} />
                    <span className="text-sm text-gray-700 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
              Common Questions
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              Internship FAQ
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-xl border border-gray-100 p-6"
              >
                <h3 className="mb-3" style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f2942' }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, ${GREEN}, #1a6b33)` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Ready to Apply?
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            To apply for a student internship at NCWQR, contact us directly or reach out through
            Heidelberg University's student employment system. We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ncwqr@heidelberg.edu?subject=Internship%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
              style={{ backgroundColor: '#fff', color: GREEN }}
            >
              Email Us to Apply <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://www.heidelberg.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
              style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.35)' }}
            >
              Heidelberg University <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
