class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
   }

   _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  }  

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
  .then(this._getResponseData) 
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
    .then(this._getResponseData) 
  }
  
  //добавление информации о пользователе
  editUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about, 
      })
    })
    .then(this._getResponseData) 
  }

//сменить аватар
  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      })
    })
    .then(this._getResponseData) 
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._getResponseData) 
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/` + cardId, {
      method: 'DELETE',
      headers: this._headers,
     })
    .then(this._getResponseData) 
  }

  setLike(cardId) {
    return fetch(`${this._baseUrl}/cards/` + cardId + '/likes', {
      method: 'PUT',
      headers: this._headers,
     })
    .then(this._getResponseData) 
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/` + cardId + '/likes', {
      method: 'DELETE',
      headers: this._headers,
     })
    .then(this._getResponseData) 
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-59',
  headers: {
    authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
    'Content-Type': 'application/json'
  }
}); 

export default api;