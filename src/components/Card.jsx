//import ImagePopup from './ImagePopup.jsx'
import React from 'react'

function Card(props) {

  function createAltImg(specialWord) {
    return 'Изображение места: "'+specialWord+'"'
  }

  function handleClick() {

    props.onCardClick(props)
  }

  return (
    <>
      <article className="place" >
        <img
          className="place__img"
          src={props.img}
          onClick={handleClick}
          alt={createAltImg(props.name)
        } />
        <button className="place__del" type="button"></button>
        <div className="place__option">
            <h2 className="place__title">{props.name}</h2>
            <div className="place__like-container">
              <button className="place__like" type="button"></button>
              <p className="place__num">{props.likes.length}</p>
            </div>
        </div>
      </article>
    </>
  )
}

export default Card
