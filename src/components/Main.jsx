import profileImg from '../images/load.gif' // переменная должна быть в camelCase
import React from 'react'
import Api from '../utils/Api'
import Card from './Card.jsx'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main(props) {
  //static
  const currenUser = React.useContext(CurrentUserContext)
  //console.log(' = = = > ',currenUser);

  //const [userName, setUserName] = React.useState('Загрузка...')
  //const [userDescription, setUserDescription] = React.useState('Загрузка...')
  //const [userAvatar, setUserAvatar] = React.useState(profileImg)
  const [cards, setCards] = React.useState([])

  React.useEffect( () => {
    /*
    Api.getNowData().then( data => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    }).catch(
      (err) => console.log(err)
    )
    */
    Api.getCardsFromServer().then( data => {
      setCards(data)
    }).catch(
      (err) => console.log(err)
    )
  }, [])

  return (
      <main>
        <section className="profile">
          <div className="profile__container">
            <img className="profile__img" alt="Изображение профиля" src={currenUser.avatar} />
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
                  {currenUser.name}
                </h1>
                <button
                  className="profile-char__edit"
                  type="button"
                  onClick={props.onEditProfile}>
                </button>
              </div>
              <p id="text-dw" className="profile-char__subtitle">
                {currenUser.about}
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
            cards.map( (card) => (<Card
                                    key={card._id}
                                    name={card.name}
                                    img={card.link}
                                    likes={card.likes}
                                    onCardClick={props.onCardClick}
                                  />)
            )
          } {/*// любой JSX нужно оборачивать в круглые скобки*/}
        </section>
    </main>
  )
}

export default Main;
