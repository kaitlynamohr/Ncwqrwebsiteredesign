import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { ExternalLink, Download, ChevronDown, ChevronUp, Database, Map, BookOpen, HelpCircle, Activity } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const resources = [
  { title: 'Station Metadata Spreadsheet', type: 'XLSX', desc: 'Complete metadata for all 18 HTLP monitoring stations.', href: '/documents/sampling-station-metadata.xlsx' },
  { title: '2022 Ohio EPA Project Study Plan', type: 'PDF', desc: 'Comprehensive study design and sampling protocols approved by Ohio EPA.', href: '/documents/project-study-plan-2022.pdf' },
  { title: 'Quality Assurance Plan', type: 'PDF', desc: 'Data quality standards, QA/QC procedures, and detection limits documentation.', href: '/documents/quality-assurance-plan-2022.pdf' },
  { title: 'Tutorial: Hydrographs', type: 'PDF', desc: 'Guide to interpreting stream discharge over time.', href: '/documents/hydrographs-sedigraphs-chemographs.pdf' },
  { title: 'Tutorial: Loading Calculations', type: 'PDF', desc: 'How NCWQR calculates pollutant loads from concentration and flow data.', href: '/documents/loading-calculations-annual-loads-unit-area-loads.pdf' },
  { title: 'Tutorial: Concentration Exceedancy Curves', type: 'PDF', desc: 'Understanding frequency distributions of concentration data.', href: '/documents/concentration-exceedancy-curves.pdf' },
  { title: 'Tutorial: Time-Weighted Concentrations', type: 'PDF', desc: 'Methods for calculating flow-weighted mean concentrations.', href: '/documents/time-and-flow-weighted-mean-concentrations.pdf' },
  { title: 'Tutorial: Concentration-Flow Relationships', type: 'PDF', desc: 'Exploring the relationship between stream discharge and pollutant concentration.', href: '/documents/concentration-flow-relationships.pdf' },
  { title: 'Tutorial: Two Parameter Comparisons', type: 'PDF', desc: 'Comparing multiple water quality parameters across time or stations.', href: '/documents/two-parameter-comparisons.pdf' },
  { title: 'Tutorial: Pollutant Loading and Stream Discharge', type: 'PDF', desc: 'Connecting pollutant loads to discharge patterns for trend analysis.', href: '/documents/relationships-between-pollutant-loading-stream-discharge.pdf' },
];

const faqs = [
  {
    q: 'Where are the monitoring stations located?',
    a: 'Station names, coordinates, land use data, and corresponding USGS gage numbers are available in the Station Metadata Spreadsheet and Study Plan linked in the Downloads section above. Each station is co-located at a USGS gaging station.',
  },
  {
    q: 'How do I cite this data?',
    a: 'NCWQR. 2022. Heidelberg Tributary Loading Program (HTLP) Dataset. Zenodo. https://doi.org/10.5281/zenodo.6606949',
  },
  {
    q: 'How is stream flow calculated?',
    a: 'Each station is co-located at a USGS gaging station and flow is determined by USGS. Flow in the data portal is provisional data acquired at the time of sampling. For official loading estimations, USGS data should be downloaded directly.',
  },
  {
    q: 'Why are there negative data points?',
    a: 'Negative concentrations result from instrument error near the detection limit — they are analytically and statistically valid even though they make no physical sense. NCWQR does not censor these values because removing them would introduce bias into statistical analyses. Values of -9 and -1 are used as missing value codes and are not real measurements.',
  },
  {
    q: 'What parameters are measured?',
    a: 'Core parameters include dissolved reactive phosphorus (DRP), total phosphorus (TP), ammonium, nitrite, nitrate, total Kjeldahl nitrogen (TKN), chloride, sulfate, soluble reactive silica, and total suspended solids (TSS). Select stations also have YSI EXO sondes measuring turbidity, dissolved oxygen, pH, conductivity, and temperature every 30 minutes.',
  },
  {
    q: 'How is data quality certified?',
    a: 'NCWQR participates in the USGS inter-laboratory comparison study annually and certifies data through Phenova. See the Quality Assurance Plan in the Downloads section for full details on the QA/QC program.',
  },
  {
    q: 'How are annual loads calculated?',
    a: 'Annual loads are calculated using a stratified Beale Ratio Estimator program called autoBeale. Daily loads are the product of USGS daily mean discharge and flow-weighted mean concentration. Missing days — typically less than 5% annually — are estimated by interpolation or concentration-discharge relationships.',
  },
  {
    q: 'How do I create a data portal account?',
    a: 'Go to ncwqr-data.org, click Register at the top of the screen, complete the form, and confirm your account via the email you receive. Contact ncwqr@heidelberg.edu if you have issues.',
  },
  {
    q: 'Who do I contact with questions?',
    a: 'Contact Jakob Boehler or reach the team at ncwqr@heidelberg.edu.',
  },
];

