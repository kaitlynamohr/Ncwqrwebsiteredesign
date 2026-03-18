import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Mail, Phone, Users, X, ChevronDown } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { staffMembers, DEPARTMENTS, TYPES } from '../data/StaffData';
import type { StaffMember } from '../data/StaffData';

const BLUE = '#1B4F8A';
const DARK_BLUE = '#0f2942';

const DEPT_COLORS: Record<string, string> = {
  'Research & Administration': DARK_BLUE,
  'Analytical Laboratory': BLUE,
  'Field Operations': '#B45309',
  'Data & Technology': '#6B21A8',
};

// Compact horizontal card — Heidelberg-style
function StaffCard({ member, index }: { member: StaffMember; index: number }) {
  const deptColor = DEPT_COLORS[member.department] ?? BLUE;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, delay: index * 0.03 }}
    >
      <Link
        to={`/staff/${member.id}`}
        className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all group"
      >
        {/* Small square photo */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded overflow-hidden bg-gray-100 border border-gray-200"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 min-w-0">
          {/* Name */}
          <p
            className="font-semibold leading-snug group-hover:underline"
            style={{ fontSize: '0.9rem', color: DARK_BLUE }}
          >
            {member.name}{member.credentials ? `, ${member.credentials}` : ''}
          </p>

          {/* Title */}
          <p className="text-gray-500 mt-0.5 truncate" style={{ fontSize: '0.78rem' }}>
            {member.title}
          </p>

          {/* Dept tag */}
          <span
            className="inline-block mt-1 text-xs font-medium px-1.5 py-0.5 rounded"
            style={{ backgroundColor: deptColor + '18', color: deptColor, fontSize: '0.7rem' }}
          >
            {member.department}
          </span>

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 mt-2">
            {member.email && (
              <span className="flex items-center gap-1 text-gray-400" style={{ fontSize: '0.72rem' }}>
                <Mail className="w-3 h-3 flex-shrink-0" />
                <span className="truncate max-w-[160px]">{member.email}</span>
              </span>
            )}
            {member.phone && (
              <span className="flex items-center gap-1 text-gray-400" style={{ fontSize: '0.72rem' }}>
                <Phone className="w-3 h-3 flex-shrink-0" />
                {member.phone}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function StaffDirectory() {
  const [query, setQuery] = useState('');
  const [dept, setDept] = useState('All Departments');
  const [role, setRole] = useState('All Roles');
  const [deptOpen, setDeptOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);

  const filtered = useMemo<StaffMember[]>(() => {
    return staffMembers.filter((m) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q) ||
        m.expertise.some((e) => e.toLowerCase().includes(q));
      const matchesDept = dept === 'All Departments' || m.department === dept;
      const matchesRole = role === 'All Roles' || m.type === role;
      return matchesQuery && matchesDept && matchesRole;
    });
  }, [query, dept, role]);

  const hasFilters = query !== '' || dept !== 'All Departments' || role !== 'All Roles';

  const clearAll = () => {
    setQuery('');
    setDept('All Departments');
    setRole('All Roles');
  };

  // Group by department when no filter active
  const departmentOrder = [
    'Research & Administration',
    'Analytical Laboratory',
    'Field Operations',
    'Data & Technology',
  ];

  const grouped = useMemo(() => {
    return departmentOrder.map((d) => ({
      dept: d,
      members: filtered.filter((m) => m.department === d),
    })).filter((g) => g.members.length > 0);
  }, [filtered]);

  const showGrouped = !hasFilters;

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      <PageHero
        title="Staff Directory"
        subtitle="Meet the scientists, technicians, and professionals behind NCWQR's 50-year mission to protect and understand our water resources."
        imageUrl="https://images.unsplash.com/photo-1592925037394-b362acf14512?w=1600&q=85"
      />

      {/* ── Search & Filter bar ───────────────────────────── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search name, title, expertise…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 rounded-lg border border-gray-200 text-sm text-gray-800 outline-none focus:border-blue-400 transition-colors bg-gray-50"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Department dropdown */}
            <div className="relative">
              <button
                onClick={() => { setDeptOpen(!deptOpen); setRoleOpen(false); }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all min-w-[170px] justify-between"
                style={{
                  borderColor: dept !== 'All Departments' ? BLUE : '#e5e7eb',
                  backgroundColor: dept !== 'All Departments' ? '#EEF4FB' : '#f9fafb',
                  color: dept !== 'All Departments' ? BLUE : '#374151',
                }}
              >
                <span className="truncate">{dept === 'All Departments' ? 'All Departments' : dept}</span>
                <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${deptOpen ? 'rotate-180' : ''}`} />
              </button>
              {deptOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden">
                  {DEPARTMENTS.map((d) => (
                    <button
                      key={d}
                      onClick={() => { setDept(d); setDeptOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                      style={{
                        backgroundColor: dept === d ? BLUE : '',
                        color: dept === d ? 'white' : '#374151',
                      }}
                      onMouseEnter={(e) => {
                        if (dept !== d) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#EEF4FB';
                          (e.currentTarget as HTMLButtonElement).style.color = BLUE;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (dept !== d) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                          (e.currentTarget as HTMLButtonElement).style.color = '#374151';
                        }
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Role dropdown */}
            <div className="relative">
              <button
                onClick={() => { setRoleOpen(!roleOpen); setDeptOpen(false); }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all min-w-[150px] justify-between"
                style={{
                  borderColor: role !== 'All Roles' ? BLUE : '#e5e7eb',
                  backgroundColor: role !== 'All Roles' ? '#EEF4FB' : '#f9fafb',
                  color: role !== 'All Roles' ? BLUE : '#374151',
                }}
              >
                <span className="truncate">{role}</span>
                <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${roleOpen ? 'rotate-180' : ''}`} />
              </button>
              {roleOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden">
                  {TYPES.map((t) => (
                    <button
                      key={t}
                      onClick={() => { setRole(t); setRoleOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                      style={{
                        backgroundColor: role === t ? BLUE : '',
                        color: role === t ? 'white' : '#374151',
                      }}
                      onMouseEnter={(e) => {
                        if (role !== t) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#EEF4FB';
                          (e.currentTarget as HTMLButtonElement).style.color = BLUE;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (role !== t) {
                          (e.currentTarget as HTMLButtonElement).style.backgroundColor = '';
                          (e.currentTarget as HTMLButtonElement).style.color = '#374151';
                        }
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Clear */}
            {hasFilters && (
              <button
                onClick={clearAll}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-800 border border-gray-200 hover:border-gray-400 transition-all"
              >
                <X className="w-3.5 h-3.5" /> Clear
              </button>
            )}
          </div>

          {/* Result count */}
          <div className="mt-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <p className="text-xs text-gray-500">
              <span className="font-semibold text-gray-700">{filtered.length}</span> of {staffMembers.length} staff members
              {hasFilters && <span className="ml-1 text-blue-600">— filtered</span>}
            </p>
          </div>
        </div>
      </div>

      {/* ── Directory ──────────────────────────────────────── */}
      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        onClick={() => { setDeptOpen(false); setRoleOpen(false); }}
      >
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Users className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-400 mb-4">No staff members match your search.</p>
            <button
              onClick={clearAll}
              className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
              style={{ backgroundColor: BLUE }}
            >
              Clear filters
            </button>
          </div>
        ) : showGrouped ? (
          /* ── Grouped by department ─── */
          <div className="space-y-10">
            {grouped.map((group) => {
              const deptColor = DEPT_COLORS[group.dept] ?? BLUE;
              return (
                <section key={group.dept}>
                  {/* Department heading */}
                  <div
                    className="flex items-center gap-3 mb-4 pb-2 border-b-2"
                    style={{ borderBottomColor: deptColor }}
                  >
                    <h2
                      className="font-bold"
                      style={{ fontSize: '1rem', color: deptColor }}
                    >
                      {group.dept}
                    </h2>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: deptColor }}
                    >
                      {group.members.length}
                    </span>
                  </div>

                  {/* Cards grid */}
                  <AnimatePresence mode="popLayout">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {group.members.map((member, i) => (
                        <StaffCard key={member.id} member={member} index={i} />
                      ))}
                    </div>
                  </AnimatePresence>
                </section>
              );
            })}
          </div>
        ) : (
          /* ── Flat filtered results ─── */
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((member, i) => (
                <StaffCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
