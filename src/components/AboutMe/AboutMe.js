import React from 'react';
import './AboutMe.css'
import Arrow from '../../images/arrow.svg'
import Photo from '../../images/Photo.svg'

const aboutMe = {
    title: 'Студент',
    stages: [
      {
        title: 'Ольга',
        subtitle: 'Фронтенд-разработчик, 30 лет',
        description: 'Я родилась в Москве, закончила факультет управления проектом в Синергии. У меня есть муж. Я люблю слушать музыку, а ещё увлекаюсь спортом. Недавно начала кодить. С 2019 года работала в компании «Северсталь». После того, как прошла курс по веб-разработке, начала заниматься фриланс-заказами и ушла с постоянной работы.',
        site: 'Github',
        githubLink: 'https://github.com/Olyaolya13',
      },
    ],
    about: 'Портфолио',
    skills: ['Статичный сайт', 'Адаптивный сайт', 'Одностраничное приложение'],
    skillsSite:['https://github.com/Olyaolya13/how-to-learn', 'https://github.com/Olyaolya13/Thalby', 'https://github.com/Olyaolya13/react-mesto-api-full-gha']
  };
  
  function AboutMe() {
    return (
      <section className='student'>
          <h2 className='student__title'>{aboutMe.title}</h2>
          <p className='student__line'></p>
        <div className='student__content'>
          {aboutMe.stages.map((stage, index) => (
            <div key={index}>
              <h2 className='student__subtitle'>{stage.title}</h2>
              <h3 className='student__text'>{stage.subtitle}</h3>
              <p className='student__about'>{stage.description}</p>
              <a href={stage.githubLink} className='student__site' target='_blank' rel='noopener noreferrer'>
              {stage.site}
              </a>
              
            </div>
          ))}
          <img src={Photo} alt="Фото студента" className='student__photo' />
        </div>
        <div className='student__portfolio'>
        <h3 className='student__portfolio-text'>{aboutMe.about}</h3>
          <ul className='student__skills'>
            {aboutMe.skills.map((skill,index) => (
              <li className='student__skill-name' key={index}>
                <div className='student__portfolio-arrow'>
                {skill}<a href={aboutMe.skillsSite[index]} target='_blank' rel='noopener noreferrer'><img src={Arrow} alt="Стрелочка" className='student__arrow' /></a>
                </div>
                {index === aboutMe.skills.length - 1 ? null : <p className='student__portfolio-line'></p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  

export default AboutMe;