import { TrekkingPrice, JeepPackage, TestimonialData, GalleryImage } from './types';

/* =====================
   WHATSAPP CONFIG
===================== */
export const WHATSAPP_NUMBER = '6287748142914'; // ganti dengan WA asli
export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello, I want to book Mount Batur Sunrise Trekking & Jeep Tour'
);

/* =====================
   HERO IMAGES
===================== */
export const HERO_IMAGES = [
  './hero1.jpeg',
  './hero2.jpeg',
  './hero3.jpeg',
];

/* =====================
   TREKKING IMAGES
===================== */
export const TREKKING_IMAGES = [
  './trekking1.jpeg',
  './trekking2.jpeg',
  './trekking3.jpeg',
  './trekking4.jpeg',
  './trekking5.jpeg',
  './trekking6.jpeg',
  './trekking7.jpeg',
  './trekking8.jpeg',
  './trekking9.jpeg',
  './trekking10.jpeg',
];

export const HOT_SPRING_IMAGES = [
  './hostpring1.jpeg',
  './hostpring2.jpeg',
  './hostpring3.jpeg',
  './hostpring4.jpeg',
  './hostpring5.jpeg',
];

/* =====================
   TREKKING PRICES
===================== */
export const TREKKING_PRICES: TrekkingPrice[] = [
  { pax: '1 Person', price: 'IDR 1.100.000' },
  { pax: '2 People', price: 'IDR 550.000 / pax' },
  { pax: '3 People', price: 'IDR 500.000 / pax' },
  { pax: '4 People', price: 'IDR 400.000 / pax' },
  { pax: '5–6 People', price: 'IDR 350.000 / pax' },
];

/* =====================
   TREKKING DETAILS
===================== */
export const TREKKING_INCLUDED = [
  'Pick up at hotel & return',
  'Trekking ticket & area entrance',
  'Climbing safety insurance',
  'Professional local guide',
  'Mineral water',
  'Trekking equipment (poles & headlamp)',
  'Breakfast at the top of Mount Batur',
  'Photo assistance & porter support from guide',
];

export const TREKKING_EXCLUDED = [
  'Personal expenses',
  'Tips for driver or guide',
];

export const TREKKING_NOTE =
  'Additional tea or coffee will be charged IDR 15.000 / pax';

/* =====================
   JEEP PACKAGES
===================== */
export const JEEP_PACKAGES: JeepPackage[] = [
  {
    id: 'A',
    title: 'Sunrise Only',
    price: 'IDR 450.000 / Jeep',
    images: [
      './sunrise-online1.jpeg',
      './sunrise-online2.jpeg',
      './sunrise-online3.jpeg',
      './sunrise-online4.jpeg',
      './sunrise-online5.jpeg',
      './sunrise-online6.jpeg',
      './sunrise-online7.jpeg',
      './sunrise-online8.jpeg',
      './sunrise-online9.jpeg',
      './sunrise-online10.jpeg',
      './sunrise-online11.jpeg',
      './sunrise-online12.jpeg',
      './sunrise-online13.jpeg',
      './sunrise-online14.jpeg',
      './sunrise-online15.jpeg',
      './sunrise-online16.jpeg',
      './sunrise-online17.jpeg',
    ],
    description:
      'This Sunrise Only Jeep Tour is the perfect choice for travelers who want to enjoy the beauty of Mount Batur without trekking. You will be taken by a private 4x4 jeep to the best sunrise viewpoint, where you can witness the magical sunrise over Mount Batur, Lake Batur, and the surrounding mountains. Accompanied by an experienced local driver, this tour offers a comfortable, safe, and relaxed way to experience one of Bali’s most iconic sunrises.',
  },
  {
    id: 'B',
    title: 'Sunrise + Black Lava',
    price: 'IDR 500.000 / Jeep',
    images: [
      './black-lava1.jpeg',
      './black-lava2.jpeg',
      './black-lava3.jpeg',
      './black-lava4.jpeg',
      './black-lava5.jpeg',
      './black-lava6.jpeg',
      './black-lava7.jpeg',
      './black-lava8.jpeg',
      './black-lava9.jpeg',
      './black-lava11.jpeg',
      './black-lava12.jpeg',
      './black-lava13.jpeg',
      './black-lava14.jpeg',
      './black-lava15.jpeg',
      './black-lava16.jpeg',
      './black-lava17.jpeg',
      './black-lava18.jpeg',
      
    ],
    description:
      'The Sunrise + Black Lava Jeep Tour combines stunning sunrise views with an adventurous exploration of Mount Batur’s volcanic landscape. After enjoying the sunrise from a scenic viewpoint, the journey continues through the famous Black Lava fields, formed by past volcanic eruptions. This tour is ideal for those who want both natural beauty and a sense of adventure, all while traveling comfortably in a private jeep guided by a knowledgeable local driver.',
  },
  {
    id: 'C',
    title: 'Sunrise + Black Lava + Black Sand',
    price: 'IDR 550.000 / Jeep',
    images: [
      './black-sand1.jpeg',
      './black-sand2.jpeg',
      './black-sand3.jpeg',
      './black-sand4.jpeg',
      './black-lava13.jpeg',
      './black-lava14.jpeg',
      './black-lava15.jpeg',
      './black-lava16.jpeg',
      './black-lava17.jpeg',
      './black-lava18.jpeg',
       './sunrise-online13.jpeg',
      './sunrise-online14.jpeg',
      './sunrise-online15.jpeg',
      './sunrise-online16.jpeg',
      './sunrise-online17.jpeg',
    ],
    description:
      'This complete Jeep Tour package offers the ultimate Mount Batur experience in one unforgettable trip. You will start by witnessing the breathtaking sunrise at Mount Batur, followed by an exciting drive through the dramatic Black Lava area. The adventure continues to the unique Black Sand landscape, where you can enjoy beautiful views and photo opportunities. Perfect for adventure lovers and photographers, this tour provides a full volcanic experience with comfort, safety, and personal service.',
  },
];


