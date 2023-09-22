import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="footer">
      <h2 className="footer__title">{}</h2>
      <p className="footer__line"></p>
      <div className="footer__content">
        <p className="footer__year">&copy;{}</p>
        <ul className="footer__text">
          <li className="footer__subtitle">{}</li>
          <li>
            <a href="" className="footer__link" target="_blank" rel="noopener noreferrer">
              {}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SearchForm;
