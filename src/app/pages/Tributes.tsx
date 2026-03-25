import { motion } from 'motion/react';
import { Quote, Award, BookOpen, Clock, Microscope, Droplets } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GOLD = '#B45309';
const GREEN = '#2D5016';

// ─── People Data ─────────────────────────────────────────────────────────────

const featured = [
  {
    id: 'baker',
    name: 'Dr. David B. Baker',
    years: '1966 – 1999  ·  Interim Director 2005',
    yearsOfService: '33+ years',
    role: 'Founder & First Director',
    photo: '/images/people/dave-baker.jpg',
    degrees: [
      'B.S. in Biology, Heidelberg College',
      'M.S. in Environmental Science, Ohio State University',
      'Ph.D. in Limnology, Michigan State University',
    ],
    bio: [
      'Dr. David B. Baker is the defining figure in NCWQR\'s history — the person without whom none of it exists. He returned to his alma mater in 1966 to join the Biology Department, succeeding the retiring aquatic studies chair Arthur McQuate. In the fall of 1967, he incorporated a three-week field lab on Sandusky River pollution directly into the intro biology course, bringing students to the water\'s edge to sample and analyze. That exercise became the seed of everything.',
      'In December 1968, Baker secured a $47,650 grant from the Federal Water Quality Administration to study flow augmentation in the Sandusky River. He used it to buy equipment, hire student workers, and bring on the lab\'s first full-time employee, Jack Kramer — his former student and the person who would become his most essential partner. The lab was formally established as the Sandusky River Project in 1969, headquartered in Room L-120 of Laird Science Hall.',
      'That first summer, record-setting storms upended the planned low-flow study in the most fortuitous way: Baker and Kramer discovered that storm events — not sewage plants or industry — were responsible for the vast majority of phosphorus entering the Sandusky River. This insight, confirmed and published in the 1973 paper "Phosphorus Sources and Transport in an Agricultural River Basin of Lake Erie," showed that up to 75% of phosphorus came from rural farmland. It reshaped the entire field of nutrient management science.',
      'Baker served as Director for 30 years, overseeing the lab\'s growth from a single room and one employee to a staff of 18, a research vessel on Lake Erie, monitoring stations across Ohio, and a well-testing program that eventually reached 32 states. He retired in June 1999, but continued to contribute to the lab\'s work. He returned as Interim Director in 2005. After his long-time collaborator Jack Kramer retired in 2018, Baker and his wife compiled a book in Jack\'s honor titled "The Lab That Jack Built."',
    ],
    legacy: 'Founded NCWQR; architect of the world\'s longest continuous tributary monitoring program; reshaped understanding of non-point source pollution in agricultural watersheds.',
    color: BLUE,
    accent: '#DBEAFE',
    stats: [
      { label: 'Director', value: '30 years' },
      { label: 'Founded', value: '1969' },
      { label: 'States Reached', value: '32' },
      { label: 'First Grant', value: '$47,650' },
    ],
  },
  {
    id: 'kramer',
    name: 'Jack Kramer',
    years: '1969 – 2018',
    yearsOfService: '49 years',
    role: 'Co-Founder & Lab Manager',
    photo: '/images/people/jack-retire.JPG',
    degrees: [
      'B.S. in Chemistry, Heidelberg College (1969)',
    ],
    bio: [
      'Jack Kramer was the first full-time employee of what would become the NCWQR, hired in 1969 straight out of Heidelberg by Dr. David Baker — his professor, mentor, and eventual co-author. He had just graduated with a chemistry degree when Baker asked him to join the newly funded Sandusky River Project. He said yes, and stayed for nearly five decades.',
      'For 49 years, Jack was the operational backbone of everything the lab did. As lead analytical chemist, he devised the systems to efficiently process thousands of water samples annually without sacrificing accuracy or scientific integrity. The lab\'s analytical methods — refined and calibrated over decades — were largely Jack\'s creation. He made them scalable, reproducible, and rigorous enough to generate a dataset that scientists worldwide still rely on today.',
      'But Jack\'s role extended far beyond chemistry. He was, in the most literal sense, a jack of all trades: electrician, carpenter, plumber, welder, machinist, photographer, computer programmer, data manager, and teacher. He kept the physical facility functioning, trained every technician and student worker who came through the door, and served as the institutional memory of the lab\'s methods and systems across five different directors.',
      'He partially retired in 2012 and fully retired in 2018. Upon his retirement, Dr. Baker and his wife compiled a book in his honor titled "The Lab That Jack Built" — a title that, to anyone who knew him, needed no explanation.',
    ],
    legacy: 'Co-founder of NCWQR; sole lab manager for nearly 50 years; built the analytical systems that made the world\'s longest continuous tributary monitoring dataset possible.',
    color: DARK_BLUE,
    accent: '#E0E7FF',
    stats: [
      { label: 'Years of Service', value: '49' },
      { label: 'First Employee', value: '1969' },
      { label: 'Retired', value: '2018' },
      { label: 'Roles Filled', value: '10+' },
    ],
    bookNote: '"The Lab That Jack Built" — compiled by Dr. David B. Baker and his wife upon Jack\'s retirement in 2018.',
  },
];

