import profile__img from './images/load.gif'
import React from 'react'
import Api from '../utils/Api'
import Card from './Card.jsx'



function Main(props) {
  const [userName, setUserName] = React.useState('Загрузка...')
  const [userDescription, setUserDescription] = React.useState('Загрузка...')
  const [userAvatar, setUserAvatar] = React.useState(profile__img)
  const [cards, setCards] = React.useState([])

  React.useEffect( () => {
    Api.getNowData().then( data => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })

    Api.getCardsFromServer().then( data => {
      setCards(data)
    })
  }, [])

  return (
      <main>
        <section className="profile">
          <div className="profile__container">
            <img className="profile__img" alt="Изображение профиля" src={userAvatar} />
            <div className="profile__overlay">
              <button
                className="profile__edit"
                type="button"
                onClick={props.onEditAvatar}>
              </button>
            </div>
          </div>
          <div className="profile-char">
            <div className="profile-char__discr">
              <div className="profile-char__info">
                <h1 id="text-up" className="profile-char__title">
                  {userName}
                </h1>
                <button
                  className="profile-char__edit"
                  type="button"
                  onClick={props.onEditProfile}>
                </button>
              </div>
              <p id="text-dw" className="profile-char__subtitle">
                {userDescription}
              </p>
            </div>
            <button
              className="profile-char__add"
              type="button"
              onClick={props.onAddPlace}>
            </button>
          </div>
        </section>

        <section className="places">
          {
            cards.map( (card) => <Card key={card._id} name={card.name} img={card.link} likes={card.likes}  />)
          }
        </section>
    </main>
  )
}

export default Main;
