import React from 'react';
import './Footer.css'

  
  function Footer() {
    const footerTitle = 'Учебный проект Яндекс.Практикум х BeatFilm.';
    const footerYear = '2023';
    const YandexPractikum = 'Яндекс.Практикум';
    const Github = 'Github'
    const GithubSite = 'https://github.com/yandex-praktikum?tab=repositories'

    return (
      <section className='footer'>
          <h2 className='footer__title'>{footerTitle}</h2>
          <p className='footer__line'></p>
        <div className='footer__content'>
          <p className='footer__year'>&copy;{footerYear}</p>
          <ul className='footer__text'>
            <li className='footer__subtitle'>{YandexPractikum}</li>
            <li><a href={GithubSite} className='footer__link' target='_blank' rel='noopener noreferrer'>{Github}</a></li>
          </ul>
        </div>
      </section>
    );
  }
       


export default Footer;