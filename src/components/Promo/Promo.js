import React from 'react';
import './Promo.css';
import { PromoData } from '../../utils/constants';
import PromoImage from '../../images/Promo-image.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <img src={PromoImage} alt="Логотип Практикум" className="promo__logo" />
        <h1 className="promo__title">{PromoData.title}</h1>
      </div>
    </section>
  );
}

export default Promo;
