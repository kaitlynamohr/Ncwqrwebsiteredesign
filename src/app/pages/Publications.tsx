import { useState, useMemo } from 'react';
import { PageHero } from '../components/PageHero';
import { Search, ExternalLink, Filter } from 'lucide-react';
import { motion } from 'motion/react';

interface Publication {
  id: number;
  year: number;
  category: string;
  title: string;
  authors: string;
  journal: string;
  doi: string | null;
  derived?: boolean;
}

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';
const [showDerived, setShowDerived] = useState(true);

const publications: Publication[] = [
  // ── 2023 ──
  {
    id: 1, year: 2023, category: 'Journal Article',
    title: 'Drivers of annual suspended sediment and nutrient yields in tributaries to Lake Erie',
    authors: 'Johnson, L.T., Manning, N., Dezse, J., Boehler, J., Clark, E., Fulton, T., Miller, N., and Roerdink, A.',
    journal: 'Aquatic Ecosystem Health & Management 26(4): 5–19',
    doi: '10.14321/aehm.026.04.05',
  },
  {
    id: 2, year: 2023, category: 'Journal Article',
    title: 'Nutrient and environmental factors regulating western Lake Erie cyanobacterial blooms',
    authors: 'Hounshell, A.G., Johnson, L.T., and Stumpf, R.P.',
    journal: 'Aquatic Ecosystem Health & Management 26(4): 63–75',
    doi: '10.14321/aehm.026.04.63',
  },
  {
    id: 3, year: 2023, category: 'Journal Article',
    title: 'Ecology of Lake Erie – Nutrients, microbes, algae, and dreissenid mussels: A synthesis',
    authors: 'Ludsin, S.A., Munawar, M., Bocaniov, S.A., Johnson, L.T., Kane, D.D., Manning, N.F., and Mayer, C.M.',
    journal: 'Aquatic Ecosystem Health & Management 26(4): 131–138',
    doi: '10.14321/aehm.026.04.131',
  },
  {
    id: 4, year: 2023, category: 'Journal Article',
    title: 'Exploring long-term trends in microcystin toxin values associated with persistent harmful algal blooms in Grand Lake St Marys',
    authors: 'Jacquemin, S.J., Doll, J.C., Johnson, L.T., and Newell, S.E.',
    journal: 'Harmful Algae',
    doi: '10.1016/j.hal.2023.102374',
  },
  {
    id: 5, year: 2023, category: 'Journal Article',
    title: 'Influence of sampling frequency and estimation method on phosphorus load uncertainty in the Western Lake Erie Basin, Ohio, USA',
    authors: 'Kamrath, B., Yuan, Y., Manning, N., and Johnson, L.',
    journal: 'Journal of Hydrology 617',
    doi: '10.1016/j.jhydrol.2022.128906',
  },
  {
    id: 6, year: 2023, category: 'Journal Article',
    title: 'Watershed- and reach-scale drivers of phosphorus retention and release by streambed sediment in a western Lake Erie watershed during summer',
    authors: 'Kreiling, R.M., Perner, P.M., Breckner, K.J., Williamson, T.N., Bartsch, L.A., Hood, J.M., Manning, N.F., and Johnson, L.T.',
    journal: 'Science of The Total Environment',
    doi: '10.1016/j.scitotenv.2022.160804',
  },
  // ── 2022 ──
  {
    id: 7, year: 2022, category: 'Journal Article',
    title: 'When it snows it pours: Increased chloride concentrations in the Cuyahoga River during the last half century',
    authors: 'Kane, D.K., Manning, N.F., and Johnson, L.T.',
    journal: 'Journal of Great Lakes Research 48: 1573–1586',
    doi: '10.1016/j.jglr.2022.08.017',
  },
  {
    id: 8, year: 2022, category: 'Journal Article',
    title: 'Model assumptions limit implications for nitrogen and phosphorus management',
    authors: 'Stow, C.A., Stumpf, R.P., Rowe, M.D., Johnson, L.T., Carrick, H.J., and Yerubandi, R.',
    journal: 'Journal of Great Lakes Research 48: 1735–1737',
    doi: '10.1016/j.jglr.2022.09.003',
  },
  // ── 2021 ──
  {
    id: 9, year: 2021, category: 'Journal Article',
    title: 'Lake Erie tributary nutrient trend evaluation: normalizing concentrations and loads to reduce flow variability',
    authors: 'Rowland, F., Stow, C.A., Johnson, L.T., and Hirsch, R.M.',
    journal: 'Ecological Indicators 125: 107601',
    doi: '10.1016/j.ecolind.2021.107601',
  },
  {
    id: 10, year: 2021, category: 'Journal Article',
    title: 'Evaluating management options to reduce Lake Erie algal blooms using an ensemble of watershed models',
    authors: 'Martin, J., Kalcic, M., Aloysius, N., Apostel, A., Brooker, M., Evenson, G., Kast, J., Kujawa, H., Murumkar, A., Becker, R., Boles, C., Confesor, R., et al.',
    journal: 'Journal of Environmental Management 280: 111710',
    doi: '10.1016/j.jenvman.2020.111710',
  },
  {
    id: 11, year: 2021, category: 'Journal Article',
    title: 'Uncertainty in critical source area predictions from watershed-scale hydrologic models',
    authors: 'Evenson, G.R., Kalcic, M., Wang, Y., Robertson, D., Scavia, D., Martin, J., Aloysius, N., Apostel, A., Boles, C., Brooker, M., Confesor, R., et al.',
    journal: 'Journal of Environmental Management 279: 111506',
    doi: '10.1016/j.jenvman.2020.111506',
  },
  // ── 2020 ──
  {
    id: 12, year: 2020, category: 'Journal Article',
    title: 'Less agricultural phosphorus applied in 2019 led to less dissolved phosphorus transported to Lake Erie',
    authors: 'Guo, T., Johnson, L.T., LaBarge, G.A., Penn, C.J., Stumpf, R.P., Baker, D.B., and Shao, G.',
    journal: 'Environmental Science & Technology 55(1): 283–291',
    doi: '10.1021/acs.est.0c03495',
  },
  {
    id: 13, year: 2020, category: 'Journal Article',
    title: 'The hydrologic model as a source of nutrient loading uncertainty in a future climate',
    authors: 'Kujawa, H., Kalcic, M., Martin, J., Aloysius, N., Apostel, A., Kast, J., Murumkar, A., Evenson, G., Becker, R., Boles, C., Confesor, R., et al.',
    journal: 'Science of the Total Environment 724: 138004',
    doi: '10.1016/j.scitotenv.2020.138004',
  },
  {
    id: 14, year: 2020, category: 'Journal Article',
    title: 'Crop growth, hydrology, and water quality dynamics in agricultural fields across the Western Lake Erie Basin: Multi-site verification of the Nutrient Tracking Tool (NTT)',
    authors: 'Guo, T., Confesor, R., Saleh, A., and King, K.',
    journal: 'Science of the Total Environment 726: 138485',
    doi: '10.1016/j.scitotenv.2020.138485',
  },
  {
    id: 15, year: 2020, category: 'Journal Article',
    title: 'Recent patterns in Lake Erie phosphorus and chlorophyll a concentrations in response to changing loads',
    authors: 'Rowland, F., Stow, C.A., Johengen, T.H., Burtner, A.M., Palladino, D., Gossiaux, D.C., Davis, T.W., Johnson, L.T., and Ruberg, S.',
    journal: 'Environmental Science & Technology 54(2): 835–841',
    doi: '10.1021/acs.est.9b05326',
  },
  // ── 2019 ──
  {
    id: 16, year: 2019, category: 'Technical Report',
    title: 'Climate change effects on major drivers of harmful algal blooms (HABs): best management practices and HAB severity',
    authors: 'Confesor, R., and Guo, T.',
    journal: 'ResearchGate Preprint',
    doi: '10.13140/RG.2.2.22041.57447',
  },
  {
    id: 17, year: 2019, category: 'Journal Article',
    title: 'Needed: Early-term adjustments for Lake Erie phosphorus target loads to address western basin cyanobacterial blooms',
    authors: 'Baker, D.B., Johnson, L.T., Confesor, R.B., Crumrine, J., Guo, T., and Manning, N.',
    journal: 'Journal of Great Lakes Research 45(2): 203–211',
    doi: '10.1016/j.jglr.2019.01.011',
  },
  {
    id: 18, year: 2019, category: 'Journal Article',
    title: 'Tracking changes in nutrient delivery to western Lake Erie: Approaches to compensate for variability and trends in streamflow',
    authors: 'Choquette, A.F., Hirsch, R.M., Murphy, J.C., Johnson, L.T., and Confesor, R.B.',
    journal: 'Journal of Great Lakes Research 45(1): 21–39',
    doi: '10.1016/j.jglr.2018.11.012',
  },
  {
    id: 19, year: 2019, category: 'Journal Article',
    title: 'Transforming soil phosphorus fertility management strategies to support the delivery of multiple ecosystem services from agricultural systems',
    authors: 'Macintosh, K.A., Doody, D.G., Withers, P.J.A., McDowell, R.W., Smith, D.R., Johnson, L.T., Bruulsema, T.W., O\'Flaherty, V., and McGrath, J.W.',
    journal: 'Science of the Total Environment 649: 90–98',
    doi: '10.1016/j.scitotenv.2018.08.272',
  },
  {
    id: 20, year: 2019, category: 'Journal Article',
    title: 'Commentary: Achieving phosphorus reduction targets for Lake Erie',
    authors: 'Wilson, R.S., Beetstra, M.A., Reutter, J.M., Hesse, G., DeVanna Fussell, K.M., Johnson, L.T., King, K.W., LaBarge, G.A., Martin, J.F., and Winslow, C.',
    journal: 'Journal of Great Lakes Research 45(1): 4–11',
    doi: '10.1016/j.jglr.2018.11.004',
  },
  // ── 2018 ──
  {
    id: 21, year: 2018, category: 'Journal Article',
    title: 'Influence of dual nitrogen and phosphorus additions on nutrient uptake and saturation kinetics in a forested headwater stream',
    authors: 'Griffiths, N.A., and Johnson, L.T.',
    journal: 'Freshwater Science 37(4): 810–825',
    doi: '10.1086/700700',
  },
  {
    id: 22, year: 2018, category: 'Journal Article',
    title: 'Changes in water quality of Grand Lake St. Marys watershed following implementation of a distressed watershed rules package',
    authors: 'Jacquemin, S.J., Johnson, L.T., Dirksen, T.A., and McGlinch, G.',
    journal: 'Journal of Environmental Quality 47(1): 113–120',
    doi: '10.2134/jeq2017.08.0338',
  },
  {
    id: 23, year: 2018, category: 'Journal Article',
    title: 'Lake Erie, phosphorus, and microcystin: Is it really the farmer\'s fault?',
    authors: 'Smith, D.R., Wilson, R.S., King, K.W., Zwonitzer, M., McGrath, J.M., Harmel, R.D., Haney, R.L., and Johnson, L.T.',
    journal: 'Journal of Soil and Water Conservation 73(1): 48–57',
    doi: '10.2489/jswc.73.1.48',
  },
  // ── 2017 ──
  {
    id: 24, year: 2017, category: 'Journal Article',
    title: 'Vertical stratification of soil phosphorus as a concern for dissolved phosphorus runoff in the Lake Erie basin',
    authors: 'Baker, D.B., Johnson, L.T., Confesor, R.B., and Crumrine, J.P.',
    journal: 'Journal of Environmental Quality 46(6): 1287–1295',
    doi: '10.2134/jeq2016.09.0337',
  },
  {
    id: 25, year: 2017, category: 'Journal Article',
    title: 'Increased soluble phosphorus loads to Lake Erie: Unintended consequences of conservation practices?',
    authors: 'Jarvie, H.P., Johnson, L.T., Sharpley, A.N., Smith, D.R., Baker, D.B., Bruulsema, T.W., and Confesor, R.',
    journal: 'Journal of Environmental Quality 46(1): 123–132',
    doi: '10.2134/jeq2016.07.0248',
  },
  {
    id: 26, year: 2017, category: 'Journal Article',
    title: 'Phosphorus availability in western Lake Erie basin drainage waters: Legacy evidence across spatial scales',
    authors: 'King, K.W., Williams, M.R., Johnson, L.T., Smith, D.R., LaBarge, G.A., and Fausey, N.R.',
    journal: 'Journal of Environmental Quality 46(2): 466–469',
    doi: '10.2134/jeq2016.11.0434',
  },
  {
    id: 27, year: 2017, category: 'Journal Article',
    title: 'Impact of length of dataset on stream flow calibration parameters and performance of APEX model',
    authors: 'Nelson, A.M., Moriasi, D.N., Talebizadeh, M., Steiner, J.L., Confesor, R.B., Gowda, P.H., Starks, P.J., and Tadesse, H.',
    journal: 'Journal of the American Water Resources Association 53(5): 1164–1177',
    doi: '10.1111/1752-1688.12564',
  },
  {
    id: 28, year: 2017, category: 'Journal Article',
    title: 'Multiple models guide strategies for agricultural nutrient reductions',
    authors: 'Scavia, D., Kalcic, M., Muenich, R.L., Read, J., Aloysius, N., Bertani, I., Boles, C., Confesor, R., DePinto, J., et al.',
    journal: 'Frontiers in Ecology and the Environment 15(3): 126–132',
    doi: '10.1002/fee.1472',
  },
  // ── 2016 ──
  {
    id: 29, year: 2016, category: 'Technical Report',
    title: 'A phosphorus soil test metric for reducing dissolved phosphorus loading to Lake Erie',
    authors: 'Baker, D.B.',
    journal: 'Final Report, Grant #833, Great Lakes Protection Fund',
    doi: null,
  },
  {
    id: 30, year: 2016, category: 'Journal Article',
    title: 'Global solutions to regional problems: Collecting global expertise to address the problem of harmful cyanobacterial blooms. A Lake Erie case study',
    authors: 'Bullerjahn, G.S., McKay, R.M., Davis, T.W., Baker, D.B., Boyer, G.L., D\'Anglada, L.V., et al.',
    journal: 'Harmful Algae 54: 223–238',
    doi: '10.1016/j.hal.2016.01.003',
  },
  {
    id: 31, year: 2016, category: 'Technical Report',
    title: 'Monitoring and evaluating nonpoint source watershed projects',
    authors: 'Dressing, S.A., Meals, D.W., Harcum, J.B., Spooner, J., Stribling, J.B., Richards, R.P., et al.',
    journal: 'U.S. EPA Office of Water, EPA 841-R-16-010',
    doi: '10.5281/zenodo.6799625',
  },
  {
    id: 32, year: 2016, category: 'Journal Article',
    title: 'Modified APEX model for simulating macropore phosphorus contributions to tile drains',
    authors: 'Ford, W.I., King, K.W., Williams, M.R., and Confesor, R.B.',
    journal: 'Journal of Environmental Quality 46(6): 1413–1423',
    doi: '10.2134/jeq2016.06.0218',
  },
  {
    id: 33, year: 2016, category: 'Journal Article',
    title: 'Guiding phosphorus stewardship for multiple ecosystem services',
    authors: 'MacDonald, G.K., Jarvie, H.P., Withers, P.J.A., Doody, D.G., Keeler, B.L., Haygarth, P.M., Johnson, L.T., et al.',
    journal: 'Ecosystem Health and Sustainability 2(12): e01251',
    doi: '10.1002/ehs2.1251',
  },
  {
    id: 34, year: 2016, category: 'Journal Article',
    title: 'Internal loading of phosphorus in western Lake Erie',
    authors: 'Matisoff, G., Kaltenberg, E.M., Steely, R.L., Hummel, S.K., Seo, J., Gibbons, K.J., Bridgeman, T.B., Johnson, L.T., et al.',
    journal: 'Journal of Great Lakes Research 42(4): 775–788',
    doi: '10.1016/j.jglr.2016.04.004',
  },
  {
    id: 35, year: 2016, category: 'Technical Report',
    title: 'Informing Lake Erie agriculture nutrient management via scenario development',
    authors: 'Scavia, D., Kalcic, M., Muenich, R.L., Aloysius, N., Arnold, J., Atwood, J., Boles, C., Confesor, R., et al.',
    journal: 'University of Michigan Water Center',
    doi: '10.5281/zenodo.6799812',
  },
  {
    id: 36, year: 2016, category: 'Final Report',
    title: 'Gene sequencing as a tool for identifying native and nonindigenous sphaeriid clams in Lake Erie',
    authors: 'Spencer, K., Boehler, J.A., and Krieger, K.A.',
    journal: 'Ohio Lake Erie Commission for Lake Erie Protection Fund Grant SG 499-2015',
    doi: null,
  },
  {
    id: 37, year: 2016, category: 'Journal Article',
    title: 'Forecasting annual cyanobacterial bloom biomass to inform management decisions in Lake Erie',
    authors: 'Stumpf, R.P., Johnson, L.T., Wynne, T.T., and Baker, D.B.',
    journal: 'Journal of Great Lakes Research 42(6): 1174–1183',
    doi: '10.1016/j.jglr.2016.08.006',
  },
  {
    id: 38, year: 2016, category: 'Journal Article',
    title: 'Different seasonality of nitrate export from an agricultural watershed and an urbanized watershed in Midwestern USA',
    authors: 'Tian, S., Youssef, M.A., Richards, R.P., Liu, J., Baker, D.B., and Liu, Y.',
    journal: 'Journal of Hydrology 541(B): 1375–1384',
    doi: '10.1016/j.jhydrol.2016.08.042',
  },
  {
    id: 39, year: 2016, category: 'Journal Article',
    title: 'The re-eutrophication of Lake Erie: Harmful algal blooms and hypoxia',
    authors: 'Watson, S., Miller, C., Arhonditsis, G., Boyer, G., Carmichael, W., Charlton, M., Confesor, R., et al.',
    journal: 'Harmful Algae 56: 44–66',
    doi: '10.1016/j.hal.2016.04.010',
  },
  {
    id: 40, year: 2016, category: 'Journal Article',
    title: 'Hydrologic and biogeochemical controls on phosphorus export from Western Lake Erie tributaries',
    authors: 'Williams, M.R., King, K.W., Baker, D.B., Johnson, L.T., Smith, D.R., and Fausey, N.R.',
    journal: 'Journal of Great Lakes Research 42(6): 1403–1411',
    doi: '10.1016/j.jglr.2016.09.009',
  },
  {
    id: 41, year: 2016, category: 'Journal Article',
    title: 'Edge-of-field evaluation of the Ohio Phosphorus Risk Index',
    authors: 'Williams, M.R., King, K.W., LaBarge, G.A., Confesor, R.B., and Fausey, N.R.',
    journal: 'Journal of Environmental Quality 46(6): 1306–1313',
    doi: '10.2134/jeq2016.05.0198',
  },
  // ── 2015 ──
  {
    id: 42, year: 2015, category: 'Journal Article',
    title: 'Implementing agricultural phosphorus science and management to combat eutrophication',
    authors: 'Kleinman, P.J.A., Sharpley, A.N., Withers, P.J.A., Bergstrom, L., Johnson, L.T., and Doody, D.G.',
    journal: 'AMBIO 44: 297–310',
    doi: '10.1007/s13280-015-0631-2',
  },
  {
    id: 43, year: 2015, category: 'Final Report',
    title: 'Utility of sonar samples for interpretation of environmental quality in Lake Erie river mouths, lacustuaries, bays and harbors',
    authors: 'Krieger, K.A.',
    journal: 'Final Report to Ohio Environmental Protection Agency, NE District Office',
    doi: null,
  },
  {
    id: 44, year: 2015, category: 'Journal Article',
    title: 'Surface runoff and tile drainage transport of phosphorus in the Midwestern United States',
    authors: 'Smith, D., King, K., Johnson, L.T., Francesconi, W., Richards, R.P., Baker, D., and Sharpley, A.',
    journal: 'Journal of Environmental Quality 44(2): 495–502',
    doi: '10.2134/jeq2014.04.0176',
  },
  {
    id: 45, year: 2015, category: 'Journal Article',
    title: 'Long-term and seasonal trend decomposition of the Maumee River nutrient inputs to western Lake Erie',
    authors: 'Stow, C.A., Cha, Y., Johnson, L.T., Confesor, R., and Richards, R.P.',
    journal: 'Environmental Science & Technology 49(6): 3392–3400',
    doi: '10.1021/es5062648',
  },
  {
    id: 46, year: 2015, category: 'Journal Article',
    title: 'Record-breaking Lake Erie hypoxia during 2012 drought',
    authors: 'Zhou, Y., Michalak, A.M., Beletsky, D., Rao, Y.R., and Richards, R.P.',
    journal: 'Environmental Science & Technology 49(2): 800–807',
    doi: '10.1021/es503981n',
  },
  // ── 2014 ──
  {
    id: 47, year: 2014, category: 'Final Report',
    title: 'The Honey Creek Targeted Watershed Project',
    authors: 'Baker, D.B.',
    journal: 'Final Report, U.S. EPA, Assistance ID No. WS-00E39901-0',
    doi: '10.5281/zenodo.6802780',
  },
  {
    id: 48, year: 2014, category: 'Journal Article',
    title: 'Lagrangian analysis of the transport and processing of agricultural runoff in the lower Maumee River and Maumee Bay',
    authors: 'Baker, D.B., Ewing, D.E., Johnson, L.T., Kramer, J.W., Merryfield, B.J., Confesor, R.B., Richards, R.P., and Roerdink, A.A.',
    journal: 'Journal of Great Lakes Research 40(3): 479–495',
    doi: '10.1016/j.jglr.2014.06.001',
  },
  {
    id: 49, year: 2014, category: 'Journal Article',
    title: 'Phosphorus loading to Lake Erie from the Maumee, Sandusky, and Cuyahoga rivers: The importance of bioavailability',
    authors: 'Baker, D.B., Confesor, R., Ewing, D.E., Johnson, L.T., Kramer, J.W., and Merryfield, B.J.',
    journal: 'Journal of Great Lakes Research 40(3): 502–517',
    doi: '10.1016/j.jglr.2014.05.001',
  },
  {
    id: 50, year: 2014, category: 'Journal Article',
    title: 'A comprehensive approach to evaluating watershed models for predicting river flow regimes critical to downstream ecosystem services',
    authors: 'Gebremariam, S.Y., Martin, J.F., DeMarchi, C., Bosch, N.S., Confesor, R., and Ludsin, S.A.',
    journal: 'Environmental Modelling & Software 61: 121–134',
    doi: '10.1016/j.envsoft.2014.07.004',
  },
  {
    id: 51, year: 2014, category: 'Journal Article',
    title: 'Research to help Lake Erie: Proceedings of the "Phosphorus along the land-river-lake continuum" research planning and coordination workshop',
    authors: 'Johnson, L.T., Baker, D.B., Confesor, R.B., Krieger, K.A., and Richards, R.P.',
    journal: 'Journal of Great Lakes Research 40(3): 574–577',
    doi: '10.1016/j.jglr.2014.07.001',
  },
  {
    id: 52, year: 2014, category: 'Journal Article',
    title: 'Re-eutrophication of Lake Erie: Correlations between tributary nutrient loads and phytoplankton biomass',
    authors: 'Kane, D.D., Conroy, J.D., Richards, R.P., Baker, D.B., and Culver, D.A.',
    journal: 'Journal of Great Lakes Research 40(3): 496–501',
    doi: '10.1016/j.jglr.2014.04.004',
  },
  {
    id: 53, year: 2014, category: 'Journal Article',
    title: 'The lotic intersite nitrogen experiments: An example of successful ecological research collaboration',
    authors: 'LINX collaborators (incl. Johnson, L.T.)',
    journal: 'Freshwater Science 33(3): 700–710',
    doi: '10.1086/676938',
  },
  {
    id: 54, year: 2014, category: 'Journal Article',
    title: 'Denitrification in agriculturally impacted streams: seasonal changes in structure and function of the bacterial community',
    authors: 'Manis, E., Royer, T.V., Johnson, L.T., and Leff, L.G.',
    journal: 'PLoS ONE 9(8): e105149',
    doi: '10.1371/journal.pone.0105149',
  },
  {
    id: 55, year: 2014, category: 'Journal Article',
    title: 'Assessing and addressing the re-eutrophication of Lake Erie: Central basin hypoxia',
    authors: 'Scavia, D., Allan, J.D., Arend, K.K., Bartell, S., Beletsky, D., Bosch, N.S., et al.',
    journal: 'Journal of Great Lakes Research 40(2): 226–246',
    doi: '10.1016/j.jglr.2014.02.004',
  },
  // ── 2013 ──
  {
    id: 56, year: 2013, category: 'Journal Article',
    title: 'Spatial differences in denitrification and bacterial community structure of streams: Relationships with environmental conditions',
    authors: 'Baxter, A.M., Johnson, L.T., Royer, T.V., and Leff, L.G.',
    journal: 'Aquatic Sciences 75: 275–284',
    doi: '10.1007/s00027-012-0272-5',
  },
  {
    id: 57, year: 2013, category: 'Journal Article',
    title: 'Agricultural land use alters the seasonality and magnitude of stream metabolism',
    authors: 'Griffiths, N.A., Tank, J.L., Royer, T.V., Roley, S.S., Rosi-Marshall, E.J., Whiles, M.R., Beaulieu, J.J., and Johnson, L.T.',
    journal: 'Limnology and Oceanography 58(4): 1513–1529',
    doi: '10.4319/lo.2013.58.4.1513',
  },
  {
    id: 58, year: 2013, category: 'Journal Article',
    title: 'Quantifying the production of dissolved organic nitrogen in headwater streams using 15N tracer additions',
    authors: 'Johnson, L.T., Tank, J.L., Hall, R.O., Mulholland, P.J., Hamilton, S.K., Valett, H.M., et al.',
    journal: 'Limnology and Oceanography 58(4): 1271–1285',
    doi: '10.4319/lo.2013.58.4.1271',
  },
  {
    id: 59, year: 2013, category: 'Book Chapter',
    title: 'Changes in biotic and habitat indices in response to dam removals in Ohio',
    authors: 'Krieger, K.A., and Zawiski, B.',
    journal: 'Geological Society of America Reviews in Engineering Geology v. XXI, pp. 105–116',
    doi: '10.1130/2013.4121(09)',
  },
  {
    id: 60, year: 2013, category: 'Technical Report',
    title: 'Pollutant load estimation for water quality monitoring projects',
    authors: 'Meals, D.W., Richards, R.P., and Dressing, S.A.',
    journal: 'Tech Notes 8, U.S. EPA by Tetra Tech, Inc.',
    doi: '10.5281/zenodo.6802870',
  },
  {
    id: 61, year: 2013, category: 'Journal Article',
    title: 'Record-setting algal bloom in Lake Erie caused by agricultural and meteorological trends consistent with expected future conditions',
    authors: 'Michalak, A.M., Anderson, E., Beletsky, D., Boland, S., Bosch, N.S., Bridgeman, T.B., Chaffin, J.D., Cho, K.H., Confesor, R., et al.',
    journal: 'Proceedings of the National Academy of Sciences 110(16): 6448–6452',
    doi: '10.1073/pnas.1216006110',
  },
  {
    id: 62, year: 2013, category: 'Journal Article',
    title: 'Dissolved organic carbon manipulation reveals coupled cycling of carbon, nitrogen, and phosphorus in a nitrogen-rich stream',
    authors: 'Oviedo-Vargas, D., Royer, T.V., and Johnson, L.T.',
    journal: 'Limnology and Oceanography 58(4): 1196–1206',
    doi: '10.4319/lo.2013.58.4.1196',
  },
  {
    id: 63, year: 2013, category: 'Journal Article',
    title: 'DISCUSSION: "Nutrient inputs to the Laurentian Great Lakes by source and watershed estimated using SPARROW watershed models"',
    authors: 'Richards, R.P., Alameddine, I., Allan, J.D., Baker, D.B., Bosch, N.S., Confesor, R., et al.',
    journal: 'Journal of the American Water Resources Association 49(3): 715–724',
    doi: '10.1111/jawr.12006',
  },
  {
    id: 64, year: 2013, category: 'Journal Article',
    title: 'Ecological risk assessment of atrazine in North American surface waters',
    authors: 'Solomon, K.R., Giesy, J.P., LaPoint, T.W., Giddings, J.M., and Richards, R.P.',
    journal: 'Environmental Toxicology & Chemistry 32(1): 10–11',
    doi: '10.1002/etc.2050',
  },
  // ── 2012 ──
  {
    id: 65, year: 2012, category: 'Final Report',
    title: 'Taxonomic atlas of the Copepods (Class Crustacea) recorded at the Old Woman Creek National Estuarine Research Reserve and State Nature Preserve, Ohio',
    authors: 'Boehler, J.A., and Krieger, K.A.',
    journal: 'Final report to Ohio Department of Natural Resources, Division of Wildlife',
    doi: '10.5281/zenodo.6802958',
  },
  {
    id: 66, year: 2012, category: 'Final Report',
    title: 'Taxonomic atlas of the water fleas, "Cladocera" (Class Crustacea), recorded at the Old Woman Creek National Estuarine Research Reserve and State Nature Preserve, Ohio',
    authors: 'Boehler, J.A., Keller, T.S., and Krieger, K.A.',
    journal: 'Final report to Ohio Department of Natural Resources, Division of Wildlife',
    doi: '10.5281/zenodo.6802989',
  },
  {
    id: 67, year: 2012, category: 'Book Chapter',
    title: 'Rock Creek Watershed, Ohio: National Institute of Food and Agriculture Conservation Effects Assessment Project',
    authors: 'Meals, D.W., Richards, P., Confesor, R., Czajkowski, K., Bonnell, J., Osmond, D.L., et al.',
    journal: 'In: How to Build Better Agricultural Conservation Programs to Protect Water Quality. Soil and Water Conservation Society, pp. 316–326',
    doi: '10.5281/zenodo.6677540',
  },
  {
    id: 68, year: 2012, category: 'Journal Article',
    title: 'Case study comparison between litigated and voluntary nutrient management strategies',
    authors: 'Sharpley, A., Richards, P., Herron, S., and Baker, D.',
    journal: 'Journal of Soil and Water Conservation 67(5): 442–450',
    doi: '10.2489/jswc.67.5.442',
  },
  {
    id: 69, year: 2012, category: 'Journal Article',
    title: 'Interannual variability of cyanobacterial blooms in Lake Erie',
    authors: 'Stumpf, R.S., Wynne, T.T., Baker, D.B., and Fahnenstiel, G.L.',
    journal: 'PloS ONE 7(8): e42444',
    doi: '10.1371/journal.pone.0042444',
  },
  // ── 2011 ──
  {
    id: 70, year: 2011, category: 'Journal Article',
    title: 'A comparison of nutrient sources, concentrations and loading trends from the Cuyahoga and Sandusky rivers',
    authors: 'Baker, D.B.',
    journal: 'Buckeye Bulletin, Ohio Water Environment Association 84(3): 34–38',
    doi: '10.5281/zenodo.6704354',
  },
  {
    id: 71, year: 2011, category: 'Final Report',
    title: 'The Sources and Transport of Bioavailable Phosphorus to Lake Erie',
    authors: 'Baker, D.B.',
    journal: 'Final Report, U.S. EPA/Great Lakes National Program Office',
    doi: null,
  },
  {
    id: 72, year: 2011, category: 'Journal Article',
    title: 'Application of the Soil and Water Assessment Tool for six watersheds of Lake Erie: Model parameterization and calibration',
    authors: 'Bosch, N.S., Allan, J.D., Dolan, D.M., Han, H., and Richards, R.P.',
    journal: 'Journal of Great Lakes Research 37(2): 263–271',
    doi: '10.1016/j.jglr.2011.03.004',
  },
  {
    id: 73, year: 2011, category: 'Conference Paper',
    title: 'Modeling dissolved phosphorus exports in Lake Erie watersheds',
    authors: 'Confesor, R., Richards, R.P., Arnold, J.G., and Whittaker, G.W.',
    journal: 'Am. Soc. Agric. Biol. Engineers Paper No. 1111060',
    doi: '10.13031/2013.37404',
  },
  {
    id: 74, year: 2011, category: 'Journal Article',
    title: 'The effects of dreissenid mussels on the survival and fitness of burrowing mayflies (Hexagenia spp.) in western Lake Erie',
    authors: 'Freeman, K.J., Krieger, K.A., and Berg, D.J.',
    journal: 'Journal of Great Lakes Research 37(3): 426–431',
    doi: '10.1016/j.jglr.2011.04.006',
  },
  {
    id: 75, year: 2011, category: 'Journal Article',
    title: 'Quantifying phosphorus retention and release in rivers and watersheds using extended end-member mixing analysis (E-EMMA)',
    authors: 'Jarvie, H.P., Neal, C., Withers, P.J.A., Baker, D.B., Richards, R.P., and Sharpley, A.N.',
    journal: 'Journal of Environmental Quality 40(2): 492–504',
    doi: '10.2134/jeq2010.0298',
  },
  {
    id: 76, year: 2011, category: 'Journal Article',
    title: 'Context for re-evaluating agricultural source phosphorus loadings to the Great Lakes',
    authors: 'Joosse, P.J., and Baker, D.B.',
    journal: 'Canadian Journal of Soil Science 91(3): 317–327',
    doi: '10.4141/cjss10005',
  },
  {
    id: 77, year: 2011, category: 'Final Report',
    title: 'Atlas of the aquatic oligochaete worms recorded at the Old Woman Creek National Estuarine Research Reserve and State Nature Preserve, Ohio',
    authors: 'Krieger, K.A., and Stearns, A.M.',
    journal: 'Final report to Ohio Department of Natural Resources, Division of Wildlife',
    doi: '10.5281/zenodo.6803123',
  },
  {
    id: 78, year: 2011, category: 'Journal Article',
    title: 'Heavy metals in sediments and uptake by burrowing mayflies in western Lake Erie basin',
    authors: 'Opfer, S.E., Miner, J.G., Farver, J., and Krieger, K.',
    journal: 'Journal of Great Lakes Research 37(1)',
    doi: '10.1016/j.jglr.2010.10.005',
  },
  // ── 2010 ──
  {
    id: 79, year: 2010, category: 'Journal Article',
    title: 'Oxyradical scavenging capacity by the S9 fraction of Hexagenia spp. nymphs from the western basin of Lake Erie',
    authors: 'Laubender, B.G., Krieger, K.A., and Winston, G.W.',
    journal: 'Chemistry and Ecology 26(2): 83–92',
    doi: '10.1080/02757541003643495',
  },
  {
    id: 80, year: 2010, category: 'Journal Article',
    title: 'Unusually large loads in 2007 from the Maumee and Sandusky Rivers, tributaries to Lake Erie',
    authors: 'Richards, R.P., Baker, D.B., Crumrine, J.P., and Stearns, A.M.',
    journal: 'Journal of Soil and Water Conservation 65(6): 450–462',
    doi: '10.2489/jswc.65.6.450',
  },
  {
    id: 81, year: 2010, category: 'Journal Article',
    title: 'Detection of over-parameterization and overfitting in an automatic calibration of SWAT',
    authors: 'Whittaker, G., Confesor, R., DiLuzio, M., and Arnold, J.G.',
    journal: 'Transactions of the ASABE 53(5): 1487–1499',
    doi: '10.13031/2013.34909',
  },
  // ── 2009 ──
  {
    id: 82, year: 2009, category: 'Final Report',
    title: 'Taxonomic atlas of the caddisfly larvae recorded at the Old Woman Creek National Estuarine Research Reserve and State Nature Preserve, Ohio',
    authors: 'Keller, T.S., and Krieger, K.A.',
    journal: 'Final report to Ohio Department of Natural Resources, Division of Wildlife',
    doi: '10.5281/zenodo.6803211',
  },
  {
    id: 83, year: 2009, category: 'Final Report',
    title: 'Nearshore hypoxia as a new Lake Erie metric',
    authors: 'Krieger, K.A., and Bur, M.T.',
    journal: 'Final Report to Ohio Lake Erie Commission',
    doi: null,
  },
  {
    id: 84, year: 2009, category: 'Book Chapter',
    title: 'Linkages between oligotrophication and percid dynamics',
    authors: 'Ludsin, S.A., Dolan, D.M., Richards, R.P., Tyson, J.T., Kayle, K.A., Johnson, T.B., and Stein, R.A.',
    journal: 'In The State of Lake Erie in 2004. Great Lakes Fishery Commission Special Publication 09-02, pp. 23–27',
    doi: '10.5281/zenodo.6803281',
  },
  {
    id: 85, year: 2009, category: 'Journal Article',
    title: 'Improved water quality in Lake Erie tributaries: a consequence of conservation practices',
    authors: 'Richards, R.P., Baker, D.B., and Crumrine, J.P.',
    journal: 'Journal of Soil and Water Conservation 64(3): 200–211',
    doi: '10.2489/jswc.64.3.200',
  },
  {
    id: 86, year: 2009, category: 'Journal Article',
    title: 'The diversity and distribution of toxigenic Microcystis spp. in present day and archived pelagic and sediment samples from Lake Erie',
    authors: 'Rinta-Kanto, J.M., Saxton, M.A., DeBruyn, J.M., Smith, J.L., Marvin, C.H., Krieger, K.A., Sayler, G.S., Boyer, G.L., and Wilhelm, S.W.',
    journal: 'Harmful Algae 8(3): 385–394',
    doi: '10.1016/j.hal.2008.08.026',
  },
  {
    id: 87, year: 2009, category: 'Journal Article',
    title: 'A hybrid genetic algorithm for multiobjective problems with activity analysis-based local search',
    authors: 'Whittaker, G., Confesor, R., Griffith, S.M., Färe, R., Grosskopf, S., Steiner, J.J., Muller-Warrant, G.W., and Banowetz, G.M.',
    journal: 'European Journal of Operational Research 193(1): 195–203',
    doi: '10.1016/j.ejor.2007.10.050',
  },
  // ── 2008 ──
  {
    id: 88, year: 2008, category: 'Book Chapter',
    title: 'Analysis of late 90s phosphorus loading pulse to Lake Erie',
    authors: 'Dolan, D.M., and Richards, R.P.',
    journal: 'In Checking the Pulse of Lake Erie, ed. M. Munawar. Aquatic Ecosystem Health and Management Society, pp. 79–96',
    doi: '10.14321/j.ctt1bmzpdx.8',
  },
  {
    id: 89, year: 2008, category: 'Final Report',
    title: 'A baseline study of macroinvertebrate communities of McKibben Ditch and Riffle Creek (Olentangy River Watershed) prior to over-wide ditch construction',
    authors: 'Krieger, K.A., and Stearns, A.M.',
    journal: 'Final report to Ohio Dept. Natural Resources, Div. Soil & Water Conservation',
    doi: '10.5281/zenodo.6803533',
  },
  {
    id: 90, year: 2008, category: 'Book Chapter',
    title: 'Water use for irrigation agriculture in Ohio\'s Lake Erie basin and its potential impact on Lake Erie water quality',
    authors: 'Loftus, T.T., and Richards, R.P.',
    journal: 'In Checking the Pulse of Lake Erie, ed. M. Munawar, pp. 159–180',
    doi: '10.14321/j.ctt1bmzpdx.11',
  },
  {
    id: 91, year: 2008, category: 'Journal Article',
    title: 'Thirty-year trends in suspended sediment in seven Lake Erie tributaries',
    authors: 'Richards, R.P., Baker, D.B., Crumrine, J.P., Kramer, J.W., Ewing, D.E., and Merryfield, B.J.',
    journal: 'Journal of Environmental Quality 37(5): 1894–1908',
    doi: '10.2134/jeq2007.0590',
  },
  {
    id: 92, year: 2008, category: 'Technical Report',
    title: 'Water quality in drainage ditches influenced by agricultural subsurface drainage',
    authors: 'Richards, R.P., Bouchard, V., and McCall, R.',
    journal: 'Ohio State University Extension Fact Sheet WS-3857-08',
    doi: '10.5281/zenodo.6803556',
  },
  {
    id: 93, year: 2008, category: 'Final Report',
    title: 'Atlas of the aquatic and semiaquatic true bugs recorded at the Old Woman Creek National Estuarine Research Reserve and State Nature Preserve, Ohio',
    authors: 'Stearns, A.M., and Krieger, K.A.',
    journal: 'Final Report to Ohio Dept. Natural Resources, Div. of Wildlife',
    doi: '10.5281/zenodo.6803569',
  },
  // ── 2007 ──
  {
    id: 94, year: 2007, category: 'Conference Paper',
    title: 'The Lake Erie collaborative comprehensive study (ECCS): Sampling design to estimate distribution, abundance and biomass of Dreissenidae and other zoobenthos',
    authors: 'Ciborowski, J.J.H., Barton, D.R., Krieger, K.A., Johnson, T.B., and Lozano, S.',
    journal: 'Proc. 8th EMAP Symposium, Washington, DC',
    doi: '10.5281/zenodo.6807467',
  },
  {
    id: 95, year: 2007, category: 'Final Report',
    title: 'Atlas of the mayfly larvae recorded at the Old Woman Creek National Estuarine Research Reserve & State Nature Preserve, Ohio',
    authors: 'Keller, T.S., Stearns, A.M., and Krieger, K.A.',
    journal: 'Final report to Ohio Department of Natural Resources',
    doi: '10.5281/zenodo.6803597',
  },
  {
    id: 96, year: 2007, category: 'Final Report',
    title: 'Response of the macroinvertebrate community of the Sandusky River in Seneca and Wyandot counties, Ohio, to removal of the St. Johns Dam',
    authors: 'Krieger, K.A., and Stearns, A.M.',
    journal: 'Final Report to Scenic Rivers Program, Ohio Dept. Natural Resources',
    doi: null,
  },
  {
    id: 97, year: 2007, category: 'Journal Article',
    title: 'Distribution and abundance of burrowing mayflies (Hexagenia spp.) in Lake Erie, 1997–2005',
    authors: 'Krieger, K.A., Bur, M.T., Ciborowski, J.J.H., Barton, D.R., and Schloesser, D.W.',
    journal: 'Journal of Great Lakes Research 33 (Supplement 1): 20–33',
    doi: '10.3394/0380-1330(2007)33[20:DAAOBM]2.0.CO;2',
  },
  {
    id: 98, year: 2007, category: 'Book Chapter',
    title: 'Phosphorus loads and concentrations from the Maumee River',
    authors: 'Richards, R.P.',
    journal: 'Chapter 6 in State of the Strait: Status and Trends of Key Indicators. Great Lakes Institute for Environmental Research',
    doi: '10.5281/zenodo.6709615',
  },
  // ── 2006 ──
  {
    id: 99, year: 2006, category: 'Conference Paper',
    title: 'Point Source – Nonpoint Source Phosphorus Trading: Applicability to Stream TMDLs in Ohio',
    authors: 'Baker, D.B., Richards, R.P., and Kramer, J.W.',
    journal: 'Proceedings: Innovations in Reducing Nonpoint Source Pollution, pp. 328–347',
    doi: null,
  },
  {
    id: 100, year: 2006, category: 'Final Report',
    title: 'Characterization of mayfly (Hexagenia) population refugia in the central basin of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Final report to Ohio Lake Erie Commission',
    doi: null,
  },
  {
    id: 101, year: 2006, category: 'Final Report',
    title: 'Impact of dam removal on the macroinvertebrate community of the Sandusky River in Seneca and Wyandot counties, Ohio',
    authors: 'Krieger, K.A.',
    journal: 'Final report to Scenic Rivers Program, Ohio Dept. Natural Resources',
    doi: null,
  },
  {
    id: 102, year: 2006, category: 'Final Report',
    title: 'Supplemental report: Impact of dam removal on the macroinvertebrate community of the Sandusky River, 2005 samples',
    authors: 'Krieger, K.A.',
    journal: 'Final report to Scenic Rivers Program, Ohio Dept. Natural Resources',
    doi: null,
  },
  {
    id: 103, year: 2006, category: 'Technical Report',
    title: 'Honey Creek watershed action plan',
    authors: 'Loftus, T.T., Baker, D.B., Setzler, J.V., and Crumrine, J.',
    journal: 'Watershed Action Plan, 161 pp.',
    doi: '10.5281/zenodo.6856308',
  },
  {
    id: 104, year: 2006, category: 'Technical Report',
    title: 'Trends in sediment and nutrients in major Lake Erie tributaries, 1975–2004',
    authors: 'Richards, R.P.',
    journal: 'Section 10.10 in Lake Erie LaMP, 2006 Update',
    doi: '10.5281/zenodo.6803887',
  },
  {
    id: 105, year: 2006, category: 'Conference Paper',
    title: 'Detecting water quality responses to land management changes: Why is it so difficult?',
    authors: 'Richards, R.P., Baker, D.B., and Crumrine, J.',
    journal: 'Proceedings: Innovations in Reducing Nonpoint Source Pollution, pp. 81–91',
    doi: '10.5281/zenodo.6676834',
  },
  // ── 2005 ──
  {
    id: 106, year: 2005, category: 'Technical Report',
    title: 'Upper Auglaize Watershed AGNPS Modeling Project Final Report',
    authors: 'Bingner, R., Czajkowski, K., Palmer, M., Coss, J., Davis, S., Stafford, J., Widman, N., Theurer, F., Koltun, G., Richards, R.P., and Friona, T.',
    journal: 'Report to Army Corps of Engineers, Buffalo District',
    doi: '10.5281/zenodo.6803908',
  },
  {
    id: 107, year: 2005, category: 'Book Chapter',
    title: 'Atrazine in North American surface waters: A probabilistic aquatic ecological risk assessment',
    authors: 'Giddings, J.M., Anderson, T.A., Hall, L.W., Hosmer, A.J., Kendall, R.J., Richards, R.P., Solomon, K.R., and Williams, W.M.',
    journal: 'Society of Environmental Toxicology and Chemistry (SETAC). 432 pp.',
    doi: null,
  },
  {
    id: 108, year: 2005, category: 'Final Report',
    title: 'Mayflies and zebra/quagga mussels in Lake Erie\'s central basin surveyed with a remotely operated vehicle',
    authors: 'Krieger, K.A., Bur, M.T., and Thomas, M.A.',
    journal: 'Final report to Ohio Lake Erie Commission',
    doi: null,
  },
  {
    id: 109, year: 2005, category: 'Journal Article',
    title: 'Using GIS-based ecological-economic modeling to evaluate policies affecting agricultural watersheds',
    authors: 'Lant, C.L., Kraft, S.E., Beaulieu, J., Bennett, D., Loftus, T., and Nicklow, J.',
    journal: 'Ecological Economics 55(4): 467–484',
    doi: '10.1016/j.ecolecon.2004.12.006',
  },
  // ── 2004 ──
  {
    id: 110, year: 2004, category: 'Journal Article',
    title: 'A new flashiness index: Characteristics and applications to midwestern rivers and streams',
    authors: 'Baker, D.B., Richards, R.P., Loftus, T.T., and Kramer, J.K.',
    journal: 'Journal of the American Water Resources Association 40(2): 503–522',
    doi: '10.1111/j.1752-1688.2004.tb01046.x',
  },
  {
    id: 111, year: 2004, category: 'Journal Article',
    title: 'Fractal-based scaling and scale-invariant dispersion of peak concentrations of crop protection chemicals in rivers',
    authors: 'Gustafson, D.I., Carr, K.H., Green, T.R., Gustin, C., Jones, R.L., and Richards, R.P.',
    journal: 'Environmental Science & Technology 38(11): 2995–3003',
    doi: '10.1021/es030522p',
  },
  {
    id: 112, year: 2004, category: 'Final Report',
    title: 'Mayfly metric of the Lake Erie Quality Index: Design of an efficient censusing program, data collection, and development of the metric',
    authors: 'Krieger, K.A.',
    journal: 'Final Report to Ohio Lake Erie Commission',
    doi: '10.5281/zenodo.6802819',
  },
  {
    id: 113, year: 2004, category: 'Final Report',
    title: 'Hypoxia effects on burrowing mayfly (Hexagenia) recolonization of Lake Erie\'s central basin',
    authors: 'Krieger, K.A.',
    journal: 'Final report to Ohio Lake Erie Commission',
    doi: null,
  },
  {
    id: 114, year: 2004, category: 'Journal Article',
    title: 'Improving total maximum daily loads with lessons learned from long-term detailed monitoring',
    authors: 'Richards, R.P.',
    journal: 'Journal of Environmental Engineering 130(6): 657–663',
    doi: '10.1061/(ASCE)0733-9372(2004)130:6(657)',
  },
  // ── 2003 ──
  {
    id: 115, year: 2003, category: 'Journal Article',
    title: 'Using regression methods to estimate stream phosphorus loads at the Illinois River, Arkansas',
    authors: 'Haggard, B.E., Soerens, T.S., Green, W.R., and Richards, R.P.',
    journal: 'Applied Engineering in Agriculture and Biological Engineers 19(2): 187–194',
    doi: '10.13031/2013.13110',
  },
  {
    id: 116, year: 2003, category: 'Final Report',
    title: 'Assessment of macroinvertebrate community in and around an open-lake disposal area, western basin of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Final Report to U.S. Army Corps of Engineers, Buffalo District',
    doi: null,
  },
  {
    id: 117, year: 2003, category: 'Journal Article',
    title: 'Effectiveness of a coastal wetland in reducing pollution of a Laurentian Great Lake: Hydrology, sediment, and nutrients',
    authors: 'Krieger, K.A.',
    journal: 'Wetlands 23: 778–791',
    doi: '10.1672/0277-5212(2003)023[0778:EOACWI]2.0.CO;2',
  },
  {
    id: 118, year: 2003, category: 'Technical Report',
    title: 'Refining and implementing the mayfly (Hexagenia) metric of the Lake Erie Quality Index: Proceedings of a workshop',
    authors: 'Krieger, K.A. (Editor)',
    journal: 'Report to Ohio Lake Erie Office, Project LEQI 01-03',
    doi: '10.5281/zenodo.6807701',
  },
  {
    id: 119, year: 2003, category: 'Journal Article',
    title: 'Enrolling conservation buffers in the CRP',
    authors: 'Loftus, T.T., and Kraft, S.E.',
    journal: 'Land Use Policy 20(1): 73–84',
    doi: '10.1016/S0264-8377(02)00046-7',
  },
  {
    id: 120, year: 2003, category: 'Journal Article',
    title: 'Detecting reductions in sediment loads associated with Ohio\'s Conservation Reserve Enhancement Program',
    authors: 'Richards, R.P., and Grabow, G.L.',
    journal: 'Journal of the American Water Resources Association 39(5): 1261–1268',
    doi: '10.1111/j.1752-1688.2003.tb03707.x',
  },
  {
    id: 121, year: 2003, category: 'Journal Article',
    title: 'Proposal for a model state watershed management act',
    authors: 'Ruhl, J.B., Lant, C., Loftus, T., Kraft, S., Adams, J., and Duram, L.',
    journal: 'Environmental Law 33(4): 929–947',
    doi: '10.2139/ssrn.438701',
  },
  // ── 2002 ──
  {
    id: 122, year: 2002, category: 'Journal Article',
    title: 'Phosphorus budgets and riverine phosphorus export in northwestern Ohio watersheds',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'Journal of Environmental Quality 31(1): 96–108',
    doi: '10.2134/jeq2002.9600',
  },
  {
    id: 123, year: 2002, category: 'Journal Article',
    title: 'Soils, water quality, and watershed size: Interactions in the Maumee and Sandusky River basins of northwestern Ohio',
    authors: 'Calhoun, F.G., Baker, D.B., and Slater, B.K.',
    journal: 'Journal of Environmental Quality 31(1): 47–53',
    doi: '10.2134/jeq2002.4700a',
  },
  {
    id: 124, year: 2002, category: 'Conference Paper',
    title: 'What do we know about the nonpoint "L" in TMDLs?',
    authors: 'Richards, R.P.',
    journal: 'In Making TMDLs work in rural watersheds. Michigan State University, pp. 8–11',
    doi: null,
  },
  {
    id: 125, year: 2002, category: 'Journal Article',
    title: 'Trends in water quality in LEASEQ rivers and streams (northwestern Ohio), 1975–1995',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Journal of Environmental Quality 31(1): 90–96',
    doi: '10.2134/jeq2002.9000',
  },
  {
    id: 126, year: 2002, category: 'Journal Article',
    title: 'Trends in agriculture in the LEASEQ watersheds, 1975–1995',
    authors: 'Richards, R.P., Baker, D.B., and Eckert, D.J.',
    journal: 'Journal of Environmental Quality 31(1): 17–24',
    doi: '10.2134/jeq2002.1700',
  },
  {
    id: 127, year: 2002, category: 'Journal Article',
    title: 'The Lake Erie agricultural systems for environmental quality project: An introduction',
    authors: 'Richards, R.P., Calhoun, F.G., and Matisoff, G.',
    journal: 'Journal of Environmental Quality 31(1): 6–16',
    doi: '10.2134/jeq2002.6000',
  },
  {
    id: 128, year: 2002, category: 'Journal Article',
    title: 'Predicted impact of transgenic, herbicide-tolerant corn on drinking water quality in vulnerable watersheds of the mid-western USA',
    authors: 'Wauchope, R.D., Baker, D.B., Balu, K., and Nelson, H.',
    journal: 'Pest Management Science 58(2): 146–160',
    doi: '10.1002/ps.433',
  },
  // ── 2001 ──
  {
    id: 129, year: 2001, category: 'Technical Report',
    title: 'The Sandusky River watershed: Resource inventory and management plan',
    authors: 'Baker, D.B., and Ostrand, M.',
    journal: 'Sandusky River Watershed Coalition, Fremont, OH 43420. 291 pages',
    doi: '10.5281/zenodo.6811144',
  },
  {
    id: 130, year: 2001, category: 'Final Report',
    title: 'Effectiveness of a coastal wetland in reducing the movement of agricultural pollutants into Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'OWC Tech. Rept. No. 15. Old Woman Creek National Estuarine Research Reserve, Ohio',
    doi: '10.5281/zenodo.6807986',
  },
  {
    id: 131, year: 2001, category: 'Journal Article',
    title: 'Mayfly storms – a summer 2001 event?',
    authors: 'Krieger, K.A.',
    journal: 'Twine Line 23(3): 5',
    doi: '10.5281/zenodo.6808298',
  },
  {
    id: 132, year: 2001, category: 'Final Report',
    title: 'Tracking rapid population change of burrowing mayflies in the central basin of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Final Rept. to Ohio Lake Erie Office, Project SG 129-00',
    doi: null,
  },
  {
    id: 133, year: 2001, category: 'Conference Paper',
    title: 'Coastal wetlands enhance Great Lakes water quality',
    authors: 'Krieger, K.A.',
    journal: 'In Coastal Zone 01. Proceedings of the 12th Biennial Coastal Zone Conference',
    doi: '10.5281/zenodo.6810889',
  },
  {
    id: 134, year: 2001, category: 'Journal Article',
    title: 'Storm discharge, loads, and average concentrations in northwest Ohio rivers, 1975–1995',
    authors: 'Richards, R.P., Baker, D.B., Kramer, J.W., Ewing, D.E., Merryfield, B.J., and Miller, N.L.',
    journal: 'Journal of the American Water Resources Association 37(2): 423–438',
    doi: '10.1111/j.1752-1688.2001.tb00979.x',
  },
  {
    id: 135, year: 2001, category: 'Conference Paper',
    title: 'Improved agricultural management and water quality in the Lake Erie watershed',
    authors: 'Richards, R.P., Baker, D.B., and Eckert, D.J.',
    journal: 'In Coastal Zone 01. Proceedings of the 12th Biennial Coastal Zone Conference',
    doi: '10.5281/zenodo.6779010',
  },
  {
    id: 136, year: 2001, category: 'Conference Paper',
    title: 'Water quality in private wells in the midwestern United States',
    authors: 'Richards, R.P., Baker, D.B., Miller, N.L., Kramer, J.W., Ewing, D.E., and Merryfield, B.J.',
    journal: 'In Proceedings, Food Safety 2000. Porto, Portugal, pp. 19–31',
    doi: null,
  },
  // ── 2000 ──
  {
    id: 137, year: 2000, category: 'Conference Paper',
    title: 'Agricultural phosphorus reductions in the Lake Erie basin: A success story',
    authors: 'Baker, D.B.',
    journal: 'Proceedings, Third National Workshop on Constructed Wetlands/BMPs for Nutrient Reduction, pp. 127–128',
    doi: null,
  },
  {
    id: 138, year: 2000, category: 'Book Chapter',
    title: 'Effects of watershed scale on agrochemical concentration patterns in midwestern streams',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'In Agrochemical Fate and Movement. American Chemical Society',
    doi: '10.1021/bk-2000-0751.ch003',
  },
  {
    id: 139, year: 2000, category: 'Journal Article',
    title: 'EPIC modeling of the effects of farming practice changes on water quality in two Lake Erie watersheds',
    authors: 'Forster, D., Lynn, R., Richards, R.P., Baker, D.B., and Blue, E.N.',
    journal: 'Journal of Soil and Water Conservation 55(1): 85–90',
    doi: null,
  },
  {
    id: 140, year: 2000, category: 'Final Report',
    title: 'Ecosystem change in Lake Erie: recolonization by burrowing mayflies and their contribution to fish diets',
    authors: 'Krieger, K.A.',
    journal: 'Final Rept. to Ohio Lake Erie Office, Project LEPF-97-30',
    doi: null,
  },
  {
    id: 141, year: 2000, category: 'Conference Paper',
    title: 'Water quality trends in the LEASEQ watersheds, 1975–1995: What, how much, and why?',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Proceedings, Third National Workshop on Constructed Wetlands/BMPs for Nutrient Reduction, pp. 88–91',
    doi: null,
  },
  {
    id: 142, year: 2000, category: 'Journal Article',
    title: 'Recolonization and possible recovery of burrowing mayflies (Ephemeroptera: Ephemeridae: Hexagenia spp.) in Lake Erie of the Laurentian Great Lakes',
    authors: 'Schloesser, D.W., Krieger, K.A., Ciborowski, J.J.H., and Corkum, L.D.',
    journal: 'Journal of Aquatic Ecosystem Stress and Recovery 8: 125–141',
    doi: '10.1023/A:1011432920760',
  },
  // ── 1999 ──
  {
    id: 143, year: 1999, category: 'Journal Article',
    title: 'Using field scale models to predict peak flows on agricultural watersheds',
    authors: 'Gowda, P.H., Ward, A.D., White, D.A., Baker, D.B., and Lyon, J.G.',
    journal: 'Journal of the American Water Resources Association 35(5): 1223–1232',
    doi: '10.1111/j.1752-1688.1999.tb04209.x',
  },
  {
    id: 144, year: 1999, category: 'Final Report',
    title: 'Aquatic macroinvertebrate communities of Potters Pond, with comparison to Metzger Marsh',
    authors: 'Krieger, K.A.',
    journal: 'Final Rept. to U.S. Geological Survey, Ann Arbor, MI',
    doi: null,
  },
  {
    id: 145, year: 1999, category: 'Final Report',
    title: 'Ecosystem change in Lake Erie: cause and effect of burrowing mayfly recolonization',
    authors: 'Krieger, K.A.',
    journal: 'Final Rept. to Ohio Lake Erie Office, Project LEPF-97-30',
    doi: null,
  },
  {
    id: 146, year: 1999, category: 'Final Report',
    title: 'Mayfly Watch 1998: report on Year Two of a citizen volunteer project along the Ohio shore of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Report to Ohio Lake Erie Office',
    doi: null,
  },
  // ── 1998 ──
  {
    id: 147, year: 1998, category: 'Technical Report',
    title: 'The Center for Public Integrity? An analysis of investigative journalism from a segment of Toxic Deception',
    authors: 'Baker, D.B.',
    journal: 'Heidelberg College, Tiffin, OH',
    doi: null,
  },
  {
    id: 148, year: 1998, category: 'Final Report',
    title: 'Relationships between livestock production and ambient water quality in the Sandusky Basin',
    authors: 'Baker, D.B.',
    journal: 'Final grant report, 58 pp.',
    doi: '10.5281/zenodo.6707246',
  },
  {
    id: 149, year: 1998, category: 'Final Report',
    title: 'Mayfly Watch 1997: results and recommendations; Year One of a citizen volunteer project along the Ohio shore of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Report to Ohio Lake Erie Office',
    doi: null,
  },
  {
    id: 150, year: 1998, category: 'Journal Article',
    title: 'Population models of burrowing mayfly recolonization in western Lake Erie',
    authors: 'Madenjian, C.P., Schloesser, D.W., and Krieger, K.A.',
    journal: 'Ecological Applications 8(4): 1206–1212',
    doi: '10.1890/1051-0761(1998)008[1206:PMOBMR]2.0.CO;2',
  },
  {
    id: 151, year: 1998, category: 'Technical Report',
    title: 'Estimation of pollutant loads in rivers and streams: A guidance document for NPS programs',
    authors: 'Richards, R.P.',
    journal: 'Project report, U.S. EPA Region VIII, 108 pp.',
    doi: null,
  },
  {
    id: 152, year: 1998, category: 'Book Chapter',
    title: 'Triazines in waters of the midwest: Exposure patterns',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'In Triazine Herbicides: Risk Assessment, American Chemical Society Symposium Series 683',
    doi: '10.1021/bk-1998-0683.ch026',
  },
  // ── 1997 ──
  {
    id: 153, year: 1997, category: 'Technical Report',
    title: 'Mayflies and Lake Erie: A sign of the times',
    authors: 'Krieger, K.A.',
    journal: 'Ohio Sea Grant fact sheet OHSU-FS-069',
    doi: '10.5281/zenodo.6811380',
  },
  {
    id: 154, year: 1997, category: 'Journal Article',
    title: 'Cultural and hydrogeological factors that influence well water quality',
    authors: 'Richards, R.P.',
    journal: 'Environmental Science & Technology 31(3): 632–638',
    doi: '10.1021/es960056m',
  },
  {
    id: 155, year: 1997, category: 'Conference Paper',
    title: 'Twenty years of change: The Lake Erie Agricultural Systems for Environmental Quality (LEASEQ) Project',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Proceedings: National Watershed Water Quality Project Symposium. EPA/625/R-97/008',
    doi: '10.5281/zenodo.6779337',
  },
  // ── 1996 ──
  {
    id: 156, year: 1996, category: 'Conference Paper',
    title: 'Triazines in drinking water: A challenge for risk communication',
    authors: 'Baker, D.B.',
    journal: 'Proceedings of an American Chemical Society Conference, 1996',
    doi: null,
  },
  {
    id: 157, year: 1996, category: 'Book Chapter',
    title: 'Nutrients and nutrient management: A Lake Erie basin case study',
    authors: 'Baker, D.B.',
    journal: 'In An Agricultural Profile of the Great Lakes Basin. Great Lakes Commission, Ann Arbor, MI',
    doi: null,
  },
  {
    id: 158, year: 1996, category: 'Journal Article',
    title: 'Recovery of burrowing mayflies (Ephemeroptera: Ephemeridae: Hexagenia) in western Lake Erie',
    authors: 'Krieger, K.A., Schloesser, D.W., Manny, B.A., Trisler, C.E., Heady, S.E., Ciborowski, J.H., and Muth, K.N.',
    journal: 'Journal of Great Lakes Research 22(2): 254–263',
    doi: '10.1016/S0380-1330(96)70953-X',
  },
  {
    id: 159, year: 1996, category: 'Conference Paper',
    title: 'Pesticides in waters of the Midwest: Exposure patterns',
    authors: 'Richards, R.P.',
    journal: 'In Clean Water – Clean Environment – 21st Century, Conference Proceedings, Vol. IV, pp. 123–131',
    doi: null,
  },
  {
    id: 160, year: 1996, category: 'Journal Article',
    title: 'Well water quality, well vulnerability, and agricultural contamination in the midwestern United States',
    authors: 'Richards, R.P., Baker, D.B., Creamer, N.L., Kramer, J.W., Ewing, D.E., Merryfield, B.J., and Wallrabenstein, L.K.',
    journal: 'Journal of Environmental Quality 25(3): 389–402',
    doi: '10.2134/jeq1996.00472425002500030002x',
  },
  {
    id: 161, year: 1996, category: 'Journal Article',
    title: 'Annual loads of herbicides in Lake Erie tributaries in Ohio and Michigan',
    authors: 'Richards, R.P., Baker, D.B., Kramer, J.W., and Ewing, D.E.',
    journal: 'Journal of Great Lakes Research 22(2): 414–428',
    doi: '10.1016/S0380-1330(96)70966-8',
  },
  {
    id: 162, year: 1996, category: 'Journal Article',
    title: 'Ecological risk assessment of atrazine in North American surface waters',
    authors: 'Solomon, K.R., Baker, D.B., Richards, R.P., Dixon, K.R., Klaine, S.J., LaPoint, T.W., Kendall, R.J., et al.',
    journal: 'Environmental Toxicology and Chemistry 15(1): 31–76',
    doi: '10.1002/etc.5620150105',
  },
  // ── 1995 ──
  {
    id: 163, year: 1995, category: 'Technical Report',
    title: 'A review of Weed Killers by the Glass and related reports by the Environmental Working Group',
    authors: 'Baker, D.B.',
    journal: 'Water Quality Laboratory, Heidelberg College, Tiffin, OH',
    doi: null,
  },
  {
    id: 164, year: 1995, category: 'Final Report',
    title: 'Pre-dike survey of aquatic macroinvertebrate communities of Metzger Marsh',
    authors: 'Krieger, K.A.',
    journal: 'Final report to Ohio Division of Wildlife',
    doi: null,
  },
  {
    id: 165, year: 1995, category: 'Final Report',
    title: 'Spatial and seasonal distributions of nonplanktonic aquatic invertebrates in the Old Woman Creek National Estuarine Research Reserve',
    authors: 'Krieger, K.A.',
    journal: 'Final report, ODNR Div. of Natural Areas and Preserves',
    doi: null,
  },
  {
    id: 166, year: 1995, category: 'Technical Report',
    title: 'An automated, best-stratification seeking algorithm for estimating pollutant loads using the Beale Ratio Estimator',
    authors: 'Richards, R.P.',
    journal: 'FORTRAN77 software, developed under a grant to U.S. EPA',
    doi: null,
  },
  {
    id: 167, year: 1995, category: 'Technical Report',
    title: 'Well water quality in the alluvial deposits along the Tuscarawas and Muskingum Rivers',
    authors: 'Richards, R.P., and Wallrabenstein, L.K.',
    journal: 'Project report submitted to Ohio Department of Natural Resources',
    doi: null,
  },
  {
    id: 168, year: 1995, category: 'Journal Article',
    title: 'Atrazine exposures through drinking water: exposure assessments for Ohio, Illinois, and Iowa',
    authors: 'Richards, R.P., Baker, D.B., Christensen, B.C., and Tierney, D.P.',
    journal: 'Environmental Science & Technology 29(2): 406–412',
    doi: '10.1021/es00002a017',
  },
  // ── 1994 ──
  {
    id: 169, year: 1994, category: 'Technical Report',
    title: 'A Review of the Science, Methods of Risk Communication and Policy Recommendations in Tap Water Blues: Herbicides in Drinking Water',
    authors: 'Baker, D.B., Richards, R.P., and Baker, K.N.',
    journal: 'Heidelberg College, 39 pp.',
    doi: null,
  },
  {
    id: 170, year: 1994, category: 'Journal Article',
    title: 'Book review: Lake Erie and Lake St. Clair Handbook',
    authors: 'Krieger, K.A.',
    journal: 'Ohio Journal of Science 94(1): 31',
    doi: '10.5281/zenodo.6811495',
  },
  {
    id: 171, year: 1994, category: 'Technical Report',
    title: 'Pesticides in Surface and Ground Water',
    authors: 'Wauchope, R.D., Baker, D.B., Balu, K., and Nelson, H.',
    journal: 'Council for Agricultural Science and Technology, Issue Paper Number 2',
    doi: null,
  },
  // ── 1993 ──
  {
    id: 172, year: 1993, category: 'Conference Paper',
    title: 'Herbicides in Ohio\'s drinking water: Risk analysis, reduction and communication',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'Proceedings of the Fourth National Conference on Pesticides, pp. 200–221',
    doi: '10.5281/zenodo.6811562',
  },
  {
    id: 173, year: 1993, category: 'Conference Paper',
    title: 'Well vulnerability and agrichemical contamination: Assessments from a voluntary well testing program',
    authors: 'Baker, D.B., Wallrabenstein, L.K., and Richards, R.P.',
    journal: 'Proceedings of the Fourth National Conference on Pesticides, pp. 470–494',
    doi: '10.5281/zenodo.6811574',
  },
  {
    id: 174, year: 1993, category: 'Conference Paper',
    title: 'Atrazine exposures through drinking water: Exposure assessments for Ohio, Illinois, and Iowa',
    authors: 'Richards, R.P., Baker, D.B., Christensen, B., and Tierney, D.',
    journal: 'Proceedings of the Fourth National Conference on Pesticides, pp. 223–243',
    doi: '10.5281/zenodo.6811586',
  },
  {
    id: 175, year: 1993, category: 'Journal Article',
    title: 'The Lake Erie agroecosystem program: Water quality assessments',
    authors: 'Baker, D.B.',
    journal: 'Agriculture, Ecosystems and Environment 46(1-4): 197–215',
    doi: '10.1016/0167-8809(93)90024-J',
  },
  {
    id: 176, year: 1993, category: 'Journal Article',
    title: 'Immunoassay screens for Alachlor in rural wells: False positive and an Alachlor soil metabolite',
    authors: 'Baker, D.B., Bushway, R.J., Adams, S.A., and Macomber, C.',
    journal: 'Environmental Science & Technology 27(3): 562–564',
    doi: '10.1021/es00040a016',
  },
  {
    id: 177, year: 1993, category: 'Technical Report',
    title: 'A method for estimating materials fluxes from coastal wetlands into the Great Lakes, with an example from Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Ohio Sea Grant Tech. Bull. OHSU-TB-025-93',
    doi: null,
  },
  {
    id: 178, year: 1993, category: 'Journal Article',
    title: 'Changes in the benthic macroinvertebrate community of the Cleveland Harbor area of Lake Erie from 1978 to 1989',
    authors: 'Krieger, K.A., and Ross, L.S.',
    journal: 'Journal of Great Lakes Research 19(2): 237–249',
    doi: '10.1016/S0380-1330(93)71214-9',
  },
  {
    id: 179, year: 1993, category: 'Technical Report',
    title: 'Composite sampling for toxics in drinking water',
    authors: 'Richards, R.P.',
    journal: 'Project report submitted to Great Lakes Protection Fund',
    doi: null,
  },
  {
    id: 180, year: 1993, category: 'Journal Article',
    title: 'Trends in nutrient and sediment concentrations in Lake Erie tributaries, 1975–1990',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Journal of Great Lakes Research 19(2): 200–211',
    doi: '10.1016/S0380-1330(93)71211-3',
  },
  {
    id: 181, year: 1993, category: 'Journal Article',
    title: 'Pesticide concentration patterns in agricultural drainage networks of the Lake Erie basin',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Environmental Toxicology and Chemistry 12(1): 13–26',
    doi: '10.1002/etc.5620120104',
  },
  // ── 1992 ──
  {
    id: 182, year: 1992, category: 'Technical Report',
    title: 'Nitrate in private rural water supplies: building local data bases',
    authors: 'Baker, D.B.',
    journal: 'Better Crops Summer 1992, pp. 6–9',
    doi: '10.5281/zenodo.6784360',
  },
  {
    id: 183, year: 1992, category: 'Book Chapter',
    title: 'Herbicide concentrations in Ohio\'s drinking water: a quantitative exposure assessment',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'In Rational Readings in Environmental Concerns. Van Norstrand Reinhold, pp. 84–97',
    doi: null,
  },
  {
    id: 184, year: 1992, category: 'Journal Article',
    title: 'The ecology of invertebrates in Great Lakes coastal wetlands: current knowledge and research needs',
    authors: 'Krieger, K.A.',
    journal: 'Journal of Great Lakes Research 18(4): 634–650',
    doi: '10.1016/S0380-1330(92)71327-6',
  },
  {
    id: 185, year: 1992, category: 'Journal Article',
    title: 'Preface: A call for research on Great Lakes coastal wetlands',
    authors: 'Krieger, K.A., Klamer, D.M., Heath, R.T., and Herdendorf, C.E.',
    journal: 'Journal of Great Lakes Research 18(4): 525–528',
    doi: '10.1016/S0380-1330(92)71319-7',
  },
  {
    id: 186, year: 1992, category: 'Journal Article',
    title: 'Determination of the ethanesulfonic acid metabolite of alachlor in water by high-performance liquid chromatography',
    authors: 'Macomber, C., Bushway, R.J., Perkins, L.B., Baker, D.B., Fan, T.S., and Ferguson, B.S.',
    journal: 'Journal of Agricultural and Food Chemistry 40(8): 1450–1452',
    doi: '10.1021/jf00020a032',
  },
  {
    id: 187, year: 1992, category: 'Technical Report',
    title: 'Water quality in private rural wells in the limestone ridge area near Carey, Ohio',
    authors: 'Richards, R.P.',
    journal: 'Project report submitted to Ohio Department of Natural Resources',
    doi: null,
  },
  {
    id: 188, year: 1992, category: 'Conference Paper',
    title: 'Agrichemical contamination in private water supplies',
    authors: 'Wallrabenstein, L.K., and Baker, D.B.',
    journal: 'Proceedings of the Focus Conference on Eastern Regional Ground Water Issues, pp. 697–711',
    doi: null,
  },
  // ── 1991 ──
  {
    id: 189, year: 1991, category: 'Conference Paper',
    title: 'Herbicide concentrations in Ohio\'s drinking water supplies: A quantitative exposure assessment',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'Proceedings of the Third National Research Conference, Pesticides in the Next Decade, pp. 9–30',
    doi: null,
  },
  {
    id: 190, year: 1991, category: 'Conference Paper',
    title: 'Nitrate concentrations in Ohio\'s drinking water supplies: a comparison between surface water and groundwater supplies',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'Proceedings of the Third National Research Conference, Pesticides in the Next Decade, pp. 36–37',
    doi: null,
  },
  {
    id: 191, year: 1991, category: 'Final Report',
    title: 'A method for estimating materials fluxes from coastal wetlands into the Great Lakes, with an example from Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Ohio Sea Grant College Program, project R/ME-8',
    doi: null,
  },
  {
    id: 192, year: 1991, category: 'Technical Report',
    title: 'Bioindicators of rural nonpoint source pollution in Lake Erie tributaries: Proceedings of a workshop held at Heidelberg College',
    authors: 'Krieger, K.A. (Editor)',
    journal: 'Heidelberg College, Tiffin, OH. 71 pp.',
    doi: null,
  },
  {
    id: 193, year: 1991, category: 'Journal Article',
    title: 'Zooplankton dynamics in a Great Lakes coastal marsh',
    authors: 'Krieger, K.A., and Klamer, D.M.',
    journal: 'Journal of Great Lakes Research 17(2): 255–269',
    doi: '10.1016/S0380-1330(91)71362-2',
  },
  {
    id: 194, year: 1991, category: 'Conference Paper',
    title: 'Nitrate concentrations in Ohio\'s private water supplies',
    authors: 'Richards, R.P., Baker, D.B., and Wallrabenstein, L.K.',
    journal: 'In Surface and Groundwater Quality: Pollution Prevention, Remediation, and the Great Lakes, pp. 67–76',
    doi: null,
  },
  // ── 1990 ──
  {
    id: 195, year: 1990, category: 'Journal Article',
    title: 'Groundwater quality assessment through cooperative private well testing: an Ohio example',
    authors: 'Baker, D.B.',
    journal: 'Journal of Soil and Water Conservation 45(2): 230–235',
    doi: null,
  },
  {
    id: 196, year: 1990, category: 'Book Chapter',
    title: 'The transport of soluble pesticides through drainage networks in large agricultural river basins',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'In Long Range Transport of Pesticides. American Chemical Society Symposium Volume, pp. 241–270',
    doi: null,
  },
  {
    id: 197, year: 1990, category: 'Technical Report',
    title: 'Currents of change: physical processes in Great Lakes coastal wetlands',
    authors: 'Krieger, K.A.',
    journal: 'Documentary. 20 min., VHS format. Water Quality Laboratory, Heidelberg College',
    doi: null,
  },
  {
    id: 198, year: 1990, category: 'Final Report',
    title: 'Recovery of the invertebrate community in Sugar Creek, Seneca County, Ohio, following a toluene spill',
    authors: 'Krieger, K.A.',
    journal: 'Final Rept. to Gannett Foundation, Izaak Walton League Endowment Fund, and Ohio Dept. Natural Resources',
    doi: null,
  },
  {
    id: 199, year: 1990, category: 'Technical Report',
    title: 'Priorities for Great Lakes coastal wetlands research: Proceedings of a conference held at Old Woman Creek National Estuarine Research Reserve',
    authors: 'Krieger, K.A., Klamer, D.M., Heath, R.T., and Herdendorf, C.E. (Editors)',
    journal: 'OWC Tech. Report No. 6, Ohio Dept. Natural Resources',
    doi: null,
  },
  {
    id: 200, year: 1990, category: 'Journal Article',
    title: 'Measures of flow variability and a new flow-based classification of Great Lakes tributaries',
    authors: 'Richards, R.P.',
    journal: 'Journal of Great Lakes Research 16(1): 53–70',
    doi: '10.1016/S0380-1330(90)71398-6',
  },
  {
    id: 201, year: 1990, category: 'Book Chapter',
    title: 'Estimates of human exposure to pesticides through drinking water: A preliminary risk assessment',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'In Long Range Transport of Pesticides. American Chemical Society Symposium Volume, pp. 387–403',
    doi: null,
  },
  // ── 1989 ──
  {
    id: 202, year: 1989, category: 'Journal Article',
    title: 'Environmental extension: A key to nonpoint-source pollution abatement',
    authors: 'Baker, D.B.',
    journal: 'Journal of Soil and Water Conservation 44(1): 8',
    doi: null,
  },
  {
    id: 203, year: 1989, category: 'Conference Paper',
    title: 'Herbicide concentration patterns in rivers draining intensively cultivated farmlands of northwestern Ohio',
    authors: 'Baker, D.B., and Richards, R.P.',
    journal: 'Proceedings of a National Conference on Pesticides in Terrestrial and Aquatic Environments, pp. 103–120',
    doi: null,
  },
  {
    id: 204, year: 1989, category: 'Technical Report',
    title: 'Nitrate and pesticides in private wells of Ohio: A state atlas',
    authors: 'Baker, D.B., Wallrabenstein, L.K., Richards, R.P., and Creamer, N.L.',
    journal: 'Published by the WQL',
    doi: '10.5281/zenodo.6678183',
  },
  {
    id: 205, year: 1989, category: 'Book Chapter',
    title: 'Overview of Lake Erie and its estuaries within the Great Lakes ecosystem',
    authors: 'Herdendorf, C.E., and Krieger, K.A.',
    journal: 'In Lake Erie and its estuarine systems. NOAA Estuary-of-the-Month Seminar Series, 37 pp.',
    doi: '10.5281/zenodo.6780200',
  },
  {
    id: 206, year: 1989, category: 'Book Chapter',
    title: 'Lake Erie and its estuarine systems: Issues, resources, status, and management',
    authors: 'Krieger, K.A. (Editor)',
    journal: 'NOAA Estuary-of-the-Month Seminar Series. 290 pp.',
    doi: '10.5281/zenodo.6779522',
  },
  {
    id: 207, year: 1989, category: 'Book Chapter',
    title: 'Chemical limnology and contaminants',
    authors: 'Krieger, K.A.',
    journal: 'In Lake Erie estuarine systems. NOAA Estuary-of-the-Month Seminar Series, 27 pp.',
    doi: '10.5281/zenodo.6780268',
  },
  {
    id: 208, year: 1989, category: 'Journal Article',
    title: 'Treatment of seasonal pesticides in surface waters',
    authors: 'Miltner, R.J., Baker, D.B., Speth, T.F., and Fronk, C.A.',
    journal: 'Journal of the American Water Works Association 81(1): 43–52',
    doi: '10.1002/j.1551-8833.1989.tb03321.x',
  },
  {
    id: 209, year: 1989, category: 'Journal Article',
    title: 'Evaluation of some approaches to estimating non-point pollutant loads for unmonitored areas',
    authors: 'Richards, R.P.',
    journal: 'Water Resource Bulletin 25(4): 891–904',
    doi: '10.1111/j.1752-1688.1989.tb05405.x',
  },
  {
    id: 210, year: 1989, category: 'Conference Paper',
    title: 'Determination of sampling frequency for pollutant load estimation using flow information only',
    authors: 'Richards, R.P.',
    journal: 'Proceedings international symposium on the design of water quality information systems, pp. 136–144',
    doi: null,
  },
  {
    id: 211, year: 1989, category: 'Journal Article',
    title: 'Measures of flow variability for Great Lakes tributaries',
    authors: 'Richards, R.P.',
    journal: 'Environmental Monitoring and Assessment 13: 361–377',
    doi: '10.1007/BF00394240',
  },
  {
    id: 212, year: 1989, category: 'Conference Paper',
    title: 'Potential for reducing human exposures to herbicides by selective treatment of storm runoff water at municipal water supplies',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Proceedings of a National Conference on Pesticides in Terrestrial and Aquatic Environments, pp. 127–138',
    doi: null,
  },
  // ── 1988 ──
  {
    id: 213, year: 1988, category: 'Book Chapter',
    title: 'Farm chemicals in surface waters',
    authors: 'Baker, D.B.',
    journal: 'In Water quality: A realistic perspective. University of Michigan, pp. 219–233',
    doi: null,
  },
  {
    id: 214, year: 1988, category: 'Technical Report',
    title: 'Sediment, nutrient and pesticide transport in selected lower Great Lakes tributaries',
    authors: 'Baker, D.B.',
    journal: 'EPA-905/4-88-001. 225 p.',
    doi: '10.5281/zenodo.6761309',
  },
  {
    id: 215, year: 1988, category: 'Technical Report',
    title: 'The Lost Creek Project, Defiance, Ohio: Interim water quality data report',
    authors: 'Baker, D.B.',
    journal: 'Submitted to U.S. Dept. of Agriculture, Columbus, Ohio. 63 p.',
    doi: null,
  },
  {
    id: 216, year: 1988, category: 'Journal Article',
    title: 'Effects of herbicides on stream aufwuchs productivity and nutrient uptake',
    authors: 'Krieger, K.A., Baker, D.B., and Kramer, J.W.',
    journal: 'Archives of Environmental Contamination and Toxicology 17: 299–306',
    doi: '10.1007/BF01055166',
  },
  {
    id: 217, year: 1988, category: 'Technical Report',
    title: 'Approaches to characterizing substance loadings and flows from Great Lakes tributaries',
    authors: 'Richards, R.P.',
    journal: 'Report to the International Joint Commission, 68 pp.',
    doi: null,
  },
  {
    id: 218, year: 1988, category: 'Conference Paper',
    title: 'Nitrate contamination in Ohio private wells',
    authors: 'Wallrabenstein, L.K., and Baker, D.B.',
    journal: 'Proceedings of the Agricultural Impacts on Ground Water — A Conference, pp. 575–592',
    doi: null,
  },
  // ── 1987 ──
  {
    id: 219, year: 1987, category: 'Book Chapter',
    title: 'Overview of rural nonpoint pollution in the Lake Erie Basin',
    authors: 'Baker, D.B.',
    journal: 'In Effects of Conservation Tillage on Groundwater Quality – Nitrates and Pesticides, pp. 65–91',
    doi: null,
  },
  {
    id: 220, year: 1987, category: 'Journal Article',
    title: 'Monte Carlo studies of sampling strategies for estimating tributary loads',
    authors: 'Richards, R.P., and Holloway, J.',
    journal: 'Water Resources Research 23(10): 1939–1948',
    doi: '10.1029/WR023i010p01939',
  },
  {
    id: 221, year: 1987, category: 'Journal Article',
    title: 'Pesticides in rainwater in the northeastern United States',
    authors: 'Richards, R.P., Kramer, J.W., Baker, D.B., and Krieger, K.A.',
    journal: 'Nature 327: 129–131',
    doi: '10.1038/327129a0',
  },
  // ── 1986 ──
  {
    id: 222, year: 1986, category: 'Journal Article',
    title: 'A European cladoceran, Bythotrephes cederstroemi Schoedler, in Lake Erie: First North American record',
    authors: 'Bur, M.T., Klarer, D.M., and Krieger, K.A.',
    journal: 'Ohio Journal of Science 86(2): 54–55',
    doi: '10.5281/zenodo.6819377',
  },
  {
    id: 223, year: 1986, category: 'Journal Article',
    title: 'First records of a European cladoceran, Bythotrephes cederstroemi, in lakes Erie and Huron',
    authors: 'Bur, M.T., Klarer, D.M., and Krieger, K.A.',
    journal: 'Journal of Great Lakes Research 12(2): 144–146',
    doi: '10.1016/S0380-1330(86)71711-5',
  },
  {
    id: 224, year: 1986, category: 'Technical Report',
    title: 'A primer on agricultural herbicides and insecticides and their effects on aquatic biota',
    authors: 'Krieger, K.A.',
    journal: 'Appendix to Report to U.S. EPA, Great Lakes National Program Office',
    doi: null,
  },
  {
    id: 225, year: 1986, category: 'Final Report',
    title: 'Conservation tillage in 1986 in the Rock Creek and Honey Creek watersheds (Sandusky Basin), Ohio',
    authors: 'Krieger, K.A.',
    journal: 'Report to Ohio Department of Natural Resources, Div. of Soil & Water Conservation',
    doi: null,
  },
  {
    id: 226, year: 1986, category: 'Final Report',
    title: 'Simulated surveys of crops and tillage practices in the Honey Creek Watershed using fixed-interval and random points methods',
    authors: 'Krieger, K.A.',
    journal: 'Report to Ohio Department of Natural Resources, Division of Soil & Water Conservation',
    doi: null,
  },
  {
    id: 227, year: 1986, category: 'Final Report',
    title: 'Conservation tillage adoption in two north central Ohio watersheds, 1982–1985',
    authors: 'Krieger, K.A., and Baker, D.B.',
    journal: 'Final Report to U.S. EPA, Great Lakes National Program Office',
    doi: null,
  },
  // ── 1985 ──
  {
    id: 228, year: 1985, category: 'Conference Paper',
    title: 'Impacts of cropland runoff on nutrient and pesticide concentrations in river systems',
    authors: 'Baker, D.B.',
    journal: 'Proceedings of a Symposium held in May 1985. The Conservation Foundation, Washington, D.C., pp. 63–80',
    doi: null,
  },
  {
    id: 229, year: 1985, category: 'Journal Article',
    title: 'Regional water quality impacts of intensive row-crop agriculture: A Lake Erie Basin case study',
    authors: 'Baker, D.B.',
    journal: 'Journal of Soil Water Conservation 40(1): 125–132',
    doi: null,
  },
  {
    id: 230, year: 1985, category: 'Conference Paper',
    title: 'Gross erosion rates, sediment yields and nutrient yields for Lake Erie tributaries: Implications for targeting',
    authors: 'Baker, D.B., Krieger, K.A., Richards, R.P., and Kramer, J.W.',
    journal: 'Proceedings of Perspectives on Nonpoint Source Pollution, U.S. EPA 440/5-85-001',
    doi: '10.5281/zenodo.6783353',
  },
  {
    id: 231, year: 1985, category: 'Conference Paper',
    title: 'Effects of intensive agricultural land use on regional water quality in northwestern Ohio',
    authors: 'Baker, D.B., Krieger, K.A., Richards, R.P., and Kramer, J.W.',
    journal: 'Proceedings of Perspectives on Nonpoint Source Pollution, U.S. EPA 440/5/85-001',
    doi: '10.5281/zenodo.6783457',
  },
  {
    id: 232, year: 1985, category: 'Book Chapter',
    title: 'An analytical method and quality control program for studies of currently used pesticides in surface waters',
    authors: 'Kramer, J.W., and Baker, D.B.',
    journal: 'In Quality Assurance for Environmental Measurements, ASTM STP 867, pp. 116–132',
    doi: null,
  },
  {
    id: 233, year: 1985, category: 'Technical Report',
    title: 'A comparative study of crustacean zooplankton community structure and dynamics in a Lake Erie marsh and the adjacent wave zone',
    authors: 'Krieger, K.A.',
    journal: 'U.S. Department of Commerce, NOAA',
    doi: null,
  },
  {
    id: 234, year: 1985, category: 'Journal Article',
    title: 'Snail distributions in Lake Erie: the influence of anoxia in the southern central basin nearshore zone',
    authors: 'Krieger, K.A.',
    journal: 'Ohio Journal of Science 85(5): 230–244',
    doi: '10.5281/zenodo.6784409',
  },
  {
    id: 235, year: 1985, category: 'Final Report',
    title: 'Effects of residual agricultural herbicides on stream algal community productivity and nutrient uptake rates',
    authors: 'Krieger, K.A., and Baker, D.B.',
    journal: 'Final Report to U.S. Geological Survey',
    doi: null,
  },
  {
    id: 236, year: 1985, category: 'Journal Article',
    title: 'Estimating the extent of reduction needed to statistically demonstrate reduced non-point phosphorus loading to Lake Erie',
    authors: 'Richards, R.P.',
    journal: 'Journal of Great Lakes Research 11(2): 110–116',
    doi: '10.1016/S0380-1330(85)71750-9',
  },
  {
    id: 237, year: 1985, category: 'Technical Report',
    title: 'Assimilation and flux of sediments and pollutants in the Sandusky River estuary, Sandusky Bay, and the adjacent nearshore zone of Lake Erie',
    authors: 'Richards, R.P., and Baker, D.B.',
    journal: 'Report to NOAA, 158 pp.',
    doi: null,
  },
  // ── 1984 ──
  {
    id: 238, year: 1984, category: 'Technical Report',
    title: 'Fluvial transport and processing of sediment and nutrients in large agricultural river basins',
    authors: 'Baker, D.B.',
    journal: 'U.S. EPA, Athens, Georgia (EPA-600/3-83-054)',
    doi: '10.5281/zenodo.6686539',
  },
  {
    id: 239, year: 1984, category: 'Journal Article',
    title: 'Benthic macroinvertebrates as indicators of environmental degradation in the southern nearshore zone of the central basin of Lake Erie',
    authors: 'Krieger, K.A.',
    journal: 'Journal of Great Lakes Research 10(2): 197–209',
    doi: '10.1016/S0380-1330(84)71826-0',
  },
  {
    id: 240, year: 1984, category: 'Technical Report',
    title: 'Transport and assimilation of nutrients and pesticides in a Lake Erie estuary',
    authors: 'Krieger, K.A.',
    journal: 'U.S. Department of Commerce, NOAA',
    doi: null,
  },
  {
    id: 241, year: 1984, category: 'Technical Report',
    title: 'Lake Erie Intensive Study 1978–1979',
    authors: 'Rathke, D., Fay, L., Richards, R.P., et al.',
    journal: 'Report to U.S. EPA, 183 pp + appendices',
    doi: '10.5281/zenodo.6824227',
  },
  // ── 1983 ──
  {
    id: 242, year: 1983, category: 'Journal Article',
    title: 'The effects of atrazine and metolachlor on the vegetative growth of Lemna minor L.',
    authors: 'Palmstrom, N., and Krieger, K.A.',
    journal: 'Ohio Journal of Science 83(2): 90',
    doi: '10.5281/zenodo.6824246',
  },
  // ── 1982 ──
  {
    id: 243, year: 1982, category: 'Technical Report',
    title: 'Water quality of Goodman Ditch as indicated by the stream macroinvertebrates',
    authors: 'Krieger, K.A.',
    journal: 'Appendix I in Baker, D.B. Water quality in Goodman Ditch',
    doi: null,
  },
  {
    id: 244, year: 1982, category: 'Technical Report',
    title: 'Atrazine at 400 µg/L inhibits nutrient uptake and productivity of Aufwuchs communities',
    authors: 'Krieger, K.A.',
    journal: 'Water Quality Laboratory Technical Report',
    doi: null,
  },
  // ── 1981 ──
  {
    id: 245, year: 1981, category: 'Technical Report',
    title: 'The concentration and transport of pesticides in northwestern Ohio Rivers – 1981',
    authors: 'Baker, D.B., Krieger, K.A., and Setzler, J.V.',
    journal: 'U.S. Army Corps of Engineers, Buffalo District',
    doi: null,
  },
  {
    id: 246, year: 1981, category: 'Final Report',
    title: 'Environmental status of the southern nearshore zone of the central basin of Lake Erie in 1978 and 1979 as indicated by the benthic macroinvertebrates',
    authors: 'Krieger, K.A.',
    journal: 'Final Report to U.S. EPA, Chicago',
    doi: null,
  },
  {
    id: 247, year: 1981, category: 'Final Report',
    title: 'The crustacean zooplankton of the southern nearshore zone of the central basin of Lake Erie in 1978 and 1979: Indications of trophic status',
    authors: 'Krieger, K.A.',
    journal: 'Final Report to U.S. EPA, Chicago',
    doi: '10.5281/zenodo.6762063',
  },
  {
    id: 248, year: 1981, category: 'Technical Report',
    title: 'LENS Final Report I: Chemistry',
    authors: 'Richards, R.P.',
    journal: 'Report to U.S. EPA, 86 pp + appendices',
    doi: null,
  },
  {
    id: 249, year: 1981, category: 'Journal Article',
    title: 'Moment methods for analyzing river models with application to point source phosphorus',
    authors: 'Verhoff, F.H., and Baker, D.B.',
    journal: 'Water Research 15(4): 493–501',
    doi: '10.1016/0043-1354(81)90060-9',
  },
  // ── 1980 ──
  {
    id: 250, year: 1980, category: 'Conference Paper',
    title: 'Upstream point source phosphorus inputs and effects',
    authors: 'Baker, D.B.',
    journal: 'Seminar on Water Quality Trade-offs, U.S. EPA Great Lakes National Program Office',
    doi: '10.5281/zenodo.6783546',
  },
  {
    id: 251, year: 1980, category: 'Technical Report',
    title: 'Environmental quality of upper Honey Creek: A preliminary assessment',
    authors: 'Krieger, K.A., Richards, R.P., Kline, P.A., and Baker, D.B.',
    journal: 'U.S. Army Corps of Engineers, Buffalo District. Technical Report Series. 74 pp.',
    doi: '10.5281/zenodo.6833292',
  },
  {
    id: 252, year: 1980, category: 'Technical Report',
    title: 'LENS Preliminary Report I: Chemistry',
    authors: 'Richards, R.P.',
    journal: 'Report to U.S. EPA, 216 pp + appendices',
    doi: null,
  },
  // ── 1975 ──
  {
    id: 253, year: 1975, category: 'Conference Paper',
    title: 'Effects of advanced waste treatment and flow augmentation on water quality during low stream flows',
    authors: 'Baker, D.B., and Kramer, J.W.',
    journal: 'In The Sandusky River Basin Symposium, Proceedings. International Joint Commission, Windsor, Ontario',
    doi: '10.5281/zenodo.6783898',
  },
  {
    id: 254, year: 1975, category: 'Conference Paper',
    title: 'Distribution of nonpoint sources of phosphorus and sediment in the Sandusky River Basin',
    authors: 'Baker, D.B., and Kramer, J.W.',
    journal: 'In The Sandusky River Basin Symposium, Proceedings. International Joint Commission, Windsor, Ontario',
    doi: '10.5281/zenodo.6784038',
  },
  {
    id: 255, year: 1975, category: 'Technical Report',
    title: 'The Sandusky River Basin Symposium, Proceedings',
    authors: 'Baker, D.B., Jackson, W.B., and Prater, B.L. (Editors)',
    journal: 'International Joint Commission, Windsor, Ontario. 475 pp.',
    doi: '10.5281/zenodo.6762297',
  },
  // ── 1973 ──
  {
    id: 256, year: 1973, category: 'Conference Paper',
    title: 'Phosphorus sources and transport in an agricultural river basin of Lake Erie',
    authors: 'Baker, D.B., and Kramer, J.W.',
    journal: 'Proceedings of the 16th Conference of the International Association for Great Lakes Research, pp. 858–871',
    doi: '10.5281/zenodo.6705577',
  },
  // ── 1971 ──
  {
    id: 257, year: 1971, category: 'Technical Report',
    title: 'Water quality control through flow augmentation',
    authors: 'Baker, D.B., and Kramer, J.W.',
    journal: 'Water Pollution Control Research Series (16080 DFO 01/71). U.S. EPA',
    doi: '10.5281/zenodo.6704740',
  },
];

