const phone = '+543624306820';
const message = 'Hola, vengo de su página web, me gustaría contactarlos';
const encodedMessage = encodeURIComponent(message);

export const social = [
  {
    name: 'Whatsapp',
    href: `https://wa.me/${phone}?text=${encodedMessage}`,
    icon: 'mdi:whatsapp',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/hexa.servicios',
    icon: 'mdi:instagram',
  },
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/hexa-servicios-integrales',
    icon: 'mdi:linkedin',
  },
];
