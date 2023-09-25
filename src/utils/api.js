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
  //добавление фильма
  addNewMovieSaved(movieId) {
    return this._request(`${this._baseUrl}/saved-movies/${movieId}`, {
      method: 'PUT'
    });
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000'
  // headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //       'Content-Type': 'application/json'
  //     }
});
export default api;
