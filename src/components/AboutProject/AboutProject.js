import React from 'react';
import './AboutProject.css'

const aboutProjectData = {
    title: 'О проекте',
    stages: [
      {
        title: 'Дипломный проект включал 5 этапов',
        description: 'Составление плана, работа над бэкендом, вёрстку, добавление функциональности и финальные доработки.',
      },
      {
        title: 'На выполнение диплома ушло 5 недель',
        description: 'У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.',
      },
    ],
    timeframes: {
      oneWeek: '1 неделя',
      fourWeeks: '4 недели',
    },
    skills: ['Back-end', 'Front-end'],
  };
  
  const OneWeek = aboutProjectData.timeframes.oneWeek;
  const Back = aboutProjectData.skills[0];
  const Foureek = aboutProjectData.timeframes.fourWeeks;
  const Front = aboutProjectData.skills[1];
  
  function AboutProject() {
    return (
      <section className='project'>
          <h2 className='project__title'>{aboutProjectData.title}</h2>
          <p className='project__line'></p>
        <div className='project__content'>
          {aboutProjectData.stages.map((stage, index) => (
            <div className='project__text' key={index}>
              <h3 className='project__subtitle'>{stage.title}</h3>
              <p className='project__about'>{stage.description}</p>
            </div>
          ))}
        </div>
        <div className='project__develop'>
        <div className='project__tb'>
          <p className='project__week'>{OneWeek}</p>
          <p className='project__name'>{Back}</p>
        </div>
        <div className='project__tb'>
          <p className='project__weeks'>{Foureek}</p>
          <p className='project__name'>{Front}</p>
        </div>
        </div>
      </section>
    );
  }
       


export default AboutProject;