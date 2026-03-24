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
    image: 'https://images.unsplash.com/photo-1728070920529-2a5dc82bbae0?w=800&q=80',
    imageCaption: 'Heidelberg University campus, circa early 20th century',
    color: '#6B4226',
    context: [],
  },
  {
    id: 'e1953',
    year: '1953',
    era: 'A Warning Sign',
    title: "Lake Erie's Ecosystem Collapses",
    body: "A period of calm winds and stratified water causes catastrophic hypoxia in Lake Erie's Western Basin, resulting in near-100% mortality of burrowing mayfly (Hexagenia) populations. This ecological collapse — caused by nutrient over-enrichment from agricultural and municipal sources — would not reverse for four decades, and would become a defining motivation for the water quality research to come.",
    image: 'https://images.unsplash.com/photo-1454702762838-a6df8cc3517f?w=800&q=80',
    imageCaption: 'Lake Erie, one of the most impacted freshwater bodies in North America during this era',
    color: '#0E7490',
    context: [],
  },
  {
    id: 'e1967',
    year: '1967–1969',
    era: 'Origins',
    title: 'The River Lab Is Born — Jack Kramer & Room L-120',
    body: 'In the fall of 1967, Dr. David B. Baker incorporated a three-week lab sequence on Sandusky River pollution directly into his intro biology course — students sampled on the river themselves. In December 1968, a $47,650 grant from the U.S. Federal Water Quality Administration allowed Baker to buy equipment, hire part-time student workers, and bring on the first full-time staff member, Jack Kramer. Room L-120 in Laird Science Hall was dedicated to River Lab research. The lab was formally established as the Sandusky River Project in 1969. That summer, record-setting storms upended the planned low-flow study: researchers discovered that storm events — not municipal sewage — were responsible for the vast majority of phosphorus transport in agricultural watersheds.',
    image: 'https://images.unsplash.com/photo-1605122822918-26956d16a6f2?w=800&q=80',
    imageCaption: 'Field researchers collecting water samples from a tributary station, late 1960s',
    color: BLUE,
    context: [
      '1967 — Environmental Defense (now Environmental Defense Fund) founded to ban DDT after discovering its effects on osprey and other birds of prey.',
      'June 22, 1969 — The Cuyahoga River caught fire near Cleveland; Time magazine coverage brought water quality to the forefront of national environmental policy.',
    ],
  },
  {
    id: 'e1970',
    year: '1970–1973',
    era: 'Early Discoveries',
    title: 'First Earth Day, the EPA & a Landmark Publication',
    body: "The storm-event discoveries of 1969 continued to bear scientific fruit. In 1973, Baker and Kramer published \"Phosphorus Sources and Transport in an Agricultural River Basin of Lake Erie,\" demonstrating that up to 75% of phosphorus entering the Sandusky River came from rural farmland — not sewage plants or industry. This finding reshaped nutrient management science and gave the River Lab a clear long-term mission: track non-point source pollution at scale.",
    image: 'https://images.unsplash.com/photo-1591296451961-1513fea61c93?w=800&q=80',
    imageCaption: 'Agricultural fields in the Sandusky watershed — the birthplace of a 50-year monitoring mission',
    color: GREEN,
    context: [
      'April 22, 1970 — First Earth Day celebrated. The U.S. EPA was founded in December 1970 amid heightened environmental concern.',
      '1972 — The Clean Water Act amended the Federal Water Pollution Control Act, establishing the basic structure for regulating U.S. water pollution and acknowledging non-point source issues.',
      '1973 — "Soylent Green" released: sci-fi film depicting a dystopian future caused by pollution, overpopulation, and the Greenhouse Effect — starred Charlton Heston.',
    ],
  },
  {
    id: 'e1974',
    year: '1974–1976',
    era: 'Growth & Legislation',
    title: 'Army Corps Grants, the Sandusky Symposium & New Federal Law',
    body: "Between 1974 and 1976, three grants from the U.S. Army Corps of Engineers — totaling $207,474 as part of the Lake Erie Wastewater Management Study — funded sample collection and analysis from eight Lake Erie tributaries: the Sandusky, Maumee, Portage, and Huron Rivers, plus Tymochtee, Honey, Broken Sword, and Wolf Creeks. Ellen Ewing joined as full-time lab manager in 1976. In 1975, Heidelberg College and Bowling Green State University co-sponsored the Sandusky River Symposium, drawing over 150 scientists, managers, and government officials; the proceedings helped guide the lab's future research direction. The 1974 Safe Drinking Water Act protected public drinking water supplies, though it did not cover the roughly 15% of Americans relying on private wells. The 1976 Toxic Substances Control Act allowed the EPA to regulate new and existing chemicals — including PCBs, lead-based paints, asbestos, and radon.",
    image: 'https://images.unsplash.com/photo-1586398251212-c060912c38cd?w=800&q=80',
    imageCaption: 'Industrial runoff into Great Lakes tributaries drove congressional action throughout the 1970s',
    color: '#6B21A8',
    context: [],
  },
  {
    id: 'e1978',
    year: '1978',
    era: 'Expansion Spotlight',
    title: 'Major Expansion — Staff of 18, Lake Research & a New Name',
    body: "In 1978, a $633,000 U.S. EPA grant as part of the Lake Erie Intensive Study drove an historic expansion. Staff grew to 18 full-time professional, technical, and administrative employees. New members included Dr. Ken Krieger, Dr. R. Peter Richards (who would serve 1978–2014), and research assistant Barbara J. Merryfield. The study aimed to provide detailed information on tributary, nearshore, and open lake water quality in Lake Erie. With research expanding from rivers to the lake itself, the River Lab was formally renamed the Water Quality Laboratory. The U.S. EPA loaned the vessel Roger R. Simons to Heidelberg for lake research — it displayed Heidelberg colors and the Water Quality Lab logo while operating on Lake Erie.",
    image: 'https://images.unsplash.com/photo-1670846196914-43329e6a7c72?w=800&q=80',
    imageCaption: 'NCWQR researchers during the 1978–1979 Lake Erie Intensive Study aboard the R/V Roger R. Simons',
    color: '#0E7490',
    context: [],
  },
  {
    id: 'e1980',
    year: '1980',
    era: 'The Pesticides Decade',
    title: 'Pesticide Monitoring Added to the Tributary Program',
    body: "In response to the rise of no-till agriculture, the lab added pesticide analyses — including atrazine, alachlor, metolachlor, acetochlor, and others — to its tributary monitoring program. The goal was to study the presence and persistence of agricultural chemicals in northwest Ohio's waterways, a line of inquiry that would yield major scientific findings throughout the decade.",
    image: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=800&q=80',
    imageCaption: "Pesticide and herbicide analysis became a core component of the lab's monitoring work beginning in 1980",
    color: GOLD,
    context: [
      'May 18, 1980 — Mount St. Helens eruption: the worst volcanic disaster in U.S. history in terms of lives lost and economic impact.',
    ],
  },
  {
    id: 'e1984',
    year: '1984–1987',
    era: 'The Pesticides Decade',
    title: 'Edison Proposal & Pesticides in Rainwater Published in Nature',
    body: "In 1986, the lab submitted a $2 million grant to the Thomas A. Edison Program (Ohio Dept. of Development); while it did not receive the award, the proposal caught the attention of Governor Richard Celeste and indirectly generated at least $650,000 in state support. In 1987, Richards, Kramer, Baker, and Krieger published in Nature demonstrating that common pesticides are present in rainwater — revealing a previously overlooked transport pathway in agricultural water cycles. Though environmental impact was unclear due to low concentrations, the publication set a new standard for monitoring scope and reach.",
    image: 'https://images.unsplash.com/photo-1575467678971-7cd5c2937dc6?w=800&q=80',
    imageCaption: 'Analytical laboratory operations — the 1987 Nature publication on pesticides in rainwater was a landmark moment for the lab',
    color: GOLD,
    context: [
      '1984 — Bhopal Disaster: a gas leak at a Union Carbide pesticide plant in India exposed over 500,000 people to toxic methyl isocyanate.',
      '1986 — Chernobyl: explosion and fire at a Ukrainian nuclear plant released radioactive material across Europe; health effects continue to be tracked.',
    ],
  },
  {
    id: 'e1989',
    year: '1989',
    era: 'The Pesticides Decade',
    title: 'Statewide Well Survey — 16,000 Wells, 76 Counties',
    body: "In June 1989, the lab published results of a statewide survey of private wells covering over 16,000 wells in 76 of Ohio's 88 counties. The program was coordinated by Nancy Miller, who joined the lab in 1986. The findings documented nitrate and herbicide contamination in private drinking water sources across the state — water that the Safe Drinking Water Act did not cover. As of January 2014, the program had expanded to over 60,850 wells tested across 390 counties in 32 states.",
    image: 'https://images.unsplash.com/photo-1771684512143-88bdb34782fa?w=800&q=80',
    imageCaption: 'Private well water quality testing — the 1989 statewide survey grew into a multi-decade, 32-state program',
    color: GOLD,
    context: [
      '1989 — Exxon Valdez ran aground off the coast of Alaska, releasing approximately 11 million gallons of crude oil into Prince William Sound.',
    ],
  },
  {
    id: 'e1990',
    year: '1990–1992',
    era: 'Ecosystem Programs',
    title: 'Lake Erie Agroecosystem Program & the Return of Hexagenia',
    body: "In 1990, the Lake Erie Agroecosystem Program — funded by the Gund and Joyce Foundations — was launched to address agricultural pollution through large-scale ecosystem analyses, working directly with farmers to improve agriculture's impact on water resources. This project, along with the Lake Erie Agricultural Systems for Environmental Quality (1996), eventually led to the formation of the Sandusky River Watershed Coalition. Then in 1992, during an OSU Stone Laboratory field trip, Dr. Ken Krieger discovered the first burrowing mayfly (Hexagenia) nymphs in Lake Erie's Western Basin since their catastrophic disappearance in 1953 — a landmark indicator of improved lake water quality tied to decades of nutrient reduction work informed by NCWQR data.",
    image: 'https://images.unsplash.com/photo-1765318720856-ae0b415120ed?w=800&q=80',
    imageCaption: "The return of Hexagenia mayflies to Lake Erie's Western Basin in 1992 was a celebrated milestone of ecological recovery",
    color: GREEN,
    context: [
      "1990 — Earth Day's 20th anniversary was celebrated globally by over 100 million people across 141 countries, formalizing the annual April 22nd tradition.",
    ],
  },
  {
    id: 'e1994',
    year: '1994–1999',
    era: 'Expanding the Mission',
    title: "Ohio River Basin Expansion, Watershed Coalition & Baker's Retirement",
    body: "Between 1994 and 1996, the lab added monitoring stations on the Scioto, Muskingum, and Great Miami Rivers, expanding beyond the Lake Erie watershed. Long-term monitoring now covered more than 50% of Ohio's total land area. The 1996 Safe Drinking Water Act Amendments required public water suppliers to inform customers about chemicals and microbes in their water. In 1996, the Lake Erie Agricultural Systems for Environmental Quality project led to the formation of the Sandusky River Watershed Coalition. In 1997, Dr. Ken Krieger received an $85,000 grant to continue studying Hexagenia mayflies — critical as both a food source for sport fish and an indicator of lake ecosystem health. Dr. David Baker retired in June 1999; Dr. Peter Richards became director and served until July 2002. Baker continued to play a critical role in lab operations after retirement.",
    image: 'https://images.unsplash.com/photo-1759116119693-2ea4e37df07c?w=800&q=80',
    imageCaption: "Expanding monitoring to the Ohio River basin extended NCWQR's reach across more than half of Ohio's total land area",
    color: GREEN,
    context: [
      '1997 — Kyoto Protocol: thirty-eight industrialized nations agreed to reduce greenhouse gas emissions ~5% over 15 years; the U.S. agreed to a 7% reduction.',
    ],
  },
  {
    id: 'e2001',
    year: '2001–2002',
    era: 'National Recognition',
    title: 'An Act of Congress — The Lab Becomes NCWQR',
    body: "In 2002, by a resolution of the U.S. House of Representatives introduced by Ohio Representative Paul E. Gillmor (for whom Gillmor Science Hall is named), the Water Quality Laboratory was officially renamed the National Center for Water Quality Research (NCWQR) — a recognition of its national and international significance. That same year, a special edition of the Journal of Environmental Quality highlighted NCWQR work and other researchers from the USDA-sponsored Lake Erie Agricultural Systems for Environmental Quality project, with several articles authored by NCWQR staff. The edition focused on agricultural land use and water quality in northwest Ohio between 1975 and 1995.",
    image: 'https://images.unsplash.com/photo-1741529189646-056bf8ea92cd?w=800&q=80',
    imageCaption: "Gillmor Science Hall — named for the congressman who championed NCWQR's national designation in 2002",
    color: BLUE,
    context: [
      '2001 — President George W. Bush refused to sign and ratify the Kyoto Protocol. 141 other countries, including EU members, have since ratified it.',
    ],
  },
  {
    id: 'e2004',
    year: '2004–2006',
    era: 'Data Goes Global',
    title: 'The Flashiness Index & NCWQR Featured in Science Magazine',
    body: "In 2004, Baker, Richards, Loftus, and Kramer published \"A New Flashiness Index: Characteristics and Applications to Midwestern Streams\" in the Journal of American Water Resources Association — an index describing how land use impacts stream flashiness during storm events. With over 180 citations, it is the lab's most-cited publication and a standard tool in stream hydrology worldwide. The NCWQR moved to the top floor of the newly constructed Gillmor Science Hall in 2005, and its Tributary Loading Website launched that year — making decades of raw data freely accessible globally. In 2006, NCWQR's online database was featured in Science magazine's NETWATCH section (February 10), spotlighting 11 Ohio rivers and long-term water quality trend data, all freely available.",
    image: 'https://images.unsplash.com/photo-1513420558496-c3e2534de0ba?w=800&q=80',
    imageCaption: "NCWQR's long-term dataset, featured in Science magazine in 2006, made decades of tributary data freely available worldwide",
    color: BLUE,
    context: [
      'August 2005 — Hurricane Katrina: the most economically costly natural disaster in U.S. history; New Orleans was heavily impacted and thousands displaced.',
    ],
  },
  {
    id: 'e2007',
    year: '2007–2009',
    era: 'New Leadership & Funding Crisis',
    title: 'A Fourth Director, Expanded Modeling & a Budget Threat',
    body: "Gary Winston was appointed the fourth Director of NCWQR in 2007. In 2008, Remegio Confesor joined with advanced watershed modeling capabilities, broadening the center's scientific toolkit. Then in 2009, a line-item veto by Ohio Governor Strickland threatened HTLP funding — triggering a two-year crisis that would test the center's resilience and its advocates in Columbus and Washington.",
    image: 'https://images.unsplash.com/photo-1770321113244-7b9f0c0c438a?w=800&q=80',
    imageCaption: "Long-term tributary monitoring data is the backbone of NCWQR's research — and its continued funding was at stake in 2009",
    color: '#DC2626',
    context: [
      '2007 — Researchers announced Arctic sea ice hit all-time lows — a 27% reduction since 2005 — with global warming cited as the primary cause.',
    ],
  },
  {
    id: 'e2010',
    year: '2010–2011',
    era: 'Recovery & Partnership',
    title: 'A Fifth Director, HTLP Funding Restored & HAB Forecasting Begins',
    body: "Ken Krieger became the fifth Director of NCWQR in 2010. The EPA marked its 40th anniversary that same year. State funding for the HTLP was restored in 2011 after a two-year hiatus. That year, NCWQR began collaborating with NOAA to develop annual Harmful Algal Bloom (HAB) forecasts for Lake Erie based on Maumee River phosphorus loading data — a partnership that now reaches millions of people each summer through media coverage of the annual bloom outlook.",
    image: 'https://images.unsplash.com/photo-1744968777132-0f856bc353d6?w=800&q=80',
    imageCaption: "Harmful algal blooms on Lake Erie — NCWQR Maumee River data feeds directly into NOAA's annual HAB severity forecast",
    color: '#0E7490',
    context: [
      "March 11, 2011 — A massive 9.0 earthquake off Japan's coast triggered a devastating tsunami, killing nearly 20,000 people and causing the Fukushima nuclear disaster.",
    ],
  },
  {
    id: 'e2013',
    year: '2013–2014',
    era: 'Crisis & Consequence',
    title: 'Laura Johnson Joins, the Toledo Water Crisis & the LTAR Network',
    body: "Laura Johnson joined the NCWQR staff in 2013. Then, on August 2–4, 2014, the Toledo water crisis shut off drinking water for 500,000 residents and focused intense international media attention on NCWQR's decades of research on dissolved reactive phosphorus and its role in Lake Erie's re-eutrophication. The crisis crystallized the policy importance of long-term monitoring and validated the center's 40+ years of work. That same year, NCWQR joined the USDA's Long-Term Agro-Ecosystem Research (LTAR) network.",
    image: 'https://images.unsplash.com/photo-1756832430978-0d865538e688?w=800&q=80',
    imageCaption: "The Toledo water crisis of August 2014 put NCWQR's dissolved reactive phosphorus research on the world stage",
    color: '#DC2626',
    context: [],
  },
  {
    id: 'e2016',
    year: '2016–Present',
    era: 'A New Chapter & Moving Forward',
    title: 'New Leadership, 16 Stations & a Changing World',
    body: "Laura Johnson was named the sixth Director of NCWQR in 2016, becoming the first woman to lead the center. That same year, the U.S. and Canada formally adopted 40% phosphorus reduction targets for Lake Erie, using NCWQR's 40+ year monitoring dataset as the primary scientific baseline. In 2018, NCWQR co-founded the Ohio Partnership for Water, Industrial and Cyber Security (OPWICS) with Terra Community College and Tiffin University. Heidelberg faculty approved the Environmental Science and Sustainability major and a specialized Watershed Science concentration in 2019. The same year, NCWQR celebrated 50 years of monitoring, analyzing, and educating to protect freshwater resources — a milestone few scientific programs worldwide can match. Moving forward, NCWQR has expanded the Heidelberg Tributary Loading Program to 16 stations, adding expertise in analytical chemistry, GIS and modeling, and new research partnerships. With global population past 7 billion, climate change impacts growing, and increasing public environmental awareness, the long-term historical data that NCWQR produces is more critical than ever.",
    image: 'https://images.unsplash.com/photo-1454702762838-a6df8cc3517f?w=800&q=80',
    imageCaption: 'NCWQR data helped shape the binational 40% phosphorus reduction targets signed in 2016',
    color: DARK_BLUE,
    context: [],
  },
];

