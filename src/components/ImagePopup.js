import React from 'react'
import { useEffect, useState } from "react";

function ImagePopup( {card, onClose} ) {
  useEffect(() => {
    console.log(' start ')
    /*
    const close = (e) => {
      //console.log(e)
      if (e.keyCode === 27) {
        console.log(' esc ')
        onClose()
      }
      if (e.keyCode === 32) {
        console.log(' space ')
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
    */
  }, [])

  function createAltImg(specialWord) {
    return 'Изображение места: "'+specialWord+'"'
  }

  function click(e) {
    console.log(' e ', e)
  }

  return (
    <div
      id="popup-img"
      className={ card.name ? 'popup-img popup popup_open' : 'popup-img popup'}
    >
      <div className="popup-img__container">
        <img className="popup-img__img" alt={createAltImg(card.name)} src={card.img} />
        <p className="popup-img__title">{card.name}</p>
        <button
          id="popup-img__close"
          className="popup__close"
          onClick={onClose}
        >
        </button>
      </div>
    </div>
  )
}

export default ImagePopup

/*
onKeyDown={ (e) => {console.log('e ', e)}}
tabIndex="0"
*/
