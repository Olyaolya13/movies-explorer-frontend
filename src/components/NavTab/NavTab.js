import React from 'react';
import './NavTab.css'
import { Link } from 'react-scroll';


function NavTab() {
  return (
    <section className='navtab'>
      <nav className='navtab__container'>
        <ul className='navtab__navigation'>
          <li className='navtab__text'>
            <Link to="project" smooth={true} >
              О проекте
            </Link>
          </li>
          <li className='navtab__text'>
            <Link to="techs" smooth={true} >
              Технологии
            </Link>
          </li>
          <li className='navtab__text'>
            <Link to="student" smooth={true}>
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}


export default NavTab;


