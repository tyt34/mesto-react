import React from 'react'
import Main from './Main'
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import profileImg from '../images/load.gif' // переменная должна быть в camelCase
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'


function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Загрузка...',
    about: 'Загрузка...',
    avatar: profileImg
  })

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)

  const [cards, setCards] = React.useState([])

  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    img:  '',
  })

  React.useEffect( () => {
    Promise.all([
      api.getCardsFromServer(),
      api.getUserInfo()
    ])
    .then( (values) => {
      setCards(values[0])
      setCurrentUser(values[1])
    })
    .catch(
      (err) => {
        console.log('1 Ошибка ===> ', err)
      }
    )
  }, [])

  const closeOnEsc = (e) => { // насколько это правильно?
    if (e.keyCode === 27) {
      closeAllPopups()
    }
  }

  const delPrevSpace = (e) => { // насколько это правильно?
    if (e.keyCode === 32) {
      e.preventDefault()
    }
  }

  function handleCardLikeDislike({likes, id}) {
    const isLiked = likes.some( (i) => {
      return i._id === currentUser._id
    })
    const method = isLiked ? 'DELETE' : 'PUT'
    api.changeLikeCardStatus(id, method).then( (newCard) => {
      setCards( (cards) => cards.map( (c) => c._id === id ? newCard : c))
    }).catch(
      (err) => {
        console.log('3 Ошибка ===> ', err)
      }
    )
  }

  function handleCardDelete({id}) {
    api.delCard(id).then( (newCard) => {
      const newArrCards = cards.filter( c => c._id !== id )
      setCards(newArrCards)
    }).catch(
      (err) => {
        console.log('5 Ошибка ===> ', err)
      }
    )
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
    window.addEventListener('keydown', closeOnEsc)
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
    window.addEventListener('keydown', closeOnEsc)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
    window.addEventListener('keydown', closeOnEsc)
  }

  function handleCardClick({name, img}) {
    setSelectedCard({
      name,
      img,
    })

    window.addEventListener('keydown', closeOnEsc)
    window.addEventListener('keydown', delPrevSpace)
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)

    setSelectedCard({
      name: '',
      img: '',
    })

    window.removeEventListener('keydown', closeOnEsc)
    window.removeEventListener('keydown', delPrevSpace)
  }

  function handleAddPlaceSubmit(e) {
    api.loadNewCard({
      name: e.place,
      link: e.linkPlace
    }).then( (res) => {
      setCards( [res, ...cards] )
      closeAllPopups()
    }).catch(
      (err) => {
        console.log('6 Ошибка ===> ', err)
      }
    )
  }

  function handleUpdaterUser(e) {
    api.loadProfile(e).then( (res) => {
      setCurrentUser(res)
      closeAllPopups()
    }).catch(
      (err) => {
        console.log('7 Ошибка ===> ', err)
      }
    )
  }

  function handleUpdateAvatar(e) {
    api.changeAvatar(e).then( (res) => {
      setCurrentUser(res)
      closeAllPopups()
    }).catch(
      (err) => {
        console.log('8 Ошибка ===> ', err)
      }
    )
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Main
        cards={cards}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLikeDislike}
        onCardDelete={handleCardDelete}
      />

      <EditAvatarPopup
        onUpdateAvarar={handleUpdateAvatar}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />

      <EditProfilePopup
        onUpdateUser={handleUpdaterUser}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <AddPlacePopup
        onAddNewPlace={handleAddPlaceSubmit}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}

      />
    </CurrentUserContext.Provider>
  )
}

export default App