// ─── Historical Figures ───────────────────────────────────────────────────────

const historicalFigures = [
  {
    id: 'hf1',
    name: 'Dr. David B. Baker',
    years: '1966 – 1999 (Interim 2005)',
    role: 'Founder & First Director',
    photo: '',
    degrees: [
      'B.S. in Biology, Heidelberg College',
      'M.S. in Environmental Science, Ohio State University',
      'Ph.D. in Limnology, Michigan State University',
    ],
    bio: 'Dr. Baker is the defining figure in NCWQR\'s history. He returned to his alma mater in 1966 and, within three years, had secured federal funding, hired the first staff, and founded the Sandusky River Project — the seed of what would become a 50-year global monitoring legacy. His discovery that storm events drive agricultural phosphorus transport reshaped nutrient management science. He served as Director for 30 years, retired in 1999, and returned as Interim Director in 2005.',
    legacy: 'Founded NCWQR; architect of the world\'s longest continuous tributary monitoring program',
  },
  {
    id: 'hf2',
    name: 'Jack Kramer',
    years: '1969 – 2018',
    role: 'Co-Founder & Lab Manager',
    photo: '',
    degrees: [
        'B.S. in Chemistry, Heidelberg College (1969)',
    ],
    bio: 'Jack Kramer was the first full-time employee of what would become the NCWQR, hired in 1969 straight out of Heidelberg by Dr. David Baker — his professor and mentor. As the lab\'s lead analytical chemist and sole lab manager for nearly 50 years, Jack was the operational backbone behind Baker\'s vision. He devised the systems to efficiently process thousands of water samples annually without sacrificing quality, and served as the lab\'s electrician, carpenter, plumber, welder, machinist, photographer, computer programmer, data manager, and teacher — earning the title "jack of all trades" in the most literal sense. He partially retired in 2012 and fully retired in 2018. Upon Jack\'s retirement, Dr. Baker and his wife compiled a book titled "The Lab That Jack Built" in his honor.',
    legacy: 'Co-founder of NCWQR; sole lab manager for nearly 50 years; built the analytical systems that made the world\'s longest continuous tributary monitoring dataset possible',
  },
  {
    id: 'hf3',
    name: 'Dr. Ken Krieger',
    years: '1978 – 2015',
    role: 'Biologist, Ecologist & Director (2010–2015)',
    photo: '',
    degrees: [
        'B.S. in Biology, Emory University',
        'M.S. in Biology (Ecology), institution unconfirmed',
        'Ph.D. in Biology (Ecology), institution unconfirmed',
    ],
    bio: 'Dr. Ken Krieger joined the NCWQR in 1978 as part of the same major expansion that brought Dr. Peter Richards aboard, both hired on the strength of the $633,000 EPA Lake Erie Intensive Study grant. For over three decades he was the lab\'s primary biologist and ecologist, leading research on invertebrate communities in Lake Erie, nearshore hypoxia in the central basin, the influence of agricultural ditch management on headwater streams, and the capacity of coastal wetlands to filter phosphorus, nitrogen, sediment, and pesticides from tributaries. His rediscovery of Hexagenia mayfly nymphs in Lake Erie sediment in 1992 — after decades of absence — became one of the lab\'s most publicized findings, signaling a measurable improvement in lake water quality. He taught limnology, water pollution biology, and environmental science at Heidelberg from 1978 to 2014, and taught the graduate limnology course at Ohio State\'s Stone Laboratory on Gibraltar Island for eleven summers. He became Director of the NCWQR in July 2010 and retired at the end of 2015.',
    legacy: 'Documented the return of Hexagenia mayflies to Lake Erie; led three decades of biological and ecological research on the lake\'s invertebrate communities and coastal wetlands; served as Director 2010–2015',
  },
  {
    id: 'hf4',
    name: 'R. Peter Richards',
    years: '1978 – c. 2010s',
    role: 'Research Scientist & Second Director',
    photo: '',
    degrees: [
      'Ph.D. in Hydrology / Water Resources',
    ],
    bio: 'Peter Richards joined the Water Quality Laboratory in 1978 and became one of the most influential research scientists in the center\'s history. He assumed the directorship in 1999 when Baker retired and oversaw the lab\'s Congressional designation as the National Center for Water Quality Research in 2002. He is co-creator of the Richards-Baker Flashiness Index (2004), one of the most widely cited stream hydrology metrics worldwide, and a leading authority on long-term nutrient trend analysis in Great Lakes tributaries.',
    legacy: 'Co-created the Richards-Baker Flashiness Index; directed NCWQR through its national designation',
  },
  {
    id: 'hf5',
    name: 'Barbara J. Merryfield',
    years: '1978 – 2020',
    role: 'Research Assistant',
    photo: '',
    degrees: [],
    bio: 'Barbara Merryfield joined the NCWQR in 1978 as part of the major EPA-funded expansion that year, and stayed for 42 years. As a Research Assistant, she was a constant presence in both the field and the lab — running sample collection routes, operating analytical equipment, and demonstrating lab procedures to visitors and students alike. She was one of three foundational staff members, alongside Ellen Ewing and Jack Kramer, who formed the operational core of the lab for decades. Barb retired at the end of August 2020.',
    legacy: '42 years of field and laboratory service; one of the three-person core that kept the NCWQR running across five decades',
  },
  {
    id: 'hf6',
    name: 'Ellen Ewing',
    years: '1976 – 2020',
    role: 'Lab Manager',
    photo: '',
    degrees: [],
    bio: 'Ellen Ewing joined the lab in 1976 and over 44 years became its institutional memory. As Lab Manager, she oversaw sample analysis, field collection logistics, and the day-to-day operations that kept the Heidelberg Tributary Loading Program running without interruption — through storms, staff turnover, and five different directors. She guided countless students and visitors through the lab\'s analytical systems, and was among the first to publicly articulate the origin story of the NCWQR: that it grew from a classroom biology exercise into a 50-year global monitoring program. She retired at the end of August 2020.',
    legacy: '44 years as Lab Manager; steward of the NCWQR\'s continuity and institutional knowledge across the lab\'s entire modern history',
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