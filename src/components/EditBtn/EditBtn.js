import React from 'react';
import './EditBtn.css';

function EditButton(props) {
  const buttonTexts = {
    edit: 'Редактировать',
    save: 'Сохранить',
    signout: 'Выйти из аккаунта'
  };
  if (props.isEditing) {
    return (
      <button type="button" className="btn-profile__save" onClick={props.onSaveClick}>
        {buttonTexts.save}
      </button>
    );
  } else {
    return (
      <>
        <button type="button" className="btn-profile__edit" onClick={props.onEditClick}>
          {buttonTexts.edit}
        </button>
        <button type="submit" className="btn-profile__signout" onClick={props.onLoggedOut}>
          {buttonTexts.signout}
        </button>
      </>
    );
  }
}

export default EditButton;
