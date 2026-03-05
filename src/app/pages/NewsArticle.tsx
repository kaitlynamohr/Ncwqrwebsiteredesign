import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Link2,
  ChevronRight,
  BookOpen,
  Mail,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { useState } from 'react';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GREEN = '#2D5016';
const LIGHT_BG = '#F8FAFC';

/* ─── 2/1/2020 Article ─────────────────────────────────────── */
const articles: Record<string, ArticleData> = {
  '1': {
    id: '1',
    tag: 'Announcement',
    tagColor: BLUE,
    date: 'February 14, 2025',
    readTime: '8 min read',
    author: {
      name: 'Dr. Laura Johnson',
      title: 'Director, NCWQR',
      avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=120&q=80',
    },
    title: 'NCWQR Launches Monthly Updates Highlighting Research, Data, and Outreach Efforts',
    subtitle:
      'Tracking water, research, and community impact from the 3rd floor of Gillmor Hall—celebrating a year of discoveries, collaborations, and milestones at the NCWQR.',
    heroImage:
      'https://images.unsplash.com/photo-1532102157006-b02808d5851e?w=1600&q=85',
    heroCaption: 'image caption',
    body: [
      {
        type: 'paragraph',
        content:
          'This is the start of a new series on the going-ons at the NCWQR!  I hope to publish these posts monthly throughout the year to give everyone a view of what we’re up to on the 3rd floor of Gillmor Hall.',
      },
      {
      type: 'paragraph',
      content: (
          <>
          To start things off, let's discuss last year! In 2019, our chemistry lab analyzed over 11,000 water samples for nutrients and/or sediment most of which were for the Heidelberg Tributary Loading Program
          <Link to="/publications" style={{ color: BLUE, textDecoration: 'underline' }}>
            {' '} (HLTP)
          </Link>
          and were collected from 25 different locations throughout Ohio and one in Michigan. Our researchers published 7 peer-reviewed articles{' '}
          <Link to="/monitoring" style={{ color: BLUE, textDecoration: 'underline' }}>
            {' '} you can find them here
          </Link>
          {'; '}managed 8 different grants aside from the HTLP; presented at the International Society for Great Lakes Research, the Society for Freshwater Sciences, the Soil and Water Conservation Society, the Ecological Society of America, and the American Geophysical Union conferences; and gave over 20 presentations to various groups throughout the community. At the same time, we continued to analyze samples for private well owners, assisted in expanding the Sandusky River Watershed Coalition, and mentored students both as interns and in the classroom. To wrap up 2019, we were informed that 4 grant proposals were selected for funding, ranging in topics from antibiotics in rivers to using field-scale models to help develop water quality trading markets.
          </>
      ),
      },
      {
        type: 'heading',
        content: 'Why the Great Lakes?',
      },
      {
      type: 'paragraph',
      content: (
          <>
          One of the biggest events in 2019 was the celebration of our 50th Anniversary in October.  We had a 2-day workshop which culminated in an anniversary dinner.  Most exciting, the history of the NCWQR, which was written by Dr. Ken Baker, is now available online
          <Link to="https://ncwqr.org/wp-content/uploads/2020/02/ncwqr-history-by-ken-baker-2019-updated.pdf" style={{ color: BLUE, textDecoration: 'underline' }}>
            {' '} here!
          </Link>
          </>
      ),
      },
      {
        type: 'paragraph',
        content:
          'This year is off to an active start!  Heidelberg\’s Biology and Environmental Sciences department is in the middle of a search for a new assistant professor of ecology, which has given us the opportunity to see multiple teaching demonstrations and provide feedback.  We\’ve attended meetings for a multitude of advisory groups including revising the NRCS 590 standard and planning water quality sampling for the Ohio DNR H2Ohio projects.  Rem has been involved in a collaborative effort linking phosphorus models from soils to the world, Laura attended a workshop on linking soil and watershed health to drainage practices, and both Laura and Nate have been involved in discussions on developing a pilot watershed.',
      },
      {
        type: 'paragraph',
        content:
          'On top of all that, January has been rather warm and rainy with 4 different high flow events about perfectly timed by each week leading to high samples loads for the lab with especially muddy samples (which take longer to filter).',
      },
      {
      type: 'paragraph',
      content: (
          <>
          Moving forward, we\’ll be completing our spring and annual loading calculations, finishing up a number of different papers and reports that are in progress, giving a few presentations, and are looking forward to the
          <Link to="https://www.facebook.com/SanduskyRiverWatershedCoalition/photos/a.402820289765903/2696379333743309/?type=3&theater" style={{ color: BLUE, textDecoration: 'underline' }}>
            {' '} February SRWC Brews and News featuring Ray Grob who will review the history of the Sandusky River!
          </Link>
          </>
      ),
      },
    ],
    relatedIds: ['2', '3', '4'],
  },
};

