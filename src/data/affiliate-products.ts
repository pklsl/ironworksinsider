export interface Product {
  slug: string;
  title: string;
  description: string;
  asin: string;
  imageUrl: string;
  price: string;
  rating: number;
  features: string[];
  category: string;
}

export const AMAZON_TAG = 'ironworksinsider-20';

export function getAffiliateUrl(asin: string, title?: string): string {
  if (title) {
    return `https://www.amazon.com/s?k=${encodeURIComponent(title)}&tag=${AMAZON_TAG}`;
  }
  return `https://www.amazon.com/dp/${asin}/?tag=${AMAZON_TAG}`;
}

export function getGoUrl(slug: string): string {
  return `/go/${slug}`;
}

export const products: Product[] = [
  {
    slug: 'lincoln-electic-viking-welding-helmet',
    title: 'Lincoln Electric Viking 3350 Welding Helmet',
    description: 'Auto-darkening welding helmet with 4C lens technology for superior clarity. 1/1/1/1 optical rating and 12.5 sq. in. viewing area.',
    asin: 'B07FX1VMML',
    imageUrl: 'https://m.media-amazon.com/images/I/71QVlwIZxYL._AC_SL250_.jpg',
    price: '$$$',
    rating: 4.8,
    features: ['4C lens technology', '1/1/1/1 optical rating', '12.5 sq. in. viewing area', 'Grinding mode'],
    category: 'Welding',
  },
  {
    slug: 'mechanix-wear-m-pact-gloves',
    title: 'Mechanix Wear M-Pact Gloves',
    description: 'Heavy-duty work gloves with impact-absorbing palm padding and thermoplastic rubber knuckle protection. Ideal for heavy equipment operation.',
    asin: 'B00HUW2O9Q',
    imageUrl: 'https://m.media-amazon.com/images/I/81hwVX3CeRL._AC_SL250_.jpg',
    price: '$$',
    rating: 4.6,
    features: ['Impact-absorbing palm', 'TPR knuckle protection', 'Breathable TrekDry', 'Machine washable'],
    category: 'Safety Gear',
  },
  {
    slug: 'torin-big-red-hydraulic-bottle-jack',
    title: 'Torin Big Red Hydraulic Bottle Jack',
    description: '20-ton capacity hydraulic bottle jack for lifting heavy machinery and equipment. Drop-forged base for maximum durability.',
    asin: 'B00CUOU98O',
    imageUrl: 'https://m.media-amazon.com/images/I/71+NXgq8A6L._AC_SL250_.jpg',
    price: '$$',
    rating: 4.5,
    features: ['20-ton capacity', 'Drop-forged base', 'Adjustable screw top', 'Heat-treated cylinder'],
    category: 'Lifting Equipment',
  },
  {
    slug: 'hobart-500559-handler-welder',
    title: 'Hobart Handler 210 MIG Welder',
    description: 'Industrial MIG/Flux-Cored welder with 210A output. Handles 24 ga to 3/8 in. steel in a single pass. Dual-groove drive roll.',
    asin: 'B004VTVW5S',
    imageUrl: 'https://m.media-amazon.com/images/I/41pbIWskrtL._AC_SL250_.jpg',
    price: '$$$$',
    rating: 4.7,
    features: ['210A output', 'MIG and Flux-Cored', '24 ga to 3/8 in. steel', '5-year warranty'],
    category: 'Welding',
  },
  {
    slug: 'gds-lifts-engine-hoist',
    title: 'GDS 2-Ton Foldable Engine Hoist',
    description: 'Folding engine crane with 2-ton capacity and 6-position boom. Folds flat for easy storage. Heavy-duty steel construction.',
    asin: 'B07GFLXG8W',
    imageUrl: 'https://m.media-amazon.com/images/I/51wam+syENL._AC_SL250_.jpg',
    price: '$$$',
    rating: 4.4,
    features: ['2-ton capacity', '6-position boom', 'Foldable design', '360° swivel casters'],
    category: 'Lifting Equipment',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
