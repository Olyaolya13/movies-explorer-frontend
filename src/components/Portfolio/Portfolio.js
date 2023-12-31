import React from 'react';
import './Portfolio.css';
import Arrow from '../../images/logo/arrow.svg';
import { PortfolioData } from '../../utils/constants';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">{PortfolioData.about}</h3>
      <ul className="portfolio__skills">
        {PortfolioData.skills.map((skill, index) => (
          <li className="portfolio__skill-name" key={index}>
            <div className="portfolio__text">
              <a
                href={PortfolioData.skillsSite[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__name"
              >
                {skill}
              </a>
              <a
                href={PortfolioData.skillsSite[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__name"
              >
                <img src={Arrow} alt="Стрелочка" className="portfolio__arrow" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
