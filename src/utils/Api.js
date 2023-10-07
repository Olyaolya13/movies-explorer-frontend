class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  //проверка на подключение сервера
  _checkResponseServer(res) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  //универсальный метод запроса с проверкой ответа
  _request(url, options) {
    return fetch(url, options).then(this._checkResponseServer);
  }

  //Загрузка информации о пользователе с сервера
  getUserInfo(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  //обновление данных пользователя
  editProfile(user, token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: user.email,
        name: user.name
      })
    });
  }

  //Сохраненные фильмы
  getSavedMovies(token) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  //добавление новой карточки
  addNewMovie(element, token) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: element.country,
        director: element.director,
        duration: element.duration,
        year: element.year,
        description: element.description,
        image: element.image,
        trailer: element.trailer,
        nameRU: element.nameRU,
        nameEN: element.nameEN,
        thumbnail: element.thumbnail,
        movieId: element.movieId
      })
    });
  }

  //удаление сохраненного фильма
  removeSavedMovie(movieId, token) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.choosemovie.nomoredomainsrocks.ru'
});
export default api;
