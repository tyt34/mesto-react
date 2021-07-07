//import logo from '../images/logo.svg'
import React from 'react'
import PopupWithForm from './PopupWithForm.jsx'
import Main from './Main.jsx'
import ImagePopup from './ImagePopup.jsx'
import Api from '../utils/Api'
import profileImg from '../images/load.gif' // переменная должна быть в camelCase
import CurrentUserContext from '../contexts/CurrentUserContext'

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: 'Загрузка...',
    about: 'Загрузка...',
    avatar: profileImg
  })

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({
    name: '',
    img: '',
  })

  React.useEffect( () => {
    console.log(' mount ');
    Api.getNowData().then( data => {
      //console.log(data)
      setCurrentUser({
        name: data.name,
        about: data.about,
        avatar: data.avatar
      })
      //console.log(currentUser)
      /*
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
      */
    }).catch(
      (err) => console.log(err)
    )
    //console.log(currentUser)
  }, [])

  function handleEditAvatarClick() {
    console.log(' -1- ')
    setEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    console.log(' -2- ')
    setEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    console.log(' -3- ')
    setAddPlacePopupOpen(true)
  }

  function handleCardClick(props) {
    console.log(' - - - - > ')
    console.log(' = = = => ', props)
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        name={'avatar'}
        isOpen={ isEditAvatarPopupOpen }
        textTitle={`Обновить аватар`}
        textButton={`Сохранить`}
        onClose={ closeAllPopups }
      >
        <input id="popup-avatar-link" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required />
        <span id="popup-avatar-link-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={'edit'}
        isOpen={ isEditProfilePopupOpen }
        textTitle={`Редактировать профиль`}
        textButton={`Сохранить`}
        onClose={ closeAllPopups }
      >
        <input id="input-profile-title" className="popup__input" name="name" type="text"  placeholder="Имя" required minLength="2" maxLength="40" />
        <span id="input-profile-title-error" className="popup__error"></span>
        <input id="input-profile-subtitle" className="popup__input" name="about" type="text"  placeholder="О себе" required minLength="2" maxLength="200" />
        <span id="input-profile-subtitle-error" className="popup__error"></span>
      </PopupWithForm>

      <PopupWithForm
        name={'add'}
        isOpen={ isAddPlacePopupOpen }
        textTitle={`Новое место`}
        textButton={`Создать`}
        onClose={ closeAllPopups }
      >
        <input id="popup-add-title" className="popup__input" name="name" type="text" placeholder="Название" minLength="2" maxLength="30" required />
        <span id="popup-add-title-error" className="popup__error"></span>
        <input id="popup-add-link" className="popup__input" name="link" type="url" placeholder="Ссылка на картинку" required />
        <span id="popup-add-link-error" className="popup__error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  )
}

export default App
