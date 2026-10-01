export interface ProductVariant {
  id: string;
  name: string;
  hindiName: string;
  hex: string;
  secondaryHex: string;
  undertone: string;
  description: string;
  bestFor: string;
  tag?: string;
}

export interface BotanicalIngredient {
  id: string;
  name: string;
  botanicalName: string;
  role: string;
  description: string;
  traditionalBenefit: string;
  iconName: string; // Used to map to Lucide icons
  category: 'colour' | 'conditioning' | 'cleansing' | 'scalp';
}

export interface WhyRafaFeature {
  number: string;
  title: string;
  summary: string;
  detail: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  name: string;
  timing: string;
  description: string;
  guideline: string;
}

export interface FaqItem {
  id: string;
  category: 'product' | 'usage' | 'ingredients' | 'launch';
  question: string;
  answer: string;
}

export interface BrandInfo {
  name: string;
  brandName: string;
  founder: string;
  taglineHindi: string;
  positioningEnglish: string;
  category: string;
  flagship: string;
  netWeight: string;
  audience: string;
  company: string;
  corporateOffice: {
    addressLine1: string;
    city: string;
    postalCode: string;
    state: string;
    country: string;
  };
  disclaimer: string;
  transparencyDisclaimer: string;
  launchDate: string;
}
