import React from 'react';
import { NotFoundPageData } from '../../utils/constants';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__title">{NotFoundPageData.number}</h2>
        <p className="not-found__subtitle">{NotFoundPageData.text}</p>
        <Link to="/">
          <button className="not-found__button">{NotFoundPageData.buttonText}</button>
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
