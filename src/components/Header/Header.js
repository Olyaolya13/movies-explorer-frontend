import React from 'react';
import './Header.css'
import logo from '../../images/logo/header_logo.svg'


function Header(){
  const LoginText = 'Войти'
  const RegisterText = 'Регистрация'

    return(
        <header className='header'>
          <img src={logo} alt='Logo' className='header__logo'/>
        <nav className='header__nav'>
         <p className='header__text'>{RegisterText}</p>
         <button className='header__button'><p className='header__text-button'>{LoginText}</p></button>
        </nav>
        </header>
    )
}

export default Header;