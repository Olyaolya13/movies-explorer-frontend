import { useState } from 'react';
import './Profile.css';
import Navigation from '../Navigation/Navigation';
import { ProfileData } from '../../utils/constants';

function Profile({ onLoggedOut }) {
  const [userName, setUserName] = useState('Виталий');
  const [email, setEmail] = useState('pochta@yandex.ru');
  const [editBtn, setEditBtn] = useState(false);

  function handleChangeUserName(evt) {
    setUserName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleEditBtnChange() {
    setEditBtn(true);
  }
  function handleDelEditBtnChange() {
    setEditBtn(false);
  }

  return (
    <>
      <Navigation />
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form">
            <label className="profile__text profile__subtitle">
              {ProfileData.title}
              <input
                id="userName"
                name="userName"
                type="text"
                value={userName}
                onChange={handleChangeUserName}
                className="profile__input"
                required
                disabled={!editBtn}
              />
            </label>
            <p className="profile__line"></p>
            <label className="profile__text profile__subtitle">
              {ProfileData.email}
              <input
                id="Email"
                name="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="profile__input"
                required
                disabled={!editBtn}
              />
            </label>
          </form>
          <div className="profile__button">
            {editBtn ? (
              <button className="profile__save" onClick={handleDelEditBtnChange}>
                {ProfileData.save}
              </button>
            ) : (
              <>
                <button className="profile__edit" onClick={handleEditBtnChange}>
                  {ProfileData.edit}
                </button>
                <button className="profile__signout" onClick={onLoggedOut}>
                  {ProfileData.signout}
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
