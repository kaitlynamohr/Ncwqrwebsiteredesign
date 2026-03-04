import { PageHero } from '../components/PageHero';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const newsItems = [
  {
    id: 1,
    date: 'February 14, 2025',
    title: 'NCWQR Joins COMPASS Great Lakes Coastal Observations Network',
    excerpt:
      'NCWQR has partnered with Pacific Northwest National Laboratory and the broader COMPASS (Coastal Observations, Mechanisms, and Predictions Across Systems and Scales) network to expand coastal ecosystem monitoring across the Great Lakes. This DOE-funded initiative examines how climate change alters carbon, nutrient, and water cycling in freshwater coastal zones.',
    image: 'https://images.unsplash.com/photo-1752424751303-33bde8f3c487?w=800&q=80',
    tag: 'Partnership',
    tagColor: BLUE,
  },
  {
    id: 2,
    date: 'November 8, 2024',
    title: '2024 Tributary Loading Report Now Available for Download',
    excerpt:
      'The annual Heidelberg Tributary Loading Program data summary for all 18 active monitoring stations is now published and available through the HTLP Data Portal. The 2024 report includes full season nutrient, sediment, and discharge data for the Maumee, Sandusky, Cuyahoga, and other major Lake Erie tributaries.',
    image: 'https://images.unsplash.com/photo-1763658997578-90f853cff359?w=800&q=80',
    tag: 'Data Release',
    tagColor: GREEN,
  },
  {
    id: 3,
    date: 'August 29, 2024',
    title: 'HAB Season Outlook: NOAA Forecast Informed by NCWQR Spring Data',
    excerpt:
      'NOAA\'s 2024 harmful algal bloom forecast for Lake Erie\'s Western Basin drew heavily on tributary phosphorus loading data collected by NCWQR throughout the spring season. Above-average spring loading was observed at the Maumee River — the basin\'s largest tributary — suggesting elevated bloom risk for mid-summer.',
    image: 'https://images.unsplash.com/photo-1595114828630-4c3d46d92a1b?w=800&q=80',
    tag: 'HAB Forecast',
    tagColor: '#B45309',
  },
  {
    id: 4,
    date: 'April 17, 2024',
    title: 'New Study: Veterinary Pharmaceuticals Detected in Lake Erie Tributaries',
    excerpt:
      'A new study led by NCWQR in partnership with the University of Nebraska found detectable levels of veterinary pharmaceuticals — including antibiotics and hormones — in several Lake Erie tributaries using passive sampling methods. The findings raise questions about the environmental fate of agricultural drug use in the watershed.',
    image: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=800&q=80',
    tag: 'Research',
    tagColor: BLUE,
  },
  {
    id: 5,
    date: 'January 22, 2024',
    title: 'NCWQR Welcomes 2024 Student Intern Cohort',
    excerpt:
      'NCWQR is pleased to introduce its 2024 cohort of student research interns from Heidelberg University. Interns will support field sampling, laboratory analysis, and data management across the HTLP network throughout the spring and summer monitoring seasons.',
    image: 'https://images.unsplash.com/photo-1748261347768-a32434751a9a?w=800&q=80',
    tag: 'Students',
    tagColor: GREEN,
  },
  {
    id: 6,
    date: 'October 3, 2023',
    title: 'H2Ohio Wetland Monitoring: First Year Results Published',
    excerpt:
      'NCWQR\'s contribution to the LEARN (Lake Erie Agronomic Research Network) H2Ohio wetland monitoring program has yielded promising first-year data. Pilot wetland sites showed significant reductions in dissolved reactive phosphorus concentrations in outflow compared to inflow — consistent with wetland phosphorus retention literature.',
    image: 'https://images.unsplash.com/photo-1752424751303-33bde8f3c487?w=800&q=80',
    tag: 'Research',
    tagColor: BLUE,
  },
];

export function News() {
  return (
    <div>
      <PageHero
        title="News & Updates"
        subtitle="The latest research findings, data releases, partnerships, and announcements from NCWQR."
        imageUrl="https://images.unsplash.com/photo-1748892030128-341ea9ea13f8?w=1600&q=85"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          {/* Featured article */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-12 hover:shadow-md transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: newsItems[0].tagColor }}
                  >
                    {newsItems[0].tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {newsItems[0].date}
                  </span>
                </div>
                <h2 className="mb-4 leading-snug" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f2942' }}>
                  {newsItems[0].title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{newsItems[0].excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: BLUE }}
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {newsItems.slice(1).map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: item.tagColor }}
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </div>
                  <h3
                    className="mb-3 leading-snug"
                    style={{ fontSize: '1rem', fontWeight: 700, color: '#0f2942' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold"
                    style={{ color: BLUE }}
                  >
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
