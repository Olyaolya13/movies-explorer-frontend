import { Link } from 'react-router-dom';
import Logo from '../../images/logo/header_logo.svg'
import './Profile.css'

const ProfileData = {
    edit:'Редактировать',
    signout: 'Выйти из аккаунта'
}

function Profile({ name, email }) {
    return (
      <section className="profile">
        <img src={Logo} alt="Логотип" className="profile__logo" />
        <div className="profile__content">
          <h2 className="profile__title">Привет, {name}!</h2>
          <div className="profile__text">
            <p className="profile__subtitle">Имя</p>
            <p className="profile__subtitle">{name}</p>
          </div>
          <p className="profile__line"></p>
          <div className="profile__text">
            <p className="profile__subtitle">E-mail</p>
            <p className="profile__subtitle">{email}</p>
          </div>
          <p className="profile__edit">{ProfileData.edit}</p>
          <div>
            <Link to="/" className="profile__link">
                <p className="profile__signout">
              {ProfileData.signout}
              </p>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  

export default Profile;
