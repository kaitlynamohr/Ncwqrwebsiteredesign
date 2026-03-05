import { PageHero } from '../components/PageHero';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const newsItems = [
  {
    id: 7,
    date: 'February 6, 2025',
    title: 'Summer Camp Opportunity: Water Detectives - Rivers and Wetlands',
    excerpt:
      'NCWQR is excited to announce a new summer camp opportunity for local middle school students: "Water Detectives - Rivers and Wetlands." This week-long camp will provide hands-on learning experiences focused on water quality monitoring, aquatic ecology, and conservation in Lake Erie\'s tributaries and wetlands. Campers will engage in field sampling, lab activities, and interactive lessons led by NCWQR scientists.',
    image: 'https://images.unsplash.com/photo-1752424751303-33bde8f3c487?w=800&q=80',
    tag: 'Event',
    tagColor: GREEN,
  },
  {
    id: 6,
    date: 'March 16, 2023',
    title: 'The Annual Report for 2022 is now available!',
    excerpt:
      'NCWQR\'s 2022 Annual Report is now available for download. The report highlights key findings from the year\'s monitoring efforts, including trends in nutrient loading, emerging contaminants, and ecological health indicators across the HTLP network. It also features updates on research projects, partnerships, and community engagement initiatives.',
    image: 'https://images.unsplash.com/photo-1763658997578-90f853cff359?w=800&q=80',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
  {
    id: 5,
    date: 'December 15, 2021',
    title: 'The Annual Report for 2021 is now available!',
    excerpt:
      'NCWQR\'s 2021 Annual Report is now available for download. The report highlights key findings from the year\'s monitoring efforts, including long-term moniroting and modeling of rivers feeding Lake Erie. It also features updates on new projects, technology, and partnerships to support sustainable water management.',
    image: 'https://images.unsplash.com/photo-1595114828630-4c3d46d92a1b?w=800&q=80',
    tag: 'Annual Report',
    tagColor: '#B45309',
  },
  {
    id: 4,
    date: 'April 26, 2021',
    title: 'Farewell to our Founder, Dr. David Baker',
    excerpt:
      'The passing of Dr. David Baker deeply impacted the NCWQR community, whose ongoing innovative thinking and dedication to water quality research continue to inspre students and scientists alike. Dr. David Baker will continue to guide the NCWQR\'s ongoing efforts to sutdy and improve watershed health in the Lake Erie region and beyond.',
    image: 'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=800&q=80',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  {
    id: 3,
    date: 'October 1, 2020',
    title: 'Happy New Year from NCWQR! Welcome to our 2020 Student Research Interns',
    excerpt:
      'NCWQR is excited to welcome our 2020 Student Research Interns! This year, we have a talented group of undergraduate and graduate students joining us for the summer to assist with field sampling, data analysis, and research projects focused on water quality in Lake Erie\'s tributaries. We look forward to their contributions and learning from their fresh perspectives.',
    image: 'https://images.unsplash.com/photo-1748261347768-a32434751a9a?w=800&q=80',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  {
    id: 2,
    date: 'March 20, 2020',
    title: 'Adjusting to COVID-19: NCWQR\'s Response and Continued Commitment to Research',
    excerpt:
      'The NCWQR team has had a busy spring sampling season and recent outreach activities, but we are adjusting to the new realities of COVID-19. We have implemented safety protocols for our field teams, including social distancing and enhanced sanitation measures, to ensure the safety of our staff while continuing our critical water quality monitoring work. We remain committed to providing high-quality data and research to support informed decision-making for Lake Erie\'s health.',
    image: 'https://images.unsplash.com/photo-1752424751303-33bde8f3c487?w=800&q=80',
    tag: 'Announcement',
    tagColor: BLUE,
  },
  {
    id: 1,
    date: 'February 1, 2020',
    title: 'NCWQR Launches Monthly Updates Highlighting Research, Data, and Outreach Efforts',
    excerpt:
      'NCWQR is excited to launch our monthly updates, designed to keep our community informed about the latest research findings, data releases, partnerships, and outreach efforts. Each month, we will share highlights from our monitoring activities, upcoming events, and opportunities for engagement. We look forward to connecting with our community and sharing the important work we are doing to protect and improve water quality in the Lake Erie region.',
    image: 'https://images.unsplash.com/photo-1752424751303-33bde8f3c487?w=800&q=80',
    tag: 'Announcement',
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
                <Link
                  to={`/news/${newsItems[0].id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: BLUE }}
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </Link>
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
                  <Link
                    to={`/news/${item.id}`}
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
    </div>
  );
}
