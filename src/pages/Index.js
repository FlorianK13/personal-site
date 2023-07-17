import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Florian Kotthoff's personal website. Munich based TUM physics graduate, "
    + 'researcher at fortiss.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to my website. Check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or follow me at <a href="https://mastodon.energy/@floko">Mastodon</a>.
      </p>
      <p> Source code of this website available <a href="https://github.com/FlorianK13/personal-site">here</a>.
      </p>
    </article>
  </Main>
);

export default Index;
