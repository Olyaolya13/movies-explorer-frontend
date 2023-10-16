import './EditBtn.css';

function EditButton(props) {
  const buttonTexts = {
    edit: 'Редактировать',
    save: 'Сохранить',
    signout: 'Выйти из аккаунта'
  };

  if (props.isEditing) {
    return (
      <>
        <span className="profile__error-message">{props.error}</span>
        <button
          type="submit"
          className={`profile-btn__save ${props.isValid ? '' : 'profile-btn__save_disabled'}`}
          onClick={props.onSubmit}
          disabled={!props.isValid}
        >
          {props.isSend ? 'Отправка...' : buttonTexts.save}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type="button" className="profile-btn__edit" onClick={props.onEditClick}>
          {buttonTexts.edit}
        </button>
        <button type="submit" className="profile-btn__signout" onClick={props.onLoggedOut}>
          {buttonTexts.signout}
        </button>
      </>
    );
  }
}

export default EditButton;
