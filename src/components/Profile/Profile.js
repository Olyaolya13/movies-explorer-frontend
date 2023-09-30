import './Profile.css';
import Navigation from '../Navigation/Navigation';
import { ProfileData } from '../../utils/constants';

function Profile({ onLoggedOut }) {
  return (
    <>
      <Navigation />
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <div className="profile__text">
            <p className="profile__subtitle">{ProfileData.title}</p>
            <p className="profile__subtitle">Виталий</p>
          </div>
          <p className="profile__line"></p>
          <div className="profile__text">
            <p className="profile__subtitle">{ProfileData.email}</p>
            <p className="profile__subtitle">pochta@yandex.ru</p>
          </div>
          <div className="profile__button">
            <button className="profile__edit">{ProfileData.edit}</button>
            <button className="profile__signout" onClick={onLoggedOut}>
              {ProfileData.signout}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
