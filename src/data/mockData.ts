import { ServiceTier, EnclaveArea, Testimonial, FaqItem } from '../types';

export const LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1WXxlK_EOmXdNynhTxEKCNmBeeKrHVzvSQxqNlYTflUQ1SeyVUu_j7f5ubM0H3CHS8kGLvfwPaDMb3to3ti2DOKLtdXxjbq_shnVcsivNsXZ07bEWOu_a7n65XqZrXYpA0aurPRtI1ULLOuzKQJD_4oRiMNAXBLclEYzoFE-r9I5qicNonzlsrmzR6ndy0YrkBoWKtwdoN-fF-yCFQvpp9V6_45QdYwXjffMu1dc7rI9DGllBz5YCGSHVi3mLeoZoQcnBQ-z3YRhg";

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'deep-refresh',
    title: 'Luxury Deep & Seasonal Refresh',
    badge: 'One-Time | Seasonal | Pre-Event',
    description: 'A white-glove, top-to-bottom detail clean designed to restore your home to showroom condition. Specialized care for luxury estates, fine finishes, and delicate architectural details.',
    basePriceText: 'From $390 / session',
    suitableFor: 'Spring reset, pre-gala hosting, seasonal transitions, new acquisitions',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Surface-specific protocols using pH-neutral formulas for marble, quartz, and hardwood',
      'Scratch-free microfiber hand-wiping for high-end appliances (Miele, Sub-Zero, Viking, Gaggenau)',
      'Deep detail cleaning of baseboards, light fixtures, crown molding, and high-touch zones',
      'Complete peace of mind backed by full liability insurance and trained technicians',
      'Interior window & architectural glass wiping with streak-free deionized water rinse',
      'Detailed extraction of fine dust from HVAC vents and recessed ceiling reveals'
    ]
  },
  {
    id: 'recurring-maintenance',
    title: 'Recurring Home Maintenance',
    badge: 'Weekly | Bi-Weekly | Every 3 Wks | Monthly',
    cadenceNote: 'Most Popular • Effortless Living',
    isPopular: true,
    description: 'Enjoy a consistently pristine home without lifting a finger. Non-toxic, eco-certified products safe for children, pets, and fine indoor surfaces.',
    coreCommitment: 'The exact same bonded, two-person crew assigned to your residence for total familiarity and absolute security.',
    basePriceText: 'From $208 / visit (with cadence savings)',
    suitableFor: 'Busy executives, estate owners, families seeking seamless recurring serenity',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated, background-checked cleaning team for every single visit',
      'Entryway & mudroom resets (trail dirt, salt & outdoor gear cleanup tailored for North Shore climate)',
      'Safe care for natural stone, hardwood, and custom architectural finishes',
      'Eco-friendly HEPA vacuuming capturing 99.97% of fine pollen and coastal dander',
      'Linen changes, master suite sanctuary styling, and subtle aromatherapeutic botanicals',
      'Bathroom descaling with zero harsh acids, protecting brushed nickel & matte black brassware'
    ]
  },
  {
    id: 'move-transition',
    title: 'Move-In / Move-Out Detail Clean',
    badge: 'Property Transitions & Staging',
    description: 'A comprehensive property transition clean that takes the stress out of moving. We ensure the home passes strict strata and buyer inspections with flying colors.',
    basePriceText: 'From $490 / handover',
    suitableFor: 'Real estate staging, tenancy transitions, luxury penthouse handovers',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    features: [
      '100% Deposit & Inspection Pass Guarantee: Free 48-hour callback if anything is missed',
      'Deep interior cleaning of all kitchen cabinets, drawers, ovens, and appliances',
      'Detailed wiping of window tracks, door frames, baseboards, and built-in millwork',
      'Seamless key pickup and drop-off coordination with realtors or building managers',
      'Tile grout revitalization and stone threshold restoration',
      'Garage sweep-out and exterior threshold salt residue removal'
    ]
  }
];