const secondary = [
  {
    id: 'krieger',
    name: 'Dr. Ken Krieger',
    years: '1978 – 2015',
    role: 'Biologist, Ecologist & Fifth Director (2010–2015)',
    photo: '/images/people/ken-students.jpg',
    degrees: [
      'B.S. in Biology, Emory University',
      'M.S. in Biology (Ecology)',
      'Ph.D. in Biology (Ecology)',
    ],
    bio: 'Dr. Ken Krieger joined the NCWQR in 1978 as part of the same major EPA-funded expansion that brought Dr. Peter Richards aboard. For over three decades he was the lab\'s primary biologist and ecologist, leading research on invertebrate communities in Lake Erie, nearshore hypoxia in the central basin, the influence of agricultural ditch management on headwater streams, and the capacity of coastal wetlands to filter phosphorus, nitrogen, sediment, and pesticides. In 1992, during an OSU Stone Laboratory field trip, he discovered the first Hexagenia mayfly nymphs in Lake Erie sediment in decades — a finding that became one of the lab\'s most celebrated and publicized results, signaling measurable improvement in lake water quality. He taught limnology, water pollution biology, and environmental science at Heidelberg from 1978 to 2014, and taught the graduate limnology course at Ohio State\'s Stone Laboratory on Gibraltar Island for eleven summers. He became the fifth Director of NCWQR in July 2010 and retired at the end of 2015.',
    legacy: 'Rediscovered Hexagenia mayflies in Lake Erie (1992); led three decades of biological research on lake invertebrates and coastal wetlands; served as Director 2010–2015.',
    color: GREEN,
    yearsOfService: '37 years',
  },
  {
    id: 'richards',
    name: 'R. Peter Richards',
    years: '1978 – c. 2010s',
    role: 'Research Scientist & Second Director (1999–2002)',
    photo: 'https://images.unsplash.com/photo-1748717160256-bda13f5ac513?w=700&q=85',
    degrees: [
      'Ph.D. in Hydrology / Water Resources',
    ],
    bio: 'Peter Richards joined the Water Quality Laboratory in 1978 as part of the major EPA-funded expansion and became one of the most influential research scientists in the center\'s history. He assumed the directorship in 1999 when Baker retired, and oversaw the lab\'s Congressional designation as the National Center for Water Quality Research in 2002. He is co-creator of the Richards-Baker Flashiness Index (2004) — published in the Journal of American Water Resources Association alongside Baker, Loftus, and Kramer — which describes how land use affects stream flashiness during storm events. With over 180 citations, it is the lab\'s most-cited publication and a standard tool in stream hydrology worldwide. He was a leading authority on long-term nutrient trend analysis in Great Lakes tributaries throughout his career.',
    legacy: 'Co-created the Richards-Baker Flashiness Index; directed NCWQR through its Congressional designation as a national center.',
    color: BLUE,
    yearsOfService: '30+ years',
  },
  {
    id: 'merryfield',
    name: 'Barbara J. Merryfield',
    years: '1978 – 2020',
    role: 'Research Assistant',
    photo: '/images/people/bard-filtering-samples.jpg',
    degrees: [],
    bio: 'Barbara Merryfield joined the NCWQR in 1978 as part of the major EPA-funded expansion that year, and stayed for 42 years — longer than all but a handful of staff in the lab\'s history. As a Research Assistant, she was a constant presence in both the field and the lab: running sample collection routes, operating analytical equipment, and demonstrating lab procedures to the students, scientists, and visitors who cycled through over four decades. She was one of three foundational staff members — alongside Ellen Ewing and Jack Kramer — who formed the operational core of the NCWQR for the majority of its history. Barb retired at the end of August 2020.',
    legacy: '42 years of field and laboratory service; one of the three-person core that kept the NCWQR running across five decades.',
    color: GOLD,
    yearsOfService: '42 years',
  },
  {
    id: 'ewing',
    name: 'Ellen Ewing',
    years: '1976 – 2020',
    role: 'Lab Manager',
    photo: 'images/people/ellen-immunoassy.jpg',
    degrees: [],
    bio: 'Ellen Ewing joined the lab in 1976 and over 44 years became its institutional memory. As Lab Manager, she oversaw sample analysis, field collection logistics, and the day-to-day operations that kept the Heidelberg Tributary Loading Program running without interruption — through storms, staff turnover, and five different directors. She guided countless students and visitors through the lab\'s analytical systems, and was among the first to publicly articulate the origin story of the NCWQR: that it grew from a classroom biology exercise into a 50-year global monitoring program. She retired at the end of August 2020.',
    legacy: '44 years as Lab Manager; steward of the NCWQR\'s continuity and institutional knowledge across the lab\'s entire modern history.',
    color: '#0E7490',
    yearsOfService: '44 years',
  },
];

