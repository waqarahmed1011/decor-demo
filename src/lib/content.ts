import type {
  NavItem,
  ServiceCard,
  WhyCard,
  EventItem,
  Testimonial,
  Stat,
} from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Celebrations", href: "#events" },
  {
    label: "Gallery",
    href: "#",
    children: [
      { label: "Photos", href: "#" },
      { label: "Videos", href: "#" },
    ],
  },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export const aboutParagraphs: string[] = [
  "Welcome to Festive Flair – where creativity and experience converge for unforgettable celebrations. With years of experience in event design, Festive Flair is your one-stop for crafting moments that matter.",
  "Our diverse portfolio caters to every creative desire, from intimate gatherings to grand affairs. We specialize in tailoring ideas for unique events, ensuring every celebration is a true reflection of you.",
];

export const services: ServiceCard[] = [
  {
    title: "Event Design & Styling",
    description:
      "Transform your venue into a breathtaking space with custom styling, conceptualization, and design tailored to your unique vision.",
    image: "/images/services/decor.jpg",
  },
  {
    title: "Floral & Centerpiece Design",
    description:
      "Stunning floral arrangements and centerpieces crafted to complement your event's theme and color palette.",
    image: "/images/services/dj.jpg",
  },
  {
    title: "Lighting & Draping",
    description:
      "Create the perfect ambiance with custom lighting setups and elegant draping that frame your celebration beautifully.",
    image: "/images/services/invite.jpg",
  },
  {
    title: "Venue Transformation",
    description:
      "From bare space to breathtaking venue — we handle every detail of your room transformation, ensuring a seamless reveal.",
    image: "/images/services/gifts.jpg",
  },
  {
    title: "Vendor Coordination",
    description:
      "We connect you with our trusted network of photographers, caterers, and specialty vendors to complete your dream team.",
    image: "/images/services/vendor.jpg",
  },
  {
    title: "Day-Of Setup & Teardown",
    description:
      "From the first arrangement to the final cleanup, our team handles every setup and teardown detail so you can enjoy every moment.",
    image: "/images/services/manage.jpg",
  },
];

export const stats: Stat[] = [
  { value: "5+", label: "Years of\nexperience" },
  { value: "50+", label: "Events\nDecorated" },
  { value: "100%", label: "5-Star\nReviews" },
];

export const whyCards: WhyCard[] = [
  {
    title: "Elegant Designs",
    subtitle: "Timeless Sophistication",
    image: "/images/why/elegant-design.jpg",
  },
  {
    title: "Personalized Experiences",
    subtitle: "Tailored Perfection",
    image: "/images/why/custom-made.jpg",
  },
  {
    title: "Seamless Coordination",
    subtitle: "Flawless Execution",
    image: "/images/why/coordinate.jpg",
  },
  {
    title: "Diverse Expertise",
    subtitle: "Creative Mastery",
    image: "/images/why/diverse.jpg",
  },
];

export const events: EventItem[] = [
  { label: "Engagement", icon: "Gem" },
  { label: "Wedding", icon: "Crown" },
  { label: "Baby Shower", icon: "Baby" },
  { label: "Naming Ceremony", icon: "Tag" },
  { label: "Birthday", icon: "Cake" },
  { label: "Bridal Shower", icon: "Flower2" },
  { label: "House Warming", icon: "Home" },
  { label: "Graduation", icon: "GraduationCap" },
  { label: "Product Release", icon: "Package" },
  { label: "Seminars / Conferences", icon: "Presentation" },
  { label: "Fundraisers / Charity Events", icon: "Heart" },
  { label: "Runway / Fashion Show", icon: "Shirt" },
  { label: "Bazaar", icon: "ShoppingBag" },
  { label: "Mehendi", icon: "Palette" },
  { label: "Manja", icon: "Sun" },
  { label: "Sanchak", icon: "Gift" },
  { label: "Dholki", icon: "Music2" },
  { label: "Walima", icon: "UtensilsCrossed" },
  { label: "Rukhsati", icon: "HeartHandshake" },
  { label: "Nikkah", icon: "Moon" },
  { label: "Baat Pakki", icon: "Handshake" },
  { label: "Rasms", icon: "Sparkles" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "From the initial consultation to the sendoff, every detail was handled with such care and professionalism. The decor was absolutely breathtaking — exactly what I had envisioned and more. I would highly recommend them to anyone planning a special event.",
    name: "Jane Smith",
    eventType: "Wedding Reception",
  },
  {
    quote:
      "We were completely blown away by how our venue was transformed. The team was responsive, creative, and made the entire planning process stress-free. They went above and beyond at every step and made our day truly unforgettable. We couldn't recommend them more highly.",
    name: "John & Sarah Doe",
    eventType: "Walima",
  },
  {
    quote:
      "They turned our simple ideas into something truly magical. Every guest couldn't stop complimenting the decor. Booking Festive Flair was the best decision we made for our big day — professional, talented, and genuinely a pleasure to work with.",
    name: "Michael Johnson",
    eventType: "Graduation",
  },
];

export const contact = {
  address: ["123 Main Street,", "Your City, State ZIP"],
  phones: ["T1: (123) 456-7890", "T2: (123) 456-7891"],
  email: "E: hello@yourbusinessname.com",
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Celebrations", href: "#events" },
  ],
  social: {
    instagram: "#",
    youtube: "#",
  },
};
