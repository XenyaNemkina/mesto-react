import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupUserInfo({isOpen, onClose}) {
  return (
    <PopupWithForm 
    isOpen={isOpen}
    onClose={onClose}
    name='profile' 
    title='Редактировать профиль' 
    buttonText='Сохранить'>
      <input id="name" type="text" name="name" className="popup__field popup__field_type_nickname" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required />
      <span id="name-error" className="popup__error popup__error_active"></span>
      <input id="prof" type="text" name="about" className="popup__field popup__field_type_prof" placeholder="О себе" autoComplete="off" minLength="2" maxLength="200" required />
      <span id="prof-error" className="popup__error popup__error_active"></span>
    </PopupWithForm> 
  )
}

export default PopupUserInfo;