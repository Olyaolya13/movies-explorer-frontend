import React from 'react';
import './Portfolio.css'
import Arrow from '../../images/arrow.svg'

const PortfolioData = {
    about: 'Портфолио',
    skills: ['Статичный сайт', 'Адаптивный сайт', 'Одностраничное приложение'],
    skillsSite:['https://github.com/Olyaolya13/how-to-learn', 'https://github.com/Olyaolya13/Thalby', 'https://github.com/Olyaolya13/react-mesto-api-full-gha']
  };
  
  function Portfolio() {
    return (
      <section className='portfolio'>
        <h3 className='portfolio-title'>{PortfolioData.about}</h3>
          <ul className='portfolio__skills'>
            {PortfolioData.skills.map((skill,index) => (
              <li className='portfolio__skill-name' key={index}>
                <div className='portfolio-text'>
                {skill}<a href={PortfolioData.skillsSite[index]} target='_blank' rel='noopener noreferrer'><img src={Arrow} alt="Стрелочка" className='portfolio__arrow' /></a>
                </div>
                {index === PortfolioData.skills.length - 1 ? null : <p className='portfolio-line'></p>}
              </li>
            ))}
          </ul>
      </section>
    );
  }
  

export default Portfolio;