import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedMoviesData } from '../../utils/constants';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
      {/* <MoviesCardList movies={savedMoviesData} /> */}
    </>
  );
}

export default Movies;
