import { useState } from 'react';
import { PageHero } from '../components/PageHero';
import { ArrowRight, ExternalLink, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

interface Project {
  id: number;
  title: string;
  summary: string;
  partners: string[];
  tags: string[];
  status?: string;
  featured?: boolean;
  yearEnd?: string;
  href?: string;
}

const ongoingProjects = [
  {
    id: 1,
    title: 'Assessing the Watershed Scale Effects of Conservation Management Practices',
    summary: 'A paired watershed study in the Maumee River headwaters testing whether implementing conservation practices on over 70% of a small watershed can achieve the 40% phosphorus reduction target set in 2015. Funded through USDA-NRCS RCPP AFA and CEAP Watershed Assessment programs.',
    partners: ['USDA-NRCS', 'Ohio State University', 'EQIP'],
    tags: ['Watershed', 'Agriculture', 'Phosphorus'],
    status: 'Ongoing',
    href: 'https://www.arcgis.com/home/item.html?id=9381879cefa2475a98f932c61e98aa74',
  },
  {
    id: 2,
    title: 'H2Ohio ODNR Wetland Monitoring Program',
    summary: 'Part of the LEARN monitoring team led by Kent State University, assessing nutrient removal effectiveness of wetland restoration projects implemented by ODNR under Governor DeWine\'s H2Ohio Initiative. Partners include Bowling Green State, University of Toledo, Ohio State, and Wright State.',
    partners: ['Ohio DNR', 'Kent State University', 'BGSU', 'University of Toledo', 'OSU', 'Wright State'],
    tags: ['Wetlands', 'H2Ohio', 'Nutrients'],
    status: 'Ongoing',
    href: 'https://lakeerieandaquaticresearch.org/research/learn-initiatives/h2ohio-wmp/',
  },
  {
    id: 3,
    title: 'Evaluating Colloidal-Phosphorus Exports and Bioavailability',
    summary: 'Investigating spatiotemporal dynamics of colloidal-phosphorus in streams, wetlands, and western Lake Erie to determine how it challenges existing assumptions about dissolved reactive phosphorus bioavailability and management targets.',
    partners: ['Ohio State University', 'University of Montana'],
    tags: ['Phosphorus', 'Chemistry', 'Lake Erie'],
    status: 'Ongoing',
  },
  {
    id: 4,
    title: 'Tracking Nutrient Load Reductions in Lake Erie Tributaries',
    summary: 'Using long-term HTLP data in collaboration with USGS to assess trends in nutrient loads from tributaries to Lake Erie in a cohesive manner, providing up-to-date status on progress toward Great Lakes Water Quality Agreement goals.',
    partners: ['USGS'],
    tags: ['Nutrients', 'Trend Analysis', 'Policy'],
    status: 'Ongoing',
  },
  {
    id: 5,
    title: 'Occurrence and Sources of Veterinary Pharmaceuticals in Lake Erie Tributaries',
    summary: 'Using in-situ passive sampling (POCIS) with liquid chromatography tandem mass spectrometry to detect veterinary and mixed-use pharmaceuticals in the Sandusky River watershed — addressing antibiotic resistance risks and potential nutrient source tracing.',
    partners: ['University of Nebraska — Water Science Laboratory'],
    tags: ['Emerging Contaminants', 'Passive Sampling', 'Pharmaceuticals'],
    status: 'Ongoing',
  },
  {
    id: 6,
    title: 'COMPASS – Great Lakes Coastal Observations & Modeling',
    summary: 'Contributing to the DOE-funded Coastal Observations, Mechanisms, and Predictions Across Systems and Scales (COMPASS) project led by Pacific Northwest National Laboratory — developing new coastal observations in Lake Erie and supporting multi-scale Great Lakes modeling.',
    partners: ['Pacific Northwest National Lab', 'DOE'],
    tags: ['Coastal', 'Climate', 'Great Lakes'],
    status: 'Ongoing',
    href: 'https://compass.pnnl.gov/',
  },
  {
    id: 7,
    title: 'Long-Term Agro-Ecosystem Research Program (LTAR)',
    summary: 'Since 2014, NCWQR has served as the Eastern Corn Belt node of USDA\'s national LTAR network alongside OSU\'s Soil Drainage Research Unit and Purdue\'s National Soil Erosion Research Laboratory — forecasting effects of environmental trends and policies on agro-ecosystems.',
    partners: ['USDA-ARS', 'Ohio State University', 'Purdue University'],
    tags: ['Agroecosystems', 'USDA', 'Long-term'],
    status: 'Ongoing',
    href: 'https://www.ars.usda.gov/natural-resources-and-sustainable-agricultural-systems/water-availability-and-watershed-management/docs/long-term-agroecosystem-research-ltar-network/',
  },
  {
    id: 8,
    title: 'Forecasting Harmful Algal Blooms in Lake Erie\'s Western Basin',
    summary: 'NCWQR\'s Maumee River phosphorus loading data is the primary input for NOAA\'s annual HAB severity forecast for Lake Erie\'s Western Basin. The data also feeds Dr. Daniel Obenour\'s Bayesian model at NC State and LimnoTech\'s Western Lake Erie Ecosystem Model (WLEEM).',
    partners: ['NOAA GLERL', 'NC State University', 'LimnoTech', 'University of Toledo'],
    tags: ['HAB', 'NOAA', 'Drinking Water'],
    status: 'Ongoing',
    featured: true,
    href: 'https://best.luxuryhotelshub.com/lakeerie/',
  },
];

const pastProjects = [
  {
    id: 101,
    title: 'Evaluating the Impact of Rivers on Phosphorus Delivery to Western Lake Erie',
    summary: 'Determined when and where rivers act as phosphorus sources or sinks, and how instream processing affects policy recommendations for agricultural conservation targets. Led by Dr. Jim Hood at OSU.',
    partners: ['Ohio State University', 'USGS'],
    tags: ['Phosphorus', 'Rivers', 'Lake Erie'],
    yearEnd: '2018',
  },
  {
    id: 102,
    title: 'Enhancing HTLP Through Real-Time Data and GLOS Integration',
    summary: 'Connected water quality sensors to a telecommunication network at HTLP stations and integrated data into the Great Lakes Observing System (GLOS) Seagull platform for real-time public access.',
    partners: ['GLOS', 'LimnoTech'],
    tags: ['Data', 'Real-time', 'Technology'],
    yearEnd: '2019',
  },
  {
    id: 103,
    title: 'Glyphosate Runoff Dynamics in Lake Erie Tributaries',
    summary: 'Used novel IC-ICP-MS methods to measure glyphosate and AMPA at environmental concentrations in Rock Creek, Honey Creek, and Wolf Creek watersheds from 2018–2020.',
    partners: ['University of Nebraska — Water Science Laboratory'],
    tags: ['Pesticides', 'Glyphosate', 'Agriculture'],
    yearEnd: '2020',
  },
  {
    id: 104,
    title: 'Identifying the Best Strategy to Reduce Phosphorus Loads from Agricultural Watersheds',
    summary: 'Evaluated basin-wide vs. hotspot targeting strategies for dissolved phosphorus reduction in the Western Lake Erie Basin to improve watershed model predictions.',
    partners: ['Ohio Sea Grant', 'OSU'],
    tags: ['Phosphorus', 'Strategy', 'Policy'],
    yearEnd: '2018',
    href: 'https://ohioseagrant.osu.edu/research/collaborations/habs/track',
  },
  {
    id: 105,
    title: 'Verification and Enhancement of NRCS-USDA Nutrient Tracking Tool',
    summary: 'Three-year USDA-NRCS funded project calibrating the Nutrient Tracking Tool (NTT) and APEX/SWAT models for the Great Lakes basin, with edge-of-field studies and farmer outreach across the Sandusky River watershed.',
    partners: ['USDA-NRCS', 'Tarleton State University', 'IPM Institute', 'Sandusky River Watershed Coalition'],
    tags: ['Modeling', 'BMPs', 'Outreach'],
    yearEnd: '2017',
  },
  {
    id: 106,
    title: 'Evaluating the 4R Nutrient Stewardship Certification Program',
    summary: 'Multi-scale evaluation of how the 4R certification program for nutrient service providers affected crop productivity, water quality, and farmer perceptions in the Western Lake Erie Basin.',
    partners: ['The Fertilizer Institute', 'USDA-ARS', 'The Nature Conservancy', 'OSU'],
    tags: ['4R', 'Nutrients', 'Stewardship'],
    yearEnd: '2018',
    href: 'https://4rcertified.org/research/',
  },
  {
    id: 107,
    title: 'Online Tributary Loading Tool for HAB Forecasting',
    summary: 'Partnered with GLOS and LimnoTech to provide HTLP tributary data online with weekly Maumee River updates from March–August to support real-time HAB forecast tracking.',
    partners: ['GLOS', 'LimnoTech'],
    tags: ['HAB', 'Data', 'Tools'],
    yearEnd: '2018',
    href: 'http://data.glos.us/maumee/',
  },
  {
    id: 108,
    title: 'Oligochaete Worm Distributions in the Great Lakes',
    summary: 'Identified and counted thousands of oligochaetes from Great Lakes sediment samples under a subcontract to Buffalo State College, funded by USEPA Great Lakes National Program Office.',
    partners: ['Buffalo State College (SUNY)', 'USEPA'],
    tags: ['Biology', 'Benthos', 'Great Lakes'],
    yearEnd: '2016',
  },
  {
    id: 109,
    title: 'Aquatic Communities and Ditch Maintenance in Agricultural Landscapes',
    summary: 'Surveyed fish and macroinvertebrates in 20 maintained agricultural ditch segments from 2008–2011 to understand how BMPs affect aquatic habitat complexity and community recovery.',
    partners: ['University of Toledo'],
    tags: ['Biology', 'Agriculture', 'BMPs'],
    yearEnd: '2014',
  },
];

function ProjectCard({ project, muted = false }: { project: Project; muted?: boolean }) {
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

        {expanded && project.href && (
          <div className="mt-3">
            <a
              href={project.href}
              target={project.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold"
              style={{ color: BLUE }}
              >
              Learn More <ExternalLink className="w-3 h-3" />
            </a>
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
        imageUrl="images/lab/test-circle.jpg"
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
