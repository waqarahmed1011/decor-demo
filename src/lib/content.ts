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
  "Welcome to The Perfect Affair – where youth and experience converge for unforgettable celebrations. With over 4 years in event management, The Perfect Affair is your one-stop for crafting unique moments.",
  "Our diverse portfolio caters to every creative desire, from Desi-exotic to minimal extravagance. We specialize in tailoring ideas for unique events, ensuring boundless creativity as the best event planners in Bangalore.",
];

export const services: ServiceCard[] = [
  {
    title: "Design & Decor",
    description:
      "Conceptualization, design, styling—bringing visions to life with aesthetic perfection, as the best decorators in Bangalore.",
    image: "/images/services/decor.jpg",
  },
  {
    title: "Entertainment",
    description:
      "Curating artistes, DJs, performers—transforming gatherings into unforgettable experiences of delight.",
    image: "/images/services/dj.jpg",
  },
  {
    title: "Invitation Design",
    description:
      "Bespoke invites tailored to your event themes — capturing uniqueness in every detail.",
    image: "/images/services/invite.jpg",
  },
  {
    title: "Bespoke Returns Favours",
    description:
      "Curated favors, specially tailored for guests—expressing gratitude with personalized charm.",
    image: "/images/services/gifts.jpg",
  },
  {
    title: "Vendor Referrals",
    description:
      "Connecting you with photographers, makeup artists—building a dream team for seamless events.",
    image: "/images/services/vendor.jpg",
  },
  {
    title: "Management & Coordination",
    description:
      "Ensuring flawless events—meticulous coordination for a stress-free and memorable experience.",
    image: "/images/services/manage.jpg",
  },
];

export const stats: Stat[] = [
  { value: "04+", label: "Years of\nexperience" },
  { value: "100+", label: "Network\nstrength" },
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
  { label: "Engagement", icon: "/images/events/ring-box.png" },
  { label: "Wedding", icon: "/images/events/wedding-bell.png" },
  { label: "Baby Shower", icon: "/images/events/wedding-balloon.png" },
  { label: "Naming Ceremony", icon: "/images/events/wedding-invitation.png" },
  { label: "Birthday", icon: "/images/events/wedding-cake.png" },
  { label: "Bachelorette", icon: "/images/events/love-lock.png" },
  { label: "House Warming Ceremony", icon: "/images/events/wedding-location.png" },
  { label: "Cocktail / Mocktail Gatherings", icon: "/images/events/champagne-glass.png" },
  { label: "Product Release", icon: "/images/events/wedding-day.png" },
  { label: "Seminars / Conferences", icon: "/images/events/wedding-video-recorder.png" },
  { label: "Fundraisers / Charity Events", icon: "/images/events/wedding-gift.png" },
  { label: "Runway / Fashion Show", icon: "/images/events/wedding-camera.png" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The perfect affair planned and executed my baby shower 'PERFECTLY'. Yathindra and his team did an amazing job even though I contacted them just three days before the event. The team is very proactive and I did not have to worry about following up with them as they themselves would update me about the arrangements. The decor was exactly how I envisioned it to be best event management in Bangalore . I would highly recommend The Perfect Affair team.",
    name: "Archana S Raju",
  },
  {
    quote:
      "The Perfect Affair was exactly what we were looking when we were planning our sister's wedding. They have been extremely patient, provided us with all the necessary support, their ever willingness to help & address our endless queries, provide their valuable inputs. We honestly couldn't have asked for better professionals to make my sister's big day the most amazing and hassle free day. Yathi & Vickranth were and are so sweet, down to earth and personable best event management in Bangalore .We highly recommend them!!",
    name: "Teetam Ghosal",
  },
  {
    quote:
      "We had such a wonderful experience with The Perfect Affair who managed our evening Reception! Yathi and Vikranth were easy to work with and they managed to take what i envisioned and execute it into a picture perfect reality. Although the event was meant to be small and simple (given the covid constraints Covid), they went above and beyond on making sure it was a memorable night.",
    name: "Nikhil Shyam",
  },
];

export const contact = {
  address: ["2nd Floor, Ganga Complex,", "New BEL Rd, AG's Layout,", "Bengaluru, Karnataka - 560094"],
  phones: ["T1: +91 9632154123", "T2: +91 8296826777"],
  email: "E: affairperfect@gmail.com",
  quickLinks: [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Celebrations", href: "#events" },
  ],
  social: {
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};
