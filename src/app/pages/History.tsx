import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PageHero } from '../components/PageHero';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GREEN = '#2D5016';
const GOLD = '#B45309';

// ─── Timeline Data ────────────────────────────────────────────────────────────

const timelineEvents = [
  {
    id: 'e1923',
    year: '1923',
    era: 'Foundational Context',
    title: 'Dr. Ira T. Wilson Arrives at Heidelberg',
    body: 'Dr. Ira T. Wilson joins the Heidelberg faculty, becoming the college\'s first true "scholar-teacher" — balancing heavy teaching loads with pioneering summer research on lake bottom deposits in the region\'s waters. His work would lay the intellectual foundation for decades of aquatic science at Heidelberg.',
    color: '#6B4226',
  },
  {
    id: 'e1953',
    year: '1953',
    era: 'A Warning Sign',
    title: 'Lake Erie\'s Ecosystem Collapses',
    body: 'A period of calm winds and stratified water causes catastrophic hypoxia in Lake Erie\'s Western Basin, resulting in near-100% mortality of burrowing mayfly (Hexagenia) populations. This ecological collapse — caused by nutrient over-enrichment from agricultural and municipal sources — would not reverse for four decades, and would become a defining motivation for the water quality research to come.',
    image: '/images/wildlife/mayfly-flag.JPG',
    imageCaption: 'Mayflies from the restored populations in Lake Erie, 2011. The return of Hexagenia was a celebrated milestone in the lake\'s ecological recovery.',
    color: '#0E7490',
  },
  {
    id: 'e1966',
    year: '1966–1968',
    era: 'The Beginning',
    title: 'Baker Returns & the First River Labs',
    body: 'Heidelberg alumnus David B. Baker returns to join the Biology Department in 1966, succeeding the retiring aquatic studies chair Arthur McQuate. In the fall of 1967, Baker and chemistry professor Thomas Taylor launch the original "River Labs" component within Introductory Biology courses, funded by a modest $2,500 grant from the Esso Foundation. In December 1968, Baker is awarded a landmark $47,650 grant from the Federal Water Pollution Control Administration (FWPCA) to study flow augmentation in the Sandusky River.',
    image: '',
    imageCaption: 'Dr. David B. Baker, founder of NCWQR, pictured in the early years of the Sandusky River Project',
    color: BLUE,
  },
  {
    id: 'e1969',
    year: '1969',
    era: 'The Founding Year',
    title: 'Sandusky River Project Founded — and a Pivotal Discovery',
    body: 'The lab is formally established as the Sandusky River Project. Jack Kramer is hired as the first full-time employee. That same summer, record-setting storms upend the planned low-flow study in a serendipitous way: researchers discover that storm events — not municipal sewage — are responsible for the vast majority of phosphorus transport in agricultural watersheds. This insight becomes a cornerstone of modern nutrient management science.',
    image: '/images/people/2016-jack.jpg',
    imageCaption: 'Agricultural fields in the Sandusky watershed — the birthplace of a 50-year monitoring mission',
    color: GREEN,
  },
  {
    id: 'e1972',
    year: '1972–1978',
    era: 'Expansion Era',
    title: 'The Clean Water Act, HTLP, and the Nearshore Study',
    body: 'The Clean Water Act (1972) and the Great Lakes Water Quality Agreement establish the regulatory foundation for the lab\'s future research. By 1974, the facility is renamed the River Studies Laboratory and the Heidelberg Tributary Loading Program (HTLP) — now the world\'s longest-running continuous tributary water quality monitoring program — is formally initiated. In 1975, the lab hosts the Sandusky River Basin Symposium, where the influential "River Continuum" concept is first presented publicly. The lab moves to the basement of Bareis Hall in 1976 as staff grows. By 1977, the program is renamed the Water Quality Laboratory (WQL). In 1978–1979, WQL takes to Lake Erie aboard the R/V Roger R. Simons, collecting water and sediment samples from 89 stations across the lake during the landmark Nearshore Study.',
    image: '/images/nature/bloom.jpg',
    imageCaption: 'Aerial view of algal bloom plumes in Lake Erie\'s Western Basin — the nutrient-driven eutrophication that motivated decades of NCWQR tributary monitoring research',
    color: '#6B21A8',
  },
  {
    id: 'e1980',
    year: '1980–1989',
    era: 'The Pesticides Decade',
    title: 'Herbicides, Private Wells, and a Publication in Nature',
    body: 'In response to the rise of no-till agriculture, pesticide monitoring is added to tributary studies in 1980. A 1983 study of finished tap water in Bowling Green and Tiffin reveals that soluble herbicides like atrazine are not removed by standard treatment. A 1985 pilot study on herbicides in rainwater yields a landmark publication in the journal Nature. In 1986, the Cooperative Private Well Testing Program (CWTP) is launched, eventually providing nitrate and herbicide data for over 70,000 wells across Ohio. In 1988, a toluene spill near Watson, OH forces the evacuation of 5,000 people; Ken Krieger documents macroinvertebrate recovery in Sugar Creek. In 1989, the lab publishes its "Nitrate and Pesticides in Private Wells of Ohio: A State Atlas," summarizing data from over 16,000 wells.',
    image: '/images/lab/1980-pesticides.jpg',
    imageCaption: 'Private well water quality testing — at its peak, NCWQR\'s program covered over 70,000 Ohio wells',
    color: GOLD,
  },
  {
    id: 'e1991',
    year: '1991–1999',
    era: 'Ecological Recovery',
    title: 'Mayflies Return, and Baker Retires',
    body: 'The Environmental Extension program is formalized in 1991, with staff giving dozens of presentations annually to farmers, citizens, and policymakers. In 1992, during an OSU Stone Laboratory field trip, Ken Krieger discovers the first burrowing mayfly nymphs (Hexagenia) in Lake Erie\'s Western Basin since their disappearance in 1953 — a landmark signal of ecological recovery tied directly to phosphorus reduction efforts informed by WQL data. Heidelberg introduces the Water Resources major in 1993. Researchers respond to the Environmental Working Group\'s "Tap Water Blues" report in 1994, sparking a national debate on pesticide risk communication. In 1996, a soil metabolite of alachlor causing false positives in immunoassay tests is identified. The Sandusky River Watershed Coalition is founded in 1997. After 30 years as Director, David Baker retires in 1999; R. Peter Richards assumes leadership.',
    image: '/images/wildlife/mayfly-close.JPG',
    imageCaption: 'The return of Hexagenia mayflies to Lake Erie in 1992 was a celebrated sign of ecosystem recovery',
    color: GREEN,
  },
  {
    id: 'e2002',
    year: '2002–2009',
    era: 'The National Center Era',
    title: 'An Act of Congress & a New Home',
    body: 'In 2002, by an act of Congress, the lab is officially renamed the National Center for Water Quality Research (NCWQR) — a recognition of its national and international significance. That same year, Timothy Loftus is hired as the first Director from outside the Heidelberg community. In 2004, Richards and Baker introduce the Richards-Baker Flashiness Index, now a standard tool in stream hydrology worldwide. The NCWQR moves to its current home on the top floor of the newly constructed Gillmor Science Hall in 2005, the same year its Tributary Loading Website launches — making five decades of raw data freely available to the global scientific community. Gary Winston is appointed fourth Director in 2007. Remegio Confesor joins in 2008 with advanced watershed modeling capabilities. In 2009, a line-item veto by Ohio Governor Strickland threatens HTLP funding, triggering a two-year crisis.',
    image: '/images/lab/gillmore-cherry-flower.jpg',
    imageCaption: 'Gillmor Science Hall, the modern home of NCWQR since 2005',
    color: BLUE,
  },
  {
    id: 'e2010',
    year: '2010–2014',
    era: 'Crisis & Consequence',
    title: 'HAB Forecasting and the Toledo Water Crisis',
    body: 'Ken Krieger becomes the fifth Director in 2010. State funding for the HTLP is restored in 2011 after a two-year hiatus. The following year, NCWQR begins collaborating with NOAA to develop annual Harmful Algal Bloom (HAB) forecasts for Lake Erie based on Maumee River phosphorus loading data — a partnership that now reaches millions of people each summer. Laura Johnson joins the staff in 2013. Then, on August 2–4, 2014, the Toledo water crisis shuts off drinking water for 500,000 residents and focuses international media attention on NCWQR\'s decades of research on dissolved reactive phosphorus and its role in Lake Erie\'s re-eutrophication. That same year, NCWQR joins the USDA\'s Long-Term Agro-Ecosystem Research (LTAR) network.',
    image: '/images/kenneth-krieger-2026.jpg',
    imageCaption: 'Kenneth Krieger, fifth director of the NCWQR in 2010',
    color: '#DC2626',
  },
  {
    id: 'e2016',
    year: '2016–2019',
    era: 'A New Chapter',
    title: 'New Leadership, New Policy, and a 50th Anniversary',
    body: 'Laura Johnson is named the sixth Director of NCWQR in 2016, becoming the first woman to lead the center. That same year, the U.S. and Canada formally adopt 40% phosphorus reduction targets for Lake Erie, using NCWQR\'s 40+ year monitoring dataset as the primary scientific baseline. In 2018, NCWQR co-founds the Ohio Partnership for Water, Industrial and Cyber Security (OPWICS) with Terra Community College and Tiffin University. Heidelberg faculty approve the Environmental Science and Sustainability major and a specialized Watershed Science concentration in 2019. The same year, NCWQR celebrates 50 years of monitoring, analyzing, and educating to protect freshwater resources — a milestone that few scientific programs in the world can match.',
    image: '/images/people/dr-laura-johnson-2026.jpg',
    imageCaption: 'Laura Johnson, first woman to lead the center, pictured in the lab',
    color: DARK_BLUE,
  },
];

