export interface Product {
  id: string;
  name: string;
  category: 'tube-fittings' | 'hydraulic-fittings' | 'valves';
  categoryLabel: string;
  description: string;
  specifications: {
    moc: string[];
    size: string;
    pressure: string;
    endConnections: string[];
  };
  image: string;
  featured?: boolean;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  established: number;
  address: string;
  phones: string[];
  emails: string[];
  website: string;
  certification: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}