const derivedWorks: Publication[] = [
  // ── 2024 ──
  {
    id: 1000, year: 2024, category: 'Journal Article', derived: true,
    title: 'Investigating the applicability and assumptions of the regression relationship between flow discharge and nitrogen concentrations for load estimation',
    authors: 'Song, J.H., Her, Y., Park, Y.S., Yoon, K., and Kim, H.',
    journal: 'Heliyon 10(1): e23603',
    doi: '10.1016/j.heliyon.2023.e23603',
  },
  {
    id: 1001, year: 2024, category: 'Journal Article', derived: true,
    title: 'Modeling attenuation of photosynthetically active radiation across the optical gradient in the Laurentian Great Lakes with application to Lake Erie',
    authors: 'Alsip, P.J., Rowe, M.D., Kain, A., and Godwin, C.',
    journal: 'Journal of Great Lakes Research',
    doi: '10.1016/j.jglr.2024.102364',
  },
  {
    id: 1002, year: 2024, category: 'Journal Article', derived: true,
    title: 'Metatranscriptomic analysis reveals dissimilarity in viral community activity between an ice-free and ice-covered winter in Lake Erie',
    authors: 'Denison, E.R., Zepernick, B.N., McKay, R.M.L., and Wilhelm, S.W.',
    journal: 'Microbial Ecology: e00753-24',
    doi: '10.1128/msystems.00753-24',
  },
  {
    id: 1003, year: 2024, category: 'Journal Article', derived: true,
    title: 'Integrating water quality data with a Bayesian network model to improve spatial and temporal phosphorus attribution: Application to the Maumee River Basin',
    authors: 'Wei, Z., Alam, S., Verma, M., Hilderbran, M., Wu, Y., Anderson, B., Ho, D.E., and Suckale, J.',
    journal: 'Journal of Environmental Management 360: 121120',
    doi: '10.1016/j.jenvman.2024.121120',
  },
  {
    id: 1004, year: 2024, category: 'Journal Article', derived: true,
    title: 'A random forest approach to improve estimates of tributary nutrient loading',
    authors: 'Isles, P.D.F.',
    journal: 'Water Research 248: 120876',
    doi: '10.1016/j.watres.2023.120876',
  },
  {
    id: 1005, year: 2024, category: 'Journal Article', derived: true,
    title: 'Characterizing Spatiotemporal Variability in Phosphorus Export across the United States through Bayesian Hierarchical Modeling',
    authors: 'Karimi, K., and Obenour, D.R.',
    journal: 'Environmental Science & Technology 58(22): 9782–9791',
    doi: '10.1021/acs.est.3c07479',
  },
  {
    id: 1006, year: 2024, category: 'Journal Article', derived: true,
    title: 'The recent disappearance of a persistent Planktothrix bloom: Characterization of a regime shift in the phytoplankton of Sandusky Bay (USA)',
    authors: 'Wagner, R.S., Neudeck, M.J., Heath, A.E., Barker, K.B., Brown, K.M., Buchholz, S., Ward, C.S., and Bullerjahn, G.S.',
    journal: 'Harmful Algae 136: 102656',
    doi: '10.1016/j.hal.2024.102656',
  },
  // ── 2023 ──
  {
    id: 1007, year: 2023, category: 'Journal Article', derived: true,
    title: 'Agricultural conservation practices could help offset climate change impacts on cyanobacterial harmful algal blooms in Lake Erie',
    authors: 'Fraker, M.E., Aloysius, N.R., Martin, J.F., Keitzer, S.C., Dippold, D.A., Yen, H., Arnold, J.G., et al.',
    journal: 'Journal of Great Lakes Research 49(1): 209–219',
    doi: '10.1016/j.jglr.2022.11.009',
  },
  {
    id: 1008, year: 2023, category: 'Journal Article', derived: true,
    title: 'Streamflow duration curve to explain nutrient export in Midwestern USA watersheds: Implication for water quality achievements',
    authors: 'Kamrath, B., and Yuan, Y.',
    journal: 'Journal of Environmental Management 336: 117598',
    doi: '10.1016/j.jenvman.2023.117598',
  },
  {
    id: 1009, year: 2023, category: 'Journal Article', derived: true,
    title: 'Sub-monthly time scale forecasting of harmful algal blooms intensity in Lake Erie using remote sensing and machine learning',
    authors: 'Gupta, A., Hantush, M.M., and Govindaraju, R.S.',
    journal: 'Science of The Total Environment 900: 165781',
    doi: '10.1016/j.scitotenv.2023.165781',
  },
  {
    id: 1010, year: 2023, category: 'Journal Article', derived: true,
    title: 'Remotely sensed imagery reveals animal feeding operations increase downstream dissolved reactive phosphorus',
    authors: 'Meyer, A., Raff, Z., and Porter, S.',
    journal: 'Journal of the American Water Resources Association 60(2): 620–638',
    doi: '10.1111/1752-1688.13177',
  },
  {
    id: 1011, year: 2023, category: 'Journal Article', derived: true,
    title: 'A New Approach to Predict Tributary Phosphorus Loads Using Machine Learning– and Physics-Based Modeling Systems',
    authors: 'Chang, C.F., Astitha, M., Yuan, Y., Tang, C., Vlahos, P., Garcia, V., and Khaira, U.',
    journal: 'Artificial Intelligence for the Earth Systems 2(3): e220049',
    doi: '10.1175/AIES-D-22-0049.1',
  },
  {
    id: 1012, year: 2023, category: 'Journal Article', derived: true,
    title: 'Decreasing trends in total suspended solids and cumulative effects of nonpoint source projects in the Cuyahoga River Watershed, OH',
    authors: 'McManus, M.G., Nietch, C.T., Heberling, M.T., and Gains-Germain, L.',
    journal: 'Journal of Great Lakes Research 49(3): 608–620',
    doi: '10.1016/j.jglr.2023.03.011',
  },
  {
    id: 1013, year: 2023, category: 'Journal Article', derived: true,
    title: 'Advancing freshwater ecological forecasts: Harmful algal blooms in Lake Erie',
    authors: 'Scavia, D., Wang, Y.C., and Obenour, D.R.',
    journal: 'Science of The Total Environment 856(1): 158959',
    doi: '10.1016/j.scitotenv.2022.158959',
  },
  {
    id: 1014, year: 2023, category: 'Journal Article', derived: true,
    title: 'Stochastic export coefficient model to predict annual variation in phosphorus loading from diffuse runoff',
    authors: 'Zhang, L., Endreny, T.A., and Stephan, E.A.',
    journal: 'Journal of Hydrology 620(A): 129447',
    doi: '10.1016/j.jhydrol.2023.129447',
  },
  {
    id: 1015, year: 2023, category: 'Journal Article', derived: true,
    title: 'Is glyphosate an underlying cause of increased dissolved reactive phosphorus loading in the Western Lake Erie basin?',
    authors: 'Spiese, C.E., Bowling, M.N., and Moeller, S.E.M.',
    journal: 'Journal of Great Lakes Research 49(3): 631–639',
    doi: '10.1016/j.jglr.2023.03.009',
  },
  {
    id: 1016, year: 2023, category: 'Journal Article', derived: true,
    title: 'Intercomparison of three spatially-resolved, process-based Lake Erie hypoxia models',
    authors: 'Rowe, M.D., Valipour, R., and Redder, T.M.',
    journal: 'Journal of Great Lakes Research 49(5): 993–1003',
    doi: '10.1016/j.jglr.2023.06.004',
  },
  {
    id: 1017, year: 2023, category: 'Journal Article', derived: true,
    title: 'Agricultural nitrate export patterns shaped by crop rotation and tile drainage',
    authors: 'Ma, Z., Guan, K., Peng, B., Sivapalan, M., Li, L., Pan, M., Zhou, W., Warner, R., and Zhang, J.',
    journal: 'Water Research 229: 119468',
    doi: '10.1016/j.watres.2022.119468',
  },
  {
    id: 1018, year: 2023, category: 'Journal Article', derived: true,
    title: 'Long-term phosphorus mass-balance of Lake Erie (Canada-USA) reveals a major contribution of in-lake phosphorus loading',
    authors: 'Bocaniov, S.A., Scavia, D., and Van Cappellen, P.',
    journal: 'Ecological Informatics 77: 102131',
    doi: '10.1016/j.ecoinf.2023.102131',
  },
  {
    id: 1019, year: 2023, category: 'Journal Article', derived: true,
    title: 'Anthropogenic change decouples a freshwater predator\'s density feedback',
    authors: 'Sinclair, J.S., Briland, R., Fraker, M.E., Hood, J.M., Frank, K.T., Faust, M.D., Knight, C., and Ludsin, S.A.',
    journal: 'Scientific Reports 13: 7613',
    doi: '10.1038/s41598-023-34408-0',
  },
  {
    id: 1020, year: 2023, category: 'Journal Article', derived: true,
    title: 'Carbon sequestration and nitrogen and phosphorus accumulation in a freshwater, estuarine marsh: Effects of microtopography and nutrient loads',
    authors: 'Villa, J.A., Bohrer, G., Ju, Y., Wrighton, K., Johnson, N., and Kinsman-Costello, L.',
    journal: 'Geoderma 430: 116349',
    doi: '10.1016/j.geoderma.2023.116349',
  },
  {
    id: 1021, year: 2023, category: 'Journal Article', derived: true,
    title: 'Monitoring the effects of urban and forested land uses on runoff quality: Implications for improved stormwater management',
    authors: 'Simpson, I.M., Winston, R.J., and Dorsey, J.D.',
    journal: 'Science of The Total Environment 862: 160827',
    doi: '10.1016/j.scitotenv.2022.160827',
  },
  // ── 2022 ──
  {
    id: 1022, year: 2022, category: 'Journal Article', derived: true,
    title: 'On the potential for reconstructed wetlands to remediate fecal coliform loading in an agricultural watershed',
    authors: 'Jacquemin, S.J., Birt, J., Senger, Z., Axe, B., Strang, B., Ewing, C., Kinney, B., and Newell, S.E.',
    journal: 'Hydrobiologia 850: 3879–3891',
    doi: '10.1007/s10750-022-05078-2',
  },
  {
    id: 1023, year: 2022, category: 'Journal Article', derived: true,
    title: 'Staying afloat: The effect of algae contamination on Lake Erie housing prices',
    authors: 'Wolf, D., Gopalakrishnan, S., and Klaiber, H.A.',
    journal: 'American Journal of Agricultural Economics 104(5): 1701–1723',
    doi: '10.1111/ajae.12285',
  },
  {
    id: 1024, year: 2022, category: 'Journal Article', derived: true,
    title: 'Quantifying the contribution of direct runoff and baseflow to nitrogen loading in the Western Lake Erie Basins',
    authors: 'Song, J.H., Her, Y., and Guo, T.',
    journal: 'Scientific Reports 12(9216)',
    doi: '10.1038/s41598-022-12740-1',
  },
  {
    id: 1025, year: 2022, category: 'Journal Article', derived: true,
    title: 'Improving estimates of phosphorus loads using hierarchical models',
    authors: 'Yuan, L.L.',
    journal: 'Journal of Hydrology 614(B): 128558',
    doi: '10.1016/j.jhydrol.2022.128558',
  },
  {
    id: 1026, year: 2022, category: 'Journal Article', derived: true,
    title: 'Spatially referenced Bayesian state-space model of total phosphorus in western Lake Erie',
    authors: 'Maguire, T.J., Stow, C.A., and Godwin, C.M.',
    journal: 'Hydrology and Earth System Sciences 26(8): 1993–2017',
    doi: '10.5194/hess-26-1993-2022',
  },
  {
    id: 1027, year: 2022, category: 'Journal Article', derived: true,
    title: 'Evaluation of sampling frequency impact on the accuracy of water quality status as determined considering different water quality monitoring objectives',
    authors: 'Torres, C., Gitau, M.W., Paredes-Cuervo, D., and Engel, B.',
    journal: 'Environmental Monitoring and Assessment 194(489)',
    doi: '10.1007/s10661-022-10169-7',
  },
  {
    id: 1028, year: 2022, category: 'Journal Article', derived: true,
    title: 'Patterns of long-term variations of nitrate concentration – Stream discharge relationships for a drained agricultural watershed in Mid-western USA',
    authors: 'Liu, W., Tian, S., Youssef, M.A., Birgand, F.P., and Chescheir, G.M.',
    journal: 'Journal of Hydrology 614(A): 128479',
    doi: '10.1016/j.jhydrol.2022.128479',
  },
  {
    id: 1029, year: 2022, category: 'Journal Article', derived: true,
    title: 'Quantifying spatial and temporal relationships between diatoms and nutrients in streams strengthens evidence of nutrient effects from monitoring data',
    authors: 'Yuan, L.L., Smucker, N.J., Nietch, C.T., and Pilgrim, E.M.',
    journal: 'Freshwater Science 41(1): 100–112',
    doi: '10.1086/718631',
  },
  {
    id: 1030, year: 2022, category: 'Journal Article', derived: true,
    title: 'Unbiased Estimates and Confidence Intervals of Riverine Loads for Low-Frequency Water Quality Monitoring Strategies',
    authors: 'Tada, A., and Tanakamaru, H.',
    journal: 'Water Resources Research 28(5): e2022WR031941',
    doi: '10.1029/2022WR031941',
  },
  {
    id: 1031, year: 2022, category: 'Journal Article', derived: true,
    title: 'Simplified Method for the Determination of Total Kjeldahl Nitrogen in Wastewater',
    authors: 'Hicks, T.D., Kuns, C.M., Raman, C., Bates, Z.T., and Nagarajan, S.',
    journal: 'Environments 9(5): 55',
    doi: '10.3390/environments9050055',
  },
  // ── 2021 ──
  {
    id: 1032, year: 2021, category: 'Journal Article', derived: true,
    title: 'Unbiased Estimates and Confidence Intervals for Riverine Loads',
    authors: 'Tada, A., and Tanakamaru, H.',
    journal: 'Water Resources Research 57(3): e2020WR028170',
    doi: '10.1029/2020WR028170',
  },
  {
    id: 1033, year: 2021, category: 'Journal Article', derived: true,
    title: 'Insights from an Evaluation of Nitrate Load Estimation Methods in the Midwestern United States',
    authors: 'Park, D., Um, M.J., Markus, M., Jung, K., Keefer, L., and Verma, S.',
    journal: 'Sustainability 13(13): 7508',
    doi: '10.3390/su13137508',
  },
  {
    id: 1034, year: 2021, category: 'Journal Article', derived: true,
    title: 'Tile Drainage Increases Total Runoff and Phosphorus Export During Wet Years in the Western Lake Erie Basin',
    authors: 'Miller, S.A., and Lyon, S.W.',
    journal: 'Frontiers in Water 3',
    doi: '10.3389/frwa.2021.757106',
  },
  {
    id: 1035, year: 2021, category: 'Journal Article', derived: true,
    title: 'Economic viability of proactive harmful algal bloom mitigation through attached algal growth',
    authors: 'DeRose, K.K., Davis, R.W., Monroe, E.A., and Quinn, J.C.',
    journal: 'Journal of Great Lakes Research 47(4): 1021–1032',
    doi: '10.1016/j.jglr.2021.04.011',
  },
  {
    id: 1036, year: 2021, category: 'Journal Article', derived: true,
    title: 'Prediction of Nitrate and Phosphorus Concentrations Using Machine Learning Algorithms in Watersheds with Different Landuse',
    authors: 'Bhattarai, A., Dhakal, S., Gautam, Y., and Bhattarai, R.',
    journal: 'Water 13(21): 3096',
    doi: '10.3390/w13213096',
  },
  {
    id: 1037, year: 2021, category: 'Journal Article', derived: true,
    title: 'Elucidating controls on cyanobacteria bloom timing and intensity via Bayesian mechanistic modeling',
    authors: 'Del Giudice, D., Fang, S., Scavia, D., Davis, T.W., Evans, M.A., and Obenour, D.R.',
    journal: 'Science of The Total Environment 755(1): 142487',
    doi: '10.1016/j.scitotenv.2020.142487',
  },
  {
    id: 1038, year: 2021, category: 'Journal Article', derived: true,
    title: 'Development of a mixed-source, single pesticide database for use in ecological risk assessment',
    authors: 'Perkins, D.B., Chen, W., Jacobson, A., Stone, Z., White, M., Christensen, B., Ghebremichael, L., and Brain, R.',
    journal: 'Environmental Monitoring and Assessment 193(827)',
    doi: '10.1007/s10661-021-09596-9',
  },
  {
    id: 1039, year: 2021, category: 'Journal Article', derived: true,
    title: 'Source contribution to phosphorus loads from the Maumee River watershed to Lake Erie',
    authors: 'Kast, J.B., Apostel, A.M., Kalcic, M.M., Muenich, R.L., Dagnew, A., Long, C.M., Evenson, G., and Martin, J.F.',
    journal: 'Journal of Environmental Management 279: 111803',
    doi: '10.1016/j.jenvman.2020.111803',
  },
  {
    id: 1040, year: 2021, category: 'Journal Article', derived: true,
    title: 'Functional traits reveal the dominant drivers of long-term community change across a North American Great Lake',
    authors: 'Sinclair, J.S., Fraker, M.E., Hood, J.M., Frank, K.T., DuFour, M.R., Gorman, A.M., and Ludsin, S.A.',
    journal: 'Global Change Biology 27(23): 6232–6251',
    doi: '10.1111/gcb.15902',
  },
  {
    id: 1041, year: 2021, category: 'Journal Article', derived: true,
    title: 'The behaviors of two limnetic river plumes discharging into the semi-enclosed western basin of Lake Erie during ice-free seasons',
    authors: 'Niu, Q., and Xia, M.',
    journal: 'Estuarine, Coastal and Shelf Science 258: 107408',
    doi: '10.1016/j.ecss.2021.107408',
  },
  {
    id: 1042, year: 2021, category: 'Journal Article', derived: true,
    title: 'Assessment of risks to listed species from the use of atrazine in the USA: a perspective',
    authors: 'Smith, P.N., Armbrust, K.L., Brain, R.A., Chen, W., Galic, N., Ghebremichael, L., Giddings, J.M., et al.',
    journal: 'Journal of Toxicology and Environmental Health 24(6): 223–306',
    doi: '10.1080/10937404.2021.1902890',
  },
  {
    id: 1043, year: 2021, category: 'Journal Article', derived: true,
    title: 'Relative strength of top-down effects of an invasive fish and bottom-up effects of nutrient addition in a simple aquatic food web',
    authors: 'Rettig, J.E., and Smith, G.R.',
    journal: 'Environmental Science and Pollution Research 28: 5845–5853',
    doi: '10.1007/s11356-020-10933-7',
  },
  {
    id: 1044, year: 2021, category: 'Journal Article', derived: true,
    title: 'Cyanobacterial bloom phenology in Saginaw Bay from MODIS and a comparative look with western Lake Erie',
    authors: 'Wynne, T.T., Stumpf, R.P., Litaker, R.W., and Hood, R.R.',
    journal: 'Harmful Algae 103: 101999',
    doi: '10.1016/j.hal.2021.101999',
  },
  {
    id: 1045, year: 2021, category: 'Journal Article', derived: true,
    title: 'Low sediment redox promotes cyanobacteria blooms across a trophic range: implications for management',
    authors: 'Molot, L.A., Schiff, S.L., Venkiteswaran, J.J., Baulch, H.M., Higgins, S.N., Zastepa, A., Verschoor, M.J., and Walters, D.',
    journal: 'Lake and Reservoir Management 37(2): 120–142',
    doi: '10.1080/10402381.2020.1854400',
  },
  {
    id: 1046, year: 2021, category: 'Journal Article', derived: true,
    title: 'Quantifying uncertainty cascading from climate, watershed, and lake models in harmful algal bloom predictions',
    authors: 'Scavia, D., Wang, Y.C., Obenour, D.R., Apostel, A., Basile, S.J., Kalcic, M.M., Kirchhoff, C.J., Miralha, L., Muenich, R.L., and Steiner, A.L.',
    journal: 'Science of The Total Environment 759: 143487',
    doi: '10.1016/j.scitotenv.2020.143487',
  },
  {
    id: 1047, year: 2021, category: 'Journal Article', derived: true,
    title: 'Evaluating the efficacy of targeting options for conservation practice adoption on watershed-scale phosphorus reductions',
    authors: 'Kast, J.B., Kalcic, M., Wilson, R., Jackson-Smith, D., Breyfogle, N., and Martin, J.',
    journal: 'Water Research 201: 117375',
    doi: '10.1016/j.watres.2021.117375',
  },
  // ── 2020 ──
  {
    id: 1048, year: 2020, category: 'Journal Article', derived: true,
    title: 'Preliminary analysis to estimate the spatial distribution of benefits of P load reduction: Identifying the spatial influence of phosphorus loading from the Maumee River (USA) in western Lake Erie',
    authors: 'Larson, J.H., Hlavacek, E., DeJager, N., Evans, M.A., and Wynne, T.',
    journal: 'Ecology and Evolution 10(9): 3968–3976',
    doi: '10.1002/ece3.6160',
  },
  {
    id: 1049, year: 2020, category: 'Journal Article', derived: true,
    title: 'Comparison of Long Short-Term Memory and Weighted Regressions on Time, Discharge, and Season Models for Nitrate-N Load Estimation',
    authors: 'Jung, K., Um, M.J., Markus, M., and Park, D.',
    journal: 'Sustainability 12(15): 5942',
    doi: '10.3390/su12155942',
  },
  {
    id: 1050, year: 2020, category: 'Journal Article', derived: true,
    title: 'Stream Solutes and Particulates Export Regimes: A New Framework to Optimize Their Monitoring',
    authors: 'Moatar, F., Floury, M., Gold, A.J., Meybeck, M., Renard, B., Ferréol, M., Chandesris, A., Minaudo, C., Addy, K., Piffady, J., and Pinay, G.',
    journal: 'Frontiers in Ecology and Evolution 7(516)',
    doi: '10.3389/fevo.2019.00516',
  },
  {
    id: 1051, year: 2020, category: 'Journal Article', derived: true,
    title: 'Forecasting the combined effects of anticipated climate change and agricultural conservation practices on fish recruitment dynamics in Lake Erie',
    authors: 'Dippold, D.A., Aloysius, N.R., Keitzer, S.C., Yen, H., Arnold, J.G., Daggupati, P., Fraker, M.E., Martin, J.F., Robertson, D.M., Sowa, S.P., Johnson, M.V.V., White, M.J., and Ludsin, S.A.',
    journal: 'Freshwater Biology 65(9): 1487–1508',
    doi: '10.1111/fwb.13515',
  },
  {
    id: 1052, year: 2020, category: 'Journal Article', derived: true,
    title: 'Relative performance of different data mining techniques for nitrate concentration and load estimation in different type of watersheds',
    authors: 'Li, S., Bhattarai, R., Cooke, R.A., Verma, S., Huang, X., Markus, M., and Christianson, L.',
    journal: 'Environmental Pollution 263(A): 114618',
    doi: '10.1016/j.envpol.2020.114618',
  },
  {
    id: 1053, year: 2020, category: 'Journal Article', derived: true,
    title: 'Coupling watershed modeling, public engagement, and soil analysis improves decision making for targeting P retention wetland locations',
    authors: 'Berkowitz, J.F., Schlea, D.A., VanZomeren, C.M., and Boles, C.M.W.',
    journal: 'Journal of Great Lakes Research 46(5): 1331–1339',
    doi: '10.1016/j.jglr.2020.06.016',
  },
  {
    id: 1054, year: 2020, category: 'Journal Article', derived: true,
    title: 'Effect of temperature on phosphorus flux from anoxic western Lake Erie sediments',
    authors: 'Gibbons, K.J., and Bridgeman, T.B.',
    journal: 'Water Research 182: 116022',
    doi: '10.1016/j.watres.2020.116022',
  },
  {
    id: 1055, year: 2020, category: 'Journal Article', derived: true,
    title: 'Changing Rainfall Patterns Over the Western Lake Erie Basin (1975–2017): Effects on Tributary Discharge and Phosphorus Load',
    authors: 'Williams, M.R., and King, K.W.',
    journal: 'Water Resources Research 56(3): e2019WR025985',
    doi: '10.1029/2019WR025985',
  },
  {
    id: 1056, year: 2020, category: 'Journal Article', derived: true,
    title: 'Evaluating sediments as an ecosystem service in western Lake Erie via quantification of nutrient cycling pathways and selected gene abundances',
    authors: 'Boedecker, A.R., Niewinski, D.N., Newell, S.E., Chaffin, J.D., and McCarthy, M.J.',
    journal: 'Journal of Great Lakes Research 46(4): 920–932',
    doi: '10.1016/j.jglr.2020.04.010',
  },
  {
    id: 1057, year: 2020, category: 'Journal Article', derived: true,
    title: 'Evaluation of Nitrate Load Estimations Using Neural Networks and Canonical Correlation Analysis with K-Fold Cross-Validation',
    authors: 'Jung, K., Bae, D.H., Um, M.J., Kim, S., Jeon, S., and Park, D.',
    journal: 'Sustainability 12(1): 400',
    doi: '10.3390/su12010400',
  },
  {
    id: 1058, year: 2020, category: 'Journal Article', derived: true,
    title: 'An analysis of the sample size requirements for acceptable statistical power in water quality monitoring for improvement detection',
    authors: 'Wellen, C., Van Cappellen, P., Gospodyn, L., Thomas, J.L., and Mohamed, M.N.',
    journal: 'Ecological Indicators 118: 106684',
    doi: '10.1016/j.ecolind.2020.106684',
  },
  // ── 2019 ──
  {
    id: 1059, year: 2019, category: 'Journal Article', derived: true,
    title: 'A Method for Assessing and Predicting Water Quality Status for Improved Decision-Making and Management',
    authors: 'Mijares, V., Gitau, M., and Johnson, D.R.',
    journal: 'Water Resources Management 33: 509–522',
    doi: '10.1007/s11269-018-2113-3',
  },
  {
    id: 1060, year: 2019, category: 'Journal Article', derived: true,
    title: 'River Water-Quality Concentration and Flux Estimation Can be Improved by Accounting for Serial Correlation Through an Autoregressive Model',
    authors: 'Zhang, Q., and Hirsch, R.M.',
    journal: 'Water Resources Research 55(11): 9705–9723',
    doi: '10.1029/2019WR025338',
  },
  {
    id: 1061, year: 2019, category: 'Journal Article', derived: true,
    title: 'Reduced forms of nitrogen are a driver of non-nitrogen-fixing harmful cyanobacterial blooms and toxicity in Lake Erie',
    authors: 'Newell, S.E., Davis, T.W., Johengen, T.H., Gossiaux, D., Burtner, A., Palladino, D., and McCarthy, M.J.',
    journal: 'Harmful Algae 81: 86–93',
    doi: '10.1016/j.hal.2018.11.003',
  },
  {
    id: 1062, year: 2019, category: 'Journal Article', derived: true,
    title: 'Phosphorus and Nitrogen Transport in the Binational Great Lakes Basin Estimated Using SPARROW Watershed Models',
    authors: 'Robertson, D.M., Saad, D.A., Benoy, G.A., Vouk, I., Schwarz, G.E., and Laitta, M.T.',
    journal: 'Journal of American Water Resources Association 55(6): 1401–1424',
    doi: '10.1111/1752-1688.12792',
  },
  {
    id: 1063, year: 2019, category: 'Journal Article', derived: true,
    title: 'Nutrient loading and nonstationarity: The importance of differentiating the independent effects of tributary flow and nutrient concentration',
    authors: 'Stow, C.A., Liu, Q., and Anderson, E.J.',
    journal: 'WIREs Water 7(1): e1396',
    doi: '10.1002/wat2.1396',
  },
  {
    id: 1064, year: 2019, category: 'Journal Article', derived: true,
    title: 'Long-Term Changes in Precipitation and Temperature Have Already Impacted Nitrogen Loading',
    authors: 'Ballard, T.C., Sinha, E., and Michalak, A.M.',
    journal: 'Environmental Science & Technology 53(9): 5080–5090',
    doi: '10.1021/acs.est.8b06898',
  },
  {
    id: 1065, year: 2019, category: 'Journal Article', derived: true,
    title: 'Short-term impacts of Phragmites management on nutrient budgets and plant communities in Great Lakes coastal freshwater marshes',
    authors: 'Judd, K.E., and Francoeur, S.N.',
    journal: 'Wetlands Ecology and Management 27: 55–74',
    doi: '10.1007/s11273-018-9643-6',
  },
  {
    id: 1066, year: 2019, category: 'Journal Article', derived: true,
    title: 'Application of continuous turbidity sensors to supplement estimates of total phosphorus concentrations in the Grand River, Ontario, Canada',
    authors: 'Irvine, C.A., Backus, S., Cooke, S., Dove, A., and Gewurtz, S.B.',
    journal: 'Journal of Great Lakes Research 45(4): 840–849',
    doi: '10.1016/j.jglr.2019.05.007',
  },
  {
    id: 1067, year: 2019, category: 'Journal Article', derived: true,
    title: 'The implications of weather, nutrient prices, and other factors on nutrient concentrations in agricultural watersheds',
    authors: 'Kim, S.J., Sohngen, B., and Sam, A.G.',
    journal: 'Science of The Total Environment 650(1): 1083–1100',
    doi: '10.1016/j.scitotenv.2018.09.012',
  },
  {
    id: 1068, year: 2019, category: 'Journal Article', derived: true,
    title: 'Ammonium recycling supports toxic Planktothrix blooms in Sandusky Bay, Lake Erie: Evidence from stable isotope and metatranscriptome data',
    authors: 'Hampel, J.J., McCarthy, M.J., Neudeck, M., Bullerjahn, G.S., McKay, R.M.L., and Newell, S.E.',
    journal: 'Harmful Algae 81: 42–52',
    doi: '10.1016/j.hal.2018.11.011',
  },
  {
    id: 1069, year: 2019, category: 'Journal Article', derived: true,
    title: 'An R package for estimating river compound load using different methods',
    authors: 'Nava, V., Patelli, M., Rotiroti, M., and Leoni, B.',
    journal: 'Environmental Modelling & Software 117: 100–108',
    doi: '10.1016/j.envsoft.2019.03.012',
  },
  // ── 2018 ──
  {
    id: 1070, year: 2018, category: 'Journal Article', derived: true,
    title: 'A surrogate regression approach for computing continuous loads for the tributary nutrient and sediment monitoring program on the Great Lakes',
    authors: 'Robertson, D.M., Hubbard, L.E., Lorenz, D.L., and Sullivan, D.J.',
    journal: 'Journal of Great Lakes Research 44(1): 26–42',
    doi: '10.1016/j.jglr.2017.10.003',
  },
  {
    id: 1071, year: 2018, category: 'Journal Article', derived: true,
    title: 'Characterization of Temporal and Spatial Variability of Phosphorus Loading to Lake Erie from the Western Basin Using Wavelet Transform Methods',
    authors: 'Sharma, S., Nalley, D., and Subedi, N.',
    journal: 'Hydrology 5(3)',
    doi: '10.3390/hydrology5030050',
  },
  {
    id: 1072, year: 2018, category: 'Journal Article', derived: true,
    title: 'Quantifying the Role of Large Floods in Riverine Nutrient Loadings Using Linear Regression and Analysis of Covariance',
    authors: 'Verma, S., Bartosova, A., Markus, M., Cooke, R., Um, M.J., and Park, D.',
    journal: 'Sustainability 10(8): 2876',
    doi: '10.3390/su10082876',
  },
  {
    id: 1073, year: 2018, category: 'Journal Article', derived: true,
    title: 'High-turbidity events in Western Lake Erie during ice-free cycles: Contributions of river-loaded vs. resuspended sediments',
    authors: 'Niu, Q., Xia, M., Ludsin, S.A., Chu, P.Y., Mason, D.M., and Rutherford, E.S.',
    journal: 'Limnology and Oceanography 63(6): 2545–2562',
    doi: '10.1002/lno.10959',
  },
  {
    id: 1074, year: 2018, category: 'Journal Article', derived: true,
    title: 'Nitrogen cycling in Sandusky Bay, Lake Erie: oscillations between strong and weak export and implications for harmful algal blooms',
    authors: 'Salk, K.R., Bullerjahn, G.S., McKay, R.M.L., Chaffin, J.D., and Ostrom, N.E.',
    journal: 'Biogeosciences 15: 2891–2907',
    doi: '10.5194/bg-15-2891-2018',
  },
  {
    id: 1075, year: 2018, category: 'Journal Article', derived: true,
    title: 'On the practical usefulness of least squares for assessing uncertainty in hydrologic and water quality predictions',
    authors: 'Del Giudice, D., Logsdon Muenich, R., McCahon Kalcic, M., Bosch, N.S., Scavia, D., and Michalak, A.M.',
    journal: 'Environmental Modelling & Software 105: 286–295',
    doi: '10.1016/j.envsoft.2018.03.009',
  },
  {
    id: 1076, year: 2018, category: 'Journal Article', derived: true,
    title: 'Flow-covariate prediction of stream pesticide concentrations',
    authors: 'Mosquin, P.L., Aldworth, J., and Chen, W.',
    journal: 'Environmental Toxicology and Chemistry 37(1): 260–273',
    doi: '10.1002/etc.3946',
  },
  {
    id: 1077, year: 2018, category: 'Journal Article', derived: true,
    title: 'Discrete Organic Phosphorus Signatures are Evident in Pollutant Sources within a Lake Erie Tributary',
    authors: 'Brooker, M.R., Longnecker, K., Kujawinski, E.B., Evert, M.H., and Mouser, P.J.',
    journal: 'Environmental Science & Technology 52(12): 6771–6779',
    doi: '10.1021/acs.est.7b05703',
  },
  {
    id: 1078, year: 2018, category: 'Journal Article', derived: true,
    title: 'A Hybrid Lagrangian–Eulerian Particle Model for Ecosystem Simulation',
    authors: 'Xue, P., Schwab, D.J., Zhou, X., Huang, C., Kibler, R., and Ye, X.',
    journal: 'Journal of Marine Science and Engineering 6(4): 109',
    doi: '10.3390/jmse6040109',
  },
  {
    id: 1079, year: 2018, category: 'Journal Article', derived: true,
    title: 'The relative importance of anammox and denitrification to total N2 production in Lake Erie',
    authors: 'Lu, X., Bade, D.L., Leff, L.G., and Mou, X.',
    journal: 'Journal of Great Lakes Research 44(3): 428–435',
    doi: '10.1016/j.jglr.2018.03.008',
  },
  {
    id: 1080, year: 2018, category: 'Journal Article', derived: true,
    title: 'Sensitivity to climate change of land use and management patterns optimized for efficient mitigation of nutrient pollution',
    authors: 'Xu, H., Brown, D.G., and Steiner, A.L.',
    journal: 'Climatic Change 147: 647–662',
    doi: '10.1007/s10584-018-2159-5',
  },
  {
    id: 1081, year: 2018, category: 'Journal Article', derived: true,
    title: 'Evaluation of statistical methods for quantifying fractal scaling in water-quality time series with irregular sampling',
    authors: 'Zhang, Q., Harman, C.J., and Kirchner, J.W.',
    journal: 'Hydrology and Earth System Sciences 22: 1175–1192',
    doi: '10.5194/hess-22-1175-2018',
  },
  {
    id: 1082, year: 2018, category: 'Journal Article', derived: true,
    title: 'Optimizing Spatial Land Management to Balance Water Quality and Economic Returns in a Lake Erie Watershed',
    authors: 'Xu, H., Brown, D.G., Moore, M.R., and Currie, W.S.',
    journal: 'Ecological Economics 145: 104–114',
    doi: '10.1016/j.ecolecon.2017.08.015',
  },
  // ── 2017 ──
  {
    id: 1083, year: 2017, category: 'Journal Article', derived: true,
    title: 'Improving riverine constituent concentration and flux estimation by accounting for antecedent discharge conditions',
    authors: 'Zhang, Q., and Ball, W.P.',
    journal: 'Journal of Hydrology 547: 387–402',
    doi: '10.1016/j.jhydrol.2016.12.052',
  },
  {
    id: 1084, year: 2017, category: 'Journal Article', derived: true,
    title: 'Pay-for-Performance Conservation Using SWAT Highlights Need for Field-Level Agricultural Conservation',
    authors: 'Logsdon Muenich, R., Kalcic, M.M., Winsten, J., Fisher, K., Day, M., O\'Neil, G., Wang, Y.C., and Scavia, D.',
    journal: 'Transactions of the ASABE 60(6): 1925–1937',
    doi: '10.13031/trans.12379',
  },
  {
    id: 1085, year: 2017, category: 'Journal Article', derived: true,
    title: 'Spatiotemporal variability and environmental factors of harmful algal blooms (HABs) over western Lake Erie',
    authors: 'Tian, D., Xie, G., Tian, J., Tseng, K.H., Shum, C.K., Lee, J., and Liang, S.',
    journal: 'PLoS ONE 12(6): e0179622',
    doi: '10.1371/journal.pone.0179622',
  },
  {
    id: 1086, year: 2017, category: 'Journal Article', derived: true,
    title: 'Abiotic and biotic controls of phytoplankton biomass dynamics in a freshwater tributary, estuary, and large lake ecosystem: Sandusky Bay (Lake Erie) chemostat',
    authors: 'Conroy, J.D., Kane, D.D., Quinlan, E.L., and Edwards, W.J.',
    journal: 'Inland Waters 7(4): 473–492',
    doi: '10.1080/20442041.2017.1395142',
  },
  {
    id: 1087, year: 2017, category: 'Journal Article', derived: true,
    title: 'Tracking cyanobacteria blooms: Do different monitoring approaches tell the same story?',
    authors: 'Bertani, I., Steger, C.E., Obenour, D.R., Fahnenstiel, G.L., Bridgeman, T.B., Johengen, T.H., Sayers, M.J., Shuchman, R.A., and Scavia, D.',
    journal: 'Science of the Total Environment 575: 294–308',
    doi: '10.1016/j.scitotenv.2016.10.023',
  },
  {
    id: 1088, year: 2017, category: 'Journal Article', derived: true,
    title: 'Phytoplankton blooms in Lake Erie impacted by both long-term and springtime phosphorus loading',
    authors: 'Ho, J.C., and Michalak, A.M.',
    journal: 'Journal of Great Lakes Research 43(3): 221–228',
    doi: '10.1016/j.jglr.2017.04.001',
  },
  {
    id: 1089, year: 2017, category: 'Journal Article', derived: true,
    title: 'Soil and Water Assessment Tool model predictions of annual maximum pesticide concentrations in high vulnerability watersheds',
    authors: 'Winchell, M.F., Peranginangin, N., Srinivasan, R., and Chen, W.',
    journal: 'Integrated Environmental Assessment and Management 14(3): 358–368',
    doi: '10.1002/ieam.2014',
  },
  // ── 2016 ──
  {
    id: 1090, year: 2016, category: 'Journal Article', derived: true,
    title: 'Identifying the Correlation between Water Quality Data and LOADEST Model Behavior in Annual Sediment Load Estimations',
    authors: 'Park, Y.S., and Engel, B.A.',
    journal: 'Water 8(9): 368',
    doi: '10.3390/w8090368',
  },
  {
    id: 1091, year: 2016, category: 'Journal Article', derived: true,
    title: 'A comparison of water sampling and analytical methods in western Lake Erie',
    authors: 'Golnick, P.C., Chaffin, J.D., Bridgeman, T.B., Zellner, B.C., and Simons, V.E.',
    journal: 'Journal of Great Lakes Research 42(5): 965–971',
    doi: '10.1016/j.jglr.2016.07.031',
  },
  {
    id: 1092, year: 2016, category: 'Journal Article', derived: true,
    title: 'Total and soluble reactive phosphorus loadings to Lake Erie: A detailed accounting by year, basin, country, and tributary',
    authors: 'Maccoux, M.J., Dove, A., Backus, S.M., and Dolan, D.M.',
    journal: 'Journal of Great Lakes Research 42(6): 1151–1165',
    doi: '10.1016/j.jglr.2016.08.005',
  },
  {
    id: 1093, year: 2016, category: 'Journal Article', derived: true,
    title: 'Precipitation Dominates Interannual Variability of Riverine Nitrogen Loading across the Continental United States',
    authors: 'Sinha, E., and Michalak, A.M.',
    journal: 'Environmental Science & Technology 50(23): 12874–12884',
    doi: '10.1021/acs.est.6b04455',
  },
  {
    id: 1094, year: 2016, category: 'Journal Article', derived: true,
    title: 'Evaluating the Impact of Legacy P and Agricultural Conservation Practices on Nutrient Loads from the Maumee River Watershed',
    authors: 'Logsdon Muenich, R., Kalcic, M., and Scavia, D.',
    journal: 'Environmental Science & Technology 50(15): 8146–8154',
    doi: '10.1021/acs.est.6b01421',
  },
  {
    id: 1095, year: 2016, category: 'Journal Article', derived: true,
    title: 'Fertilizer placement and application timing as strategies to reduce phosphorus loading to Lake Erie',
    authors: 'Gildow, M., Aloysius, N., Gebremariam, S., and Martin, J.',
    journal: 'Journal of Great Lakes Research 42(6): 1281–1288',
    doi: '10.1016/j.jglr.2016.07.002',
  },
  {
    id: 1096, year: 2016, category: 'Journal Article', derived: true,
    title: 'Engaging Stakeholders To Define Feasible and Desirable Agricultural Conservation in Western Lake Erie Watersheds',
    authors: 'Kalcic, M.M., Kirchhoff, C., Bosch, N., Logsdon Muenich, R., Murray, M., Griffith Gardner, J., and Scavia, D.',
    journal: 'Environmental Science & Technology 50(15): 8135–8145',
    doi: '10.1021/acs.est.6b01420',
  },
  {
    id: 1097, year: 2016, category: 'Journal Article', derived: true,
    title: 'Probabilistically assessing the role of nutrient loading in harmful algal bloom formation in western Lake Erie',
    authors: 'Bertani, I., Obenour, D.R., Steger, C.E., Stow, C.A., Gronewold, A.D., and Scavia, D.',
    journal: 'Journal of Great Lakes Research 42(6): 1184–1192',
    doi: '10.1016/j.jglr.2016.04.002',
  },
  {
    id: 1098, year: 2016, category: 'Journal Article', derived: true,
    title: 'Anticipated impacts of climate change on 21st century Maumee River discharge and nutrient loads',
    authors: 'Culbertson, A.M., Martin, J.F., Aloysius, N., and Ludsin, S.A.',
    journal: 'Journal of Great Lakes Research 42(6): 1332–1342',
    doi: '10.1016/j.jglr.2016.08.008',
  },
  {
    id: 1099, year: 2016, category: 'Journal Article', derived: true,
    title: 'High-resolution modeling for development of nearshore ecosystem objectives in eastern Lake Erie',
    authors: 'Valipour, R., León, L.F., Depew, D., Dove, A., and Rao, Y.R.',
    journal: 'Journal of Great Lakes Research 42(6): 1241–1251',
    doi: '10.1016/j.jglr.2016.08.011',
  },
  {
    id: 1100, year: 2016, category: 'Journal Article', derived: true,
    title: 'PBPK-Based Probabilistic Risk Assessment for Total Chlorotriazines in Drinking Water',
    authors: 'Breckenridge, C.B., Campbell, J.L., Clewell, H.J., Andersen, M.E., Valdez-Flores, C., and Sielken, R.L.',
    journal: 'Toxicological Sciences 150(2): 269–282',
    doi: '10.1093/toxsci/kfw013',
  },
  {
    id: 1101, year: 2016, category: 'Journal Article', derived: true,
    title: 'Ice cover extent drives phytoplankton and bacterial community structure in a large north-temperate lake: implications for a warming climate',
    authors: 'Beall, B.F.N., Twiss, M.R., Smith, D.E., Oyserman, B.O., Rozmarynowycz, M.J., Binding, C.E., Bourbonniere, R.A., Bullerjahn, G.S., Palmer, M.E., Reavie, E.D., Waters, L.C.K., Woityra, L.C., and McKay, R.M.L.',
    journal: 'Environmental Microbiology 18(6): 1704–1719',
    doi: '10.1111/1462-2920.12819',
  },
  {
    id: 1102, year: 2016, category: 'Journal Article', derived: true,
    title: 'An evaluation of methods for estimating decadal stream loads',
    authors: 'Lee, C.J., Hirsch, R.M., Schwarz, G.E., Holtschlag, D.J., Preston, S.D., Crawford, C.G., and Vecchia, A.V.',
    journal: 'Journal of Hydrology 542: 185–203',
    doi: '10.1016/j.jhydrol.2016.08.059',
  },
  {
    id: 1103, year: 2016, category: 'Journal Article', derived: true,
    title: 'Thinking outside of the lake: Can controls on nutrient inputs into Lake Erie benefit stream conservation in its watershed?',
    authors: 'Keitzer, S.C., Ludsin, S.A., Sowa, S.P., Annis, G., Arnold, J.G., Daggupati, P., Froehlich, A.M., Herbert, M.E., Johnson, M.V.V., Sasson, A.M., Yen, H., White, M.J., and Rewa, C.A.',
    journal: 'Journal of Great Lakes Research 42(6): 1322–1331',
    doi: '10.1016/j.jglr.2016.05.012',
  },
  // ── 2015 ──
  {
    id: 1104, year: 2015, category: 'Journal Article', derived: true,
    title: 'Characterization and evaluation of phosphate microsensors to monitor internal phosphorus loading in Lake Erie sediments',
    authors: 'Ding, X., Behbahani, M., Gruden, C., and Seo, Y.',
    journal: 'Journal of Environmental Management 160: 193–200',
    doi: '10.1016/j.jenvman.2015.06.010',
  },
  {
    id: 1105, year: 2015, category: 'Journal Article', derived: true,
    title: 'A bootstrap method for estimating uncertainty of water quality trends',
    authors: 'Hirsch, R.M., Archfield, S.A., and De Cicco, L.A.',
    journal: 'Environmental Modelling & Software 73: 148–166',
    doi: '10.1016/j.envsoft.2015.07.017',
  },
  {
    id: 1106, year: 2015, category: 'Journal Article', derived: true,
    title: 'Effects of Increasing Nitrogen and Phosphorus Concentrations on Phytoplankton Community Growth and Toxicity During Planktothrix Blooms in Sandusky Bay, Lake Erie',
    authors: 'Davis, T.W., Bullerjahn, G.S., Tuttle, T., McKay, R.M., and Watson, S.B.',
    journal: 'Environmental Science & Technology 49(12): 7197–7207',
    doi: '10.1021/acs.est.5b00799',
  },
  {
    id: 1107, year: 2015, category: 'Journal Article', derived: true,
    title: 'Nutrient prices and concentrations in Midwestern agricultural watersheds',
    authors: 'Sohngen, B., King, K.W., Howard, G., Newton, J., and Forster, D.L.',
    journal: 'Ecological Economics 112: 141–149',
    doi: '10.1016/j.ecolecon.2015.02.008',
  },
  {
    id: 1108, year: 2015, category: 'Journal Article', derived: true,
    title: 'The importance of considering shifts in seasonal changes in discharges when predicting future phosphorus loads in streams',
    authors: 'LaBeau, M., Mayer, A., Griffis, V., Watkins, D., Robertson, D., and Gyawali, R.',
    journal: 'Biogeochemistry 126: 153–172',
    doi: '10.1007/s10533-015-0149-5',
  },
  {
    id: 1109, year: 2015, category: 'Journal Article', derived: true,
    title: 'Biophysical modeling assessment of the drivers for plankton dynamics in dreissenid-colonized western Lake Erie',
    authors: 'Jiang, L., Xia, M., Ludsin, S.A., Rutherford, E.S., Mason, D.M., Marin Jarrin, J., and Pangle, K.L.',
    journal: 'Ecological Modelling 308: 18–33',
    doi: '10.1016/j.ecolmodel.2015.04.004',
  },
  // ── 2014 ──
  {
    id: 1110, year: 2014, category: 'Journal Article', derived: true,
    title: 'Summer phytoplankton nutrient limitation in Maumee Bay of Lake Erie during high-flow and low-flow years',
    authors: 'Chaffin, J.D., Bridgeman, T.B., Bade, D.L., and Mobilian, C.N.',
    journal: 'Journal of Great Lakes Research 40(3): 524–531',
    doi: '10.1016/j.jglr.2014.04.009',
  },
  {
    id: 1111, year: 2014, category: 'Journal Article', derived: true,
    title: 'Using a Bayesian hierarchical model to improve Lake Erie cyanobacteria bloom forecasts',
    authors: 'Obenour, D.R., Gronewold, A.D., Stow, C.A., and Scavia, D.',
    journal: 'Water Resources Research 50(10): 7847–7860',
    doi: '10.1002/2014WR015616',
  },
  {
    id: 1112, year: 2014, category: 'Journal Article', derived: true,
    title: 'Systemic, early-season Microcystis blooms in western Lake Erie and two of its major agricultural tributaries (Maumee and Sandusky rivers)',
    authors: 'Conroy, J.D., Kane, D.D., Briland, R.D., and Culver, D.A.',
    journal: 'Journal of Great Lakes Research 40(3): 518–523',
    doi: '10.1016/j.jglr.2014.04.015',
  },
  {
    id: 1113, year: 2014, category: 'Journal Article', derived: true,
    title: 'Interacting effects of climate change and agricultural BMPs on nutrient runoff entering Lake Erie',
    authors: 'Bosch, N.S., Evans, M.A., Scavia, D., and Allan, J.D.',
    journal: 'Journal of Great Lakes Research 40(3): 581–589',
    doi: '10.1016/j.jglr.2014.04.011',
  },
  {
    id: 1114, year: 2014, category: 'Journal Article', derived: true,
    title: 'Use of Pollutant Load Regression Models with Various Sampling Frequencies for Annual Load Estimation',
    authors: 'Park, Y.S., and Engel, B.A.',
    journal: 'Water 6(6): 1685–1697',
    doi: '10.3390/w6061685',
  },
  {
    id: 1115, year: 2014, category: 'Journal Article', derived: true,
    title: 'Organic and inorganic nitrogen utilization by nitrogen-stressed cyanobacteria during bloom conditions',
    authors: 'Chaffin, J.D., and Bridgeman, T.B.',
    journal: 'Journal of Applied Phycology 26: 299–309',
    doi: '10.1007/s10811-013-0118-0',
  },
  {
    id: 1116, year: 2014, category: 'Journal Article', derived: true,
    title: 'Status, causes and controls of cyanobacterial blooms in Lake Erie',
    authors: 'Steffen, M.M., Belisle, B.S., Watson, S.B., Boyer, G.L., and Wilhelm, S.W.',
    journal: 'Journal of Great Lakes Research 40(2): 215–225',
    doi: '10.1016/j.jglr.2013.12.012',
  },
  {
    id: 1117, year: 2014, category: 'Journal Article', derived: true,
    title: 'Quantification of uncertainty in estimated nitrate-N loads in agricultural watersheds',
    authors: 'Jiang, Y., Frankenberger, J.R., Bowling, L.C., and Sun, Z.',
    journal: 'Journal of Hydrology 519(A): 106–116',
    doi: '10.1016/j.jhydrol.2014.06.027',
  },
  {
    id: 1118, year: 2014, category: 'Journal Article', derived: true,
    title: 'Spatiotemporal characteristics of nitrogen and phosphorus in the benthos of nearshore Lake Erie',
    authors: 'Pennuto, C.M., Burlakova, L.E., Karatayev, A.Y., Kramer, J., Fischer, A., and Mayer, C.',
    journal: 'Journal of Great Lakes Research 40(3): 541–549',
    doi: '10.1016/j.jglr.2014.02.013',
  },
  // ── 2013 ──
  {
    id: 1119, year: 2013, category: 'Journal Article', derived: true,
    title: 'Controls of phosphorus loading and transport in the Cuyahoga River of northeastern Ohio, USA',
    authors: 'Yuan, F., Quellos, J.A., and Fan, C.',
    journal: 'Applied Geochemistry 38: 59–69',
    doi: '10.1016/j.apgeochem.2013.08.011',
  },
  {
    id: 1120, year: 2013, category: 'Journal Article', derived: true,
    title: 'Nitrogen Constrains the Growth of Late Summer Cyanobacterial Blooms in Lake Erie',
    authors: 'Chaffin, J.D., Bridgeman, T.B., and Bade, D.L.',
    journal: 'Advances in Microbiology 3(6A): 16–26',
    doi: '10.4236/aim.2013.36A003',
  },
  {
    id: 1121, year: 2013, category: 'Journal Article', derived: true,
    title: 'Watershed Regressions for Pesticides (WARP) Models for Predicting Stream Concentrations of Multiple Pesticides',
    authors: 'Stone, W.W., Crawford, C.G., and Gilliom, R.J.',
    journal: 'Journal of Environmental Quality 42(6): 1838–1851',
    doi: '10.2134/jeq2013.05.0179',
  },
  {
    id: 1122, year: 2013, category: 'Journal Article', derived: true,
    title: 'Understanding seasonal phosphorus dynamics to guide effective management of shallow, hypereutrophic Grand Lake St. Marys, Ohio',
    authors: 'Filbrun, J.E., Conroy, J.D., and Culver, D.A.',
    journal: 'Lake and Reservoir Management 29(3): 165–178',
    doi: '10.1080/10402381.2013.823469',
  },
  {
    id: 1123, year: 2013, category: 'Journal Article', derived: true,
    title: 'Scenario-testing of agricultural best management practices in Lake Erie watersheds',
    authors: 'Bosch, N.S., Allan, J.D., Selegean, J.P., and Scavia, D.',
    journal: 'Journal of Great Lakes Research 39(3): 429–436',
    doi: '10.1016/j.jglr.2013.06.004',
  },
  // ── 2012 ──
  {
    id: 1124, year: 2012, category: 'Journal Article', derived: true,
    title: 'Evaluating Causes of Trends in Long-Term Dissolved Reactive Phosphorus Loads to Lake Erie',
    authors: 'Daloğlu, I., Cho, K.H., and Scavia, D.',
    journal: 'Environmental Science & Technology 46(19): 10660–10666',
    doi: '10.1021/es302315d',
  },
  {
    id: 1125, year: 2012, category: 'Journal Article', derived: true,
    title: 'Historical pattern of phosphorus loading to Lake Erie watersheds',
    authors: 'Han, H., Allan, J.D., and Bosch, N.S.',
    journal: 'Journal of Great Lakes Research 38(2): 289–298',
    doi: '10.1016/j.jglr.2012.03.004',
  },
  {
    id: 1126, year: 2012, category: 'Journal Article', derived: true,
    title: 'Great Lakes total phosphorus revisited: 1. Loading analysis and update (1994–2008)',
    authors: 'Dolan, D.M., and Chapra, S.C.',
    journal: 'Journal of Great Lakes Research 38: 730–740',
    doi: '10.1016/j.jglr.2012.10.001',
  },
  // ── 2011 ──
  {
    id: 1127, year: 2011, category: 'Journal Article', derived: true,
    title: 'Assessment of Microcystis growth rate potential and nutrient status across a trophic gradient in western Lake Erie',
    authors: 'Chaffin, J.D., Bridgeman, T.B., Heckathorn, S.A., and Mishra, S.',
    journal: 'Journal of Great Lakes Research 37(1): 92–100',
    doi: '10.1016/j.jglr.2010.11.016',
  },
  {
    id: 1128, year: 2011, category: 'Journal Article', derived: true,
    title: 'Spatial and temporal variation in phosphorus budgets for 24 watersheds in the Lake Erie and Lake Michigan basins',
    authors: 'Han, H., Bosch, N., and Allan, J.D.',
    journal: 'Biogeochemistry 102: 45–58',
    doi: '10.1007/s10533-010-9420-y',
  },
  {
    id: 1129, year: 2011, category: 'Journal Article', derived: true,
    title: 'Application of a 3D hydrodynamic–biological model for seasonal and spatial dynamics of water quality and phytoplankton in Lake Erie',
    authors: 'Leon, L.F., Smith, R.E.H., Hipsey, M.R., Bocaniov, S.A., Higgins, S.N., Hecky, R.E., Antenucci, J.P., Imberger, J.A., and Guildford, S.J.',
    journal: 'Journal of Great Lakes Research 37(1): 41–53',
    doi: '10.1016/j.jglr.2010.12.007',
  },
  // ── 2008 ──
  {
    id: 1130, year: 2008, category: 'Journal Article', derived: true,
    title: 'The influence of impoundments on nutrient budgets in two catchments of Southeastern Michigan',
    authors: 'Bosch, N.S., and Allan, J.D.',
    journal: 'Biogeochemistry 87: 325–338',
    doi: '10.1007/s10533-008-9187-6',
  },
  // ── 2007 ──
  {
    id: 1131, year: 2007, category: 'Journal Article', derived: true,
    title: 'Riverine fluxes of pollutants: Towards predictions of uncertainties by flux duration indicators',
    authors: 'Moatar, F., and Meybeck, M.',
    journal: 'Comptes Rendus Geoscience 339(6): 367–382',
    doi: '10.1016/j.crte.2007.05.001',
  },
];

