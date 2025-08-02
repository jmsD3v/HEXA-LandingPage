const phone = '+543624306820';
const message = 'Hello! I saw your portfolio and would like to chat!';
const encodedMessage = encodeURIComponent(message);

export const social = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/hexa',
    icon: 'mdi:linkedin',
  },
  {
    name: 'Github',
    href: 'https://github.com/hexa',
    icon: 'mdi:github',
  },
  {
    name: 'Whatsapp',
    href: `https://wa.me/${phone}?text=${encodedMessage}`,
    icon: 'mdi:whatsapp',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/hexa',
    icon: 'mdi:facebook',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hexa',
    icon: 'mdi:instagram',
  },
];
