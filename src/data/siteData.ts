export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  badge?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Stage Decor' | 'Entrances' | 'Seating & Catering' | 'Floral';
  src: string;
  fallbackSrc: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  date: string;
}

export interface ContactPerson {
  name: string;
  phone: string;
  role?: string;
}

export const SITE_CONFIG = {
  name: "Royal Suppliers",
  tagline: "High Look Decoration Done",
  est: 2007,
  location: "Jamia Masjid Street, Neelispfield, Vaniyambadi - 635751, Tirupattur District, Tamil Nadu",
  mapsUrl: "https://maps.app.goo.gl/DaNPUsZBVHN2nR9u6",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.4702992668676!2d78.61221447507151!3d12.682697787606754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bada9a6fc5d665d%3A0x383bd0b84320fd32!2sRoyal%20Suppliers%20%26%20Decoration!5e0!3m2!1sen!2sin!4v1776176764240!5m2!1sen!2sin",
  instagramUrl: "https://www.instagram.com/royal_suppliers_decoration/",
  primaryWhatsApp: "919487320653",
  primaryPhone: "+919487320653",
  timings: "9:00 AM - 9:00 PM (All 7 Days)",
};

export const CONTACT_PERSONS: ContactPerson[] = [
  { name: "K. OBEDUR RAHMAN", phone: "9486282996" },
  { name: "K. MOHAMMED SHUAIB", phone: "9487320653", role: "Primary Contact" },
  { name: "K. MUHEEBUR RAHMAN", phone: "9894744731" },
  { name: "K. ENAMUL HASAN", phone: "8925605997" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "event-planning",
    title: "Event Planning & Coordination",
    subtitle: "Turnkey Luxury Management",
    description: "Complete end-to-end event planning tailored specifically to royal standards. We oversee every logistical detail from venue layout to guest hospitality.",
    icon: "Crown",
    features: [
      "Custom stage architecture & spatial design",
      "Seamless on-ground schedule management",
      "VIP reception and guest hospitality setup",
      "Audio-visual & royal ambient lighting curation",
    ],
    badge: "Full Turnkey",
  },
  {
    id: "high-look-decor",
    title: "High Look Decor & Stage Art",
    subtitle: "Signature Aesthetics",
    description: "Awe-inspiring and exquisite stage decorations that create a fairy-tale ambiance. From grand palace backdrops to bespoke floral arches.",
    icon: "Sparkles",
    features: [
      "Lavish floral sculptures & imported blossoms",
      "Dazzling chandeliers & crystal lighting accents",
      "Contemporary & traditional thematic backdrops",
      "Grand bridal pathway and photobooth installations",
    ],
    badge: "Most Popular",
  },
  {
    id: "material-supply",
    title: "Premium Material Supply & Rentals",
    subtitle: "Complete Hardware & Furnishings",
    description: "We supply massive inventories of premium marriage and event materials precisely matching your theme and accommodating thousands of guests.",
    icon: "Armchair",
    features: [
      "Royal throne chairs & banquet seating",
      "Luxury dining & buffet display counters",
      "Heavy-duty German canopies & shamianas",
      "Exquisite tableware, chafing dishes & catering gear",
    ],
    badge: "Direct Warehouse",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand Royal Stage Architecture",
    category: "Stage Decor",
    src: "/static/ImagesCarousel/1000336893.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    description: "Golden architectural palace stage with luminous backlighting and opulent floral crowns.",
  },
  {
    id: "gal-2",
    title: "VIP Banquet & Sovereign Seating",
    category: "Seating & Catering",
    src: "/static/ImagesCarousel/1000336921.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
    description: "Symmetrical royal dining hall configured with bespoke ivory draping and gold accents.",
  },
  {
    id: "gal-3",
    title: "Majestic Ceremonial Welcome Arch",
    category: "Entrances",
    src: "/static/ImagesCarousel/1000337550.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop",
    description: "Illuminated floral portal designed to give guests an enchanting grand royal arrival.",
  },
  {
    id: "gal-4",
    title: "Cascade Floral Chandeliers",
    category: "Floral",
    src: "/static/ImagesCarousel/1000341361.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    description: "Suspended floral canopy blending fresh orchids, roses, and ambient warm LEDs.",
  },
  {
    id: "gal-5",
    title: "Imperial Reception Ballroom",
    category: "Stage Decor",
    src: "/static/ImagesCarousel/1000342140.jpeg",
    fallbackSrc: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop",
    description: "Spectacular multi-tier reception stage suited for 2,000+ guest wedding functions.",
  },
  {
    id: "gal-6",
    title: "Enchanted Garden Mood Lighting",
    category: "Entrances",
    src: "/static/ImagesCarousel/1000342142.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
    description: "Intimate pathway illumination with lantern pillars and shimmering starlight drapery.",
  },
  {
    id: "gal-7",
    title: "Gourmet Catering Table Presentation",
    category: "Seating & Catering",
    src: "/static/ImagesCarousel/1000345740.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop",
    description: "Flawless buffet displays featuring polished brass chafers and luxury table appointments.",
  },
  {
    id: "gal-8",
    title: "Sophisticated Nikah & Wedding Mandap",
    category: "Stage Decor",
    src: "/static/ImagesCarousel/1000346658.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
    description: "Graceful contemporary stage blending minimalist white textures with ornate gold motifs.",
  },
  {
    id: "gal-9",
    title: "Exotic Botanical Stage Installation",
    category: "Floral",
    src: "/static/ImagesCarousel/1000346930.jpg",
    fallbackSrc: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    description: "Intricately woven floral walls paired with gold mirrored pedestals and ambient beams.",
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Ahmed Family",
    role: "Wedding Client",
    location: "Vaniyambadi",
    rating: 5,
    content: "Royal Suppliers transformed our marriage hall into a literal palace. The 'High Look Decor' was breathtaking and everything was delivered flawlessly on time! Every guest was in awe.",
    date: "2 weeks ago",
  },
  {
    id: "rev-2",
    name: "Rajesh Kumar",
    role: "Corporate & Grand Reception",
    location: "Tirupattur",
    rating: 5,
    content: "Organizing a 1,000-guest function in the district was stressful until we hired Mohammed Shuaib and team. They supplied premium materials effortlessly. Outstanding execution!",
    date: "1 month ago",
  },
  {
    id: "rev-3",
    name: "Nasser Family",
    role: "Family Nikah Ceremony",
    location: "Ambur / VNB",
    rating: 5,
    content: "Every single detail from the floral setups to the royal chairs was strictly top-tier. They genuinely care about giving a 100% premium experience without any compromises.",
    date: "2 months ago",
  },
];

