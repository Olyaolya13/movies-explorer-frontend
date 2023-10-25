export const BASE_URL = 'https://api.choosemovie.nomoredomainsrocks.ru';

const checkResponseServer = res => {
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

export const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, password, email })
  }).then(res => {
    return checkResponseServer(res);
  });
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res => {
    return checkResponseServer(res);
  });
};

export const checkToken = token => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }).then(res => {
    return checkResponseServer(res);
  });
};
