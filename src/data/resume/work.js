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
    name: 'Started at OFFIS',
    position: 'Researcher',
    url: 'https://offis.de',
    startDate: '2024-03-01',
  },
  {
    name: 'Reviewer for JOSS',
    url: 'https://joss.theoj.org/',
    startDate: '2024-01-01',
  },
  {
    name: 'Started at fortiss',
    position: 'Researcher',
    url: 'https://fortiss.org',
    startDate: '2021-10-01',
    endDate: '2024-02-29',
  },
  {
    name: 'TUM Chair of Theoretical Solid-State Physics',
    position: 'Working Student',
    url: 'https://www.ph.nat.tum.de/cmt/home/',
    startDate: '2019-05-01',
    endDate: '2019-12-31',
  },
];

export default work;
