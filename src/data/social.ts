const phone = '+543624306820';
const message = 'Hello! I saw your portfolio and would like to chat!';
const encodedMessage = encodeURIComponent(message);

export const social = [
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
    name: 'Instagram',
    href: 'https://www.instagram.com/hexa',
    icon: 'mdi:instagram',
  },
];
