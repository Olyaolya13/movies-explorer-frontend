// import React, { useState } from 'react';
// import './SearchForm.css';
// import SearchLogo from '../../images/logo/searchLogo.svg';
// import SearchColorLogo from '../../images/logo/searchColorLogo.svg';
// import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

// function SearchForm() {
//   const [searchFilm, setSearchFilm] = useState('');

//   const SearchFormData = {
//     shortFilm: 'Короткометражки'
//   };

//   const handleInputChange = e => {
//     setSearchFilm(e.target.value);
//   };

//   const handleSubmit = () => {
//     console.log('fdv');
//   };

//   return (
//     <section className="search">
//       <form className="search__form" onSubmit={handleSubmit}>
//         <div className="search__content">
//           <div className="search__films">
//             <img src={SearchLogo} alt="Икона поиска" className="search__logo" />
//             <input
//               type="text"
//               placeholder="Фильм"
//               className="search__input"
//               value={searchFilm}
//               onChange={handleInputChange}
//               required
//             />
//             <button type="submit" className="search__submit">
//               <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
//             </button>
//           </div>
//           <div className="search__short-films">
//             <div className="search__checkbox">
//               <FilterCheckbox />
//               <p className="search__text">{SearchFormData.shortFilm}</p>
//             </div>
//           </div>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default SearchForm;

import React, { useState } from 'react';
import './SearchForm.css';
import SearchLogo from '../../images/logo/searchLogo.svg';
import SearchColorLogo from '../../images/logo/searchColorLogo.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  const [searchFilm, setSearchFilm] = useState('');
  const [searchError, setSearchError] = useState(false);

  const SearchFormData = {
    shortFilm: 'Короткометражки'
  };

  const handleInputChange = e => {
    setSearchFilm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchFilm) {
      console.log('err');
      setSearchError(true);
    } else {
      console.log('ok');
      setSearchError(false);
    }
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <div className="search__content">
          <div className="search__films">
            <img src={SearchLogo} alt="Икона поиска" className="search__logo" />
            <input
              type="text"
              placeholder={searchError ? 'Нужно ввести ключевое слово' : 'Фильм'}
              className="search__input"
              value={searchFilm}
              onChange={handleInputChange}
              required
            />
            {searchError && <span className="search__error">{searchError}</span>}
            <button type="submit" className="search__submit">
              <img src={SearchColorLogo} alt="Икона поиска" className="search__color-logo" />
            </button>
          </div>
          <div className="search__short-films">
            <div className="search__checkbox">
              <FilterCheckbox />
              <p className="search__text">{SearchFormData.shortFilm}</p>
            </div>
          </div>
        </div>
      </form>
      {/* {searchError && <span className="search__error">{searchError}</span>} */}
    </section>
  );
}

export default SearchForm;
