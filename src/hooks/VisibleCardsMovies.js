import { useState, useEffect } from 'react';

function useVisibleCardsMovies() {
  const [visibleCardsMovies, setVisibleCardsMovies] = useState(16);
  const [incrementStep, setIncrementStep] = useState(4);

  useEffect(() => {
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 1280) {
        setVisibleCardsMovies(16);
        setIncrementStep(4);
      } else if (screenWidth >= 768) {
        setVisibleCardsMovies(8);
        setIncrementStep(2);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setVisibleCardsMovies(5);
        setIncrementStep(2);
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { visibleCardsMovies, incrementStep, setVisibleCardsMovies }; //
}

export default useVisibleCardsMovies;
