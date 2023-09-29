import React from 'react';
import './AboutProject.css';
import { AboutProjectData } from '../../utils/constants';

function AboutProject() {
  return (
    <section className="project">
      <h2 className="project__title">{AboutProjectData.title}</h2>
      <p className="project__line"></p>
      <div className="project__content">
        {AboutProjectData.stages.map((stage, index) => (
          <div className="project__text" key={index}>
            <h3 className="project__subtitle">{stage.title}</h3>
            <p className="project__about">{stage.description}</p>
          </div>
        ))}
      </div>
      <div className="project__develop">
        <div className="project__tb">
          <p className="project__week">{AboutProjectData.timeframes[0]}</p>
          <p className="project__name">{AboutProjectData.skills[0]}</p>
        </div>
        <div className="project__tb1">
          <p className="project__weeks">{AboutProjectData.timeframes[1]}</p>
          <p className="project__name">{AboutProjectData.skills[1]}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
