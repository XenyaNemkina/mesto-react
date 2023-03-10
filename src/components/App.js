import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupNewAvatar from "./PopupNewAvatar.js";
import PopupNewPlace from "./PopupNewPlace.js";
import PopupUserInfo from "./PopupUserInfo.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {setIsEditProfilePopupOpen("popup_is-opened")};
  const handleAddPlaceClick = () => {setIsAddPlacePopupOpen("popup_is-opened")};
  const handleEditAvatarClick = () => {setIsEditAvatarPopupOpen("popup_is-opened")};
  const handleCardClick = (card) => {setSelectedCard(card)};
  const closeAllPopups = () => { 
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }
  return (
<div style={{backgroundColor: 'black'}}>
  <Header />
  <Main
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={handleCardClick} 
    />
  <PopupUserInfo 
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
  /> 
  <PopupNewPlace
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
  />
  <PopupNewAvatar
     isOpen={isEditAvatarPopupOpen}
     onClose={closeAllPopups}
  />
  <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  <Footer />
</div>

);
}

export default App;
