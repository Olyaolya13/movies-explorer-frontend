import React from 'react';
import './Techs.css'

const aboutTechs = {
    title: 'Технологии',
    stages: [
      {
        title: '7 технологий',
        description: 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.',
      },
    ],
    skills: ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'],
  };
  
  function Techs() {
    return (
      <section className='techs'>
          <h2 className='techs__title'>{aboutTechs.title}</h2>
          <p className='techs__line'></p>
        <div className='techs__content'>
          {aboutTechs.stages.map((stage, index) => (
            <div key={index}>
              <h3 className='techs__subtitle'>{stage.title}</h3>
              <p className='techs__about'>{stage.description}</p>
            </div>
          ))}
        </div>
        <div className='techs__develop'>
          <ul className='techs__skills'>
            {aboutTechs.skills.map((skill, index) => (
              <li className='techs__text' key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  

export default Techs;