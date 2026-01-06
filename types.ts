export interface UFRSData {
  accuracy: number;
  balance: number;
  complexity: number;
  intensity: number;
  sweetness: number;
  aftertaste: number;
  mentholation: number;
  tartness: number;
  warmth: number;
  cleanliness: number;
}

export interface UFRSJustification {
  accuracy: string;
  balance: string;
  complexity: string;
  intensity: string;
  sweetness: string;
  aftertaste: string;
  mentholation: string;
  tartness: string;
  warmth: string;
  cleanliness: string;
}

export interface FlavorRating {
  overall_score: number;
  domain_breakdown: {
    flavor_fidelity: number;
    core_sensory_profile: number;
    secondary_modifiers: number;
    practicality: number;
  };
  ratings: UFRSData;
  justification: UFRSJustification;
}

export interface Flavor {
  id: string;
  name: string;
  model: string;
  category: string;
  summary: string;
  essence: string;
  tasting_notes: string[];
  experience: string;
  tags: string[];
  ufrs: FlavorRating;
}