export const ENCLAVES: EnclaveArea[] = [
  {
    id: 'british-properties',
    name: 'British Properties',
    region: 'West Vancouver',
    postalCode: 'V7S / V7T',
    highlight: 'Steep incline terrain & expansive architectural compounds',
    avgSqFt: '5,200 sq ft',
    activeResidences: 114,
    crewDispatch: 'Dedicated BP Team Alpha & Beta',
    description: 'Home to some of Canada’s most ambitious cliffside architecture. Our teams are equipped with customized AWD transport and specialized equipment for multi-level glass and expansive stone terracing.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caulfeild',
    name: 'Caulfeild & Cypress Park',
    region: 'West Vancouver',
    postalCode: 'V7W',
    highlight: 'Coastal mist defense & floor-to-ceiling glass care',
    avgSqFt: '4,400 sq ft',
    activeResidences: 68,
    crewDispatch: 'Coastal Marine Care Crew',
    description: 'Coastal air deposits micro-saline film on ocean-facing glazing and outdoor fixtures. Our specialized maritime protocols protect custom finishes from salt degradation.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'edgemont-village',
    name: 'Edgemont Village',
    region: 'North Vancouver',
    postalCode: 'V7R',
    highlight: 'Active families, mountain bike mudrooms & mid-century moderns',
    avgSqFt: '3,600 sq ft',
    activeResidences: 72,
    crewDispatch: 'North Van Trail Unit',
    description: 'Surrounded by forested trails and canyon parks, Edgemont estates demand rigorous mudroom, paw-wash, and rain-gear maintenance alongside delicate cedar and oak care.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dundarave',
    name: 'Dundarave & Ambleside',
    region: 'West Vancouver',
    postalCode: 'V7V',
    highlight: 'Walkable seaside villas, townhomes & heritage estates',
    avgSqFt: '3,100 sq ft',
    activeResidences: 85,
    crewDispatch: 'Dundarave Waterfront Team',
    description: 'Charming seaside estates and modern boutique residences with high-end designer cabinetry, integrated wine displays, and white oak wide-plank flooring.',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lonsdale-waterfront',
    name: 'Lonsdale Waterfront',
    region: 'North Vancouver',
    postalCode: 'V7M / V7N',
    highlight: 'Luxury harbor penthouses & high-altitude glazing',
    avgSqFt: '2,400 sq ft',
    activeResidences: 53,
    crewDispatch: 'Lower Lonsdale High-Rise Unit',
    description: 'Spectacular downtown Vancouver skyline vistas require flawless architectural glass detailing, acoustic panelling care, and strict strata security concierge check-ins.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'deep-cove',
    name: 'Deep Cove & Seymour',
    region: 'North Vancouver',
    postalCode: 'V7G',
    highlight: 'Forest-fjord seclusion & waterfront boat dock compounds',
    avgSqFt: '3,900 sq ft',
    activeResidences: 41,
    crewDispatch: 'Deep Cove Marine Unit',
    description: 'Sheltered fjord living brings elevated humidity, fir needle track-in, and moss spore filtration needs. We keep mountain-edge estates breathable and allergen-free.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    client: 'Evelyn & Marcus S.',
    location: 'British Properties, West Vancouver',
    residenceType: 'Custom 6,800 sq ft Modernist Estate',
    rating: 5,
    verifiedYear: 'Client since 2022',
    quote: 'In British Properties, finding someone who genuinely understands how to treat honed limestone and imported Sub-Zero cabinetry was a nightmare. Bamoo has handled our home for three years flawlessly. Discrete, polite, and uncompromising.'
  },
  {
    id: '2',
    client: 'Dr. Julian Vance',
    location: 'Edgemont Village, North Vancouver',
    residenceType: '4,200 sq ft Contemporary Forest Home',
    rating: 5,
    verifiedYear: 'Client since 2023',
    quote: 'With two toddlers, a golden retriever, and trails right outside our Edgemont home, our mudroom was constantly overrun. Bamoo returns our house to a serene sanctuary every alternating Tuesday. Worth every single cent.'
  },
  {
    id: '3',
    client: 'Claire Montgomery',
    location: 'Caulfeild / West Vancouver',
    residenceType: '3,900 sq ft Waterfront Penthouse',
    rating: 5,
    verifiedYear: 'Client since 2024',
    quote: 'We booked their Move-In Detail Clean for our penthouse handover in Caulfeild. Even our demanding interior designer commented on how spotless the window mullions and millwork were. Outstanding execution.'
  },
  {
    id: '4',
    client: 'Henrik & Astrid Lindqvist',
    location: 'Chartwell, West Vancouver',
    residenceType: '7,500 sq ft Architectural Compound',
    rating: 5,
    verifiedYear: 'Client since 2021',
    quote: 'We appreciate the strict NDA and identical crew policy. Maya and David have been our team for two solid years. They know exactly how our Lutron system works and treat our contemporary art collection with museum-grade delicacy.'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'eco-products',
    category: 'products',
    question: 'What eco-certified products do you utilize?',
    answer: 'We formulate our services around pH-balanced, hospital-grade botanical cleansers that carry third-party Green Seal and EcoLogo certifications. They contain zero synthetic fragrances, zero corrosive VOCs, and are completely safe for children, pets, polished marble, and high-end lacquer.'
  },
  {
    id: 'key-security',
    category: 'security',
    question: 'How do you manage key lockboxes, alarm codes, and confidentiality?',
    answer: 'We utilize encrypted digital key lockers and double-authenticated alarm protocols. All employees undergo RCMP background vetting and sign comprehensive non-disclosure agreements (NDAs) to safeguard your privacy, family routines, and high-profile security requirements.'
  },
  {
    id: 'insurance-coverage',
    category: 'safety',
    question: 'Are you fully registered with WorkSafeBC and insured?',
    answer: 'Yes. Bamoo Cleaning holds an unblemished active clearance with WorkSafeBC and carries a $5,000,000 Commercial General Liability policy along with bonding. You bear zero liability while our professionals are on your estate.'
  },
  {
    id: 'consistent-crew',
    category: 'scheduling',
    question: 'Will I have the same cleaning technicians every visit?',
    answer: 'Absolutely. For recurring maintenance plans (weekly, bi-weekly, monthly), we pair your estate with a dedicated 2-person crew who learns your home’s exact specifications, floor sensitivities, and organizational tastes.'
  },
  {
    id: 'architectural-surfaces',
    category: 'products',
    question: 'How do you safeguard delicate surfaces like Calacatta marble and Sub-Zero refrigerators?',
    answer: 'We deploy surface-specific protocols: strictly chelating, pH-neutral non-abrasive detergents for natural stone (never lemon, vinegar, or harsh alkalines), optical microfiber cloths for stainless steel and matte brass, and static-free wool dusters for art lighting.'
  },
  {
    id: 'guarantee-seal',
    category: 'safety',
    question: 'What is your 100% Satisfaction & 48-Hour Reclean Guarantee?',
    answer: 'If any architectural detail or area fails to meet your immaculate standards, inform your Estate Director within 48 hours. We dispatch a priority supervisor or team to rectify it completely complimentary, no questions asked.'
  }
];