// ─── Historical Figures ───────────────────────────────────────────────────────

const historicalFigures = [
  {
    id: 'hf1',
    name: 'Dr. Ira T. Wilson',
    years: '1923 – c. 1960s',
    role: 'Heidelberg\'s First Scholar-Teacher',
    photo: 'https://images.unsplash.com/photo-1772470091632-8ed5699d03de?w=400&q=80',
    degrees: [
      'Ph.D. in Aquatic Biology',
    ],
    bio: 'Dr. Wilson arrived at Heidelberg in 1923 and became the institution\'s first faculty member to balance rigorous scholarship with teaching. His summer research on lake bottom deposits in the region\'s waters established Heidelberg\'s earliest tradition of freshwater science. He mentored generations of students and inspired the aquatic studies program that David Baker would later inherit and transform.',
    legacy: 'Established Heidelberg\'s foundational tradition of aquatic scholarship',
  },
  {
    id: 'hf2',
    name: 'Dr. David B. Baker',
    years: '1966 – 1999 (Interim 2005)',
    role: 'Founder & First Director',
    photo: 'https://images.unsplash.com/photo-1750853754432-475026390c49?w=400&q=80',
    degrees: [
      'B.S. in Biology, Heidelberg College',
      'M.S. in Environmental Science, Ohio State University',
      'Ph.D. in Limnology, Michigan State University',
    ],
    bio: 'Dr. Baker is the defining figure in NCWQR\'s history. He returned to his alma mater in 1966 and, within three years, had secured federal funding, hired the first staff, and founded the Sandusky River Project — the seed of what would become a 50-year global monitoring legacy. His discovery that storm events drive agricultural phosphorus transport reshaped nutrient management science. He served as Director for 30 years, retired in 1999, and returned as Interim Director in 2005.',
    legacy: 'Founded NCWQR; architect of the world\'s longest continuous tributary monitoring program',
  },
  {
    id: 'hf3',
    name: 'Thomas C. Taylor',
    years: '1967 – c. 1980s',
    role: 'Co-Founder, Chemistry Professor',
    photo: 'https://images.unsplash.com/photo-1758685734565-fc8ff6e9ffcc?w=400&q=80',
    degrees: [
      'Ph.D. in Analytical Chemistry',
    ],
    bio: 'Professor Taylor partnered with David Baker in the fall of 1967 to implement the original "River Labs" component within Heidelberg\'s Introductory Biology courses. His analytical chemistry expertise was foundational to the lab\'s early water sampling and nutrient analysis methods. Together, he and Baker built the curriculum and field protocols that would evolve into NCWQR\'s world-class monitoring program.',
    legacy: 'Co-designed the original River Labs curriculum; established early analytical chemistry methods',
  },
  {
    id: 'hf4',
    name: 'R. Peter Richards',
    years: '1978 – c. 2010s',
    role: 'Research Scientist & Second Director',
    photo: 'https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=400&q=80',
    degrees: [
      'Ph.D. in Hydrology / Water Resources',
    ],
    bio: 'Peter Richards joined the Water Quality Laboratory in 1978 and became one of the most influential research scientists in the center\'s history. He assumed the directorship in 1999 when Baker retired and oversaw the lab\'s Congressional designation as the National Center for Water Quality Research in 2002. He is co-creator of the Richards-Baker Flashiness Index (2004), one of the most widely cited stream hydrology metrics worldwide, and a leading authority on long-term nutrient trend analysis in Great Lakes tributaries.',
    legacy: 'Co-created the Richards-Baker Flashiness Index; directed NCWQR through its national designation',
  },
  {
    id: 'hf5',
    name: 'Timothy Loftus',
    years: '2002 – 2005',
    role: 'Third Director',
    photo: 'https://images.unsplash.com/photo-1770219733996-85ce5b943a18?w=400&q=80',
    degrees: [
      'M.S. in Environmental Management',
    ],
    bio: 'Timothy Loftus was the first Director of NCWQR hired from outside the Heidelberg community, bringing a fresh administrative perspective to the newly renamed center. His tenure coincided with the Congressional designation of 2002 and the planning for the center\'s move to Gillmor Science Hall. He departed in 2005, at which point David Baker returned as Interim Director.',
    legacy: 'First outside-hire Director; steered NCWQR through its transition to national status',
  },
  {
    id: 'hf6',
    name: 'Gary Winston',
    years: '2007 – 2010',
    role: 'Fourth Director',
    photo: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?w=400&q=80',
    degrees: [
      'Ph.D. in Aquatic Ecology',
    ],
    bio: 'Gary Winston was appointed the fourth Director of NCWQR in 2007. During his tenure, he expanded the center\'s watershed modeling capabilities with the addition of Remegio Confesor in 2008, and oversaw a critical funding crisis in 2009 when state support for the HTLP was cut by a gubernatorial line-item veto. His advocacy helped sustain the program until funding was restored in 2011.',
    legacy: 'Expanded watershed modeling; navigated the HTLP funding crisis of 2009',
  },
  {
    id: 'hf7',
    name: 'Kenneth A. Krieger',
    years: '1978 – 2016',
    role: 'Research Scientist & Fifth Director',
    photo: 'https://images.unsplash.com/photo-1602610187228-ff21f0316be0?w=400&q=80',
    degrees: [
      'Ph.D. in Aquatic Ecology',
    ],
    bio: 'Ken Krieger spent nearly four decades at NCWQR, joining in 1978 and rising to become the fifth Director in 2010. He is perhaps best known for his 1992 discovery — during an OSU Stone Lab field trip — of the first burrowing mayfly (Hexagenia) nymphs in Lake Erie\'s Western Basin since their catastrophic disappearance in 1953. This discovery became an iconic symbol of the ecological recovery that NCWQR\'s research had helped catalyze. He led the center\'s partnership with NOAA to develop HAB forecasting for Lake Erie.',
    legacy: 'Rediscovered Hexagenia in Lake Erie (1992); pioneered NOAA HAB forecasting partnership',
  },
];

