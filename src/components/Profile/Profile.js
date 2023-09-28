import './Profile.css';
import Navigation from '../Navigation/Navigation';

const ProfileData = {
  edit: 'Редактировать',
  signout: 'Выйти из аккаунта'
};

function Profile({ onLoggedOut }) {
  return (
    <section className="profile">
      <Navigation />
      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <div className="profile__text">
          <p className="profile__subtitle">Имя</p>
          <p className="profile__subtitle">Виталий</p>
        </div>
        <p className="profile__line"></p>
        <div className="profile__text">
          <p className="profile__subtitle">E-mail</p>
          <p className="profile__subtitle">pochta@yandex.ru</p>
        </div>
        <p className="profile__edit">{ProfileData.edit}</p>
        <div>
          <button className="profile__signout" onClick={onLoggedOut}>
            {ProfileData.signout}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Profile;
