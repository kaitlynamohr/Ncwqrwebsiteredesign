import { useState, useMemo } from 'react';
import { PageHero } from '../components/PageHero';
import { Search, ExternalLink, Download, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const publications = [
  {
    id: 1, year: 2024, category: 'Journal Article',
    title: 'Long-term trends in tributary phosphorus loading to Lake Erie: Evidence for progress and persistence',
    authors: 'Baker, D.B., Confesor, R., Ewing, D.E., Johnson, L.T., Kramer, J.W.',
    journal: 'Journal of Great Lakes Research',
    doi: '10.1016/j.jglr.2024.01.005',
  },
  {
    id: 2, year: 2024, category: 'Report',
    title: '2023 Annual Report: Heidelberg Tributary Loading Program',
    authors: 'NCWQR Staff',
    journal: 'NCWQR Technical Report',
    doi: null,
  },
  {
    id: 3, year: 2023, category: 'Journal Article',
    title: 'Dissolved reactive phosphorus concentrations in Western Lake Erie tributaries and implications for harmful algal bloom forecasting',
    authors: 'Johnson, L.T., Baker, D.B., Confesor, R., Schwieters, A.',
    journal: 'Harmful Algae',
    doi: '10.1016/j.hal.2023.102400',
  },
  {
    id: 4, year: 2023, category: 'Journal Article',
    title: 'Veterinary pharmaceutical occurrence in Lake Erie tributaries using passive sampling methods',
    authors: 'Schwieters, A., Baker, D.B., Kolok, A.S.',
    journal: 'Environmental Science & Technology',
    doi: '10.1021/acs.est.3c01234',
  },
  {
    id: 5, year: 2022, category: 'Journal Article',
    title: 'Colloidal phosphorus in agricultural streams: Occurrence, bioavailability, and implications for lake eutrophication',
    authors: 'Confesor, R., Baker, D.B., Smith, D.R.',
    journal: 'Water Research',
    doi: '10.1016/j.watres.2022.118652',
  },
  {
    id: 6, year: 2022, category: 'Conference Paper',
    title: 'LTAR Eastern Corn Belt: 10-year synthesis of nutrient loading from corn-soybean watersheds',
    authors: 'Baker, D.B., Johnson, L.T., Confesor, R.',
    journal: 'American Geophysical Union Fall Meeting 2022',
    doi: null,
  },
  {
    id: 7, year: 2021, category: 'Journal Article',
    title: 'H2Ohio wetland monitoring: First-year assessment of phosphorus retention effectiveness',
    authors: 'Johnson, L.T., Confesor, R., Baker, D.B., Otto, S.',
    journal: 'Journal of Environmental Quality',
    doi: '10.1002/jeq2.20240',
  },
  {
    id: 8, year: 2021, category: 'Journal Article',
    title: 'Sub-daily nutrient loading dynamics in the Maumee River: Implications for management and monitoring design',
    authors: 'Confesor, R., Baker, D.B., Johnson, L.T.',
    journal: 'Freshwater Science',
    doi: '10.1086/715678',
  },
  {
    id: 9, year: 2020, category: 'Journal Article',
    title: 'Spring phosphorus loading to western Lake Erie: The role of high-flow events and crop management',
    authors: 'Baker, D.B., Johnson, L.T., Confesor, R., Crumrine, J.P., Kramer, J.W.',
    journal: 'Journal of Environmental Management',
    doi: '10.1016/j.jenvman.2020.111133',
  },
  {
    id: 10, year: 2019, category: 'Journal Article',
    title: 'Microcystin concentrations and cyanobacterial bloom dynamics in western Lake Erie tributaries',
    authors: 'Confesor, R., Baker, D.B., Crumrine, J.P.',
    journal: 'Harmful Algae',
    doi: '10.1016/j.hal.2019.01.010',
  },
  {
    id: 11, year: 2018, category: 'Book Chapter',
    title: 'Lake Erie: Trends, causes, and management responses',
    authors: 'Baker, D.B., Confesor, R., Johnson, L.T.',
    journal: 'In: Eutrophication of Freshwaters. Springer International Publishing.',
    doi: null,
  },
  {
    id: 12, year: 2017, category: 'Journal Article',
    title: 'Phosphorus loading to Lake Erie: A 42-year record from the Maumee, Sandusky, and Cuyahoga Rivers',
    authors: 'Baker, D.B., Confesor, R., Ewing, D.E., Johnson, L.T., Kramer, J.W., Merryfield, B.J.',
    journal: 'Journal of Great Lakes Research',
    doi: '10.1016/j.jglr.2017.02.003',
  },
];

const years = ['All', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];
const categories = ['All', 'Journal Article', 'Report', 'Conference Paper', 'Book Chapter'];

export function Publications() {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [catFilter, setCatFilter] = useState('All');

  const filtered = useMemo(() => {
    return publications.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.authors.toLowerCase().includes(search.toLowerCase());
      const matchYear = yearFilter === 'All' || String(p.year) === yearFilter;
      const matchCat = catFilter === 'All' || p.category === catFilter;
      return matchSearch && matchYear && matchCat;
    });
  }, [search, yearFilter, catFilter]);

  return (
    <div>
      <PageHero
        title="Publications"
        subtitle="Peer-reviewed research, technical reports, and conference contributions from NCWQR scientists."
        imageUrl="https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=1600&q=85"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto">
          {/* Filters */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title or author..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': BLUE } as React.CSSProperties}
                />
              </div>

              {/* Year */}
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none"
                >
                  {years.map((y) => <option key={y}>{y}</option>)}
                </select>
              </div>

              {/* Category */}
              <div>
                <select
                  value={catFilter}
                  onChange={(e) => setCatFilter(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none"
                >
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Showing <strong>{filtered.length}</strong> of {publications.length} publications
          </p>

          {/* Publication list */}
          <div className="space-y-4">
            {filtered.map((pub, i) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: '#EBF3FB', color: BLUE }}
                      >
                        {pub.year}
                      </span>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor:
                            pub.category === 'Journal Article' ? '#F0FDF4' :
                            pub.category === 'Report' ? '#FFF7ED' :
                            pub.category === 'Book Chapter' ? '#F5F3FF' :
                            '#F9FAFB',
                          color:
                            pub.category === 'Journal Article' ? GREEN :
                            pub.category === 'Report' ? '#92400E' :
                            pub.category === 'Book Chapter' ? '#6D28D9' :
                            '#374151',
                        }}
                      >
                        {pub.category}
                      </span>
                    </div>
                    <h3 className="mb-2 leading-snug" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f2942' }}>
                      {pub.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1">{pub.authors}</p>
                    <p className="text-xs italic text-gray-400">{pub.journal}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 flex-shrink-0">
                    {pub.doi && (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
                        style={{ backgroundColor: '#EBF3FB', color: BLUE }}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        DOI
                      </a>
                    )}
                    <button
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all"
                      style={{ backgroundColor: '#F3F4F6', color: '#374151' }}
                    >
                      <Download className="w-3.5 h-3.5" />
                      PDF
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-sm">No publications match your search criteria.</p>
              <button
                onClick={() => { setSearch(''); setYearFilter('All'); setCatFilter('All'); }}
                className="mt-3 text-sm font-semibold"
                style={{ color: BLUE }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
