//import './App.css';
//import logo from './images/logo.svg'
//import profile__img from './images/load.gif'
//import ReactDom from 'react-dom'

//import profile__img from './images/logo.png'
import profile__img from './images/load.gif'
import React from 'react'

//import './Test.css';
//import Test from './test.jsx'
import PopupWithForm from './PopupWithForm.jsx'
import Api from '../utils/Api'


function Main(props) {
  //console.log('main props -> ', props)
  const [userName, setUserName] = React.useState('Загрузка...')
  const [userDescription, setUserDescription] = React.useState('Загрузка...')
  const [userAvatar, setUserAvatar] = React.useState(profile__img)

  const [cards, setCards] = React.useState([])

  React.useEffect( () => {
    //console.log(' M M ount ')
    Api.getNowData().then( data => {
      //console.log(data)
      //return data
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
      //profile__img = userAvatar
      //userDescription = data.about
      //userAvatar = data.avatar
    })
    /*
    Api.getCardsFromServer().then( data => {
      console.log(data)
      setCards(data)
    })
    */
    //profile__img = userAvatar
  }, [])

  //let userName
  //let userDescription
  //let userAvatar



  //console.log(' 1) ',userName,' 2) ',userDescription,' 3) ',userAvatar)
  //console.log(Api)

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

        </section>
    </main>
  )
}

export default Main;
