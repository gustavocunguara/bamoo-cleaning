export type PageTab = 'home' | 'services' | 'service-areas' | 'why-bamoo' | 'reviews' | 'pricing-and-quote';

export interface ServiceTier {
  id: string;
  title: string;
  badge: string;
  cadenceNote?: string;
  description: string;
  isPopular?: boolean;
  basePriceText: string;
  features: string[];
  coreCommitment?: string;
  image: string;
  suitableFor: string;
}

export interface EnclaveArea {
  id: string;
  name: string;
  region: 'West Vancouver' | 'North Vancouver';
  postalCode: string;
  highlight: string;
  avgSqFt: string;
  activeResidences: number;
  crewDispatch: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  client: string;
  location: string;
  quote: string;
  rating: number;
  residenceType: string;
  verifiedYear: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'safety' | 'products' | 'scheduling' | 'security';
}

export interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export interface BookingSubmission {
  propertyName?: string;
  propertyType: string;
  sqftRange: string;
  cadence: string;
  postalSector: string;
  addons: string[];
  estimatedTotal: number;
  clientName: string;
  contact: string;
  neighborhood: string;
  preferredDate?: string;
  specialInstructions?: string;
}
