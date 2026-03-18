import { PageHero } from '../components/PageHero';
import { Users, Target, Eye, DollarSign, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const milestones = [
  {
    year: '1969',
    title: 'River Laboratory Founded',
    desc: 'Dr. David B. Baker establishes the River Laboratory at Heidelberg College, beginning what would become the world\'s longest-running continuous water quality monitoring program.',
  },
  {
    year: '1974',
    title: 'Renamed Water Quality Laboratory',
    desc: 'The program grows significantly in scope and is renamed the Water Quality Laboratory, expanding its analytical capabilities and tributary monitoring network.',
  },
  {
    year: '1990s',
    title: 'Lake Erie Data Leadership',
    desc: 'NCWQR data becomes instrumental in understanding Lake Erie\'s recovery from eutrophication and informing nutrient management strategies across the basin.',
  },
  {
    year: '2004',
    title: 'Designated National Center',
    desc: 'The U.S. House of Representatives designates the lab as the National Center for Water Quality Research — a recognition of the program\'s national significance.',
  },
  {
    year: '2010s',
    title: 'NOAA Partnership',
    desc: 'NCWQR data becomes a primary input for NOAA\'s annual harmful algal bloom outlook for Lake Erie, linking tributary phosphorus loads to bloom severity forecasts.',
  },
  {
    year: '2020s',
    title: 'Expanding National Partnerships',
    desc: 'NCWQR joins LTAR, COMPASS, and H2Ohio networks — broadening its footprint from regional water quality monitoring to national agro-ecosystem and coastal research.',
  },
];

const team = [
  { role: 'Director / Principal Investigator', name: 'Remegio Confessor', dept: 'Research & Administration' },
  { role: 'Coordinator and Field Investigator', name: 'Jakob Boehler', dept: 'Research & Administration' },
  { role: 'Research Scientist', name: 'Nate Manning', dept: 'Research & Administration' },
  { role: 'Field and Laboratory Technician', name: 'Emily Clark', dept: 'Field Operations' },
  { role: 'Postdoctoral Research Associate', name: 'Colleen Cosgrove', dept: 'Field Operations' },
  { role: 'Laboratory Technician', name: 'Madison Rice', dept: 'Field Operations' },
  { role: 'Business Manager & Private Well Testing Coordinator', name: 'Nancy Miller', dept: 'Data & Technology' },
];

const funders = [
  'U.S. Department of Agriculture (USDA)',
  'National Oceanic and Atmospheric Administration (NOAA)',
  'U.S. Geological Survey (USGS)',
  'Ohio Department of Natural Resources (ODNR)',
  'Ohio Environmental Protection Agency (Ohio EPA)',
  'National Science Foundation (NSF)',
  'Private Foundations & Industry Partners',
  'Monitoring Contracts & Analytical Services',
];

export function About() {
  return (
    <div>
      <PageHero
        title="About NCWQR"
        subtitle="From a university river lab to a nationally designated research center — 55 years of advancing water science."
        imageUrl="images/lab/gm-winter.JPG"
      />

      {/* ── MISSION & VISION ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-10"
              style={{ backgroundColor: '#EBF3FB', border: `2px solid ${BLUE}` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: BLUE }}>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942' }}>Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                Generate knowledge about the dynamics of water and soil resources in order to improve water quality and availability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl p-10"
              style={{ backgroundColor: '#F0FDF4', border: `2px solid ${GREEN}` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: GREEN }}>
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f2942' }}>Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                A world where scientific research informs the sustainable use of water and soils thereby preserving these resources for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HISTORY TIMELINE ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
              Our History
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              55 Years of Water Science
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 hidden sm:block"
              style={{ backgroundColor: '#D1E4F5' }}
            />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex gap-6 sm:pl-20"
                >
                  {/* Year bubble */}
                  <div
                    className="absolute left-0 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold text-center hidden sm:flex"
                    style={{ backgroundColor: BLUE }}
                  >
                    {m.year}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <div
                      className="inline-block text-xs font-bold px-2 py-0.5 rounded mb-3 sm:hidden"
                      style={{ backgroundColor: BLUE, color: '#fff' }}
                    >
                      {m.year}
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f2942' }}>
                      {m.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-7 h-7" style={{ color: BLUE }} />
              <p className="uppercase tracking-widest text-sm font-semibold" style={{ color: BLUE }}>
                The Team
              </p>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              7 Scientists & Technicians + Student Interns
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              A multidisciplinary team of researchers, lab technicians, and field scientists — backed by
              110+ combined man-years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {team.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-all"
              >
                <div
                  className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-3"
                  style={{ backgroundColor: '#EBF3FB' }}
                >
                  <Users className="w-6 h-6" style={{ color: BLUE }} />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: BLUE }}>
                  {person.dept}
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{person.role}</h4>
                <p className="text-xs text-gray-400">{person.name}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/staff-directory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all"
              style={{ backgroundColor: BLUE }}
            >
              View Full Staff Directory <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FUNDING ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start gap-6 mb-10">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: BLUE }}
            >
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="mb-2" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f2942' }}>
                Funding Transparency
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All NCWQR activities are supported entirely by extramural funds. We receive no direct
                subsidy from Heidelberg University's operating budget. Our research is funded through:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {funders.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-lg px-5 py-3.5 border border-gray-100"
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BLUE }} />
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>

          <div
            className="mt-8 rounded-xl p-6 flex items-start gap-4"
            style={{ backgroundColor: '#EBF3FB' }}
          >
            <Award className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
            <p className="text-sm text-gray-700 leading-relaxed">
              This funding model ensures scientific independence and accountability. Our results are
              driven by the data, not by any single funding source's interests.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: `linear-gradient(135deg, #0f2942, ${BLUE})` }}
      >
        <h2 className="text-white mb-4" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
          Interested in Collaborating?
        </h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          We welcome partnerships with universities, federal agencies, and private organizations
          focused on water quality science and sustainable watershed management.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
          style={{ backgroundColor: '#fff', color: BLUE }}
        >
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
