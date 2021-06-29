import React from 'react'

function ImagePopup(props) {
  return (
    <div id="popup-img" className={ props.isOpen ? 'popup-img popup popup_open' : 'popup-img popup'}>
      <div className="popup-img__container">

        <img className="popup-img__img" alt="Test" src="images/logo.abb64ac93f95638a2598.svg" />

        <p className="popup-img__title">Test</p>
        <button id="popup-img__close" className="popup__close" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default ImagePopup
