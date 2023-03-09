import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupNewPlace({isOpen, onClose}) {
  return (
    <PopupWithForm 
    isOpen={isOpen}
    onClose={onClose}
    name='new-card' 
    title='Новое место' 
    buttonText='Создать'>
      <input id="new-card-name" type="text" name="name" className="popup__field popup__field_type_name" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required />
      <span id="new-card-name-error" className="popup__error popup__error_active"></span>
      <input id="new-card-src" name="link" className="popup__field popup__field_type_src" placeholder="Ссылка на картинку" autoComplete="off" type="url" required />
      <span id="new-card-src-error" className="popup__error popup__error_active"></span>
    </PopupWithForm> 
  )
}

export default PopupNewPlace;