/* Related article stubs */
const relatedArticles: Record<string, RelatedArticle> = {
  '2': {
    id: '2',
    tag: 'Data Release',
    tagColor: GREEN,
    date: 'November 8, 2024',
    title: '2024 Tributary Loading Report Now Available',
    image: 'https://images.unsplash.com/photo-1763658997578-90f853cff359?w=400&q=80',
  },
  '3': {
    id: '3',
    tag: 'HAB Forecast',
    tagColor: '#B45309',
    date: 'August 29, 2024',
    title: 'HAB Season Outlook: NOAA Forecast Informed by NCWQR Spring Data',
    image: 'https://images.unsplash.com/photo-1680877405144-63d5745b51e5?w=400&q=80',
  },
  '4': {
    id: '4',
    tag: 'Research',
    tagColor: BLUE,
    date: 'April 17, 2024',
    title: 'New Study: Veterinary Pharmaceuticals Detected in Lake Erie Tributaries',
    image: 'https://images.unsplash.com/photo-1616996691029-96500d6523b7?w=400&q=80',
  },
};

/* ─── Types ─────────────────────────────────────────────────── */
interface AuthorData {
  name: string;
  title: string;
  avatar: string;
}

interface BodyBlock {
  type: 'paragraph' | 'heading' | 'pullquote' | 'image' | 'databox';
  content?: string | React.ReactNode;
  attribution?: string;
  url?: string;
  caption?: string;
  label?: string;
  stats?: { value: string; description: string }[];
}

interface ArticleData {
  id: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  author: AuthorData;
  title: string;
  subtitle: string;
  heroImage: string;
  heroCaption: string;
  body: BodyBlock[];
  relatedIds: string[];
}

interface RelatedArticle {
  id: string;
  tag: string;
  tagColor: string;
  date: string;
  title: string;
  image: string;
}

/* ─── Sub-components ─────────────────────────────────────────── */

