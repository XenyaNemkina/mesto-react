import React, { useEffect, useState } from "react"; 
import Header from "./Header.js"; 
import Main from "./Main.js"; 
import Footer from "./Footer.js"; 
import PopupNewAvatar from "./PopupNewAvatar.js"; 
import PopupNewPlace from "./PopupNewPlace.js"; 
import PopupUserInfo from "./PopupUserInfo.js"; 
import ImagePopup from "./ImagePopup.js"; 
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { apiNew } from "../utils/api.js";

function App() { 
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen]=React.useState(false); 
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen]=React.useState(false); 
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen]=React.useState(false); 
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  useEffect(() => {
    Promise.all([apiNew.getUserInfo(), apiNew.getInitialCards()])
      .then(([userData, data]) => {
        setCurrentUser(userData);
        setCards(data); 
      })
      .catch((err) => {
        console.log(err);
      })
    }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    apiNew.changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch((err) => {
      console.log(err);
    })
  } 

  function handleCardDelete(card) {
    apiNew.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((i) => i._id !== card._id))
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleUpdateUser({userData}) {
    apiNew.setUserInfo({userData})
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

function handleUpdateAvatar({avatar}) {
  apiNew.editAvatar(avatar)
    .then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
}

  return ( 
<div style={{backgroundColor: 'black'}}> 
<CurrentUserContext.Provider value={currentUser}>
  <Header /> 
  <Main 
    cards={cards}
    onEditProfile={handleEditProfileClick} 
    onAddPlace={handleAddPlaceClick} 
    onEditAvatar={handleEditAvatarClick} 
    onCardClick={handleCardClick} 
    onCardLike={handleCardLike} 
    onCardDelete={handleCardDelete}
    /> 
  <PopupUserInfo  
    isOpen={isEditProfilePopupOpen} 
    onClose={closeAllPopups} 
    onUpdateUser={handleUpdateUser}
  />  
  <PopupNewPlace 
    isOpen={isAddPlacePopupOpen} 
    onClose={closeAllPopups} 
  /> 
  <PopupNewAvatar 
     isOpen={isEditAvatarPopupOpen} 
     onClose={closeAllPopups} 
     onUpdateAvatar={handleUpdateAvatar}
  /> 
  <ImagePopup card={selectedCard} onClose={closeAllPopups} /> 
  <Footer /> 
  </CurrentUserContext.Provider>
</div> 
); 
} 

export default App; 

 