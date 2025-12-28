
export enum View {
  DASHBOARD = 'dashboard',
  ADVISORY = 'advisory',
  MARKETPLACE = 'marketplace',
  TECHNOLOGY = 'technology',
  SCHEMES = 'schemes',
  COMMUNITY = 'community',
  WEATHER_REPORT = 'weather_report',
  CROP_MANAGER_DETAIL = 'crop_manager_detail'
}

export interface WeatherDay {
  date: string;
  temp: string;
  condition: string;
  tip: string;
}

export interface CropCycle {
  id: string;
  cropName: string;
  expenses: {
    seeds: number;
    fertilizer: number;
    labor: number;
    others: number;
  };
  sellingPrice: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Interface for marketplace items
export interface Fertilizer {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
}

// Interface for technology articles
export interface TechArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}
