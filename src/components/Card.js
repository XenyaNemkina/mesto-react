import React from "react";

function Card({card, onCardClick}) {
  
function handleCardClick() {
  onCardClick(card);
}

  return (
    <div className="element-template" key={card.id}>
      <li className="element">
        <img className="element__img" src={card.link} alt={card.name} onClick={handleCardClick} />
          <div className="element__title">
            <h2 className="element__text">{card.name}</h2>
            <div className="element__likes"> 
              <button className="element__like" type="button"></button>
              <p className="element__counter">{card.likes.length}</p>
            </div>
          <button className="element__basket" type="button"></button>
        </div>
      </li>
    </div>
  );
};

export default Card;