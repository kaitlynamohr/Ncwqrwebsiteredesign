import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Droplets, Activity, Microscope, ArrowRight, CheckCircle, Shield, Award, Phone, Mail, MapPin, Printer, ExternalLink, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GREEN = '#0B6623';
const BROWN = '#6B4C2A';

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
    anchor: '#surface-water',
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Well Water Testing',
    color: GREEN,
    desc: "Protect your family's health with certified analysis of private well water. We test for common contaminants and provide clear, actionable results for property owners and municipalities.",
    parameters: [
      'Nitrate & Nitrite (health standard)',
      'Ammonia, Chloride, Sulfate',
      'Soluble Phosphorus & Silica',
      'Fluoride & Conductivity',
      'Cooperative County Programs',
      'Confidential individual results',
      'Online kit ordering available',
      '2–4 week turnaround',
    ],
    anchor: '#well-water',
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Biological & Habitat Surveys',
    color: BROWN,
    desc: 'Beyond chemistry — NCWQR historically assessed the biological health of streams through macroinvertebrate and habitat surveys. This program is currently retired.',
    parameters: [
      'Macroinvertebrate Surveys',
      'Stream Habitat Assessment (QHEI)',
      'Invertebrate Community Index (ICI)',
      'Zooplankton (cladocerans, copepods)',
      'Oligochaete & chironomid expertise',
      'Ponar / Ekman grab processing',
      'Hester-Dendy sample analysis',
      'Educational workshops',
    ],
    anchor: '#biological',
    retired: true,
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

