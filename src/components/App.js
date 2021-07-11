import React from 'react'
import Main from './Main'
import ImagePopup from './ImagePopup'
import Api from '../utils/api'
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
    img: '',
  })

  React.useEffect( () => {
    Api.getCardsFromServer().then( data => {
      setCards(data)
    }).catch(
      (err) => {
        console.log('1 Ошибка ===> ', err)
      }
    )

    Api.getNowData().then( data => {
      setCurrentUser({
        name: data.name,
        about: data.about,
        avatar: data.avatar,
        _id: data._id
      })
    }).catch(
      (err) => {
        console.log('2 Ошибка ===> ', err)
      }
    )
  }, [])

  function handleCardLikeDislike(card) {
    const isLiked = card.likes.some( (i) => {
      return i._id === currentUser._id
    })
    if (isLiked) {
      Api.sendDislike(card.id).then( (newCard) => {
        const newCards = cards.map( (c) => c._id === card.id ? newCard : c)
        setCards(newCards)
      }).catch(
        (err) => {
          console.log('3 Ошибка ===> ', err)
        }
      )
    } else {
      Api.sendLike(card.id).then( (newCard) => {
        const newCards = cards.map( (c) => c._id === card.id ? newCard : c)
        setCards(newCards)
      }).catch(
        (err) => {
          console.log('4 Ошибка ===> ', err)
        }
      )
    }
  }

  function handleCardDelete(card) {
    //console.log(' try del ')
    Api.delCard(card.id).then( (newCard) => {
      //console.log(' try delll ', newCard)
      const newArrCards = cards.filter( c => c._id !== card.id )
      setCards(newArrCards)
    }).catch(
      (err) => {
        console.log('5 Ошибка ===> ', err)
      }
    )
  }

  function handleEditAvatarClick() {
    //console.log(' -1- ')
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    //console.log(' -2- ')
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    //console.log(' -3- ')
    setAddPlacePopupOpen(true)
  }

  function handleCardClick(props) {
    setSelectedCard({
      name: props.name,
      img: props.img,
    })
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)

    setSelectedCard({
      name: '',
      img: '',
    })
  }

  function handleAddPlaceSubmit(e) {
    /*console.log(' add1) ', {
      name: e.place,
      link: e.linkPlace
    })*/
    Api.loadNewCard({
      name: e.place,
      link: e.linkPlace
    }).then( (res) => {
      //console.log(' add2) ', res)
      setCards( [res, ...cards] )
      closeAllPopups()
    }).catch(
      (err) => {
        console.log('6 Ошибка ===> ', err)
      }
    )
  }

  function handleUpdaterUser(e) {
    Api.loadProfile(e).then( (res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
      })
      closeAllPopups()
    }).catch(
      (err) => {
        console.log('7 Ошибка ===> ', err)
      }
    )
  }

  function handleUpdateAvatar(e) {
    Api.changeAvatar(e).then( (res) => {
      setCurrentUser({
        name: res.name,
        about: res.about,
        avatar: res.avatar,
      })
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

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  )
}

export default App
