import { React } from 'react';
import './FilterCheckbox.css';
import OffButton from '../../images/logo/offTumb.svg';
import OnButton from '../../images/logo/onTumb.svg';

function FilterCheckbox(props) {
  console.log(props);
  return (
    <section className="checkbox">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={props.isShortFilm}
          onChange={props.onCheck}
          className="checkbox__input"
        />
        <img
          src={props.isShortFilm ? OnButton : OffButton}
          alt="Кнопка включения"
          className="checkbox__button"
        />
      </label>
    </section>
  );
}

export default FilterCheckbox;
