import React, { useEffect, useState } from "react";
import api from "../utils/api.js";
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, data]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(data);
      })
      .catch((err) => {
      console.log(err); 
      }); 
  },[]);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatarbtn" type="button" onClick={onEditAvatar}></button>
        <img className="profile__avatar" src={`${userAvatar}`} alt="фото профиля" />
        <div className="info">
          <div className="info__text">
            <h1 className="info__name">{`${userName}`}</h1>
            <p className="info__profession">{`${userDescription}`}</p>
          </div>
          <button className="info__button" type="button" onClick={onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} link={card.link} name={card.name} onCardClick={onCardClick} />
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default Main;