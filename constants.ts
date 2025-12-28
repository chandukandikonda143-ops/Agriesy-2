
import { Fertilizer, TechArticle } from './types';

export const FERTILIZERS: Fertilizer[] = [
  {
    id: '1',
    name: 'Urea Premium',
    type: 'Nitrogenous',
    price: 450,
    image: 'https://picsum.photos/seed/urea/400/400',
    description: 'High-quality nitrogen source for leafy growth and rapid development.'
  },
  {
    id: '2',
    name: 'DAP (18-46-0)',
    type: 'Phosphatic',
    price: 1350,
    image: 'https://picsum.photos/seed/dap/400/400',
    description: 'Essential for root development and early plant growth.'
  },
  {
    id: '3',
    name: 'Potash MOP',
    type: 'Potassic',
    price: 900,
    image: 'https://picsum.photos/seed/potash/400/400',
    description: 'Improves plant immunity and fruit quality.'
  },
  {
    id: '4',
    name: 'Organic Compost',
    type: 'Organic',
    price: 250,
    image: 'https://picsum.photos/seed/compost/400/400',
    description: 'Natural enrichment for soil health and long-term fertility.'
  }
];

export const TECH_ARTICLES: TechArticle[] = [
  {
    id: '1',
    title: 'Drone-based Precision Spraying',
    excerpt: 'How automated drones are reducing chemical usage by 40% while improving coverage.',
    image: 'https://picsum.photos/seed/drone/800/400',
    category: 'Automation'
  },
  {
    id: '2',
    title: 'IoT Soil Sensors Explained',
    excerpt: 'Real-time monitoring of NPK levels and moisture content from your smartphone.',
    image: 'https://picsum.photos/seed/sensor/800/400',
    category: 'IoT'
  },
  {
    id: '3',
    title: 'AI in Crop Disease Detection',
    excerpt: 'Using computer vision to identify pests before they destroy your entire harvest.',
    image: 'https://picsum.photos/seed/ai/800/400',
    category: 'AI'
  }
];
