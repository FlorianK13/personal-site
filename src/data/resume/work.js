/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'fortiss',
    position: 'Researcher',
    url: 'https://fortiss.org',
    startDate: '2021-10-01',
    summary: `fortiss is the research institute of the Free State of Bavaria for software-intensive
    systems and is legally structured as a non-profit GmbH. The shareholders of fortiss are the
    Free State of Bavaria (2/3) and the Fraunhofer-Gesellschaft (1/3). I joined the 'Architectures
    and Services for Critical Infrastructures' research group which focuses on the intersection
    of software and the energy system.`,
    highlights: [
      'Developed data pipelines for open source energy data.',
      'Used ML-based approaches to segment PV systems on aerial images.',
      'Analyzed the german core energy dataset called "Marktstammdatenregister".',
    ],
  },
  {
    name: 'TUM Chair of Theoretical Solid-State Physics',
    position: 'Working Student',
    url: 'https://www.ph.nat.tum.de/cmt/home/',
    startDate: '2019-05-01',
    endDate: '2019-12-31',
    summary: `After completing my bachelor's thesis at the chair, I was offered a contract
    as a working student to further refine the results of my thesis and write a publication.`,
    highlights: [
      'Worked together with a post doc on the topic of Many Body Localization',
      'Developed a ML-based Algorithm to distinguish two different phases of a quantum system.',
      'Wrote my first publication.',
    ],
  },
];

export default work;
