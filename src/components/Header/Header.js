import React from 'react';
import './Header.css'
import logo from '../../images/logo/header_logo.svg'


function Header(){
    return(
        <header className='header'>
          <img src={logo} alt='Logo' className='header__logo'/>
        <nav className='header__nav'>
         <p className='header__text'>Регистрация</p>
         <button className='header__button'><p className='header__text-button'>Войти</p></button>
        </nav>
        </header>
    )
}

export default Header;