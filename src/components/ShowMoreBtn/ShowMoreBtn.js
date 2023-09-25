import React from 'react';
import './ShowMoreBtn.css';

const ShowMoreBtnData = {
  title: 'Ещё'
};

function ShowMoreBtn() {
  return (
    <div className="show-button__section">
      <button className="show-button">{ShowMoreBtnData.title}</button>
    </div>
  );
}

export default ShowMoreBtn;
