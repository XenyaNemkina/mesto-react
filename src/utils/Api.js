export class Api {
  constructor(options) { }

  getUserInfo() {
    return fetch('https://nomoreparties.co/v1/cohort-59/users/me', { headers: {
      authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c'
    }
  })
  .then(res => res.ok ? res.json() : Promise.reject()) 
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', { headers: {
      authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c'
    }
  })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }
  
  //добавление информации о пользователе
  editUserInfo(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/users/me', {
      method: 'PATCH',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about, 
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }

//сменить аватар
  editAvatar(data) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/users/me/avatar', {
      method: 'PATCH',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.link,
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }

  addCard(name, link) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards', {
      method: 'POST',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }

  deleteCard(cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/' + cardId, {
      method: 'DELETE',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
      },
     })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }

  setLike(cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/' + cardId + '/likes', {
      method: 'PUT',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
      },
     })
    .then(res => res.ok ? res.json() : Promise.reject()) 
  }

  deleteLike(cardId) {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-59/cards/' + cardId + '/likes', {
      method: 'DELETE',
      headers: {
        authorization: 'a7661955-a700-47ad-9b00-f16ac56ab61c',
      },
     })
    .then(res => res.ok ? res.json() : Promise.reject()) 
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