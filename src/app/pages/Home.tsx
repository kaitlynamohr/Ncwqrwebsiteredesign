import { Link } from 'react-router';
import { Droplets, FlaskConical, BarChart3, ArrowRight, ExternalLink, MapPin, AlertTriangle, Fish, Leaf } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';
const LIGHT_BLUE_BG = '#EBF3FB';

const stats = [
  { value: '50+', label: 'Years of Continuous Data', sub: 'Since 1969 — the world\'s longest-running record' },
  { value: '150K+', label: 'Water Samples Analyzed', sub: 'From tributaries across the Great Lakes region' },
  { value: '18', label: 'Tributary Monitoring Stations', sub: 'Covering the Maumee, Sandusky & more' },
  { value: 'NOAA', label: 'HAB Forecast Partner', sub: 'Our data drives Lake Erie algal bloom predictions' },
];

const services = [
  {
    icon: <MapPin className="w-7 h-7" />,
    title: 'Monitoring',
    desc: 'Continuous, high-frequency water quality monitoring across 18 stations in the Great Lakes tributaries — generating the world\'s most comprehensive dataset of its kind.',
    href: '/monitoring',
    color: BLUE,
  },
  {
    icon: <FlaskConical className="w-7 h-7" />,
    title: 'Research',
    desc: 'Active partnerships with USDA, NOAA, USGS, ODNR and top universities to advance our understanding of nutrients, harmful algal blooms, and watershed dynamics.',
    href: '/research',
    color: GREEN,
  },
  {
    icon: <Droplets className="w-7 h-7" />,
    title: 'Water Testing',
    desc: 'Analytical laboratory services for surface water, well water, and biological studies — trusted by agencies and communities since 1969 with nearly 200,000 samples processed.',
    href: '/water-testing',
    color: '#6B4C2A',
  },
];

