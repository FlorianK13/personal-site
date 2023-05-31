import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faMastodon } from '@fortawesome/free-brands-svg-icons/faMastodon';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/FlorianK13',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://mastodon.energy/@floko',
    label: 'Twitter',
    icon: faMastodon,
  },
  {
    link: 'mailto:florian.kotthoff@posteo.de',
    label: 'Email',
    icon: faEnvelope,
  },
  {
    link: 'https://www.linkedin.com/in/florian-kotthoff/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
];

export default data;
