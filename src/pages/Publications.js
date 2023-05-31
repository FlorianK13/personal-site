import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/publications';

const Publications = () => (
  <Main
    title="Publications"
    description="List of my publications."
  >
    <article className="post" id="Publications">
      <header>
        <div className="title">
          <h2><Link to="/publications">Publications</Link></h2>
          <p>Find the full list of publications on <a href="https://scholar.google.com/citations?user=Q3l2doEAAAAJ&hl=de&oi=ao">google scholar</a>.</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Publications;
