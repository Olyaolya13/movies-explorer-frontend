import { React, useState } from 'react';
import './FilterCheckbox.css';
import OffButton from '../../images/logo/offTumb.svg';
import OnButton from '../../images/logo/onTumb.svg';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="checkbox">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox__input"
        />
        <img
          src={isChecked ? OnButton : OffButton}
          alt="Кнопка включения"
          className="checkbox__button"
        />
      </label>
    </section>
  );
}

export default FilterCheckbox;
