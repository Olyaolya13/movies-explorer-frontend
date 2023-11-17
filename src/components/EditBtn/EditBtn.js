import './EditBtn.css';
import { EditButtonData } from '../../utils/constants';

function EditButton(props) {
  if (props.isEditing) {
    return (
      <>
        <button
          type="submit"
          className={`profile-btn__save ${props.isValid ? '' : 'profile-btn__save_disabled'}`}
          onClick={props.onSubmit}
          disabled={!props.isValid}
        >
          {props.isSend ? 'Отправка...' : EditButtonData.save}
        </button>
        <button type="button" className="profile-btn__cancel" onClick={props.onCancelClick}>
          {EditButtonData.cancel}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button type="button" className="profile-btn__edit" onClick={props.onEditClick}>
          {EditButtonData.edit}
        </button>
        <button type="submit" className="profile-btn__signout" onClick={props.onLoggedOut}>
          {EditButtonData.signout}
        </button>
      </>
    );
  }
}

export default EditButton;
