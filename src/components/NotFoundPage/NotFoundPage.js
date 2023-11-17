import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NotFoundPageData } from '../../utils/constants';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log('gg');
    navigate(-1);
  };

  return (
    <section className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">{NotFoundPageData.number}</h1>
        <p className="not-found__subtitle">{NotFoundPageData.text}</p>
        <button className="not-found__button" onClick={handleGoBack}>
          {NotFoundPageData.buttonText}
        </button>
      </div>
    </section>
  );
}

export default NotFoundPage;
