import React, { useEffect, useState, useContext } from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormValidation from '../../hooks/FormValidation';
import Navigation from '../Navigation/Navigation';
import EditButton from '../EditBtn/EditBtn';

function Profile(props) {
  const currentUser = useContext(CurrentUserContext);

  const ProfileData = {
    title: 'Имя',
    email: 'E-mail'
  };

  const { value, error, isValid, handleChange, resetValidation } = useFormValidation();

  const [isEditing, setIsEditing] = useState(false);
  const [preValue, setPreValue] = useState({});

  const handleEditBtnClick = () => {
    setIsEditing(true);
    setPreValue({ ...value });
  };

  const handleSaveBtnClick = () => {
    props.onSave(value);
    setIsEditing(false);
  };

  const handleCancel = () => {
    resetValidation(preValue);
    setIsEditing(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid || isEditing) {
      props.onSave(value);
    }
    resetValidation();
    props.setError('');
  }

  useEffect(() => {
    if (!isValid && !isEditing) {
      resetValidation({
        name: currentUser?.name || '',
        email: currentUser?.email || ''
      });
    }

    if (!isEditing) {
      setPreValue({ ...value });
      resetValidation({
        name: currentUser?.name || '',
        email: currentUser?.email || ''
      });
    }
  }, [isValid, currentUser, resetValidation, isEditing, value]);

  return (
    <>
      <Navigation />
      <section className="profile">
        <div className="profile__content">
          <h2 className="profile__title">Привет, {currentUser?.name || ''}!</h2>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <label className="profile__label profile__subtitle">
              {ProfileData.title}
              <div className="profile__label-error">
                <input
                  name="name"
                  type="text"
                  value={value.name}
                  placeholder="Введите имя"
                  minLength="2"
                  maxLength="20"
                  onChange={handleChange}
                  className={`profile__input ${error.name ? 'profile__input-text-error' : ''}`}
                  required
                  disabled={!isEditing}
                />
                <span
                  className={`profile__input-error ${
                    error.name ? 'profile__input-error_visible' : ''
                  }`}
                >
                  {error.name}
                </span>
              </div>
            </label>
            <label className="profile__label profile__subtitle">
              {ProfileData.email}
              <div className="profile__label-error">
                <input
                  name="email"
                  type="email"
                  value={value.email}
                  placeholder="Введите е-mail"
                  minLength="6"
                  maxLength="20"
                  onChange={handleChange}
                  className={`profile__input ${error.email ? 'profile__input-text-error' : ''}`}
                  required
                  disabled={!isEditing}
                />
                <span
                  className={`profile__input-error ${
                    error.email ? 'profile__input-error_visible' : ''
                  }`}
                >
                  {error.email}
                </span>
              </div>
            </label>
            <div className="profile__btn">
              <span className="profile__error-message">{props.error}</span>
              <EditButton
                isEditing={isEditing}
                onEditClick={handleEditBtnClick}
                onLoggedOut={props.onLoggedOut}
                isValid={isValid}
                setIsSend={props.setIsSend}
                isSend={props.isSend}
                onSubmit={handleSaveBtnClick}
                onCancelClick={handleCancel}
                error={props.error}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
