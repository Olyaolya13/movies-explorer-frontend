import SearchForm from '../SearchForm/SearchForm';
import { MoviesCardListData } from '../../utils/constants';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={MoviesCardListData} />
      {/* <Preloader /> */}
    </>
  );
}

export default Movies;
