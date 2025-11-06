
export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin: string;
  whatsapp: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface Project {
  brandName: string;
  category: string;
  imageUrl: string;
}
