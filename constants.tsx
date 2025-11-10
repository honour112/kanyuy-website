import { Service, TeamMember, Testimonial, Project } from './types';
import { FacebookIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from './components/IconComponents';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    subLinks: [
      { name: 'Construction & Real Estate', path: '/services/construction' },
      { name: 'Beauty & Wellness Marketing', path: '/services/skincare' },
      { name: 'Custom Industry Solutions', path: '/services/digital-marketing' },
    ]
  },
  { name: 'Meet Our Team', path: '/team' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    title: 'Construction & Real Estate',
    description: 'Specialized marketing to showcase properties and build a powerful brand for construction and real estate companies.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop',
    link: '/services/construction'
  },
  {
    title: 'Beauty & Wellness Marketing',
    description: 'Bespoke branding and digital solutions for Skincare, Beauty, Salons, and Spas to captivate your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=600&auto=format&fit=crop',
    link: '/services/skincare'
  },
  {
    title: 'Custom Industry Solutions',
    description: 'Comprehensive digital marketing for Insurance, Laundry, Cleaning services, and more to boost your online reach.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    link: '/services/digital-marketing'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
    { name: 'Daniel Oni', role: 'AI Video Editor', bio: 'Creating compelling visual narratives with cutting-edge AI tools.', imageUrl: '/Assets/Daniel.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Asonganyi Rodric', role: 'DevOps Engineer', bio: 'Ensuring seamless, scalable, and secure infrastructure for all our projects.', imageUrl: '/Assets/Asonganyi.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Aboubakar Abdourazak', role: 'AI Website Developer', bio: 'Building intelligent and responsive websites that drive results.', imageUrl: '/Assets/abubakar.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Amadi Dominic', role: 'DevOps / Cloud Engineer', bio: 'Architecting robust cloud solutions for maximum performance.', imageUrl: '/Assets/dominic.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Peter Michael', role: 'Video Editor', bio: 'Crafting high-quality video content that engages and converts.', imageUrl: '/Assets/peterMICHAEL.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Adebayo Mary', role: 'Graphic Designer', bio: 'Designing stunning visuals that define and elevate brands.', imageUrl: '/Assets/ADEbayo.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Abdulsamad Ishaq', role: 'Frontend Developer', bio: 'Bringing designs to life with clean, efficient, and interactive code.', imageUrl: '/Assets/abdulshamaq.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
    { name: 'Nkwambi Honour', role: 'Website Developer', bio: 'Developing functional and user-friendly websites from the ground up.', imageUrl: '/Assets/Nkwambi.jpg', linkedin: '#', whatsapp: 'https://wa.me/237674772569' },
];

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Their team transformed our online presence. We've never been busier!", name: 'Alex Johnson', company: 'Titan Construction' },
  { quote: 'The new branding is stunning and perfectly captures our essence. Sales are up 40%!', name: 'Maria Garcia', company: 'Glow Skincare Co.' },
  { quote: 'A truly professional and results-oriented team. Highly recommended for any business looking to scale.', name: 'Chen Wei', company: 'Innovate Solutions' },
  { quote: 'Our website traffic has doubled since they took over our SEO. Incredible results!', name: 'Fatima Al-Sayed', company: 'FutureTech' },
];

export const PROJECTS: Project[] = [
  { brandName: 'Titan Builders', category: 'Branding & Web Design', imageUrl: 'https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'Aura Skincare', category: 'Social Media & E-commerce', imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'Evergreen Realty', category: 'Drone Footage & Listings', imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'Luxe Salon', category: 'Booking System & Branding', imageUrl: 'https://images.unsplash.com/photo-1599387737255-3453b5428202?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'SecureLife Insurance', category: 'Lead Generation Campaign', imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'The Landmark Tower', category: 'Full Marketing Suite', imageUrl: 'https://images.unsplash.com/photo-1583084394987-a296564962c3?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'Bloom Wellness Spa', category: 'Brand Identity', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'CleanSweep Pro', category: 'Local SEO & Website', imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop' },
  { brandName: 'Apex Contractors', category: 'Company Portfolio', imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=500&auto=format&fit=crop' },
];


export const SOCIAL_LINKS = [
  { href: '#', icon: <FacebookIcon /> },
  { href: '#', icon: <TwitterIcon /> },
  { href: '#', icon: <InstagramIcon /> },
  { href: '#', icon: <LinkedInIcon /> },
];