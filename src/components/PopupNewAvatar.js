import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupNewAvatar({isOpen, onClose}) {
  return (
    <PopupWithForm 
    isOpen={isOpen}
    onClose={onClose}
    name='new-avatar' 
    title='Обновить аватар' 
    buttonText='Сохранить'>
      <input id="avatar" name="link" className="popup__field popup__field_type_src" placeholder="Ссылка на аватар" autoComplete="off" type="url" required />
      <span id="avatar-error" className="popup__error popup__error_active"></span>
    </PopupWithForm> 
  )
}

export default PopupNewAvatar;