import { PageHero } from '../components/PageHero';
import { Droplets, Activity, Microscope, ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Surface Water Testing',
    color: BLUE,
    desc: 'Comprehensive chemical analysis of streams, rivers, lakes, and drainage channels. Our analytical suite covers nutrients (phosphorus, nitrogen), suspended sediments, metals, pesticides, and emerging contaminants.',
    parameters: [
      'Total & Dissolved Phosphorus',
      'Nitrate & Total Nitrogen',
      'Total Suspended Solids',
      'Chlorophyll-a',
      'Dissolved Oxygen & pH',
      'Heavy Metals (trace)',
      'Pesticides & Herbicides',
      'Biochemical Oxygen Demand',
    ],
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Well Water Testing',
    color: '#0B6623',
    desc: 'Protect your family\'s health with certified analysis of private well water. We test for common contaminants and provide clear, actionable results for property owners and municipalities.',
    parameters: [
      'Nitrate & Nitrite (health standard)',
      'Coliform Bacteria (total & E. coli)',
      'pH, Hardness, Alkalinity',
      'Iron, Manganese, Chloride',
      'Lead & Arsenic',
      'Volatile Organic Compounds',
      'Radon (referral)',
      'Full EPA-standard battery',
    ],
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Biological & Habitat Studies',
    color: '#6B4C2A',
    desc: 'Beyond chemistry — we assess the biological health of streams through macroinvertebrate and habitat surveys, providing an integrated picture of aquatic ecosystem condition.',
    parameters: [
      'Macroinvertebrate Surveys',
      'Stream Habitat Assessment',
      'Biological Index Scoring (IBI)',
      'Periphyton / Algae Analysis',
      'Fish Community Surveys (referral)',
      'Riparian Corridor Assessment',
      'Rapid Bioassessment Protocols',
      'QHEI (Qualitative Habitat Eval.)',
    ],
  },
];

const trustItems = [
  { icon: <Shield className="w-5 h-5" />, text: 'EPA-approved analytical methods' },
  { icon: <Award className="w-5 h-5" />, text: 'State-certified laboratory' },
  { icon: <CheckCircle className="w-5 h-5" />, text: '110+ combined staff man-years' },
  { icon: <CheckCircle className="w-5 h-5" />, text: 'Rigorous QA/QC protocols' },
  { icon: <Shield className="w-5 h-5" />, text: 'Suitable for research & regulatory use' },
  { icon: <Award className="w-5 h-5" />, text: 'Results defensible in court' },
];

export function WaterTesting() {
  return (
    <div>
      <PageHero
        title="Water Testing Services"
        subtitle="State-of-the-art analytical laboratory services since 1969 — nearly 200,000 samples processed with rigor and precision."
        imageUrl="images/lab/sample-stations.jpg"
      />

      {/* ── INTRO ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
                Our Laboratory
              </p>
              <h2 className="mb-5" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
                Trusted Analytical Services
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                The NCWQR analytical laboratory has been operating since 1969, when Dr. David Baker
                first began testing Sandusky River water. What began as a university research tool is
                today a state-of-the-art facility that has processed nearly <strong>200,000 water samples</strong> for
                research, regulatory, and community clients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our staff brings over <strong>110 combined man-years</strong> of laboratory experience. We use
                EPA-approved methods and maintain strict quality assurance protocols — producing
                results suitable for research publications, regulatory submissions, and legal proceedings.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '~200K', lbl: 'Samples Analyzed' },
                  { val: '55+', lbl: 'Years Operating' },
                  { val: '110+', lbl: 'Man-Years Experience' },
                  { val: 'EPA', lbl: 'Approved Methods' },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="text-center rounded-xl py-4 px-3"
                    style={{ backgroundColor: '#EBF3FB' }}
                  >
                    <div className="font-bold text-xl" style={{ color: BLUE }}>{s.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.lbl}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8"
              style={{ backgroundColor: '#F8FAFC', border: `1px solid #E5E7EB` }}
            >
              <h3 className="mb-6" style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f2942' }}>
                Why Choose NCWQR?
              </h3>
              <div className="space-y-4">
                {trustItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBF3FB', color: BLUE }}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 p-5 rounded-xl"
                style={{ backgroundColor: '#EBF3FB' }}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong style={{ color: BLUE }}>Need testing for a legal or regulatory purpose?</strong>{' '}
                  Our documented chain-of-custody procedures and EPA-certified methods make our results
                  defensible in regulatory proceedings and legal settings.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
              Services
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              Three Testing Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div
                  className="p-8"
                  style={{ borderTop: `4px solid ${service.color}` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f2942' }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: service.color }}>
                      Parameters Tested
                    </p>
                    <ul className="space-y-1.5">
                      {service.parameters.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: service.color }}
                  >
                    Request Testing <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, #0f2942, ${BLUE})` }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
            Ready to Submit a Sample?
          </h2>
          <p className="text-blue-200 mb-8">
            Contact our laboratory team to discuss your testing needs, turnaround time requirements,
            and pricing. We work with municipalities, landowners, researchers, and industry clients.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all"
            style={{ backgroundColor: '#fff', color: BLUE }}
          >
            Contact the Lab <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
