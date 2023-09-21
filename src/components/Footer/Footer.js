import React from 'react';
import './Footer.css'

const FooterData = {
  title: 'Учебный проект Яндекс.Практикум х BeatFilm.',
  year: '2023',
  text: 'Яндекс.Практикум',
  subtitle: 'Github',
  link: 'https://github.com/yandex-praktikum?tab=repositories',
  
};  

  function Footer() {

    return (
      <section className='footer'>
          <h2 className='footer__title'>{FooterData.title}</h2>
          <p className='footer__line'></p>
        <div className='footer__content'>
          <p className='footer__year'>&copy;{FooterData.year}</p>
          <ul className='footer__text'>
            <li className='footer__subtitle'>{FooterData.text}</li>
            <li><a href={FooterData.link} className='footer__link' target='_blank' rel='noopener noreferrer'>{FooterData.subtitle}</a></li>
          </ul>
        </div>
      </section>
    );
  }
       


export default Footer;