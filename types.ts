
export interface TrekkingPrice {
  pax: string;
  price: string;
}

export interface JeepPackage {
  id: string;
  title: string;
  price: string;
  images: string[];
  description: string;
}

export interface TestimonialData {
  id: number;
  name: string;
  rating: number;
  text: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  // category: string;
}
