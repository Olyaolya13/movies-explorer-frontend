import React from 'react';
import './Footer.css';
import { FooterData } from '../../utils/constants';

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">{FooterData.title}</h2>
      <div className="footer__content">
        <p className="footer__year">&copy;{FooterData.year}</p>
        <ul className="footer__text">
          <li className="footer__subtitle">
            <a
              href={FooterData.linkYandex}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {FooterData.text}
            </a>
          </li>
          <li>
            <a
              href={FooterData.linkGithub}
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {FooterData.subtitle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
