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
}

export const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'David R. Baker',
    credentials: 'Ph.D.',
    title: 'Director & Principal Investigator',
    department: 'Research & Administration',
    type: 'Leadership',
    email: 'dbaker@heidelberg.edu',
    phone: '(419) 448-3828',
    photo: 'https://images.unsplash.com/photo-1750853754432-475026390c49?w=400&q=80',
    officeLocation: 'Gillmor Science Hall, Room 201',
    bio: 'Dr. David Baker has led the National Center for Water Quality Research since 2005, continuing a legacy that dates to his early career work establishing the original River Laboratory monitoring network in the late 1970s. His research focuses on nutrient dynamics in agricultural watersheds, phosphorus cycling in the Lake Erie basin, and the relationships between land use, hydrology, and water quality. Dr. Baker\'s data and analyses have directly informed federal and state nutrient management policy across the Great Lakes region, and his monitoring network is widely recognized as the most comprehensive long-term tributary water quality dataset in North America.',
    expertise: [
      'Nutrient Dynamics',
      'Agricultural Watersheds',
      'Phosphorus Cycling',
      'Lake Erie Water Quality',
      'Long-term Monitoring',
      'Environmental Policy',
      'Tributary Loading',
    ],
    education: [
      { degree: 'Ph.D. in Limnology', institution: 'Michigan State University', year: 1977 },
      { degree: 'M.S. in Environmental Science', institution: 'Ohio State University', year: 1973 },
      { degree: 'B.S. in Biology', institution: 'Heidelberg College', year: 1971 },
    ],
    projects: [
      {
        title: 'COMPASS Great Lakes Coastal Observations Network',
        funder: 'U.S. Department of Energy',
        years: '2022–2028',
        description: 'Expanding coastal ecosystem monitoring across the Great Lakes to quantify carbon, nutrient, and water cycling responses to climate change.',
      },
      {
        title: 'Heidelberg Tributary Loading Program (HTLP)',
        funder: 'USDA / NOAA / ODNR',
        years: '1975–present',
        description: 'Continuous monitoring of nutrient, sediment, and discharge at 18 Lake Erie tributary stations. The foundational dataset for Great Lakes water quality management.',
      },
      {
        title: 'Lake Erie Phosphorus Reduction Initiative',
        funder: 'Ohio EPA',
        years: '2019–2024',
        description: 'Quantifying tributary phosphorus loads relative to the binational Great Lakes Water Quality Agreement targets and informing H2Ohio wetland siting priorities.',
      },
    ],
    publications: [
      {
        year: 2023,
        title: 'Four decades of tributary nutrient loading to Lake Erie: Trends, drivers, and management implications',
        journal: 'Journal of Great Lakes Research',
        doi: '10.1016/j.jglr.2023.04.011',
      },
      {
        year: 2021,
        title: 'Spring phosphorus loading from the Maumee River: A 45-year context for harmful algal bloom forecasting',
        journal: 'Environmental Science & Technology',
        doi: '10.1021/acs.est.1c02174',
      },
      {
        year: 2019,
        title: 'Legacy phosphorus and the challenge of Lake Erie eutrophication',
        journal: 'Science of the Total Environment',
        doi: '10.1016/j.scitotenv.2019.135178',
      },
      {
        year: 2017,
        title: 'Dissolved reactive phosphorus export from agricultural watersheds: Evidence for preferential flow pathways',
        journal: 'Water Resources Research',
        doi: '10.1002/2016WR020156',
      },
    ],
    joinedYear: 1975,
  },
  {
    id: '2',
    name: 'Laura T. Winslow',
    credentials: 'Ph.D.',
    title: 'Senior Research Scientist — Water Chemistry',
    department: 'Analytical Laboratory',
    type: 'Research Scientist',
    email: 'lwinslow@heidelberg.edu',
    phone: '(419) 448-3831',
    photo: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?w=400&q=80',
    officeLocation: 'Gillmor Science Hall, Room 115',
    bio: 'Dr. Laura Winslow joined NCWQR in 2011 after completing her doctoral work on dissolved organic matter dynamics in Midwestern agricultural streams. At NCWQR, she oversees all analytical laboratory operations and leads research on emerging contaminants, microplastics, and the chemical fingerprinting of nutrient sources across the Lake Erie watershed. She has developed several novel passive sampling methods now adopted by partner labs across the Great Lakes network and has served as co-investigator on five federally funded research projects.',
    expertise: [
      'Water Chemistry',
      'Dissolved Organic Matter',
      'Emerging Contaminants',
      'Microplastics',
      'Passive Sampling Methods',
      'Source Attribution',
      'Analytical Methods Development',
    ],
    education: [
      { degree: 'Ph.D. in Environmental Chemistry', institution: 'University of Michigan', year: 2010 },
      { degree: 'B.S. in Chemistry', institution: 'Denison University', year: 2005 },
    ],
    projects: [
      {
        title: 'Veterinary Pharmaceuticals in Lake Erie Tributaries',
        funder: 'National Science Foundation',
        years: '2022–2025',
        description: 'Deploying passive samplers across 12 tributary stations to detect and quantify veterinary antibiotics, hormones, and antiparasitic compounds in agricultural watersheds.',
      },
      {
        title: 'Microplastic Flux in Great Lakes Tributaries',
        funder: 'NOAA Great Lakes Program',
        years: '2021–2024',
        description: 'Characterizing microplastic particle types, concentrations, and seasonal flux at selected HTLP monitoring stations.',
      },
    ],
    publications: [
      {
        year: 2024,
        title: 'Veterinary pharmaceuticals detected in Lake Erie tributaries using passive sampling: Occurrence, seasonality, and source attribution',
        journal: 'Environmental Science & Technology',
        doi: '10.1021/acs.est.4c01023',
      },
      {
        year: 2022,
        title: 'Dissolved organic matter character along a land-use gradient in Lake Erie agricultural tributaries',
        journal: 'Biogeochemistry',
        doi: '10.1007/s10533-022-00941-2',
      },
      {
        year: 2020,
        title: 'Passive sampler performance in high-turbidity agricultural streams: Comparison with active monitoring',
        journal: 'Chemosphere',
        doi: '10.1016/j.chemosphere.2020.126918',
      },
    ],
    joinedYear: 2011,
  },
  {
    id: '3',
    name: 'Marcus J. Ostrowski',
    credentials: 'M.S.',
    title: 'Research Scientist — Watershed Hydrology',
    department: 'Field Operations',
    type: 'Research Scientist',
    email: 'mostrowski@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1758685734503-58a8accc24e8?w=400&q=80',
    officeLocation: 'Gillmor Science Hall, Room 118',
    bio: 'Marcus Ostrowski leads NCWQR\'s field operations program, overseeing the deployment and maintenance of continuous monitoring stations across the HTLP network. With over 15 years of experience in hydrological monitoring, he specializes in streamflow measurement, rating curve development, and sensor calibration. Marcus also leads NCWQR\'s storm event sampling campaigns, which capture the episodic nutrient pulses responsible for the majority of annual tributary loading to Lake Erie.',
    expertise: [
      'Streamflow Measurement',
      'Hydrological Monitoring',
      'Rating Curve Development',
      'Storm Event Sampling',
      'Sensor Calibration',
      'GIS & Spatial Analysis',
      'Continuous Water Quality Monitoring',
    ],
    education: [
      { degree: 'M.S. in Hydrology', institution: 'Ohio State University', year: 2008 },
      { degree: 'B.S. in Environmental Science', institution: 'Bowling Green State University', year: 2006 },
    ],
    projects: [
      {
        title: 'Heidelberg Tributary Loading Program — Field Operations',
        funder: 'USDA / NOAA',
        years: '2009–present',
        description: 'Directing all field monitoring operations for the 18-station HTLP network, including instrument maintenance, QA/QC, and storm response sampling.',
      },
    ],
    publications: [
      {
        year: 2023,
        title: 'High-frequency turbidity as a proxy for suspended sediment in agricultural streams: Calibration uncertainty and transferability',
        journal: 'Hydrological Processes',
        doi: '10.1002/hyp.14832',
      },
    ],
    joinedYear: 2009,
  },
  {
    id: '4',
    name: 'Priya Nandakumar',
    credentials: 'Ph.D.',
    title: 'Research Scientist — Biogeochemistry',
    department: 'Analytical Laboratory',
    type: 'Research Scientist',
    email: 'pnandakumar@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1602610187228-ff21f0316be0?w=400&q=80',
    officeLocation: 'Gillmor Science Hall, Room 116',
    bio: 'Dr. Priya Nandakumar is a biogeochemist whose work focuses on the cycling of carbon and nitrogen in agricultural and coastal freshwater systems. She joined NCWQR in 2018 following postdoctoral research at the Great Lakes Environmental Research Laboratory (GLERL). Her current projects include quantifying greenhouse gas emissions from Lake Erie tributaries and studying the role of riparian buffers and constructed wetlands in nutrient and carbon retention.',
    expertise: [
      'Biogeochemistry',
      'Carbon Cycling',
      'Nitrogen Dynamics',
      'Greenhouse Gas Fluxes',
      'Wetland Science',
      'Riparian Buffers',
      'Stable Isotopes',
    ],
    education: [
      { degree: 'Ph.D. in Biogeochemistry', institution: 'University of Notre Dame', year: 2015 },
      { degree: 'M.S. in Environmental Science', institution: 'Indiana University', year: 2011 },
      { degree: 'B.S. in Chemistry', institution: 'University of Mumbai', year: 2009 },
    ],
    projects: [
      {
        title: 'H2Ohio Wetland Monitoring — LEARN Network',
        funder: 'Ohio Department of Natural Resources',
        years: '2020–present',
        description: 'Monitoring constructed wetland performance for phosphorus, nitrate, and dissolved carbon retention as part of Ohio\'s H2Ohio water quality initiative.',
      },
      {
        title: 'COMPASS Great Lakes — Carbon Flux Component',
        funder: 'U.S. Department of Energy',
        years: '2022–2028',
        description: 'Measuring greenhouse gas fluxes and dissolved inorganic carbon dynamics at Lake Erie coastal focal sites.',
      },
    ],
    publications: [
      {
        year: 2024,
        title: 'H2Ohio wetland pilot results: First-year phosphorus and carbon retention at four agricultural drainage treatment sites',
        journal: 'Ecological Engineering',
        doi: '10.1016/j.ecoleng.2024.107188',
      },
      {
        year: 2022,
        title: 'N2O and CO2 emissions from agricultural drainage ditches in the Maumee watershed',
        journal: 'Global Biogeochemical Cycles',
        doi: '10.1029/2022GB007341',
      },
    ],
    joinedYear: 2018,
  },
  {
    id: '5',
    name: 'Jesse T. Caldwell',
    credentials: '',
    title: 'Senior Field Technician & Station Lead',
    department: 'Field Operations',
    type: 'Field Technician',
    email: 'jcaldwell@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1653070200909-2703da0421c1?w=400&q=80',
    bio: 'Jesse Caldwell is NCWQR\'s Senior Field Technician, responsible for the day-to-day operation of monitoring stations on the Maumee, Sandusky, and Portage River corridors. He leads a team of two field technicians, coordinates the storm-event auto-sampler response network, and manages instrument calibration schedules across the western Lake Erie tributary stations. Jesse has logged over 2,000 field days with NCWQR and is a certified USGS streamgaging technician.',
    expertise: [
      'Streamgaging',
      'Auto-sampler Operation',
      'Instrument Calibration',
      'Water Sample Collection',
      'Station Maintenance',
      'Storm Event Response',
    ],
    education: [
      { degree: 'B.S. in Environmental Technology', institution: 'Terra State Community College', year: 2013 },
    ],
    projects: [
      {
        title: 'HTLP Western Basin Station Network',
        funder: 'USDA / NOAA',
        years: '2014–present',
        description: 'Day-to-day operation, maintenance, and QA/QC for nine western Lake Erie tributary monitoring stations.',
      },
    ],
    publications: [],
    joinedYear: 2014,
  },
  {
    id: '6',
    name: 'Megan Ortiz',
    credentials: '',
    title: 'Laboratory Technician — Sample Analysis',
    department: 'Analytical Laboratory',
    type: 'Lab Technician',
    email: 'mortiz@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?w=400&q=80',
    bio: 'Megan Ortiz manages sample intake, preparation, and analysis in the NCWQR analytical laboratory. She is responsible for total phosphorus, dissolved reactive phosphorus, nitrate, and suspended sediment analyses across thousands of water samples processed annually. Megan also oversees laboratory QA/QC documentation and participates in the interlaboratory proficiency testing program coordinated through the Great Lakes Water Quality monitoring network.',
    expertise: [
      'Nutrient Analysis',
      'Suspended Sediment',
      'Laboratory QA/QC',
      'Sample Preparation',
      'Automated Colorimetry',
      'ICP-MS',
    ],
    education: [
      { degree: 'B.S. in Chemistry', institution: 'Heidelberg University', year: 2019 },
    ],
    projects: [],
    publications: [],
    joinedYear: 2019,
  },
  {
    id: '7',
    name: 'Tobias Reinhardt',
    credentials: 'M.S.',
    title: 'Data Manager & GIS Analyst',
    department: 'Data & Technology',
    type: 'Data & Technology',
    email: 'treinhardt@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1770219733996-85ce5b943a18?w=400&q=80',
    officeLocation: 'Gillmor Science Hall, Room 205',
    bio: 'Tobias Reinhardt manages NCWQR\'s data infrastructure, including the HTLP Data Portal (ncwqr-data.org), the internal LIMS (Laboratory Information Management System), and all GIS and spatial analysis operations. He joined NCWQR in 2016 and has since led the migration of 50 years of historical monitoring data to a modern cloud-hosted database, developed the public API for the HTLP Data Portal, and built interactive dashboards for real-time tributary loading visualization.',
    expertise: [
      'Database Management',
      'GIS & Spatial Analysis',
      'Web Data Portals',
      'Python & R Programming',
      'Data Visualization',
      'LIMS Administration',
      'REST APIs',
    ],
    education: [
      { degree: 'M.S. in Geographic Information Science', institution: 'Kent State University', year: 2015 },
      { degree: 'B.S. in Computer Science', institution: 'Bowling Green State University', year: 2013 },
    ],
    projects: [
      {
        title: 'HTLP Data Portal Modernization',
        funder: 'Internal / USDA',
        years: '2016–present',
        description: 'Redesigning and maintaining the public-facing NCWQR data portal, including 50-year historical data migration, public API development, and interactive visualization tools.',
      },
    ],
    publications: [],
    joinedYear: 2016,
  },
  {
    id: '8',
    name: 'Sofia Brennan',
    credentials: 'M.S.',
    title: 'Research Associate',
    department: 'Research & Administration',
    type: 'Research Associate',
    email: 'sbrennan@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1602610187228-ff21f0316be0?w=400&q=80',
    bio: 'Sofia Brennan is a Research Associate whose work bridges data analysis and science communication. She supports grant reporting, manuscript preparation, and stakeholder communication across NCWQR\'s federal and state-funded projects. Sofia also coordinates the student internship program and serves as the primary liaison for public inquiry and media outreach. She holds a master\'s degree in Environmental Communication and Policy from Ohio State University.',
    expertise: [
      'Science Communication',
      'Grant Reporting',
      'Environmental Policy',
      'Stakeholder Engagement',
      'Student Mentorship',
      'Media Relations',
    ],
    education: [
      { degree: 'M.S. in Environmental Communication & Policy', institution: 'Ohio State University', year: 2020 },
      { degree: 'B.A. in Environmental Studies', institution: 'Kenyon College', year: 2018 },
    ],
    projects: [],
    publications: [],
    joinedYear: 2020,
  },
  {
    id: '9',
    name: 'Connor Walsh',
    credentials: '',
    title: 'Field Technician',
    department: 'Field Operations',
    type: 'Field Technician',
    email: 'cwalsh@heidelberg.edu',
    photo: 'https://images.unsplash.com/photo-1653070200909-2703da0421c1?w=400&q=80',
    bio: 'Connor Walsh is a Field Technician supporting monitoring operations on the Cuyahoga, Grand, and Ashtabula River corridors — the eastern Lake Erie tributary stations. He joined NCWQR in 2022 as part of a NOAA-funded network expansion and is responsible for weekly sample collection, instrument checks, and storm-response sampling on the eastern station cluster.',
    expertise: [
      'Water Sample Collection',
      'Instrument Maintenance',
      'Storm Response Sampling',
      'Field Safety',
      'Data Entry & QA',
    ],
    education: [
      { degree: 'B.S. in Environmental Science', institution: 'Heidelberg University', year: 2022 },
    ],
    projects: [],
    publications: [],
    joinedYear: 2022,
  },
];

export const DEPARTMENTS = ['All Departments', 'Research & Administration', 'Analytical Laboratory', 'Field Operations', 'Data & Technology'];
export const TYPES = ['All Roles', 'Leadership', 'Research Scientist', 'Lab Technician', 'Field Technician', 'Data & Technology', 'Research Associate'];
