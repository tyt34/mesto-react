import ImagePopup from './ImagePopup.jsx'
import React from 'react'

function Card(props) {
  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    link: '',
  })

  function createAltImg(specialWord) {
    return 'Изображение места: "'+specialWord+'"'
  }

  function handleClick() {
    console.log(' -> ')
    console.log(props)
    setSelectedCard({
      name: props.name,
      img: props.img,
    })
  }

  function closeAllPopups() {
    setSelectedCard(false)
  }

  return (
    <>
    <article className="place" onClick={handleClick}>
      <img className="place__img" src={props.img} alt={createAltImg(props.name)} />
      <button className="place__del" type="button"></button>
      <div className="place__option">
          <h2 className="place__title">{props.name}</h2>
          <div className="place__like-container">
            <button className="place__like" type="button"></button>
            <p className="place__num">{props.likes.length}</p>
          </div>
      </div>
    </article>

    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  )
}

export default Card
