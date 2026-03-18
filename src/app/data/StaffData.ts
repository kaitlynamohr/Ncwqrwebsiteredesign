export interface Publication {
  year: number;
  title: string;
  journal: string;
  doi?: string;
}

export interface Project {
  title: string;
  funder: string;
  years: string;
  description: string;
}

export interface StaffMember {
  id: string;
  name: string;
  credentials: string;
  title: string;
  department: string;
  type: 'Leadership' | 'Research Scientist' | 'Lab Technician' | 'Field Technician' | 'Data & Technology' | 'Research Associate';
  email: string;
  phone?: string;
  photo: string;
  officeLocation?: string;
  bio: string;
  expertise: string[];
  education: { degree: string; institution: string; year: number }[];
  projects: Project[];
  publications: Publication[];
  joinedYear: number;
  publicationCount?: number;
}

export const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'Remegio Confessor',
    credentials: 'Ph.D. in Agricultural and Biological Engineering',
    title: 'Director & Principal Investigator',
    department: 'Research & Administration',
    type: 'Leadership',
    email: 'rconfeso@heidelberg.edu',
    phone: '(419) 448-2056',
    photo: '/images/people/remegio-confessor-2026.jpg',
    officeLocation: 'Gillmor Science Hall, Room 301',
    bio: 'Dr. Remegio B. Confesor is a researcher specializing in hydrologic and watershed modeling, with a focus on nutrient transport, sediment dynamics, and agricultural water quality systems. His work centers on applying and advancing models such as SWAT and APEX to evaluate the impacts of land use, agricultural practices, and climate change on watershed processes. Dr. Confesor has contributed extensively to research addressing phosphorus loading and harmful algal blooms in the Lake Erie Basin, producing modeling frameworks used to inform nutrient management strategies and policy decisions. Prior to joining the Norwegian Institute of Bioeconomy Research in 2021, he spent over a decade at the National Center for Water Quality Research at Heidelberg University, where he worked on long-term monitoring and modeling of tributary nutrient loading. His research integrates field data, computational modeling, and environmental systems analysis to support large-scale watershed management and climate adaptation efforts.',
    expertise: [
        'Hydrologic Modeling (SWAT, APEX)',
        'Water Quality',
        'Nutrient Transport (Phosphorus, Nitrogen)',
        'Sediment Transport',
        'Runoff Processes',
        'Soil Science',
        'Subsurface Drainage',
        'Climate Change Impacts',
        'Agricultural Watersheds'
    ],
    education: [
        {
        degree: 'Ph.D. in Agricultural and Biological Engineering',
        institution: 'Pennsylvania State University',
        year: 2004
        }
    ],
    projects: [
        {
        title: 'SWAT-Based Watershed Modeling for Nutrient Management',
        funder: 'Multiple (Academic & Government Collaborations)',
        years: '2010–Present',
        description: 'Development and application of SWAT models to evaluate nutrient runoff, fertilizer timing, and conservation practices in agricultural watersheds, particularly in the Western Lake Erie Basin.'
        },
        {
        title: 'Climate Change Impacts on Agricultural Water Quality',
        funder: 'Research Collaborations (US & EU)',
        years: '2015–Present',
        description: 'Assessment of climate-driven changes in hydrology, nutrient loading, and watershed response using multi-model ensemble approaches.'
        },
        {
        title: 'Lake Erie Nutrient Loading and Harmful Algal Bloom Modeling',
        funder: 'NOAA / USDA / EPA Collaborations',
        years: '2008–2021',
        description: 'Modeling phosphorus transport and evaluating best management practices to reduce harmful algal blooms in the Western Lake Erie Basin.'
        }
    ],
    publications: [
        {
        year: 2025,
        title: 'Advancing SWAT modeling with rainfall risk-based fertilizer timing to improve nutrient management and crop yields',
        journal: 'Agricultural Systems / Modeling Research',
        doi: '10.1016/j.agwat.2025.109555'
        },
        {
        year: 2023,
        title: 'Analysis of spatiotemporal variation in dissolved organic carbon concentrations for streams with cropland-dominated watersheds',
        journal: 'Science of The Total Environment',
        doi: '10.1016/j.scitotenv.2022.160744'
        },
        {
        year: 2022,
        title: 'Using a Multi-Institutional Ensemble of Watershed Models to Assess Agricultural Conservation Effectiveness in a Future Climate',
        journal: 'Journal of the American Water Resources Association',
        doi: '10.1111/1752-1688.13023'
        },
        {
        year: 2021,
        title: 'Impact of Agricultural Practices on Water Quality of Old Woman Creek Watershed, Ohio',
        journal: 'Agriculture',
        doi: '10.3390/agriculture11050426'
        }
    ],
    joinedYear: 2008,
    publicationCount: 52,
    },
    {
    id: '2',
    name: 'Jakob Boehler',
    credentials: 'M.S. Education, B.S. Environmental Science',
    title: 'Coordinator, Sandusky River Watershed Coalition & Field Manager, NCWQR',
    department: 'Research & Administration',
    type: 'Research Scientist',
    email: 'jboehler@heidelberg.edu',
    phone: '(419) 448-2054)',
    photo: '/images/people/jakob-boehler-2026.jpg',
    bio: 'Jakob Boehler is an environmental science professional specializing in watershed management and water quality monitoring. He serves as Coordinator for the Sandusky River Watershed Coalition and Field Manager for the National Center for Water Quality Research (NCWQR) at Heidelberg University. Since joining NCWQR in 2011, he has led field operations including sample collection, data management, and quality assurance for long-term tributary monitoring programs. His work focuses on maintaining high data integrity standards and supporting watershed-scale research efforts across the Lake Erie Basin. In his watershed coordination role, he works with regional stakeholders to implement conservation practices and improve water quality outcomes.',
    expertise: [
        'Water Quality Monitoring',
        'Watershed Management',
        'Field Data Collection',
        'Quality Assurance / Quality Control (QA/QC)',
        'Macroinvertebrate Analysis',
        'Environmental Sampling Protocols'
    ],
    education: [
        {
        degree: 'M.S. Education',
        institution: 'Heidelberg University',
        year: 2015
        },
        {
        degree: 'B.S. in Environmental Science',
        institution: 'Heidelberg University',
        year: 2011
        }
    ],
    projects: [
        {
        title: 'Heidelberg Tributary Loading Program (Field Operations)',
        funder: 'Multiple (USDA / NOAA / ODNR)',
        years: '2011–Present',
        description: 'Field management of long-term monitoring stations measuring nutrient, sediment, and discharge across Lake Erie tributaries.'
        },
        {
        title: 'Sandusky River Watershed Coordination',
        funder: 'Regional / State Partnerships',
        years: '2017–Present',
        description: 'Coordination of watershed initiatives, stakeholder engagement, and implementation of conservation practices to improve regional water quality.'
        }
    ],
    publications: [],
    joinedYear: 2011
    },
    {
    id: '3',
    name: 'Nancy Miller',
    credentials: 'B.S.',
    title: 'Business Manager & Private Well Testing Coordinator',
    department: 'Data & Technology',
    type: 'Leadership',
    email: 'nmillar@heidelberg.edu',
    photo: '/images/people/nancy-miller-2026.jpg',
    officeLocation: 'Gillmor Science Hall, Room 118',
    bio: 'Nancy Miller is the Business Manager and Private Well Testing Coordinator at NCWQR. She oversees the business operations and manages the private well testing program, ensuring compliance with regulatory standards and providing technical support to stakeholders.',
    expertise: [
      'Business Management',
      'Private Well Testing',
      'Regulatory Compliance',
      'Stakeholder Engagement',
      'Continuous Water Quality Monitoring',
    ],
    education: [
      {
        degree: '',
        institution: '',
        year: 0,
      },
    ],
    projects: [
      {
        title: '',
        funder: '',
        years: '',
        description: '',
      },
    ],
    publications: [],
    joinedYear: 0,
  },
  {
    id: '4',
    name: 'Nate Manning',
    credentials: 'Ph.D. in Environmental Science',
    title: 'Research Scientist',
    department: 'Research & Administration',
    type: 'Research Scientist',
    email: 'nmanning@heidelberg.edu',
    phone: '(419) 448-2443)',
    photo: '/images/people/nathan-manning-2026.jpg',
    officeLocation: 'Heidelberg University, Tiffin, Ohio',
    bio: 'Dr. Nate Manning is a Research Scientist at the National Center for Water Quality Research (NCWQR) at Heidelberg University. His research focuses on water quality, watershed hydrology, and aquatic ecosystem dynamics, with an emphasis on nutrient transport and harmful algal blooms in the Lake Erie Basin. He works extensively with long-term monitoring datasets to analyze sediment, phosphorus, nitrogen, and chloride dynamics across tributaries and wetlands. His work contributes to understanding drivers of eutrophication, freshwater salinization, and watershed-scale environmental change. He is affiliated with Donald Scavia’s lab and has contributed to forecasting models for harmful algal blooms in Western Lake Erie.',
    expertise: [
        'Water Quality',
        'Watershed Hydrology',
        'Hydrological Modeling',
        'Aquatic Ecosystems',
        'Environmental Science',
        'Climate Change',
        'Freshwater Ecology',
        'Ecology',
        'Nutrient Transport',
        'Harmful Algal Blooms (HABs)'
    ],
    education: [
        {
        degree: 'Ph.D. in Environmental Science',
        institution: 'University of Toledo',
        year: 2013
        },
        {
        degree: 'M.S. in Biology',
        institution: 'University of Akron',
        year: 2005
        },
        {
        degree: 'B.S. in Biology',
        institution: 'Wittenberg University',
        year: 2001
        }
    ],
    projects: [
        {
        title: 'H2Ohio Wetland Monitoring Program',
        funder: 'Ohio EPA / Heidelberg University NCWQR',
        years: '2021–Present',
        description: 'Monitoring surface water and soil nutrient concentrations from wetlands across Ohio to quantify nutrient cycling and evaluate restoration impacts.'
        },
        {
        title: 'Grand Lake St. Marys Chloride Source Delineation',
        funder: 'Heidelberg University NCWQR',
        years: '2024–Present',
        description: 'Identifying and quantifying sources of chloride pollution contributing to freshwater salinization in the Grand Lake St. Marys watershed.'
        },
        {
        title: 'Lake Erie Tributary Sediment and Nutrient Yields',
        funder: 'Heidelberg University NCWQR',
        years: '2024–Present',
        description: 'Analyzing annual sediment and nutrient loads in tributaries to Lake Erie to assess drivers of harmful algal blooms and inform nutrient management strategies.'
        },
        {
        title: 'Western Lake Erie Nitrogen Loss Study',
        funder: 'Heidelberg University NCWQR',
        years: '2024–Present',
        description: 'Investigating controls on in-stream nitrogen loss in Western Lake Erie tributaries to support nutrient load reduction and water quality improvement efforts.'
        },
    ],
    publications: [
        {
        year: 2024,
        title: 'A Tale of Two Tributaries: Source Delineation of Chloride in a Distressed Watershed (Grand Lake St. Marys, Ohio)',
        journal: 'Water Air and Soil Pollution',
        doi: '10.1007/s11270-024-07455-0'
        },
        {
        year: 2024,
        title: 'Drivers of annual suspended sediment and nutrient yields in tributaries to Lake Erie',
        journal: 'Aquatic Ecosystem Health and Management',
        doi: '10.14321/aehm.026.04.05'
        },
        {
        year: 2024,
        title: 'Controls on in-stream nitrogen loss in western Lake Erie tributaries',
        journal: 'Journal of Great Lakes Research',
        doi: '10.1016/j.jglr.2024.102284'
        },
        {
        year: 2024,
        title: 'Ecology of Lake Erie - Nutrients, microbes, algae and dreissenid mussels: A Synthesis',
        journal: 'Aquatic Ecosystem Health and Management',
        doi: '10.14321/aehm.026.04.131'
        },
    ],
    joinedYear: 2018,
    publicationCount: 21,
    },
  {
    id: '5',
    name: 'Emily Clark',
    credentials: 'B.S. in Environmental Science - Restoration',
    title: 'Field and Laboratory Technician',
    department: 'Field Operations',
    type: 'Field Technician',
    email: 'eclack4@heidelbnerg.edu',
    phone: '(419) 448-2198)',
    photo: '/images/people/emily-clark-2026.jpg',
    officeLocation: 'Heidelberg University, Tiffin, Ohio',
    bio: 'Emily Clark is a Field and Laboratory Technician at the National Center for Water Quality Research (NCWQR) at Heidelberg University. She specializes in the collection and processing of water quality samples for long-term monitoring programs, including the H2Ohio Wetland Monitoring Program. Emily operates analytical instruments such as colorimetric auto-analyzers and ion chromatographs, prepares standards and reagents, and ensures strict adherence to QA/QC protocols. Her work supports research on nutrient dynamics, watershed health, and water quality management across Ohio.',
    expertise: [
        'Water Quality Monitoring',
        'Laboratory Analysis',
        'Field Sampling',
        'Nutrient Analysis',
        'Environmental Data QA/QC',
        'Aquatic Ecosystems'
    ],
    education: [
        { degree: 'B.S. in Environmental Science - Restoration', institution: 'Bowling Green State University', year: 2020 }
    ],
    projects: [
        {
        title: 'Long-term Tributary Water Quality Monitoring',
        funder: 'Heidelberg University NCWQR',
        years: '2020–Present',
        description: 'Collection and analysis of river water samples for long-term monitoring programs to track nutrient, sediment, and water quality trends in Ohio tributaries.'
        },
        {
        title: 'H2Ohio Wetland Monitoring Program',
        funder: 'Ohio EPA / Heidelberg University NCWQR',
        years: '2021–Present',
        description: 'Field and laboratory processing of wetland surface water and soil samples to quantify nutrient concentrations and evaluate restoration and management outcomes.'
        },
        {
        title: 'Nutrient Reduction in Manure Runoff Studies',
        funder: 'Bowling Green State University',
        years: '2018–2020',
        description: 'Laboratory analysis of manure treatment methods, including total nitrogen and phosphorus measurement, to assess effectiveness of nutrient reduction strategies.'
        },
        {
        title: 'REU Arctic Soil Respiration Study',
        funder: 'University of Toledo',
        years: '2019',
        description: 'Conducted laboratory experiments measuring soil respiration under sub-zero temperatures and varying carbon levels, and presented findings at the REU Poster Gala.'
        }
    ],
    publications: [],
    joinedYear: 2020
    },
{
    id: '6',
    name: 'Colleen Cosgrove',
    credentials: 'Ph.D. in Ecology, B.S. in Zoology',
    title: 'Postdoctoral Research Associate',
    department: 'Field Operations',
    type: 'Field Technician',
    email: 'ccosgrov@heidelberg.edu',
    phone: '(419) 448-2198)',
    photo: '/images/people/colleen-cosgrove-2026.jpg',
    officeLocation: 'Heidelberg University, Tiffin, Ohio',
    bio: 'Colleen Cosgrove is a Postdoctoral Research Associate at the National Center for Water Quality Research at Heidelberg University. Her current work focuses on developing a cross-organization water quality dashboard to improve accessibility and integration of monitoring data. Previously, she evaluated nutrient and contaminant load estimation methods to improve consistency across freshwater monitoring programs. She earned her Ph.D. in Ecology from Kent State University in 2022, focusing on terrestrial ecosystem and community ecology.',
    expertise: [
        'Water Quality Analysis',
        'Load Estimation Methods',
        'Data Integration & Dashboard Development',
        'Statistical Analysis',
        'Ecology',
        'Community & Ecosystem Ecology',
        'Spatial Statistics',
        'Terrestrial Invertebrates'
    ],
    education: [
        { degree: 'Ph.D. in Ecology', institution: 'Kent State University', year: 2022 },
        { degree: 'B.S. in Zoology', institution: 'Kent State University', year: 2015 }
    ],
    projects: [
        {
        title: 'Cross-Organization Water Quality Dashboard',
        funder: 'Heidelberg University NCWQR',
        years: '2023–Present',
        description: 'Developing a dashboard to integrate and visualize water quality datasets from multiple organizations for improved stakeholder communication.'
        },
        {
        title: 'Load Estimator Model Evaluation',
        funder: 'Heidelberg University NCWQR',
        years: '2023–Present',
        description: 'Statistically comparing nutrient and contaminant load estimation methods across monitoring programs to ensure data consistency and reliability.'
        },
        {
        title: 'Long-Term Freshwater Monitoring Analysis',
        funder: 'Heidelberg University NCWQR',
        years: '2023–Present',
        description: 'Analyzing historical water quality data to evaluate trends in nutrient loads and environmental drivers of water quality changes.'
        },
        {
        title: 'Lake Erie Harmful Algal Bloom Research',
        funder: 'Heidelberg University NCWQR',
        years: '2023–Present',
        description: 'Integrating land-use and water quality data to assess influences on harmful algal bloom formation and persistence in Lake Erie tributaries.'
        }
    ],
    publications: [
        {
        year: 2020,
        title: 'Dominant community mycorrhizal types influence local spatial structure between adult and juvenile temperate forest tree communities',
        journal: 'Functional Ecology',
        doi: '10.1111/1365-2435.13674'
        },
        {
        year: 2018,
        title: 'Gut bacterial assemblages of freshwater macroinvertebrate functional feeding groups',
        journal: 'Hydrobiologia',
        doi: '10.1007/s10750-018-3671-3'
        },
    ],
    joinedYear: 2023,
    publicationCount: 3,
  },
  {
    id: '7',
    name: 'Madison Rice',
    credentials: '',
    title: '',
    department: 'Field Operations',
    type: 'Field Technician',
    email: '',
    phone: '',
    photo: '',
    officeLocation: '',
    bio: '',
    expertise: [],
    education: [],
    projects: [
        {
        title: '',
        funder: '',
        years: '',
        description: ''
        }
    ],
    publications: [],
    joinedYear: 0
    },
];

export const DEPARTMENTS = ['All Departments', 'Research & Administration', 'Analytical Laboratory', 'Field Operations', 'Data & Technology'];
export const TYPES = ['All Roles', 'Leadership', 'Research Scientist', 'Lab Technician', 'Field Technician', 'Data & Technology', 'Research Associate'];
