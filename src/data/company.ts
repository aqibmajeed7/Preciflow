import { Industry, CompanyInfo, NavLink } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Preciflow Valves & Fittings',
  tagline: 'Precisely Fulfill Engineering Needs',
  established: 1995,
  address: 'H/7103, Raj Estate, G&H Wing, CHS, Ltd, Near Jari Mari Talav, Kashimira, Mira Road East, Thane – 401107, Maharashtra, India',
  phones: ['+91 7021193600', '+91 9819576660'],
  emails: ['info@preciflow.com', 'sales@preciflow.com'],
  website: 'www.preciflow.com',
  certification: 'ISO 9001:2015',
};

export const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Manufacturing', href: '/manufacturing' },
  { name: 'Industries', href: '/industries' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' },
  { name: 'Download', href: '/download' },
];

export const industries: Industry[] = [
  {
    id: 'oil-gas',
    name: 'Oil & Gas',
    description: 'High-pressure fittings and valves for upstream, midstream, and downstream operations.',
    icon: 'Flame',
  },
  {
    id: 'chemical',
    name: 'Chemical & Petrochemical',
    description: 'Corrosion-resistant components for chemical processing and petrochemical plants.',
    icon: 'FlaskConical',
  },
  {
    id: 'power',
    name: 'Power Generation',
    description: 'Reliable instrumentation fittings for thermal, nuclear, and renewable power plants.',
    icon: 'Zap',
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical',
    description: 'Hygienic grade fittings meeting stringent purity standards for pharma manufacturing.',
    icon: 'Pill',
  },
  {
    id: 'ship-building',
    name: 'Ship Building',
    description: 'Marine-grade fittings designed to withstand harsh sea environments and saltwater corrosion.',
    icon: 'Ship',
  },
  {
    id: 'defence',
    name: 'Military & Defence',
    description: 'Mission-critical components meeting defence-grade quality and reliability standards.',
    icon: 'Shield',
  },
  {
    id: 'pulp-paper',
    name: 'Pulp & Paper',
    description: 'Durable fittings for high-temperature and corrosive pulp processing environments.',
    icon: 'FileText',
  },
  {
    id: 'rolling-stock',
    name: 'Rolling Stock',
    description: 'Vibration-resistant fittings for railway rolling stock and transportation systems.',
    icon: 'Train',
  },
];

export const stats = [
  { value: 30, suffix: '+', label: 'Years of Excellence' },
  { value: 1000, suffix: '+', label: 'Components Manufactured' },
  { value: 500, suffix: '+', label: 'Satisfied Clients' },
  { value: 50, suffix: '+', label: 'Countries Served' },
];

export const equipmentList = [
  'Computerized Numerical Controlled (CNC) Machines',
  'Traub Lathes',
  'Capstan Lathes',
  'Milling Machines',
  'Lathes & Standard Conversion Machines',
  'Precision Grinding Machines',
  'Quality Testing Equipment',
  'Surface Finishing Equipment',
];

export const qualityTests = [
  {
    name: 'Tensile Strength Testing',
    description: 'Rigorous testing to ensure fittings withstand rated pressure under extreme conditions.',
    icon: 'Gauge',
  },
  {
    name: 'Corrosion Resistance',
    description: 'Salt spray and chemical exposure testing for long-term durability assurance.',
    icon: 'ShieldCheck',
  },
  {
    name: 'Non-Destructive Testing (NDT)',
    description: 'Advanced inspection techniques ensuring zero-defect components without material damage.',
    icon: 'ScanSearch',
  },
  {
    name: 'Dimensional Accuracy',
    description: 'Precision measurement with 5-micron accuracy to meet the tightest tolerances.',
    icon: 'Ruler',
  },
  {
    name: 'Pressure Testing',
    description: 'Hydrostatic and pneumatic testing at 1.5x rated pressure for leak-proof assurance.',
    icon: 'Activity',
  },
  {
    name: 'Material Certification',
    description: 'Full traceability with material test certificates (MTC) for every batch delivered.',
    icon: 'FileCheck',
  },
];