function BodyBlock({ block }: { block: BodyBlock }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          className="text-gray-700 leading-relaxed mb-6"
          style={{ fontSize: '1.05rem' }}
        >
          {block.content}
        </p>
      );

    case 'heading':
      return (
        <h2
          className="mt-10 mb-4"
          style={{ fontSize: '1.35rem', fontWeight: 700, color: DARK_BLUE, lineHeight: 1.3 }}
        >
          {block.content}
        </h2>
      );

    case 'pullquote':
      return (
        <blockquote
          className="my-10 pl-6 pr-4 py-5 rounded-r-2xl border-l-4"
          style={{ borderLeftColor: BLUE, backgroundColor: '#EEF4FB' }}
        >
          <Quote className="w-7 h-7 mb-3" style={{ color: BLUE, opacity: 0.5 }} />
          <p
            className="text-gray-800 leading-relaxed mb-3 italic"
            style={{ fontSize: '1.1rem' }}
          >
            {block.content}
          </p>
          {block.attribution && (
            <p className="text-sm font-semibold" style={{ color: BLUE }}>
              {block.attribution}
            </p>
          )}
        </blockquote>
      );

    case 'image':
      return (
        <figure className="my-10">
          <img
            src={block.url}
            alt={block.caption || ''}
            className="w-full rounded-2xl object-cover shadow-md"
            style={{ maxHeight: '480px' }}
          />
          {block.caption && (
            <figcaption className="mt-3 text-sm text-gray-500 text-center italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'databox':
      return (
        <div
          className="my-10 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
          style={{ backgroundColor: '#fff' }}
        >
          <div
            className="px-6 py-3 flex items-center gap-2"
            style={{ backgroundColor: DARK_BLUE }}
          >
            <BookOpen className="w-4 h-4 text-blue-200" />
            <span className="text-sm font-semibold text-white uppercase tracking-widest">
              {block.label}
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {block.stats?.map((stat, i) => (
              <div key={i} className="px-6 py-5 text-center">
                <div
                  className="mb-1"
                  style={{ fontSize: '2rem', fontWeight: 800, color: BLUE, lineHeight: 1.1 }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 leading-snug">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

function ShareButton({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    onClick();
    if (label === 'Copy link') {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all border"
      style={{ borderColor: '#e2e8f0', color: '#374151' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = BLUE;
        (e.currentTarget as HTMLButtonElement).style.color = 'white';
        (e.currentTarget as HTMLButtonElement).style.borderColor = BLUE;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
        (e.currentTarget as HTMLButtonElement).style.color = '#374151';
        (e.currentTarget as HTMLButtonElement).style.borderColor = '#e2e8f0';
      }}
    >
      <Icon className="w-4 h-4" />
      {copied ? 'Copied!' : label}
    </button>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */

export function NewsArticle() {
  const { id = '1' } = useParams<{ id: string }>();
  const [emailVal, setEmailVal] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Fall back to article id=1 if the requested one isn't in our mock data
  const article = articles[id] ?? articles['1'];
  const related = article.relatedIds
    .map((rid) => relatedArticles[rid])
    .filter(Boolean);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url).catch(() => {});
    }
  };

  return (
    <div style={{ backgroundColor: LIGHT_BG, minHeight: '100vh' }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="relative" style={{ minHeight: '520px' }}>
        <img
          src={article.heroImage}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(15,41,66,0.4) 0%, rgba(15,41,66,0.85) 70%, rgba(15,41,66,0.98) 100%)',
          }}
        />
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link
              to="/news"
              className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              News & Updates
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-sm text-blue-300 truncate max-w-xs">{article.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            {/* Tag */}
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-5"
              style={{ backgroundColor: article.tagColor }}
            >
              {article.tag}
            </span>

            {/* Title */}
            <h1
              className="text-white mb-5"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.15 }}
            >
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 leading-relaxed mb-8" style={{ fontSize: '1.1rem' }}>
              {article.subtitle}
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-blue-200">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author.name}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0"
          >
            <article>
              {/* Hero image caption */}
              {article.heroCaption && (
                <p className="text-sm text-gray-400 italic mb-8 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  {article.heroCaption}
                </p>
              )}

              {/* Body blocks */}
              <div>
                {article.body.map((block, i) => (
                  <BodyBlock key={i} block={block} />
                ))}
              </div>

              {/* Bottom share bar */}
              <div
                className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1.5">
                    <Share2 className="w-4 h-4" /> Share this article
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <ShareButton icon={Twitter} label="Twitter" onClick={() => handleShare('twitter')} />
                    <ShareButton icon={Linkedin} label="LinkedIn" onClick={() => handleShare('linkedin')} />
                    <ShareButton icon={Link2} label="Copy link" onClick={() => handleShare('copy')} />
                  </div>
                </div>
                <Link
                  to="/news"
                  className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                  style={{ color: BLUE }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all news
                </Link>
              </div>
            </article>
          </motion.main>

          {/* ── Sidebar ────────────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-80 flex-shrink-0 space-y-7"
          >
            {/* Author card */}
            <div
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Author
              </h3>
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full object-cover border-2"
                  style={{ borderColor: BLUE }}
                />
                <div>
                  <p className="font-semibold text-sm" style={{ color: DARK_BLUE }}>
                    {article.author.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{article.author.title}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed mt-4">
                Dr. Baker has directed NCWQR since 2005 and is a leading authority on nutrient dynamics in agricultural watersheds and Great Lakes water quality.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-colors"
                style={{ color: BLUE }}
              >
                Meet our team <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Share
              </h3>
              <div className="flex flex-col gap-2">
                <ShareButton icon={Twitter} label="Share on Twitter" onClick={() => handleShare('twitter')} />
                <ShareButton icon={Linkedin} label="Share on LinkedIn" onClick={() => handleShare('linkedin')} />
                <ShareButton icon={Link2} label="Copy link" onClick={() => handleShare('copy')} />
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: '#9CA3AF' }}
              >
                Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Great Lakes',
                  'Partnerships',
                  'Climate Change',
                  'Carbon Cycling',
                  'Monitoring',
                  'DOE',
                  'Coastal Science',
                  'HTLP',
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border cursor-pointer transition-all"
                    style={{ borderColor: '#e2e8f0', color: '#374151' }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = BLUE;
                      (e.currentTarget as HTMLSpanElement).style.color = 'white';
                      (e.currentTarget as HTMLSpanElement).style.borderColor = BLUE;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = '';
                      (e.currentTarget as HTMLSpanElement).style.color = '#374151';
                      (e.currentTarget as HTMLSpanElement).style.borderColor = '#e2e8f0';
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="rounded-2xl p-6 text-white overflow-hidden relative"
              style={{ backgroundColor: DARK_BLUE }}
            >
              {/* Decorative ring */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
                style={{ backgroundColor: BLUE }}
              />
              <Mail className="w-6 h-6 text-blue-300 mb-3 relative z-10" />
              <h3 className="font-semibold text-white mb-2 relative z-10" style={{ fontSize: '1rem' }}>
                Stay Informed
              </h3>
              <p className="text-xs text-blue-200 leading-relaxed mb-4 relative z-10">
                Get new research findings, data releases, and partnership announcements directly to your inbox.
              </p>
              {subscribed ? (
                <div className="relative z-10 text-sm text-green-300 font-medium flex items-center gap-2">
                  ✓ You're subscribed — thank you!
                </div>
              ) : (
                <form
                  className="relative z-10"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (emailVal.trim()) setSubscribed(true);
                  }}
                >
                  <input
                    type="email"
                    required
                    value={emailVal}
                    onChange={(e) => setEmailVal(e.target.value)}
                    placeholder="your@email.edu"
                    className="w-full px-3 py-2 rounded-lg text-sm text-gray-800 mb-2 outline-none bg-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: BLUE }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#163f6e';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = BLUE;
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Data Portal CTA */}
            <div
              className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: '#EEF4FB' }}
              >
                <BookOpen className="w-5 h-5" style={{ color: BLUE }} />
              </div>
              <h3 className="font-semibold mb-1" style={{ fontSize: '0.95rem', color: DARK_BLUE }}>
                Explore the Data
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Access 50+ years of Great Lakes tributary water quality data through the HTLP Data Portal.
              </p>
              <a
                href="https://ncwqr-data.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163f6e';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                }}
              >
                Open Data Portal <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* ── Related Articles ──────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold" style={{ fontSize: '1.4rem', color: DARK_BLUE }}>
                Related Stories
              </h2>
              <Link
                to="/news"
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: BLUE }}
              >
                All news <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link
                    to={`/news/${item.id}`}
                    className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
                  >
                    <div className="relative h-44 overflow-hidden">
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
                    <div className="p-5">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </div>
                      <h3
                        className="leading-snug group-hover:underline decoration-dotted underline-offset-2"
                        style={{ fontSize: '0.95rem', fontWeight: 700, color: DARK_BLUE }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}