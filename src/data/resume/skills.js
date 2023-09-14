const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'WebGL',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Data Science + Engineering', 'Languages'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Numpy/Pandas/Matplotlib',
    competency: 4,
    category: ['Python', 'Data Science + Engineering', 'Machine Learning'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Python', 'Machine Learning'],
  },
  {
    title: 'HTML + CSS',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Nginx',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Python', 'Languages', 'Machine Learning'],
  },
  {
    title: 'Python Packaging (pypi.org)',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Data Build Tool (dbt)',
    competency: 4,
    category: ['Data Science + Engineering', 'Tools'],
  },
  {
    title: 'Data Orchestration (dagster.io)',
    competency: 3,
    category: ['Data Science + Engineering', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
