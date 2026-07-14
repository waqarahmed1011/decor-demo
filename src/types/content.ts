export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
}

export interface WhyCard {
  title: string;
  subtitle: string;
  image: string;
}

export interface EventItem {
  label: string;
  icon: string; // Lucide icon component name
}

export interface Testimonial {
  quote: string;
  name: string;
  eventType?: string;
}

export interface Stat {
  value: string;
  label: string;
}