const news = [
  {
    id: 7,
    date: 'February 6, 2025',
    title: 'Summer Camp Opportunity: Water Detectives - Rivers and Wetlands',
    excerpt:
      'NCWQR is excited to announce a new summer camp opportunity for local middle school students: "Water Detectives - Rivers and Wetlands." This week-long camp will provide hands-on learning experiences focused on water quality monitoring, aquatic ecology, and conservation in Lake Erie\'s tributaries and wetlands. Campers will engage in field sampling, lab activities, and interactive lessons led by NCWQR scientists.',
    image: '/images/lab/gillmore-2014.jpg',
    tag: 'Event',
    tagColor: GREEN,
  },
  {
    id: 6,
    date: 'March 16, 2023',
    title: 'The Annual Report for 2022 is now available!',
    excerpt:
      'NCWQR\'s 2022 Annual Report is now available for download. The report highlights key findings from the year\'s monitoring efforts, including trends in nutrient loading, emerging contaminants, and ecological health indicators across the HTLP network. It also features updates on research projects, partnerships, and community engagement initiatives.',
    image: '/images/nature/rock-creek-low.JPG',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
  {
    id: 5,
    date: 'December 15, 2021',
    title: 'The Annual Report for 2021 is now available!',
    excerpt:
      'NCWQR\'s 2021 Annual Report is now available for download. The report highlights key findings from the year\'s monitoring efforts, including long-term moniroting and modeling of rivers feeding Lake Erie. It also features updates on new projects, technology, and partnerships to support sustainable water management.',
    image: '/images/nature/winter-water.jpg',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
];

export function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-start overflow-hidden"
        style={{
          minHeight: '92vh',
          backgroundImage: 'url(/images/nature/rock-splash-action.JPG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(10,28,50,0.88) 0%, rgba(27,79,138,0.55) 60%, rgba(10,28,50,0.1) 100%)',
          }}
        />
        {/* Animated accent line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1.5"
          style={{ backgroundColor: '#1B4F8A' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(27,79,138,0.4)', color: '#93C5FD', border: '1px solid rgba(147,197,253,0.3)' }}
            >
              <Droplets className="w-4 h-4" />
              Heidelberg University · Tiffin, Ohio
            </div>

            <h1
              className="text-white mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1 }}
            >
              Sustaining Our Soil<br />
              <span style={{ color: '#60A5FA' }}>and Water Resources</span>
            </h1>
            <p
              className="text-blue-100 mb-10 max-w-2xl"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.7 }}
            >
              A leader in surface and ground water research and monitoring in the Great Lakes region
              and beyond — generating the world's longest continuous water quality dataset for
              Lake Erie's tributaries.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/research"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white font-semibold transition-all"
                style={{ backgroundColor: BLUE, fontSize: '1rem' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163f6e';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                }}
              >
                Explore Our Research
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://ncwqr-data.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  fontSize: '1rem',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.22)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.12)';
                }}
              >
                Access the Data Portal
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Hero stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 flex flex-wrap gap-4"
          >
            {[
              { icon: <BarChart3 className="w-4 h-4" />, text: '50+ years of continuous data' },
              { icon: <Fish className="w-4 h-4" />, text: 'Powering NOAA HAB forecasts' },
              { icon: <Leaf className="w-4 h-4" />, text: '18 active monitoring stations' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="uppercase tracking-widest text-sm font-semibold mb-3"
              style={{ color: BLUE }}
            >
              What We Do
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              Science That Serves the Region
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#fff' }}
              >
                <div
                  className="p-8"
                  style={{ borderTop: `4px solid ${s.color}` }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="mb-3" style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f2942' }}>
                    {s.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontSize: '0.95rem' }}>
                    {s.desc}
                  </p>
                  <Link
                    to={s.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                    style={{ color: s.color }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY NCWQR MATTERS — STATS ── */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(135deg, #0f2942 0%, ${BLUE} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-sm font-semibold mb-3"
              style={{ color: '#93C5FD' }}
            >
              Why NCWQR Matters
            </p>
            <h2 className="text-white" style={{ fontSize: '2rem', fontWeight: 700 }}>
              Decades of Data. Real-World Impact.
            </h2>
            <p className="text-blue-200 mt-3 max-w-2xl mx-auto" style={{ fontSize: '1rem' }}>
              Our monitoring program holds the world's longest continuous, high-frequency water
              quality record for any Lake Erie tributary — and it directly informs federal policy
              and NOAA forecasting.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-white mb-1"
                  style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1 }}
                >
                  {stat.value}
                </div>
                <div
                  className="font-semibold mb-2"
                  style={{ color: '#93C5FD', fontSize: '0.95rem' }}
                >
                  {stat.label}
                </div>
                <div className="text-blue-300" style={{ fontSize: '0.8rem' }}>
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* HAB callout */}
          <div
            className="mt-14 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: 'rgba(147,197,253,0.15)' }}
            >
              <AlertTriangle className="w-7 h-7" style={{ color: '#FCD34D' }} />
            </div>
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                Powering NOAA's Lake Erie Harmful Algal Bloom Forecasts
              </h3>
              <p className="text-blue-200" style={{ fontSize: '0.92rem' }}>
                NCWQR's tributary phosphorus loading data — collected daily at up to 18 stations — is
                a primary input for NOAA's annual harmful algal bloom outlook for Lake Erie's Western
                Basin, protecting drinking water for millions of people.
              </p>
            </div>
            <a
              href="https://ncwqr-data.org"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
              style={{ backgroundColor: '#1B4F8A', color: '#fff', border: '1.5px solid rgba(147,197,253,0.4)' }}
            >
              Explore Data Portal
            </a>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: BLUE }}>
                Latest News
              </p>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
                News &amp; Updates
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: BLUE }}
            >
              View All News <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: BLUE }}
                  >
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{item.date}</p>
                  <h3 className="mb-3" style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2942', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: BLUE }}
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET INVOLVED / STUDENTS ── */}
      <section className="py-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div
            className="relative min-h-80 lg:min-h-[500px]"
            style={{
              backgroundImage: '/images/lab/test-circle.jpg',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(15,41,66,0.3))' }} />
          </div>

          {/* Content */}
          <div
            className="flex items-center px-8 sm:px-12 py-16 lg:py-20"
            style={{ backgroundColor: GREEN }}
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-lg"
            >
              <p
                className="uppercase tracking-widest text-sm font-semibold mb-4"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                For Students
              </p>
              <h2
                className="text-white mb-5"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 800, lineHeight: 1.2 }}
              >
                Do Real Science.<br />Make a Real Impact.
              </h2>
              <p
                className="mb-8 leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem' }}
              >
                NCWQR student interns work alongside scientists on nationally significant research —
                from field sampling and lab analysis to federal agency collaboration. Gain hands-on
                experience that sets you apart before graduation.
              </p>
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
                style={{ backgroundColor: '#fff', color: GREEN }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#f0fdf4';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#fff';
                }}
              >
                Learn About Internships <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DATA PORTAL BANNER ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: LIGHT_BLUE_BG }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f2942' }} className="mb-4">
            Explore 50+ Years of Water Quality Data
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontSize: '1rem' }}>
            The HTLP Data Portal provides public access to decades of nutrient loading, discharge,
            and water quality data from across the Great Lakes watershed.
          </p>
          <a
            href="https://ncwqr-data.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-base transition-all shadow-lg"
            style={{ backgroundColor: BLUE }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163f6e';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
            }}
          >
            <ExternalLink className="w-5 h-5" />
            Access the HTLP Data Portal at ncwqr-data.org
          </a>
        </div>
      </section>
    </div>
  );
}
