class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  //проверка на подключение сервера
  _checkResponseServer = res => {
    if (res.ok) {
      return res.json();
    } else {
      return res.json().then(data => {
        return Promise.reject({
          statusCode: res.status,
          error: data.message
        });
      });
    }
  };
  _request(url, options) {
    console.log(`Отправка запроса: ${url}`);
    return fetch(url, options)
      .then(response => {
        console.log(`Получен ответ: ${url}`, response);
        return this._checkResponseServer(response);
      })
      .catch(error => {
        console.error(`Ошибка при выполнении запроса: ${url}`, error);
        throw error;
      });
  }

  //Загрузка информации о пользователе с сервера
  getUserInfo() {
    return this._request(`${this._baseUrl}users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  //обновление данных пользователя
  editProfile(user) {
    return this._request(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        name: user.name
      })
    });
  }

  //Сохраненные фильмы
  getSavedMovies() {
    return this._request(`${this._baseUrl}movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }

  //добавление нового фильма
  addSavedMovie(movie) {
    return this._request(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        movieId: movie.movieId,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    });
  }

  //удаление сохраненного фильма
  removeSavedMovie(movieId) {
    return this._request(`${this._baseUrl}movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
}

const api = new MainApi({
  baseUrl: 'https://api.choosemovie.nomoredomainsrocks.ru/',
  // baseUrl: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json'
  }
});
export default api;
