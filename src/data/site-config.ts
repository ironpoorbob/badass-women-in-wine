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
            text: 'Heilmann Trophy',
            href: withBasePath('heilmann-trophy')
        },
        {
            text: 'Events',
            href: withBasePath('events')
        },
        {
            text: 'Sponsors',
            href: withBasePath('sponsors')
        },
        {
            text: 'Contact',
            href: withBasePath('contact')
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
        image: {
            src: hero,
            alt: 'A person sitting at a desk in front of a computer',
            caption: 'Photo by Janeth R Sanchez'
        }
    },
    home: {
        mission: {
            title: 'Our Mission',
            text: `Badass Women in Wine is a community of women who work in every facet of the wine industry empowering women in wine—rooted in leadership, integrity, generosity, and professionalism.

Through gatherings, events, and shared experiences, we elevate one another—amplifying voices, building relationships, and opening doors. If you are here to lead with purpose, support others, and keep showing up with excellence (and a great glass of wine in hand), you’re in the right place.

Our mission is to break barriers and shape a more inclusive and thriving industry.`,
            quote: `We are not waiting for a seat at “the table.” We have built our own table.
            Pull up your chair.`
        },
        callsToAction: [
            {
                title: 'Stay Up to Date',
                text: 'Get news, event updates, and community announcements delivered to your inbox.',
                buttonLabel: 'Join Our Mailing List',
                href: 'mailto:info@badasswomeninwine.org?subject=Add%20Me%20to%20the%20Badass%20Women%20in%20Wine%20Mailing%20List'
            },
            {
                title: 'Support Our Mission',
                text: 'Help us recognize and support women making an impact through the Heilmann Trophy.',
                buttonLabel: 'Donate',
                href: 'https://www.zeffy.com/en-US/donation-form/heilmann-trophy',
                target: '_blank'
            }
        ],
        socialLinks: [
            {
                text: 'Instagram · @badasswomeninwine',
                href: 'https://www.instagram.com/badasswomeninwine/'
            },
            {
                text: 'LinkedIn',
                href: 'https://www.linkedin.com/company/badass-women-in-wine/?viewAsMember=true'
            }
        ]
    },
    postsPerPage: 8
};

export default siteConfig;
