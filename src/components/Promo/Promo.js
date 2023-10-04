import React from 'react';
import './Promo.css';
import { PromoData } from '../../utils/constants';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__logo"></div>
        <h1 className="promo__title">{PromoData.title}</h1>
      </div>
    </section>
  );
}

export default Promo;
