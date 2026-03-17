import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { ArrowRight, ExternalLink, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

const ongoingProjects = [
  {
    id: 1,
    title: 'Conservation Management Practices & Watershed Scale Effects',
    summary:
      'A paired watershed study evaluating how different agricultural conservation practices (cover crops, reduced tillage, wetland buffers) affect nutrient loading at the watershed scale in the Maumee River Basin.',
    partners: ['USDA-NRCS', 'Ohio State University Extension'],
    tags: ['Watershed', 'Agriculture', 'Phosphorus'],
    status: 'Ongoing',
  },
  {
    id: 2,
    title: 'H2Ohio ODNR Wetland Monitoring Program',
    summary:
      'As part of the LEARN (Lake Erie Agronomic Research Network) monitoring network led by Kent State University, NCWQR provides tributary water quality data to evaluate wetland nutrient reduction effectiveness under Ohio\'s H2Ohio program.',
    partners: ['Ohio DNR', 'Kent State University', 'LEARN Network'],
    tags: ['Wetlands', 'H2Ohio', 'Nutrients'],
    status: 'Ongoing',
  },
  {
    id: 3,
    title: 'Colloidal-Phosphorus Research',
    summary:
      'Investigating the role of colloidal phosphorus — a size fraction between dissolved and particulate — in lake eutrophication, in collaboration with Ohio State University. This work could redefine how we understand phosphorus bioavailability.',
    partners: ['Ohio State University'],
    tags: ['Phosphorus', 'Chemistry', 'Lake Erie'],
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Tracking Nutrient Load Reductions in Lake Erie Tributaries',
    summary:
      'Using long-term HTLP data in collaboration with the U.S. Geological Survey to detect and attribute changes in nutrient loading over time — essential for evaluating progress toward Great Lakes Water Quality Agreement goals.',
    partners: ['USGS'],
    tags: ['Nutrients', 'Trend Analysis', 'Policy'],
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'Veterinary Pharmaceuticals in Lake Erie Tributaries',
    summary:
      'Employing passive water sampling technology in partnership with the University of Nebraska to detect and quantify veterinary pharmaceuticals (antibiotics, hormones) in tributary streams — a largely unstudied but potentially significant environmental concern.',
    partners: ['University of Nebraska'],
    tags: ['Emerging Contaminants', 'Passive Sampling', 'Pharmaceuticals'],
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'COMPASS – Great Lakes Coastal Observations',
    summary:
      'Contributing to the Coastal Observations, Mechanisms, and Predictions Across Systems and Scales (COMPASS) project led by Pacific Northwest National Laboratory — a DOE-funded initiative studying how climate change affects coastal freshwater ecosystems.',
    partners: ['PNNL (Lead)', 'DOE', 'Multiple University Partners'],
    tags: ['Coastal', 'Climate', 'Great Lakes'],
    status: 'Ongoing',
  },
  {
    id: 7,
    title: 'Long-Term Agro-Ecosystem Research (LTAR)',
    summary:
      'NCWQR serves as the Eastern Corn Belt node of USDA\'s national LTAR network, providing long-term water quality data to compare across agricultural landscapes and assess sustainability of corn-soybean production systems.',
    partners: ['USDA-ARS', 'National LTAR Network'],
    tags: ['Agroecosystems', 'USDA', 'Long-term'],
    status: 'Ongoing',
  },
  {
    id: 8,
    title: 'Forecasting Harmful Algal Blooms in Lake Erie\'s Western Basin',
    summary:
      'Providing spring tributary phosphorus loading data that serves as the primary input for NOAA\'s annual harmful algal bloom (HAB) severity forecast for Lake Erie\'s Western Basin — directly protecting drinking water for millions in the region.',
    partners: ['NOAA GLERL', 'Great Lakes HAB Collaborative'],
    tags: ['HAB', 'NOAA', 'Drinking Water'],
    status: 'Ongoing',
    featured: true,
  },
];

const pastProjects = [
  {
    id: 101,
    title: 'Lake Erie Phosphorus Task Force',
    summary: 'Multi-agency evaluation of phosphorus sources and reduction targets to guide Great Lakes Water Quality Agreement targets.',
    partners: ['EPA', 'Environment Canada', 'Multiple State Agencies'],
    tags: ['Policy', 'Phosphorus', 'Lake Erie'],
    yearEnd: '2015',
  },
  {
    id: 102,
    title: 'Great Lakes Restoration Initiative — Maumee Watershed',
    summary: 'Baseline and trend monitoring of nutrient and sediment loading from the Maumee River watershed under GLRI funding.',
    partners: ['EPA', 'Ohio EPA'],
    tags: ['Maumee', 'Sediment', 'GLRI'],
    yearEnd: '2018',
  },
  {
    id: 103,
    title: 'Microcystin Distribution in Lake Erie Tributaries',
    summary: 'Tracking cyanotoxin (microcystin) concentrations in tributary waters to understand HAB precursor conditions.',
    partners: ['Ohio EPA', 'Bowling Green State University'],
    tags: ['HAB', 'Toxins', 'Public Health'],
    yearEnd: '2019',
  },
  {
    id: 104,
    title: 'Atrazine and Herbicide Loading Study',
    summary: 'Multi-year study of herbicide loading from corn-soybean watersheds and seasonal patterns in tributary concentrations.',
    partners: ['USDA'],
    tags: ['Pesticides', 'Agriculture', 'Chemistry'],
    yearEnd: '2012',
  },
  {
    id: 105,
    title: 'Biological Assessment of Lake Erie Tributaries',
    summary: 'Macroinvertebrate and fish community surveys to develop biological indices for assessing stream health.',
    partners: ['Ohio EPA', 'Heidelberg University Biology Dept.'],
    tags: ['Biology', 'Stream Health', 'Macroinvertebrates'],
    yearEnd: '2016',
  },
  {
    id: 106,
    title: 'Phosphorus Fractionation in Agricultural Runoff',
    summary: 'Characterizing dissolved, colloidal, and particulate phosphorus fractions in runoff events from agricultural fields.',
    partners: ['USDA-ARS'],
    tags: ['Phosphorus', 'Runoff', 'Field Research'],
    yearEnd: '2020',
  },
];

function ProjectCard({ project, muted = false }: { project: any; muted?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border overflow-hidden transition-all ${muted ? 'border-gray-100' : 'border-gray-200 hover:shadow-md'}`}
      style={{ backgroundColor: muted ? '#F8FAFC' : '#fff' }}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            {project.featured && (
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2"
                style={{ backgroundColor: '#FEF3C7', color: '#B45309' }}
              >
                ★ Featured Research
              </div>
            )}
            <h3
              className="font-bold leading-snug"
              style={{ fontSize: '1rem', color: muted ? '#374151' : '#0f2942' }}
            >
              {project.title}
            </h3>
          </div>
          {muted && project.yearEnd && (
            <span className="text-xs text-gray-400 bg-gray-200 px-2 py-1 rounded-full flex-shrink-0">
              Ended {project.yearEnd}
            </span>
          )}
          {!muted && (
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: '#DCFCE7', color: GREEN }}
            >
              Active
            </span>
          )}
        </div>

        <p className={`text-sm leading-relaxed mb-4 ${expanded ? '' : 'line-clamp-2'}`} style={{ color: '#4B5563' }}>
          {project.summary}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs font-semibold mb-4"
          style={{ color: BLUE }}
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" /> Show Less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" /> Read More</>
          )}
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{ backgroundColor: muted ? '#E5E7EB' : '#EBF3FB', color: muted ? '#6B7280' : BLUE }}
            >
              {tag}
            </span>
          ))}
        </div>

        {expanded && project.partners && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Partners</p>
            <div className="flex flex-wrap gap-2">
              {project.partners.map((p: string) => (
                <span
                  key={p}
                  className="text-xs px-2.5 py-1 rounded-md font-medium"
                  style={{ backgroundColor: muted ? '#F3F4F6' : '#F0F9FF', color: '#374151' }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Research() {
  return (
    <div>
      <PageHero
        title="Research"
        subtitle="Active partnerships with USDA, NOAA, USGS, and leading universities — tackling the most pressing water quality challenges of our time."
        imageUrl="images/lab/1980-pesticides.jpg"
      />

      {/* ── ONGOING ── */}
      <section id="ongoing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: BLUE }}>
              Active Research
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              Ongoing Projects
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl">
              8 active research initiatives spanning federal agencies, universities, and multi-site national networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST ── */}
      <section id="past" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="uppercase tracking-widest text-sm font-semibold mb-2" style={{ color: '#6B7280' }}>
              Completed Research
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0f2942' }}>
              Past Projects
            </h2>
            <p className="text-gray-500 mt-2 max-w-2xl">
              A selection of completed studies that have contributed to the scientific record on water quality, nutrients, and watershed dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pastProjects.map((p) => (
              <ProjectCard key={p.id} project={p} muted />
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATE ── */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: `linear-gradient(135deg, #0f2942, ${BLUE})` }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-white mb-3" style={{ fontSize: '1.8rem', fontWeight: 700 }}>
              Interested in Collaborating?
            </h2>
            <p className="text-blue-200" style={{ fontSize: '1rem' }}>
              NCWQR welcomes research partnerships with universities, federal agencies, foundations,
              and private industry. We have the data, the lab, and the expertise.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm transition-all"
            style={{ backgroundColor: '#fff', color: BLUE }}
          >
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