const portalCards = [
  { icon: <Database className="w-6 h-6" />, title: 'Overview', desc: 'Learn about the HTLP monitoring network and what data it provides.', href: '/monitoring' },
  { icon: <ExternalLink className="w-6 h-6" />, title: 'Data Portal', desc: 'Access 50+ years of water quality data directly at ncwqr-data.org.', href: 'https://ncwqr-data.org', external: true },
  { icon: <BookOpen className="w-6 h-6" />, title: 'User Guide', desc: 'Step-by-step instructions for navigating and downloading portal data.', href: '#resources' },
  { icon: <HelpCircle className="w-6 h-6" />, title: 'FAQs', desc: 'Common questions about data quality, methods, and terminology.', href: '#faqs' },
];

export function Monitoring() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        title="Monitoring Program"
        subtitle="The Heidelberg Tributary Loading Program — the world's most comprehensive water quality record for Lake Erie's tributaries."
        imageUrl="images/nature/RC-leaves-water.jpg"
      />

      {/* ── HTLP FEATURED ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
                Featured Program
              </p>
              <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
                Heidelberg Tributary Loading Program
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Building on research begun in 1969, NCWQR formally initiated the Heidelberg Tributary Loading Program (HTLP)
                in 1974 — now the longest-running continuous tributary water quality monitoring program for any major lake
                system in the world. No other program provides this length of record, sampling frequency, and geographic
                coverage for any major lake's tributary system.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, 28 active stations continuously monitor discharge, nutrient concentrations, and pollutant loading across
                Lake Erie's major tributaries. That data directly informs NOAA's annual harmful algal bloom outlook for Lake Erie's
                Western Basin — and tracks progress toward the Great Lakes Water Quality Agreement's nutrient reduction goals adopted
                by the U.S. and Canada in 2016.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { val: '28', lbl: 'Active Stations' },
                  { val: '55+', lbl: 'Years of Record' },
                  { val: 'Daily', lbl: 'Sampling Frequency' },
                ].map((s) => (
                  <div
                    key={s.lbl}
                    className="text-center rounded-xl py-4 px-2"
                    style={{ backgroundColor: '#EBF3FB' }}
                  >
                    <div className="text-xl font-bold" style={{ color: BLUE }}>{s.val}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.lbl}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://ncwqr-data.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all"
                style={{ backgroundColor: BLUE }}
              >
                <ExternalLink className="w-4 h-4" />
                Open HTLP Data Portal
              </a>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="images/nature/wetlands.JPG"
                alt="HTLP Monitoring Network Map"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div
                className="p-5 flex items-center gap-3"
                style={{ backgroundColor: '#0f2942' }}
              >
                <Map className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">HTLP Monitoring Network</p>
                  <p className="text-blue-300 text-xs">28 stations covering the Maumee, Sandusky, Cuyahoga, and other major Lake Erie tributaries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DATA PORTAL CALLOUT ── */}
      <section
        className="py-14 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, #0f2942, ${BLUE})` }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <Activity className="w-10 h-10 text-blue-300 mx-auto mb-4" />
          <h2 className="text-white mb-3" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
            Explore 50+ Years of Water Quality Data
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Freely accessible to researchers, agencies, students, and the public.
            Download, visualize, and analyze our full dataset.
          </p>
          <a
            href="https://ncwqr-data.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all shadow-lg"
            style={{ backgroundColor: '#fff', color: BLUE }}
          >
            <ExternalLink className="w-5 h-5" />
            ncwqr-data.org — Open Data Portal
          </a>
        </div>
      </section>

      {/* ── PORTAL CARDS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-center" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#0f2942' }}>
            Monitoring Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portalCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {card.external ? (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl p-6 bg-white border border-gray-100 hover:shadow-md transition-all group h-full"
                  >
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-white" style={{ backgroundColor: BLUE }}>
                      {card.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-gray-800" style={{ fontSize: '0.95rem' }}>{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </a>
                ) : (
                  <a
                    href={card.href}
                    className="block rounded-xl p-6 bg-white border border-gray-100 hover:shadow-md transition-all group h-full"
                  >
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 text-white" style={{ backgroundColor: BLUE }}>
                      {card.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-gray-800" style={{ fontSize: '0.95rem' }}>{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOADABLE RESOURCES ── */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
            Downloads
          </p>
          <h2 className="mb-10" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f2942' }}>
            Documents &amp; Tutorials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 hover:shadow-sm transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                  style={{ backgroundColor: r.type === 'XLSX' ? GREEN : BLUE }}
                >
                  {r.type}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{r.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{r.desc}</p>
                </div>
                <a
                  href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{ backgroundColor: '#EBF3FB', color: BLUE }}
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section id="faqs" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
            Data Quality
          </p>
          <h2 className="mb-10" style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f2942' }}>
            Understanding Our Data
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-800 pr-4" style={{ fontSize: '0.95rem' }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: BLUE }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <div className="w-full h-px bg-gray-100 mb-4" />
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
