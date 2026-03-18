import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Briefcase,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Users,
  Calendar,
  Award,
} from 'lucide-react';
import { staffMembers } from '../data/StaffData';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';
const GREEN = '#2D5016';
const LIGHT_BG = '#F8FAFC';

const TYPE_COLORS: Record<string, string> = {
  Leadership: DARK_BLUE,
  'Research Scientist': BLUE,
  'Lab Technician': GREEN,
  'Field Technician': '#B45309',
  'Data & Technology': '#6B21A8',
  'Research Associate': '#0E7490',
};

const DEPT_COLORS: Record<string, string> = {
  'Research & Administration': DARK_BLUE,
  'Analytical Laboratory': BLUE,
  'Field Operations': '#B45309',
  'Data & Technology': '#6B21A8',
};

function SectionHeading({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: '#EEF4FB' }}
      >
        <Icon className="w-4 h-4" style={{ color: BLUE }} />
      </div>
      <h2 className="font-bold" style={{ fontSize: '1.15rem', color: DARK_BLUE }}>
        {label}
      </h2>
      <div className="flex-1 h-px bg-gray-100" />
    </div>
  );
}

export function StaffProfile() {
  const { id = '1' } = useParams<{ id: string }>();
  const member = staffMembers.find((m) => m.id === id) ?? staffMembers[0];
  const typeColor = TYPE_COLORS[member.type] ?? BLUE;
  const deptColor = DEPT_COLORS[member.department] ?? BLUE;

  // Related staff: same dept, not self
  const related = staffMembers
    .filter((m) => m.id !== member.id && m.department === member.department)
    .slice(0, 3);

  const yearsAtNCWQR = new Date().getFullYear() - member.joinedYear;

  return (
    <div style={{ backgroundColor: LIGHT_BG, minHeight: '100vh' }}>

      {/* ── Hero / Header ───────────────────────────────────── */}
      <div
        className="relative pt-20"
        style={{
          background: `linear-gradient(135deg, ${DARK_BLUE} 0%, #1B4F8A 60%, #163f6e 100%)`,
        }}
      >
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: BLUE }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link
              to="/staff-directory"
              className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Staff Directory
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-sm text-blue-300 truncate">{member.name}</span>
          </motion.nav>

          <div className="flex flex-col lg:flex-row items-end gap-8 pb-0">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div
                className="w-44 h-52 lg:w-52 lg:h-64 rounded-t-2xl overflow-hidden border-4 shadow-2xl"
                style={{ borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Name / title block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="pb-10 flex-1 min-w-0"
            >
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: typeColor }}
                >
                  {member.type}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: deptColor + 'cc' }}
                >
                  {member.department}
                </span>
              </div>

              <h1
                className="text-white mb-2"
                style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 800, lineHeight: 1.15 }}
              >
                {member.name}
                {member.credentials && (
                  <span className="text-blue-300 ml-2" style={{ fontWeight: 400, fontSize: '70%' }}>
                    {member.credentials}
                  </span>
                )}
              </h1>
              <p className="text-blue-200 mb-6" style={{ fontSize: '1.05rem' }}>
                {member.title}
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-5 text-sm text-blue-200">
                {member.joinedYear && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    With NCWQR since {member.joinedYear} ({yearsAtNCWQR} years)
                  </span>
                )}
                {(member.publicationCount ?? member.publications.length) > 0 && (
                <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" />
                    {member.publicationCount ?? member.publications.length} publications
                </span>
                )}
                {member.projects.length > 0 && (
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" />
                    {member.projects.length} active projects
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Main column ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 min-w-0 space-y-12"
          >
            {/* Bio */}
            <section>
              <SectionHeading icon={Users} label="About" />
              <p className="text-gray-700 leading-relaxed" style={{ fontSize: '1.05rem' }}>
                {member.bio}
              </p>
            </section>

            {/* Expertise */}
            {member.expertise.length > 0 && (
              <section>
                <SectionHeading icon={Award} label="Areas of Expertise" />
                <div className="flex flex-wrap gap-2.5">
                  {member.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-sm font-medium border"
                      style={{ borderColor: BLUE + '40', color: BLUE, backgroundColor: '#EEF4FB' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {member.projects.length > 0 && (
              <section>
                <SectionHeading icon={FlaskConical} label="Current & Recent Projects" />
                <div className="space-y-4">
                  {member.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.07 }}
                      className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold" style={{ fontSize: '0.95rem', color: DARK_BLUE, lineHeight: 1.3 }}>
                          {project.title}
                        </h3>
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                          style={{ backgroundColor: '#EEF4FB', color: BLUE }}
                        >
                          {project.years}
                        </span>
                      </div>
                      <p className="text-xs font-semibold mb-2" style={{ color: GREEN }}>
                        Funded by: {project.funder}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Publications */}
            {member.publications.length > 0 && (
              <section>
                <SectionHeading icon={BookOpen} label="Selected Publications" />
                <div className="space-y-4">
                  {member.publications.map((pub, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm group"
                    >
                      {/* Year bubble */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: BLUE }}
                      >
                        {pub.year}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 leading-snug mb-1 group-hover:text-blue-700 transition-colors">
                          {pub.title}
                        </p>
                        <p className="text-xs italic text-gray-500">{pub.journal}</p>
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs mt-1.5 font-medium transition-colors"
                            style={{ color: BLUE }}
                          >
                            DOI: {pub.doi} <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Education */}
            {member.education.length > 0 && (
              <section>
                <SectionHeading icon={GraduationCap} label="Education" />
                <div className="space-y-3">
                  {member.education.map((edu, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: '#EEF4FB' }}
                      >
                        <GraduationCap className="w-5 h-5" style={{ color: BLUE }} />
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: DARK_BLUE }}>{edu.degree}</p>
                        <p className="text-xs text-gray-500">{edu.institution} &middot; {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </motion.div>

          {/* ── Sidebar ───────────────────────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-72 flex-shrink-0 space-y-6"
          >
            {/* Contact card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ backgroundColor: DARK_BLUE }}
              >
                <Mail className="w-4 h-4 text-blue-200" />
                <span className="text-xs font-semibold text-white uppercase tracking-widest">Contact</span>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5">Email</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-sm font-medium break-all transition-colors hover:underline"
                      style={{ color: BLUE }}
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
                {member.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                      <a
                        href={`tel:${member.phone}`}
                        className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>
                )}
                {member.officeLocation && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: BLUE }} />
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Office</p>
                      <p className="text-sm text-gray-700">{member.officeLocation}</p>
                    </div>
                  </div>
                )}
                {/* Always show NCWQR address */}
                <div className="pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-400 mb-1">Mailing Address</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    NCWQR — Gillmor Science Hall<br />
                    Heidelberg University<br />
                    Tiffin, OH 44883
                  </p>
                </div>
              </div>
            </div>

            {/* At a glance */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="px-5 py-3 flex items-center gap-2"
                style={{ backgroundColor: DARK_BLUE }}
              >
                <Award className="w-4 h-4 text-blue-200" />
                <span className="text-xs font-semibold text-white uppercase tracking-widest">At a Glance</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: 'Department', value: member.department, color: deptColor },
                  { label: 'Role Type', value: member.type, color: typeColor },
                  { label: 'Joined NCWQR', value: String(member.joinedYear) },
                  { label: 'Years of Service', value: String(yearsAtNCWQR) },
                  ...((member.publicationCount ?? member.publications.length) > 0 ? [{ label: 'Publications', value: String(member.publicationCount ?? member.publications.length) }] : []),
                  ...(member.projects.length > 0 ? [{ label: 'Projects', value: String(member.projects.length) }] : []),
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                    <span className="text-xs text-gray-500">{row.label}</span>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: row.color ?? DARK_BLUE }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data portal */}
            <div
              className="rounded-2xl p-5 text-white relative overflow-hidden"
              style={{ backgroundColor: DARK_BLUE }}
            >
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10"
                style={{ backgroundColor: BLUE }}
              />
              <BookOpen className="w-5 h-5 text-blue-300 mb-2 relative z-10" />
              <p className="text-sm font-semibold text-white mb-1 relative z-10">Explore the Data</p>
              <p className="text-xs text-blue-200 leading-relaxed mb-4 relative z-10">
                Access NCWQR&#39;s 50-year tributary water quality dataset through the HTLP Data Portal.
              </p>
              <a
                href="https://ncwqr-data.org"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-1.5 text-xs font-semibold text-white px-4 py-2 rounded-lg transition-colors"
                style={{ backgroundColor: BLUE }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#163f6e';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                }}
              >
                Open Data Portal <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Back to directory */}
            <Link
              to="/staff-directory"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border text-sm font-semibold transition-all"
              style={{ borderColor: BLUE + '40', color: BLUE, backgroundColor: '#EEF4FB' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                (e.currentTarget as HTMLAnchorElement).style.color = 'white';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#EEF4FB';
                (e.currentTarget as HTMLAnchorElement).style.color = BLUE;
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Directory
            </Link>
          </motion.aside>
        </div>
      </div>

      {/* ── Related Team Members ───────────────────────────────── */}
      {related.length > 0 && (
        <section
          className="py-14 px-4 sm:px-6 lg:px-8 border-t border-gray-200"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold" style={{ fontSize: '1.25rem', color: DARK_BLUE }}>
                Others in {member.department}
              </h2>
              <Link
                to="/staff-directory"
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: BLUE }}
              >
                Full directory <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((m, i) => {
                const tColor = TYPE_COLORS[m.type] ?? BLUE;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link
                      to={`/staff/${m.id}`}
                      className="flex gap-4 items-center bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-lg transition-all group"
                    >
                      <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2" style={{ borderColor: tColor + '40' }}>
                        <img
                          src={m.photo}
                          alt={m.name}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm leading-snug" style={{ color: DARK_BLUE }}>
                          {m.name}{m.credentials ? `, ${m.credentials}` : ''}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-snug line-clamp-2">{m.title}</p>
                        <span
                          className="inline-block mt-1.5 text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: tColor }}
                        >
                          {m.type}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0 transition-colors" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