const allPublications = [...publications, ...derivedWorks];

const years = ['All', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998', '1997', '1996', '1995', '1994', '1993', '1992', '1991', '1990', '1989', '1988', '1987', '1986', '1985', '1984', '1983', '1982', '1981', '1980', '1975', '1973', '1971'];
const categories = ['All', 'Journal Article', 'Report', 'Conference Paper', 'Book Chapter', 'Technical Report', 'Final Report'];

export function Publications() {
  const [search, setSearch] = useState('');
  const [yearFilter, setYearFilter] = useState('All');
  const [catFilter, setCatFilter] = useState('All');

  const filtered = useMemo(() => {
    return allPublications.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.authors.toLowerCase().includes(search.toLowerCase());
      const matchYear = yearFilter === 'All' || String(p.year) === yearFilter;
      const matchCat = catFilter === 'All' || p.category === catFilter;
      const matchDerived = showDerived || !p.derived;
      return matchSearch && matchYear && matchCat && matchDerived;
    });
  }, [search, yearFilter, catFilter]);

  return (
    <div>
      <PageHero
        title="Publications"
        subtitle="Peer-reviewed research, technical reports, and conference contributions from NCWQR scientists."
        imageUrl="images/nature/2014-bridge.jpg"
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
              <button
                onClick={() => setShowDerived(!showDerived)}
                className="px-3 py-2 rounded-lg border text-sm font-medium transition-all whitespace-nowrap"
                style={{
                  borderColor: showDerived ? BLUE : '#e5e7eb',
                  backgroundColor: showDerived ? '#EBF3FB' : '#f9fafb',
                  color: showDerived ? BLUE : '#374151',
                }}
              >
                {showDerived ? 'Showing Derived Works' : 'Hiding Derived Works'}
              </button>

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
            Showing <strong>{filtered.length}</strong> of {allPublications.length} publications
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
                    {pub.derived && (
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-semibold"
                        style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}
                      >
                        Derived Work
                      </span>
                    )}
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
