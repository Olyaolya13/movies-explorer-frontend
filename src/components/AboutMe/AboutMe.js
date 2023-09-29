import React from 'react';
import './AboutMe.css';
import { AboutMeData } from '../../utils/constants';
import Photo from '../../images/Photo.svg';

function AboutMe() {
  return (
    <section className="student">
      <h2 className="student__title">{AboutMeData.title}</h2>
      <p className="student__line"></p>
      <div className="student__content">
        {AboutMeData.stages.map((stage, index) => (
          <div className="student__content-about" key={index}>
            <h2 className="student__subtitle">{stage.title}</h2>
            <h3 className="student__text">{stage.subtitle}</h3>
            <p className="student__about">{stage.description}</p>
            <a
              href={stage.githubLink}
              className="student__site"
              target="_blank"
              rel="noopener noreferrer"
            >
              {stage.site}
            </a>
          </div>
        ))}
        <img src={Photo} alt="Фото студента" className="student__photo" />
      </div>
    </section>
  );
}

export default AboutMe;