// ─── Gallery Photos ───────────────────────────────────────────────────────────

const galleryPhotos = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1670846196914-43329e6a7c72?w=800&q=80',
    caption: 'NCWQR researchers aboard the R/V Roger R. Simons during the Lake Erie Nearshore Study, 1978–1979. The team sampled 89 stations across the lake.',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1513420558496-c3e2534de0ba?w=800&q=80',
    caption: 'Water samples collected from Maumee River monitoring stations, ready for nutrient analysis at the laboratory. Each sample is logged and tracked through the LIMS system.',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?w=800&q=80',
    caption: 'Analytical laboratory operations at the Water Quality Laboratory, 1980s. Phosphorus and nitrate analyses are conducted on thousands of samples annually.',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1591296451961-1513fea61c93?w=800&q=80',
    caption: 'Agricultural tile drainage in the Maumee watershed — the dominant pathway for dissolved reactive phosphorus entering Lake Erie from farmland.',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=800&q=80',
    caption: 'A researcher examines water samples under microscopy at the NCWQR laboratory, Gillmor Science Hall.',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1744968777132-0f856bc353d6?w=800&q=80',
    caption: 'A harmful algal bloom (HAB) on Lake Erie, as seen from the air. NCWQR Maumee River loading data feeds directly into NOAA\'s annual HAB severity forecast.',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1756832430978-0d865538e688?w=800&q=80',
    caption: 'The Toledo water crisis of August 2–4, 2014, galvanized public attention around dissolved reactive phosphorus — a pollutant NCWQR had been tracking for decades.',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1759116119693-2ea4e37df07c?w=800&q=80',
    caption: 'Lake Erie at dusk — the body of water that NCWQR\'s half-century of data has done more to protect than perhaps any other scientific program in the Great Lakes basin.',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1770321113244-7b9f0c0c438a?w=800&q=80',
    caption: 'Fifty years of tributary nutrient loading data, visualized. The HTLP dataset is freely available through the NCWQR data portal.',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1771684512143-88bdb34782fa?w=800&q=80',
    caption: 'Private well water quality testing kits from the Cooperative Private Well Testing Program — the program eventually covered over 70,000 Ohio wells between 1986 and the 2000s.',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1765318720856-ae0b415120ed?w=800&q=80',
    caption: 'The return of Hexagenia mayflies to Lake Erie\'s Western Basin, discovered by Ken Krieger in 1992, was a celebrated ecological milestone linked to decades of nutrient reduction work.',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1741529189646-056bf8ea92cd?w=800&q=80',
    caption: 'Gillmor Science Hall, Heidelberg University — home of NCWQR since 2005. The center occupies the "penthouse" floor of this modern research facility.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TimelineEvent({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex flex-col lg:flex-row items-start gap-0 lg:gap-0">
      {/* ── Mobile: simple stacked layout ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55 }}
        className="lg:hidden w-full pl-10 pb-12 relative"
      >
        {/* Mobile connector dot */}
        <div
          className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow z-10"
          style={{ backgroundColor: event.color }}
        />
        <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-gray-200 z-0" />

        <div className="inline-flex items-center gap-2 mb-2">
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
            style={{ backgroundColor: event.color }}
          >
            {event.year}
          </span>
          <span className="text-xs text-gray-400 italic">{event.era}</span>
        </div>
        <h3 className="font-bold mb-3" style={{ fontSize: '1.05rem', color: DARK_BLUE, lineHeight: 1.3 }}>
          {event.title}
        </h3>
        {/* Image */}
        <div className="rounded-xl overflow-hidden mb-4 border border-gray-100 shadow-sm aspect-video">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <p className="text-sm text-gray-400 italic mb-3 text-center">{event.imageCaption}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{event.body}</p>
      </motion.div>

      {/* ── Desktop: alternating layout ── */}
      <div className="hidden lg:grid w-full grid-cols-[1fr_60px_1fr] items-start gap-0 pb-16">
        {/* Left column */}
        <div className={`pr-8 ${isLeft ? '' : ''}`}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs text-gray-400 italic px-4 py-2 border-t border-gray-50 text-center">{event.imageCaption}</p>
            </motion.div>
          )}
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-right pt-2"
            >
              <div className="inline-flex items-center gap-2 mb-2 flex-row-reverse">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: event.color }}
                >
                  {event.year}
                </span>
                <span className="text-xs text-gray-400 italic">{event.era}</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '1.1rem', color: DARK_BLUE, lineHeight: 1.3 }}>
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.body}</p>
            </motion.div>
          )}
        </div>

        {/* Center: line + dot */}
        <div className="flex flex-col items-center">
          <div
            className="w-5 h-5 rounded-full border-2 border-white shadow-md z-10 mt-2 flex-shrink-0"
            style={{ backgroundColor: event.color }}
          />
          <div className="flex-1 w-0.5 bg-gray-200 mt-1" style={{ minHeight: '100%' }} />
        </div>

        {/* Right column */}
        <div className="pl-8">
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-xs text-gray-400 italic px-4 py-2 border-t border-gray-50 text-center">{event.imageCaption}</p>
            </motion.div>
          )}
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="pt-2"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold px-2.5 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: event.color }}
                >
                  {event.year}
                </span>
                <span className="text-xs text-gray-400 italic">{event.era}</span>
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: '1.1rem', color: DARK_BLUE, lineHeight: 1.3 }}>
                {event.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{event.body}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function HistoricalFigureCard({ figure }: { figure: typeof historicalFigures[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="flex flex-col items-center bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md transition-shadow"
    >
      {/* Circle photo */}
      <div
        className="w-24 h-24 rounded-full overflow-hidden border-4 mb-4 flex-shrink-0 shadow-md"
        style={{ borderColor: BLUE + '40' }}
      >
        <img
          src={figure.photo}
          alt={figure.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name & years */}
      <h3 className="font-bold mb-0.5" style={{ fontSize: '0.95rem', color: DARK_BLUE, lineHeight: 1.3 }}>
        {figure.name}
      </h3>
      <p className="text-xs font-medium mb-1" style={{ color: BLUE }}>{figure.years}</p>
      <span
        className="text-xs px-2 py-0.5 rounded-full text-white mb-4"
        style={{ backgroundColor: DARK_BLUE }}
      >
        {figure.role}
      </span>

      {/* Degrees */}
      {figure.degrees.length > 0 && (
        <div className="w-full mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Education</p>
          {figure.degrees.map((d, i) => (
            <p key={i} className="text-xs text-gray-500">{d}</p>
          ))}
        </div>
      )}

      <div className="w-full h-px bg-gray-100 mb-4" />

      {/* Bio */}
      <p className="text-xs text-gray-600 leading-relaxed text-left mb-4">{figure.bio}</p>

      {/* Legacy */}
      <div className="w-full mt-auto bg-blue-50 rounded-xl p-3">
        <div className="flex items-start gap-2">
          <Quote className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: BLUE }} />
          <p className="text-xs text-blue-700 italic leading-snug">{figure.legacy}</p>
        </div>
      </div>
    </motion.div>
  );
}

