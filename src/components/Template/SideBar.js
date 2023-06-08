import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Florian Kotthoff</h2>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Florian. I studied Physics at the <a href="https://www.ph.tum.de/">Technical University of Munich </a>
        and I am now working as a researcher at <a href="https://www.fortiss.org/">fortiss GmbH</a>.
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Florian Kotthoff <Link to="/">kotthoff.dev</Link>. </p>
    </section>
  </section>
);

export default SideBar;