function ContactBlock({ color }: { color: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        { icon: <Phone className="w-3.5 h-3.5" />, label: 'Call', value: 'Nancy Miller\n419.448.2198 or 800.925.9250 Ext. 2198' },
        { icon: <Mail className="w-3.5 h-3.5" />, label: 'Email', value: 'nmiller@heidelberg.edu', href: 'mailto:nmiller@heidelberg.edu' },
        { icon: <MapPin className="w-3.5 h-3.5" />, label: 'Mail', value: 'NCWQR, Heidelberg University\n310 E. Market St., Tiffin, Ohio 44883' },
        { icon: <Printer className="w-3.5 h-3.5" />, label: 'Fax', value: '419.448.2345' },
      ].map((c) => (
        <div key={c.label} className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 border border-gray-100">
          <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ backgroundColor: color }}>
            {c.icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">{c.label}</p>
            {c.href ? (
              <a href={c.href} className="text-xs leading-relaxed hover:underline" style={{ color }}>{c.value}</a>
            ) : (
              <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-line">{c.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PriceRow({ label, price, sub }: { label: string; price: string; sub?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0">
      <div>
        <p className="text-sm text-gray-800">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{sub}</p>}
      </div>
      <span className="font-semibold text-sm flex-shrink-0" style={{ color: BLUE }}>{price}</span>
    </div>
  );
}

export function WaterTesting() {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div>
      <PageHero
        title="Water Testing Services"
        subtitle="State-of-the-art analytical laboratory services since 1969 — nearly 200,000 samples processed with rigor and precision."
        imageUrl="https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=1600&q=85"
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
              <h2 className="mb-5" style={{ fontSize: '2rem', fontWeight: 700, color: DARK_BLUE }}>
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
              <h3 className="mb-6" style={{ fontSize: '1.1rem', fontWeight: 700, color: DARK_BLUE }}>
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

      {/* ── SERVICE OVERVIEW CARDS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: BLUE }}>
              Services
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: DARK_BLUE }}>
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
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                    {service.retired && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-full text-amber-700 bg-amber-50 border border-amber-200">
                        Retired
                      </span>
                    )}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.15rem', fontWeight: 700, color: DARK_BLUE }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="border-t border-gray-100 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: service.color }}>
                      {service.retired ? 'Historical Services' : 'Parameters Tested'}
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

                  <a
                    href={service.anchor}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: service.color }}
                  >
                    {service.retired ? 'View archived details' : 'Full details & pricing'} <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DETAILED SERVICE SECTIONS
      ══════════════════════════════════════════════════════ */}

      {/* ── SURFACE WATER ── */}
      <section id="surface-water" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: BLUE }}>
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: BLUE }}>Testing Program</p>
              <h2 className="font-bold" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: DARK_BLUE }}>Surface Water Testing</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: description + pricing */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <p className="text-gray-700 leading-relaxed mb-5">
                The National Center for Water Quality Research has been collecting and testing surface water samples from streams and lakes since 1969. While most of the samples we analyze are generated by our own research programs — and some of the results are available for download — we also provide analytical support for other researchers and individuals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-5">
                For our <strong>Heidelberg Tributary Loading Program</strong>, over 140,000 samples collected from rivers and streams draining more than 50% of Ohio's land area have been analyzed for sediments, nutrients, pesticides, and metals.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Individuals or groups involved in environmental investigations for research or educational purposes who have surface water sample analysis needs are encouraged to contact the laboratory for more information.
              </p>

              {/* Pricing table */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: '#EBF3FB' }}>
                  <h3 className="font-bold text-sm" style={{ color: DARK_BLUE }}>Available Tests &amp; Pricing</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Prior consultation with NCWQR required before submitting samples.</p>
                </div>
                <div className="px-6 bg-white">
                  <PriceRow label="Nutrients &amp; Sediment Package" price="$60.00" sub="Bundled rate — most popular option" />
                  <div className="pt-3 pb-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">— or for Separate Analyses —</p>
                  </div>
                  <PriceRow label="Suspended Sediment (SS)" price="$10.00" />
                  <PriceRow label="Total Phosphorus (TP)" price="$15.00" />
                  <PriceRow label="Total Kjeldahl Nitrogen (TKN)" price="$15.00" />
                  <PriceRow
                    label="Dissolved Nutrients &amp; Major Ions"
                    price="$25.00"
                    sub="Nitrate, Nitrite, Ammonia, Dissolved Reactive Phosphorus, Silica, Chloride, Fluoride, Sulfate"
                  />
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 space-y-1.5">
                  {[
                    'Prices effective January 1, 2011 and subject to change without notice.',
                    'NCWQR reserves the right to reject any sample not meeting analytical requirements.',
                    'Analytical results are not suitable for litigation or compliance purposes.',
                  ].map((note, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
                      <p className="text-xs text-gray-500">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: contact sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-gray-200 overflow-hidden sticky top-24">
                <div className="px-6 py-5" style={{ backgroundColor: BLUE }}>
                  <h3 className="font-bold text-white" style={{ fontSize: '1rem' }}>Request a Quotation</h3>
                  <p className="text-blue-200 text-xs mt-1">We'll help determine the right test package for your project.</p>
                </div>
                <div className="px-6 py-5 bg-white">
                  <ContactBlock color={BLUE} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WELL WATER ── */}
      <section id="well-water" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ backgroundColor: GREEN }}>
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: GREEN }}>Testing Program</p>
              <h2 className="font-bold" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: DARK_BLUE }}>Well Water Testing</h2>
            </div>
          </motion.div>

          {/* Individuals subsection */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h3 className="font-bold mb-4" style={{ fontSize: '1.05rem', color: DARK_BLUE }}>Individuals — Why Test Your Well?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your drinking water comes from a private well, you are responsible for its safety. Testing establishes baseline data and helps detect contamination before it becomes a health risk.
                </p>
                <p className="text-sm font-semibold text-gray-700 mb-3">Your well has an <span style={{ color: GREEN }}>increased likelihood of contamination</span> if:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                  {[
                    'Your well is more than 20 years old',
                    'Your well was dug or driven rather than drilled',
                    'Your well is shallow',
                    'Your soil is sandy',
                    'A chemical spill occurred nearby',
                    'Your well is near cropland or feedlots',
                    'Landfills or industrial sites are nearby',
                    'Nearby land use has recently changed',
                  ].map((risk) => (
                    <div key={risk} className="flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-amber-500" />
                      <p className="text-sm text-gray-600">{risk}</p>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm italic">
                  Even if none of these apply, contaminants may have entered the ground without your knowledge or before you lived at the site.
                </p>
              </div>

              {/* Pricing */}
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100" style={{ backgroundColor: '#EBF4EE' }}>
                  <h3 className="font-bold text-sm" style={{ color: DARK_BLUE }}>Available Tests &amp; Pricing</h3>
                </div>
                <div className="px-6 bg-white">
                  <PriceRow
                    label="Nitrate / Inorganic Suite"
                    price="$25.00"
                    sub="Nitrate, nitrite, ammonia, chloride, sulfate, fluoride, soluble phosphorus, silica, and conductivity"
                  />
                  <PriceRow label="Handling Fee (per order)" price="$5.00" />
                </div>
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-xs text-gray-500">Prices effective May 15, 2014; subject to change without notice.</p>
                </div>
              </div>

              {/* Confidentiality note */}
              <div className="rounded-xl p-4 border-l-4" style={{ borderLeftColor: GREEN, backgroundColor: '#F0F8F2' }}>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>Confidentiality guaranteed.</strong> All results are confidential and will be reported only to the individual who requested the tests. Expect results by mail within <strong>2–4 weeks</strong> of sample receipt.
                </p>
              </div>
            </motion.div>

            {/* Right: order sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl border border-gray-200 overflow-hidden sticky top-24">
                <div className="px-6 py-5" style={{ backgroundColor: GREEN }}>
                  <h3 className="font-bold text-white" style={{ fontSize: '1rem' }}>Order a Test Kit</h3>
                  <p className="text-green-200 text-xs mt-1">Kits are available online, by phone, email, or mail.</p>
                </div>
                <div className="px-6 py-5 bg-white">
                  <a
                    href="https://secure.touchnet.net/C22605_ustores/web/store_main.jsp?STOREID=6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 mb-5"
                    style={{ backgroundColor: GREEN }}
                  >
                    Order Online <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <ContactBlock color={GREEN} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cooperative Well Testing Program */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-gray-200 overflow-hidden"
          >
            <div className="px-8 py-6 border-b border-gray-100" style={{ backgroundColor: '#EBF4EE' }}>
              <h3 className="font-bold" style={{ fontSize: '1.1rem', color: DARK_BLUE }}>
                Cooperative Private Well Testing Program
              </h3>
              <p className="text-sm text-gray-500 mt-1">County &amp; Community Programs</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 bg-white">
              <div className="px-7 py-7">
                <h4 className="font-semibold text-sm mb-3" style={{ color: GREEN }}>How Does It Work?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  NCWQR partners with local sponsoring organizations to provide well water testing to participants in their county, area, or group. The sponsor advertises the program locally; NCWQR provides test kits distributed over one to two weeks. The office serves as a collection site, then ships kits to the laboratory. Participants receive confidential results within 2–4 weeks. The agency receives an anonymous summary with data, township breakdowns, and — if requested — a nitrate or pesticide map.
                </p>
              </div>
              <div className="px-7 py-7">
                <h4 className="font-semibold text-sm mb-3" style={{ color: GREEN }}>How Large Is the Program?</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Started in 1987 for Ohio private well testing, the program has since grown nationwide:
                </p>
                <div className="space-y-3">
                  {[
                    { val: '56,350+', label: 'Total wells tested' },
                    { val: '88', label: 'Ohio counties covered' },
                    { val: '25+', label: 'States in the program' },
                    { val: '66.4%', label: 'Wells with no nitrate contamination' },
                    { val: '4.2%', label: 'Exceeded EPA nitrate standard (10 mg/L)' },
                  ].map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-2">
                      <span className="text-xs text-gray-500">{s.label}</span>
                      <span className="font-bold text-sm flex-shrink-0" style={{ color: GREEN }}>{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-7 py-7">
                <h4 className="font-semibold text-sm mb-3" style={{ color: GREEN }}>Sponsor a Program</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  Give your organization the opportunity to sponsor a well testing program in your community or among your members. Designed to support local groundwater education and source water protection by combining locally-run programs with detailed local databases on rural drinking water quality.
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2 text-sm text-gray-600">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: GREEN }} />
                    <span>Nancy Miller: <a href="tel:4194482198" className="underline">419.448.2198</a> or 800.925.9250 Ext. 2198</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GREEN }} />
                    <a href="mailto:nmiller@heidelberg.edu" className="underline">nmiller@heidelberg.edu</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BIOLOGICAL & HABITAT (RETIRED) ── */}
      <section id="biological" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-start justify-between gap-6 mb-8 flex-wrap"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0 opacity-70" style={{ backgroundColor: BROWN }}>
                <Microscope className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: BROWN }}>Testing Program</p>
                <h2 className="font-bold" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', color: DARK_BLUE }}>Biological &amp; Habitat Surveys</h2>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 self-start mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> Currently Retired
            </span>
          </motion.div>

          {/* Retired notice */}
          <div className="rounded-xl p-5 border-l-4 mb-8" style={{ borderLeftColor: BROWN, backgroundColor: '#FDF8F5' }}>
            <p className="text-sm text-gray-700 leading-relaxed">
              The NCWQR Biological &amp; Habitat Survey program is <strong>currently retired</strong>. The information below describes the services and expertise historically offered. For inquiries about biological survey referrals or archival data, please contact the laboratory directly.
            </p>
          </div>

          {/* Toggle */}
          <button
            onClick={() => setBioExpanded(!bioExpanded)}
            className="flex items-center gap-2 text-sm font-semibold mb-6 transition-colors hover:opacity-80"
            style={{ color: BROWN }}
          >
            {bioExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {bioExpanded ? 'Hide program details' : 'View historical program details'}
          </button>

          <AnimatePresence>
            {bioExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3" style={{ fontSize: '1rem', color: DARK_BLUE }}>Overview</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        The NCWQR conducted research and bioassessment projects on the biological communities of Lake Erie, inland lakes, streams, and wetlands. Most projects focused on the application of benthic (bottom-dwelling) macroinvertebrates as a tool for measuring the environmental quality of aquatic ecosystems, and the use of assessment tools such as the Ohio EPA's Invertebrate Community Index. Staff had deep expertise in the identification of benthic macroinvertebrates and crustacean zooplankton, and were certified by the Ohio EPA to perform stream habitat assessments using the Qualitative Habitat Evaluation Index (QHEI).
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3" style={{ fontSize: '1rem', color: DARK_BLUE }}>Services Offered (Historical)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'Bioassessment project design',
                          'Quantitative & qualitative macroinvertebrate field collections',
                          'Crustacean zooplankton field collections',
                          'Qualitative Habitat Evaluation Index (QHEI) surveys',
                          'Biological sample processing (Ponar/Ekman grabs, Hester-Dendy samples)',
                          'Taxonomic analysis — macroinvertebrates, cladocerans, copepods',
                          'Special expertise: oligochaete worms and chironomid midge larvae',
                          'Invertebrate Community Index (ICI) score calculation',
                          'Data analysis, interpretation, and reporting',
                          'Educational workshops on bioassessment and taxonomy',
                        ].map((svc) => (
                          <div key={svc} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: BROWN }} />
                            <p className="text-sm text-gray-600">{svc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="rounded-2xl border border-gray-200 overflow-hidden opacity-80">
                      <div className="px-6 py-5" style={{ backgroundColor: BROWN }}>
                        <h3 className="font-bold text-white" style={{ fontSize: '1rem' }}>Historical Contact</h3>
                        <p className="text-orange-200 text-xs mt-1">Program currently retired — contact lab for referrals.</p>
                      </div>
                      <div className="px-6 py-5 bg-white space-y-3">
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ backgroundColor: BROWN }}>
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Contact</p>
                            <p className="text-xs text-gray-700">Mr. Jakob Boehler</p>
                            <p className="text-xs text-gray-500">419.448.2054 or 800.925.9250 Ext. 2054</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ backgroundColor: BROWN }}>
                            <Mail className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                            <a href="mailto:jboehler@heidelberg.edu" className="text-xs hover:underline" style={{ color: BROWN }}>jboehler@heidelberg.edu</a>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ backgroundColor: BROWN }}>
                            <MapPin className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Mail</p>
                            <p className="text-xs text-gray-700">NCWQR, Heidelberg University<br />310 E. Market St.<br />Tiffin, Ohio 44883</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                          <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ backgroundColor: BROWN }}>
                            <Printer className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Fax</p>
                            <p className="text-xs text-gray-700">419.448.2345</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, ${DARK_BLUE}, ${BLUE})` }}
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