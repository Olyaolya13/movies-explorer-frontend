import React from 'react';
import './Promo.css'
import PromoImage from '../../images/Promo-image.svg'


function Promo(){
    const PromoText = 'Учебный проект студента факультета Веб-разработки.'
    return(
        <section className='promo'>
<div className='promo__container'>
    <img src={PromoImage} alt='Логотип Практикум' className='promo_logo'/>
    <h1 className='promo__title'>{PromoText}</h1>
</div>
        </section>
    )
}

export default Promo;