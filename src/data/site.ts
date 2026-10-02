/**
 * Single source of truth for site content and contact details.
 *
 * CONTACT: fill in the channels you actually use. Anything left empty is simply
 * not shown. The contact form works as follows:
 *   1. If `formEndpoint` is set, it POSTs there (Formspree, Web3Forms, etc.).
 *   2. Otherwise, if `contact.email` is set, it opens the visitor's email app.
 */
export const site = {
  name: 'Triple Technologies',
  description:
    'Triple Technologies is an Ethiopian technology company providing software development, IT training and consultancy, CCTV and security systems, and digital services for businesses and organizations.',
  contact: {
    email: 'tripletechnologies3@gmail.com',
    phone: '',
    telegram: '', // e.g. 'https://t.me/yourhandle'
    whatsapp: '', // e.g. 'https://wa.me/251XXXXXXXXX'
  },
  formEndpoint: '',
};

export const services = [
  {
    id: 'software',
    name: 'Software development',
    short: 'software',
    situation: 'Operations slowing down your business?',
    body: 'We build practical systems that remove admin bottlenecks and make teams more efficient.',
    items: [
      'Business systems',
      'Web apps',
      'Automation',
      'Integrations',
    ],
  },
  {
    id: 'training',
    name: 'IT training and consultancy',
    short: 'training',
    situation: 'Your team needs tools they can actually use.',
    body: 'Hands-on training and straightforward advice to help your staff work with confidence.',
    items: [
      'Staff training',
      'System reviews',
      'Technology planning',
      'Ongoing support',
    ],
  },
  {
    id: 'cctv',
    name: 'CCTV and security solutions',
    short: 'security',
    situation: 'You need visibility when you are away.',
    body: 'Reliable CCTV design and installation for homes, shops, and offices that need better monitoring.',
    items: [
      'Site survey',
      'Camera installation',
      'Remote access',
      'Maintenance',
    ],
  },
  {
    id: 'digital',
    name: 'Digital services and social media',
    short: 'digital services',
    situation: 'Your online presence should build trust.',
    body: 'Clear digital setup that helps people find your business, understand it and contact you quickly.',
    items: [
      'Social media',
      'Brand pages',
      'Website updates',
      'Content support',
    ],
  },
];

export const reasons = [
  {
    title: 'Practical before impressive',
    body: 'We recommend what fits your budget and the way you work, not the most complicated option.',
  },
  {
    title: 'Explained in plain language',
    body: 'Every choice is explained in terms of your business, so you can decide with confidence.',
  },
  {
    title: 'Planned together',
    body: 'Software, security, training and your online presence are considered as one picture, not as separate purchases.',
  },
  {
    title: 'Made to be used',
    body: 'Technology only pays off when people use it. We train your team and plan for what happens after launch.',
  },
];

export const steps = [
  { title: 'Conversation', body: 'We listen to how your business runs and what is getting in the way.' },
  { title: 'Proposal', body: 'You get a clear scope, timeline and price before any work starts.' },
  { title: 'Delivery', body: 'We build or install, and keep you updated at each stage.' },
  { title: 'Handover and support', body: 'We train your team and stay reachable once it is running.' },
];
