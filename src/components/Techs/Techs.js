import React from 'react';
import './Techs.css';
import { AboutTechsData } from '../../utils/constants';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">{AboutTechsData.title}</h2>
      <p className="techs__line"></p>
      <div className="techs__content">
        {AboutTechsData.stages.map((stage, index) => (
          <div key={index}>
            <h3 className="techs__subtitle">{stage.title}</h3>
            <p className="techs__about">{stage.description}</p>
          </div>
        ))}
      </div>
      <div className="techs__develop">
        <ul className="techs__skills">
          {AboutTechsData.skills.map((skill, index) => (
            <li className="techs__text" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;