function GalleryLightbox({
  photos,
  startIndex,
  onClose,
}: {
  photos: typeof galleryPhotos;
  startIndex: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  const prev = () => setIdx((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIdx((i) => (i + 1) % photos.length);

  const photo = photos[idx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.88)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full max-h-[70vh] object-cover"
        />
        {/* Caption bar */}
        <div className="bg-gray-900 px-6 py-4">
          <p className="text-sm text-gray-200 leading-relaxed">{photo.caption}</p>
          <p className="text-xs text-gray-500 mt-1">{idx + 1} / {photos.length}</p>
        </div>

        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function History() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Our History"
        subtitle="From a $2,500 teaching grant in 1967 to a Congressional designation and 50 years of continuous data — the story of NCWQR is the story of American water quality science."
        imageUrl="https://images.unsplash.com/photo-1454702762838-a6df8cc3517f?w=1600&q=85"
      />

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: BLUE }}>
              Est. 1969 · Tiffin, Ohio
            </p>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: '1.1rem' }}>
              What began as a field biology exercise for Heidelberg undergraduates grew into the world&apos;s longest-running 
              continuous tributary water quality monitoring program. Over more than five decades, NCWQR has documented 
              the collapse and recovery of Lake Erie, revolutionized understanding of agricultural nutrient transport, 
              and shaped water policy across the United States and Canada.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { value: '1969', label: 'Founded' },
                { value: '55+', label: 'Years of Continuous Data' },
                { value: '70,000+', label: 'Wells Tested' },
                { value: '28', label: 'Monitoring Stations' },
                { value: '2002', label: 'Congressional Designation' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-bold" style={{ fontSize: '1.6rem', color: BLUE }}>{s.value}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              A chronological record
            </p>
            <h2 className="font-bold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: DARK_BLUE }}>
              Timeline of Discovery
            </h2>
          </motion.div>

          {/* Desktop: the vertical center line runs through the grid */}
          <div className="relative">
            {/* Full-height center line (desktop only) */}
            <div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 z-0"
            />

            <div className="relative z-10">
              {timelineEvents.map((event, i) => (
                <TimelineEvent key={event.id} event={event} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ──────────────────────────────────────────── */}
      <div
        className="py-14 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${DARK_BLUE} 0%, ${BLUE} 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <Quote className="w-8 h-8 text-blue-300 mx-auto mb-4" />
          <blockquote className="text-white mb-4" style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', lineHeight: 1.6, fontStyle: 'italic' }}>
            &ldquo;In many instances we were in the right place at the right time with the right people.&rdquo;
          </blockquote>
          <p className="text-blue-300 text-sm">— Dr. David B. Baker, Founder</p>
        </div>
      </div>

      {/* ── Historical Figures ────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              Those who came before
            </p>
            <h2 className="font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: DARK_BLUE }}>
              Founding & Legacy Figures
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: '0.95rem' }}>
              Scientists, directors, and educators who shaped NCWQR — and whose contributions continue to echo through the center&apos;s work today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {historicalFigures.map((figure) => (
              <HistoricalFigureCard key={figure.id} figure={figure} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: BLUE }}>
              A visual record
            </p>
            <h2 className="font-bold mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: DARK_BLUE }}>
              Historical Gallery
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-sm">
              Click any photo to expand and read its caption.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryPhotos.map((photo, i) => (
              <motion.button
                key={photo.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                onClick={() => setLightboxIdx(i)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs leading-snug line-clamp-3 text-left">{photo.caption}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <GalleryLightbox
            photos={galleryPhotos}
            startIndex={lightboxIdx}
            onClose={() => setLightboxIdx(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}