// ─── Components ───────────────────────────────────────────────────────────────

function StatChip({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-xl bg-white/10 border border-white/20 min-w-[80px]">
      <span className="text-white/60 text-xs uppercase tracking-wider mb-0.5">{label}</span>
      <span className="text-white font-bold" style={{ fontSize: '1.1rem' }}>{value}</span>
    </div>
  );
}

function FeaturedCard({ person, reverse }: { person: typeof featured[0]; reverse?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65 }}
      className="rounded-3xl overflow-hidden shadow-2xl"
      style={{ background: `linear-gradient(135deg, ${person.color} 0%, ${DARK_BLUE} 100%)` }}
    >
      <div className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        {/* Photo panel */}
        <div className="lg:w-[38%] relative flex-shrink-0">
          <div className="w-full h-72 lg:h-full min-h-[360px] overflow-hidden">
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover object-top"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
            />
          </div>
          {/* Photo overlay gradient */}
          <div
            className={`absolute inset-0 ${reverse ? 'lg:bg-gradient-to-l' : 'lg:bg-gradient-to-r'} from-transparent to-black/30 bg-gradient-to-t from-black/50 to-transparent lg:from-transparent`}
          />
          {/* Years of service badge */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/20">
            <p className="text-white/60 text-xs uppercase tracking-widest">Years of Service</p>
            <p className="text-white font-bold" style={{ fontSize: '1.3rem' }}>{person.yearsOfService}</p>
          </div>
        </div>

        {/* Text panel */}
        <div className="lg:w-[62%] p-8 lg:p-12 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-yellow-300 flex-shrink-0" />
              <span className="text-yellow-300 text-xs font-semibold uppercase tracking-widest">{person.role}</span>
            </div>
            <h2 className="text-white mb-1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, lineHeight: 1.15 }}>
              {person.name}
            </h2>
            <p className="text-white/60 text-sm">{person.years}</p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mb-7">
            {person.stats.map((s) => (
              <StatChip key={s.label} label={s.label} value={s.value} color={person.color} />
            ))}
          </div>

          {/* Bio paragraphs */}
          <div className="space-y-3 mb-7 flex-1">
            {person.bio.map((para, i) => (
              <p key={i} className="text-white/85 leading-relaxed" style={{ fontSize: '0.9rem' }}>
                {para}
              </p>
            ))}
          </div>

          {/* "The Lab That Jack Built" callout */}
          {'bookNote' in person && (
            <div className="mb-6 rounded-xl bg-white/10 border border-white/20 px-5 py-4 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
              <p className="text-white/90 text-sm italic leading-snug">{(person as typeof featured[1]).bookNote}</p>
            </div>
          )}

          {/* Degrees */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Education</p>
            <div className="flex flex-wrap gap-2">
              {person.degrees.map((d, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/15">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Legacy */}
          <div className="rounded-xl bg-white/10 border border-white/20 px-5 py-4 flex items-start gap-3">
            <Quote className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
            <p className="text-yellow-100 text-sm italic leading-relaxed">{person.legacy}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function SecondaryCard({ person, index }: { person: typeof secondary[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden flex flex-col"
    >
      {/* Photo */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(15%)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Service badge */}
        <div
          className="absolute bottom-3 right-3 rounded-lg px-2.5 py-1.5 text-white text-xs font-bold"
          style={{ backgroundColor: person.color + 'CC', backdropFilter: 'blur(4px)' }}
        >
          {person.yearsOfService}
        </div>
        {/* Color accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: person.color }} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Name & role */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full text-white mb-2 inline-block"
            style={{ backgroundColor: person.color }}
          >
            {person.role}
          </span>
          <h3 className="font-bold mt-2 mb-0.5" style={{ fontSize: '1.15rem', color: DARK_BLUE, lineHeight: 1.25 }}>
            {person.name}
          </h3>
          <p className="text-xs text-gray-400">{person.years}</p>
        </div>

        {/* Degrees */}
        {person.degrees.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Education</p>
            {person.degrees.map((d, i) => (
              <p key={i} className="text-xs text-gray-500 leading-snug">{d}</p>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-4" />

        {/* Bio */}
        <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{person.bio}</p>

        {/* Legacy */}
        <div
          className="rounded-xl px-4 py-3 flex items-start gap-2"
          style={{ backgroundColor: person.color + '12', border: `1px solid ${person.color}30` }}
        >
          <Quote className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: person.color }} />
          <p className="text-xs italic leading-snug" style={{ color: person.color === GOLD ? '#92400E' : DARK_BLUE }}>
            {person.legacy}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function Tributes() {
  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Tributes"
        subtitle="Honoring the scientists, chemists, and staff whose decades of dedication built the institution — and the dataset — that defines NCWQR."
        imageUrl="https://images.unsplash.com/photo-1620747440738-497378fb61d9?w=1600&q=85"
      />

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Droplets className="w-5 h-5" style={{ color: BLUE }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: BLUE }}>
                In their honor
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed" style={{ fontSize: '1.05rem' }}>
              The NCWQR did not emerge from a single discovery or a moment of institutional will. It was built
              over fifty years by a small group of people who showed up every day — to sample rivers in the rain,
              to run thousands of water analyses, to maintain instruments and write code and teach students and
              argue for funding. These are their stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured: Baker & Kramer ──────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              The Founders
            </p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: DARK_BLUE }}>
              Dr. David B. Baker &amp; Jack Kramer
            </h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              A professor and his student. A scientist and a chemist. Together they built something that outlasted both of their careers.
            </p>
          </motion.div>

          <div className="space-y-10">
            {featured.map((person, i) => (
              <FeaturedCard key={person.id} person={person} reverse={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Connector quote ───────────────────────────────────── */}
      <div
        className="py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK_BLUE} 0%, #1B4F8A 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Quote className="w-7 h-7 text-blue-300 mx-auto mb-4" />
          <blockquote
            className="text-white mb-3 italic"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', lineHeight: 1.65 }}
          >
            &ldquo;We didn&apos;t set out to build a 50-year dataset. We set out to answer a question about a river.
            The data just kept being needed.&rdquo;
          </blockquote>
          <p className="text-blue-300 text-sm">— Dr. David B. Baker, Founder</p>
        </div>
      </div>

      {/* ── Secondary tier ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              The team that kept it running
            </p>
            <h2 className="font-bold mb-3" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: DARK_BLUE }}>
              Scientists, Ecologists &amp; Lab Staff
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              The NCWQR was never one person's achievement. These four — spanning nearly a century of combined service — are the reason the data never stopped.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {secondary.map((person, i) => (
              <SecondaryCard key={person.id} person={person} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Combined service callout ──────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>By the numbers</p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: DARK_BLUE }}>
              Combined Legacy
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: Clock, value: '250+', label: 'Combined Years of Service', color: BLUE },
              { icon: Microscope, value: '49', label: "Jack Kramer's Years at the Lab", color: DARK_BLUE },
              { icon: Award, value: '6', label: 'People Honored on This Page', color: GOLD },
              { icon: Droplets, value: '50+', label: 'Years of Unbroken Monitoring', color: GREEN },
            ].map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: color + '18' }}
                >
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="font-bold mb-1" style={{ fontSize: '1.8rem', color, lineHeight: 1 }}>{value}</div>
                <div className="text-xs text-gray-500 leading-snug">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