export const STATS = [
  { value: 1000, suffix: "+", label: "Events Delivered", description: "Weddings, receptions, & galas" },
  { value: 18, suffix: "+", label: "Years of Heritage", description: "Serving since 2007" },
  { value: 100, suffix: "%", label: "Client Satisfaction", description: "Bespoke royal quality" },
  { value: 50, suffix: "k+", label: "Guests Hosted", description: "Across Tirupattur & beyond" },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Vision & Consultation",
    desc: "Share your date, venue, guest size, and aesthetic dreams. We guide you through themes and material selections.",
  },
  {
    step: "02",
    title: "Bespoke 3D & Design Blueprint",
    desc: "We customize stage dimensions, lighting choreography, and table setups to match your venue's unique scale.",
  },
  {
    step: "03",
    title: "Punctual Delivery & Setup",
    desc: "Our master crew arrives well ahead of schedule, erecting flawless structures, pristine chairs, and fresh florals.",
  },
  {
    step: "04",
    title: "A Royal Celebration",
    desc: "Enjoy your special celebration with complete peace of mind while our on-site team ensures perfection from start to finish.",
  },
];

export const FAQS = [
  {
    q: "How early should we book Royal Suppliers for our wedding or event?",
    a: "We recommend booking at least 3 to 6 weeks in advance for peak wedding seasons to secure your preferred stage decor and furniture quantities. However, we also cater to prompt short-notice requests subject to availability.",
  },
  {
    q: "Do you supply materials outside of Vaniyambadi?",
    a: "Yes! While our headquarters and central warehouses are in Vaniyambadi, we routinely deliver and execute luxury setups throughout Tirupattur, Ambur, Jolarpet, Vellore, and nearby regions.",
  },
  {
    q: "Can we request custom theme colors and specific floral styles?",
    a: "Absolutely. Everything we design is fully customizable — from color-matched velvet chair covers to exotic fresh flower species and custom backdrop monograms.",
  },
  {
    q: "Do you handle complete catering equipment and dining arrangements?",
    a: "Yes, we supply complete catering infrastructure including luxury buffet tables, designer chafing dishes, VIP dining chairs, canopy covers, and food serving essentials.",
  },
];

