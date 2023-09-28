import React from 'react';
import { Link } from 'react-scroll';
import { NavTabData } from '../../utils/constants';
import './NavTab.css';

function NavTab() {
  return (
    <section className="navtab">
      <nav className="navtab__container">
        <ul className="navtab__navigation">
          <li className="navtab__text">
            <Link to="project" smooth={true}>
              {NavTabData.projects}
            </Link>
          </li>
          <li className="navtab__text">
            <Link to="techs" smooth={true}>
              {NavTabData.techs}
            </Link>
          </li>
          <li className="navtab__text">
            <Link to="student" smooth={true}>
              {NavTabData.student}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