/* =====================
   HOT SPRING
===================== */
export const HOT_SPRING_PRICE = 'IDR 150.000 / person';

export const HOT_SPRING_INCLUDED = [
  'Towel',
  'Locker',
  'Welcome drink',
];

/* =====================
   PICK UP ADDITIONAL FEE
===================== */
export const PICKUP_FEES = [
  { area: 'Ubud', price: 'IDR 500.000' },
  { area: 'Canggu', price: 'IDR 600.000' },
  { area: 'Seminyak', price: 'IDR 600.000' },
  { area: 'Nusa Dua', price: 'IDR 650.000' },
  { area: 'Amed', price: 'IDR 550.000' },
  { area: 'Uluwatu', price: 'IDR 700.000' },
  { area: 'Lovina', price: 'IDR 700.000' },
];

/* =====================
   GALLERY
===================== */
export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: './black-lava1.jpeg' },
  { id: 2, url: './black-lava2.jpeg' },
  { id: 3, url: './black-lava3.jpeg' },
  { id: 4, url: './black-lava4.jpeg' },
  { id: 5, url: './black-lava5.jpeg' },
  { id: 6, url: './black-lava6.jpeg' },
  { id: 7, url: './black-lava7.jpeg' },
  { id: 8, url: './black-lava8.jpeg' },
  { id: 9, url: './black-lava9.jpeg' },
  { id: 10, url: './black-lava10.jpeg' },
  { id: 11, url: './black-lava11.jpeg' },
  { id: 12, url: './black-lava12.jpeg' },
  { id: 13, url: './trekking1.jpeg' },
  { id: 14, url: './trekking2.jpeg' },
  { id: 15, url: './trekking3.jpeg' },
  { id: 16, url: './trekking4.jpeg' },
  { id: 17, url: './trekking5.jpeg' },
  { id: 18, url: './trekking6.jpeg' },
  { id: 19, url: './trekking7.jpeg' },
  { id: 20, url: './trekking8.jpeg' },
  { id: 21, url: './trekking9.jpeg' },
  { id: 22, url: './trekking10.jpeg' },
  { id: 23, url: './trekking11.jpeg' },
  { id: 24, url: './trekking12.jpeg' },
  { id: 25, url: './sunrise-online1.jpeg' },
  { id: 26, url: './sunrise-online2.jpeg' },
  { id: 27, url: './sunrise-online3.jpeg' },
  { id: 28, url: './sunrise-online4.jpeg' },
  { id: 29, url: './sunrise-online5.jpeg' },
  { id: 30, url: './sunrise-online6.jpeg' },
  { id: 31, url: './sunrise-online7.jpeg' },
  { id: 32, url: './sunrise-online8.jpeg' },
  { id: 33, url: './sunrise-online9.jpeg' },
  { id: 34, url: './sunrise-online10.jpeg' },
  { id: 35, url: './sunrise-online12.jpeg' },
  { id: 36, url: './black-sand1.jpeg' },
  { id: 37, url: './black-sand2.jpeg' },
  { id: 38, url: './black-sand3.jpeg' },
  { id: 39, url: './black-sand4.jpeg' },
  { id: 40, url: './black-sand5.jpeg' },
];

/* =====================
   TESTIMONIALS
===================== */
export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: 'Emma Williams',
    rating: 5,
    text: 'The best sunrise experience in Bali! Our guide was very helpful and took amazing photos.',
    image: 'https://picsum.photos/seed/emma/100/100',
  },
  {
    id: 2,
    name: 'Daniel Schmidt',
    rating: 5,
    text: 'Private trekking was perfect. Safe, professional, and the breakfast on top was delicious.',
    image: 'https://picsum.photos/seed/daniel/100/100',
  },
  {
    id: 3,
    name: 'Putra Adi',
    rating: 5,
    text: 'Jeep tour to Black Lava was incredible. Highly recommended if you want adventure without hiking.',
    image: 'https://picsum.photos/seed/putra/100/100',
  },
];
