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
        <div className='project__main'>
          <h2 className='project__title'>{aboutProjectData.title}</h2>
          <p className='project__line'></p>
        </div>
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


// function AboutProject(){
//     const AboutProjectTitle = 'О проекте'
//     const DiplomAct = 'Дипломный проект включал 5 этапов'
//     const DiplomPlan= 'Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.'
//     const DiplomTime = 'Дипломный проект включал 5 этапов'
//     const DiplomSubtitle = 'Дипломный проект включал 5 этапов'
//     const OneWeek = '1 неделя'
//     const Foureek = '4 недели'
//     const Back = 'Back-end'
//     const Front = 'Front-end'

//     return(
// <section className='project'>
//       <div className='project__main'>
//         <h2 className='project__title'>{AboutProjectTitle}</h2>
//         <span className='project__line'></span>
//         </div>
//         <div className='project__content'>
//         <div className='project__text'>
//         <h3 className='project__title'>{DiplomAct}</h3>
//         <p className='project__subtotle'>{DiplomPlan}</p>
//         </div>
//         <div className='project__text'>
//         <h3 className='project__title'>{DiplomTime}</h3>
//         <p className='project__subtotle'>{DiplomSubtitle}</p>
//         </div>
//         <div className='project__time'>
{/* <div className='project__tb'>
           <p className='project__week'>{OneWeek}</p>
           <p className='project__name'>{Back}</p>
</div>
<div className='project__tb'>
          <p className='project__weeks'>{Foureek}</p>
          <p className='project__name'>{Back}</p>
     </div> */}
//         <div className='project__develop'>
//             <p className='project__name'>{Back}</p>
//             <p className='project__name'>{Front}</p>
//         </div>
//         </div>
        

//     </section>
//     )
// }

// export default AboutProject;