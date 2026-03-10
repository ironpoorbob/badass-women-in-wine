import hero from '../assets/images/bwiw_hero_crop_v2_bw_topcropped.jpg';
import avatar from '../assets/images/wine-glass.png';
import { withBasePath } from '../config/site.js';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  website: withBasePath(),
  avatar: {
    src: avatar,
    alt: 'Badass Women In Wine'
  },
  title: 'Badass Women In Wine',
  subtitle: 'Women in wine empowering women in wine',
  description: 'A community of women in wine championing leadership, integrity, generosity, and professional growth.',
  image: {
    src: withBasePath('bwiw_hero_crop_v2_bw_topcropped.jpg'),
    alt: 'Badass Women In Wine'
  },
  headerNavLinks: [
    {
      text: 'Home',
      href: withBasePath()
    },
    {
      text: 'About',
      href: withBasePath('about')
    },
    {
      text: 'Contact',
      href: withBasePath('contact')
    },
    {
      text: 'Donate',
      href: '#'
    }
  ],
  footerNavLinks: [
    {
      text: 'About',
      href: withBasePath('about')
    },
    {
      text: 'Contact',
      href: withBasePath('contact')
    }
  ],
  socialLinks: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/company/badass-women-in-wine/?viewAsMember=true'
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/badasswomeninwine/'
    }
  ],
  hero: {
    title: 'Empowering Women in Wine',
    text: "Badass Women in Wine is a community of women in the wine world empowering women in the wine world—rooted in leadership, integrity, generosity, and professionalism. We create space to connect, learn, and grow together, while celebrating the talent and drive that keeps this industry moving forward.\n\nThrough gatherings, events, and shared experiences, we elevate one another—amplifying voices, building relationships, and opening doors. If you’re here to lead with purpose, support others, and keep showing up with excellence (and a great glass in hand), you’re in the right place. \n\nFor information on who we are, the Heilmann Trophy for Badass Women in Wine, and event updates please follow us on our social media channels.",
    image: {
      src: hero,
      alt: 'A person sitting at a desk in front of a computer',
      caption: 'Photo by Janeth R Sanchez'
    },
    actions: [
      {
        text: 'Get in Touch',
        href: withBasePath('contact')
      }
    ],
    instagramTitle: 'Latest on Instagram',
    instagramPosts: [
      'https://www.instagram.com/p/DVb3ff-EmpP/',
      'https://www.instagram.com/p/DVH31PllDvb/',
      'https://www.instagram.com/p/DU4K76GEv1J/',
      'https://www.instagram.com/p/DU4H1RAklZy/',
      'https://www.instagram.com/p/DUTqUPgEuef/',
      'https://www.instagram.com/p/DToAQ-OklVA/',
      'https://www.instagram.com/p/DTn8i4pEkl5/',
      'https://www.instagram.com/p/DPe6KqsAXTZ/',
      'https://www.instagram.com/p/DNTfox_vhgH/'
    ]
  },
  postsPerPage: 8
};

export default siteConfig;
