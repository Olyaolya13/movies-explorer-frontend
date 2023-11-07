class MovieApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  // Проверка ответа сервера
  _checkResponseServer(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.error(`Ошибка: ${res.status}`);
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  // Универсальный метод запроса с проверкой ответа
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

  // Загрузка информации о фильмах
  getMovies(token) {
    return this._request(this._baseUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}

const moviesApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies'
});

export default moviesApi;
