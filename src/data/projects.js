// TODO Add a couple lines about each project
const data = [
  {
    title: 'marktstammdaten.kotthoff.dev',
    subtitle: 'Monitoring Data Quality of the German Core Energy Registry Marktstammdatenregister',
    image: '/images/projects/marktstammdaten-dashboard.png',
    link: 'https://marktstammdaten.kotthoff.dev',
    date: '2024-03-01',
    desc:
      'Using the two frameworks dbt and datasette, I built a data testing '
      + 'pipeline that runs regularly and publishes relevant metrics as '
      + ' datasette dasboards.',
  },
  {
    title: 'openpv.de',
    subtitle: 'Simulating the solar potential of your building in the browser',
    image: '/images/projects/openpv.jpg',
    link: 'https://www.openpv.de',
    date: '2023-06-01',
    desc:
      'Together with two friends I built a website to simulate the solar '
      + 'potential of roofs and facades using openly available 3D building data. '
      + 'Right now we can simulate every building in Bavaria and we are working on '
      + 'extending to other states as well.',
  },
  {
    title: 'open-mastr python package',
    subtitle: 'A collaborative software to download the energy database Marktstammdatenregister (MaStR)',
    image: '/images/projects/openmastr.jpg',
    link: 'https://github.com/OpenEnergyPlatform/open-MaStR',
    date: '2022-01-01',
    desc:
      'Built in collaboration with the Reiner-Lemoine-Institut. '
      + 'open-mastr is a python package to download and clean the german '
      + 'energy database Marktstammdatenregister. It can save several days '
      + 'of writing data parsers for the individual.',
  },
  {
    title: 'Bundestag ePetitionen Mastodon Bot',
    subtitle: 'A mastodon bot that posts petitions from the german parliament website which reached 10k supporters',
    image: '/images/projects/mastodon_logo.jpg',
    link: 'https://troet.cafe/@bundestagpetitionen10k',
    date: '2023-10-01',
    desc:
      'The first Mastodon bot I created scans the German Bundestag petition site '
      + 'and shares petitions with 10,000+ supporters. '
      + 'It runs once per day.',
  },
];

export default data;
