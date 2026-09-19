export interface VehicleBuild {
  id: string;
  name: string;
  tier: 'S' | 'A' | 'B' | 'C';
  type: 'Supercar' | 'Muscle' | 'Offroad' | 'Drift' | 'Hypercar';
  topSpeed: number; // MPH
  acceleration: number; // 0-60 in seconds
  handling: number; // out of 100
  estimatedValue: string;
  description: string;
}

export interface CarPart {
  id: string;
  name: string;
  category: 'Engine' | 'Turbo' | 'Transmission' | 'Tires' | 'Chassis' | 'Exhaust';
  tier: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  speedBonus: number;
  handlingBonus: number;
  cost: string;
  source: string;
}

export interface CarCode {
  id: string;
  code: string;
  reward: string;
  status: 'ACTIVE' | 'EXPIRED';
  dateAdded: string;
}

export const VEHICLE_BUILDS_DATA: VehicleBuild[] = [
  {
    id: 'apex-predator-gtr',
    name: 'Apex Predator GTR',
    tier: 'S',
    type: 'Hypercar',
    topSpeed: 285,
    acceleration: 1.8,
    handling: 96,
    estimatedValue: '$12,500,000',
    description: 'Twin-turbo quad-rotor hypercar engineered for maximum drag strip dominance and track agility.'
  },
  {
    id: 'phantom-valkyrie',
    name: 'Phantom Valkyrie V12',
    tier: 'S',
    type: 'Supercar',
    topSpeed: 270,
    acceleration: 2.1,
    handling: 94,
    estimatedValue: '$9,800,000',
    description: 'Naturally aspirated V12 beast offering razor-sharp downforce through active carbon aerodynamics.'
  },
  {
    id: 'vulcan-hellcat',
    name: 'Vulcan Hellcat 6.2',
    tier: 'A',
    type: 'Muscle',
    topSpeed: 245,
    acceleration: 2.5,
    handling: 82,
    estimatedValue: '$4,200,000',
    description: 'Supercharged American muscle car built for pure straight-line torque and smoky drift lines.'
  },
  {
    id: 'drifter-silvia-s15',
    name: 'Neon Silvia Spec-R',
    tier: 'A',
    type: 'Drift',
    topSpeed: 215,
    acceleration: 3.1,
    handling: 98,
    estimatedValue: '$2,800,000',
    description: 'Lightweight JDM chassis tuned with extreme steering angle kits for mountain downhill touge.'
  },
  {
    id: 'dune-crusher-6x6',
    name: 'Dune Crusher 6x6',
    tier: 'B',
    type: 'Offroad',
    topSpeed: 180,
    acceleration: 4.2,
    handling: 86,
    estimatedValue: '$3,500,000',
    description: 'Heavy hydraulic suspension truck designed to traverse rocky quarry hills without rollover penalty.'
  },
  {
    id: 'monaco-speedster',
    name: 'Monaco Speedster Turbo',
    tier: 'A',
    type: 'Supercar',
    topSpeed: 255,
    acceleration: 2.4,
    handling: 91,
    estimatedValue: '$6,400,000',
    description: 'Euro aerodynamic speedster with dual-clutch transmission and carbon-ceramic brakes.'
  },
  {
    id: 'starter-cruiser-gt',
    name: 'Civic Cruiser GT',
    tier: 'C',
    type: 'Muscle',
    topSpeed: 165,
    acceleration: 5.4,
    handling: 75,
    estimatedValue: '$45,000',
    description: 'Reliable entry-level build for learning conveyor merge mechanics and part assembly.'
  }
];

export const CAR_PARTS_DATA: CarPart[] = [
  { id: 'quad-turbo-v16', name: 'Quad-Turbo V16 Block', category: 'Engine', tier: 'Mythic', speedBonus: 65, handlingBonus: -5, cost: '$8,000,000', source: 'Legendary Crate / Dealer Tier 5' },
  { id: 'titanium-twin-turbo', name: 'Titanium Twin-Turbo Kit', category: 'Turbo', tier: 'Legendary', speedBonus: 42, handlingBonus: 0, cost: '$3,200,000', source: 'Conveyor Fusion Tier 4' },
  { id: 'racing-sequential-7spd', name: 'Sequential 7-Speed Gearbox', category: 'Transmission', tier: 'Legendary', speedBonus: 28, handlingBonus: 12, cost: '$2,400,000', source: 'Dealer Special Order' },
  { id: 'carbon-monocoque-tub', name: 'Carbon Monocoque Chassis', category: 'Chassis', tier: 'Mythic', speedBonus: 20, handlingBonus: 35, cost: '$5,500,000', source: 'Master Crafting Table' },
  { id: 'soft-slick-racing-tires', name: 'Ultra-Soft Slicks', category: 'Tires', tier: 'Epic', speedBonus: 10, handlingBonus: 28, cost: '$850,000', source: 'Tire Depot' },
  { id: 'straight-pipe-titanium', name: 'Titanium Straight Exhaust', category: 'Exhaust', tier: 'Epic', speedBonus: 15, handlingBonus: 2, cost: '$600,000', source: 'Exhaust Shop' },
  { id: 'supercharged-v8-crate', name: 'Supercharged 6.2L V8', category: 'Engine', tier: 'Epic', speedBonus: 35, handlingBonus: -2, cost: '$1,800,000', source: 'Dealer Tier 3' },
  { id: 'ceramic-brake-rotors', name: 'Brembo Carbon Ceramic Kit', category: 'Chassis', tier: 'Epic', speedBonus: 0, handlingBonus: 24, cost: '$1,200,000', source: 'Brake Specialist' },
  { id: 'nitrous-stage-3', name: 'Nitrous Oxide Stage 3', category: 'Turbo', tier: 'Rare', speedBonus: 50, handlingBonus: -8, cost: '$750,000', source: 'Speed Shop' },
  { id: 'street-drift-suspension', name: 'Coilover Drift Suspension', category: 'Chassis', tier: 'Rare', speedBonus: 5, handlingBonus: 20, cost: '$450,000', source: 'Suspension Depot' },
  { id: 'stage-2-intake-manifold', name: 'Cold Air Carbon Intake', category: 'Engine', tier: 'Rare', speedBonus: 14, handlingBonus: 2, cost: '$320,000', source: 'Tuning Garage' },
  { id: 'forged-alloy-rims', name: 'Forged Monoblock Rims', category: 'Tires', tier: 'Rare', speedBonus: 8, handlingBonus: 10, cost: '$280,000', source: 'Wheel Depot' }
];

export const CAR_CODES_DATA: CarCode[] = [
  { id: 'code-conveyor', code: 'CONVEYOR', reward: 'Free Cash', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-grind', code: 'GRIND', reward: '50,000 Free Cash', status: 'ACTIVE', dateAdded: '' },
  { id: 'code-fixes', code: 'FIXES', reward: '50,000 Free Cash', status: 'ACTIVE', dateAdded: '' }
];
