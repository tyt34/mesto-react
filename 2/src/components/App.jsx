//import './App.css';
import logo from './images/logo.svg'
import React from 'react'
import PopupWithForm from './PopupWithForm.jsx'
import Main from './Main.jsx'

//import profile__img from './images/load.gif'
//import profile__img from './images/logo.png'

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)

  React.useEffect( () => {
    console.log(' MOUNT ')
    const buttonAddOpen  = document.querySelector('.profile-char__add')
    const buttonAvatar  = document.querySelector('.profile__edit')
    const buttonEditOpen  = document.querySelector('.profile-char__edit')

    buttonEditOpen.addEventListener('click', () => {
      console.log(' but 3')
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          //console.log(' - - - > ');
          //document.getElementById('popup-edit').classList.remove('popup_open')
          closeAllPopups()
        }
      })
      document.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup_open')) {
          //document.getElementById('popup-edit').classList.remove('popup_open')
          closeAllPopups()
        }
      })
    })

    buttonAvatar.addEventListener('click', () => {
      console.log(' but 2')
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          //console.log(' - - - > ');
          closeAllPopups()
          //document.getElementById('popup-avatar').classList.remove('popup_open')
        }
      })
      document.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup_open')) {
          closeAllPopups()
          //document.getElementById('popup-avatar').classList.remove('popup_open')
        }
      })
    })

  })

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

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
  }

  return (
    <>
      <div id="popup-img" className="popup-img popup">
        <div className="popup-img__container">
          <img className="popup-img__img" src={logo} alt="Test" />
          <p className="popup-img__title">Test</p>
          <button id="popup-img__close" className="popup__close"></button>
        </div>
      </div>

      <template className="template">
        <article className="place">
          <img className="place__img" src={logo} alt="Test" />
          <button className="place__del" type="button"></button>
          <div className="place__option">
              <h2 className="place__title">Test</h2>
              <div className="place__like-container">
                <button className="place__like" type="button"></button>
                <p className="place__num">0</p>
              </div>
          </div>
        </article>
      </template>

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
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

    </>
  )
}

export default App
