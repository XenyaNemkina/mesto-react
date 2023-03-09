import React from "react";

function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen ? "popup_is-opened" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`${props.name}`}>
           {props.children}
          <button type="submit" className="popup__save popup__save_disabled" disabled>{props.buttonText}</button>
        </form>
      </div>
      </section>
  )
}

export default PopupWithForm;