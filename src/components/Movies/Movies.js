import SearchForm from '../SearchForm/SearchForm';
import { MoviesCardListData } from '../../utils/constants';
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import MoviesCard from '../MoviesCard/MoviesCard';
// import Portfolio from '../Portfolio/Portfolio';

function Movies() {
  return (
    <>
      <SearchForm />
      <MoviesCardList movies={MoviesCardListData} />
      {/* <FilterCheckbox /> */}
      {/* <Preloader /> */}
      {/* <MoviesCardList />
      <MoviesCard />
      <Portfolio />  */}
    </>
  );
}

export default Movies;
