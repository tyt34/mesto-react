import React from 'react'
import PopupWithForm from './PopupWithForm.jsx'
import CurrentUserContext from '../contexts/CurrentUserContext'

function EditProfilePopup(props) {
  //console.log(' -> ', props)
  const currenUser = React.useContext(CurrentUserContext)
  //console.log(' => ', currenUser)
  const [name, setName] = React.useState(currenUser.name)
  const [about, setAbout] = React.useState(currenUser.about)

  React.useEffect( () => {
    //console.log(' load ')
    setName(currenUser.name)
    setAbout(currenUser.about)
  }, [currenUser])

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDiscr(e) {
    setAbout(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    //console.log('01 -> ',e)
    props.onUpdateUser({
      name,
      about,
    })
  }

  return (
    <PopupWithForm
      name={'edit'}
      textTitle={`Редактировать профиль`}
      textButton={`Сохранить`}
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <input
        value={name}
        onChange={handleChangeName}
        id="input-profile-title"
        className="popup__input"
        name="name"
        type="text"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span id="input-profile-title-error" className="popup__error"></span>
      <input
        value={about}
        onChange={handleChangeDiscr}
        id="input-profile-subtitle"
        className="popup__input"
        name="about"
        type="text"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="input-profile-subtitle-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup
