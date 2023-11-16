class MovieApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponseServer(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.error(`Ошибка: ${res.status}`);
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

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

  getMovies() {
    return this._request(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

const moviesApi = new MovieApi({
  baseUrl: 'https://api.nomoreparties.co'
});

export default moviesApi;
