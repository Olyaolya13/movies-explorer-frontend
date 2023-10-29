import { useState, useEffect } from 'react';

function useVisibleCardsMovies() {
  const [visibleCardsRows, setVisibleCardsRows] = useState(0); //ряды
  const [visibleCardsMovies, setVisibleCardsMovies] = useState(0); // кол-ыо карточек
  const [stepAddCardMovies, setStepAddCardMovies] = useState(0);

  useEffect(() => {
    let timeout;

    const handleWindowResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1280) {
          setVisibleCardsRows(4);
          setVisibleCardsMovies(4);
          setStepAddCardMovies(1);
        } else if (screenWidth >= 970) {
          setVisibleCardsRows(3);
          setVisibleCardsMovies(3);
          setStepAddCardMovies(1);
        } else if (screenWidth >= 768) {
          setVisibleCardsRows(4);
          setVisibleCardsMovies(2);
          setStepAddCardMovies(1);
        } else if (screenWidth >= 320) {
          setVisibleCardsRows(5);
          setVisibleCardsMovies(1);
          setStepAddCardMovies(2);
        }
      }, 300);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { visibleCardsRows, visibleCardsMovies, stepAddCardMovies, setVisibleCardsRows };
}

export default useVisibleCardsMovies;
