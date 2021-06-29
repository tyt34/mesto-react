import React from 'react'

function PopupWithForm(props) {
  //console.log(' 0) ', props)
  //console.log(' 1) ', props.children)
  //console.log(' 2) ', props.name)
  //console.log(' 4) ', props.isOpen)

  const popupClose = event => {
    document.getElementById(`popup-${props.name}`).classList.remove('popup_open')
  }

  return (
    <div id={`popup-${props.name}`} className={ props.isOpen ? 'popup popup_open' : 'popup'}>
      <div className={`popup-${props.name}__container popup__container`}>
        {/*<button id={`popup-${props.name}__close`} onClick={popupClose} className="popup__close" type="button"></button>*/}
        <button id={`popup-${props.name}__close`} onClick={props.onClose} className="popup__close" type="button"></button>
        <p className={`popup-${props.name}__title`}>
          {`${props.textTitle}`}
        </p>
        <form noValidate name={`${props.name}`} className={`popup-${props.name}__form popup__form`} action="index.html" method="post">

          {props.children && <>{props.children}</>}

          <button id={`popup-${props.name}__save`} className={`popup__save`} type="submit">
            {`${props.textButton}`}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
/*
{num > 0 &&
  <div className="test" style={{
    color: "red",
    backgroundColor: "lightblue",
    width: '300px',
    height: '300px',
  }}>
    Hi
  </div>
}
*/
/*
<div id="popup-edit" className="popup popup_open">
  <div className="popup__container" id="popup__container_edit">
    <button id="popup-edit__close" className="popup__close" type="button"></button>
    <h2 className="popup__title">Редактировать профиль</h2>
    <form / id="popup-edit__form" className="popup__form" action="index.html" method="post" name="persona">
      <input id="input-profile-title" className="popup__input" name="name" type="text"  placeholder="Имя" required maxlength="40" />
      <span id="input-profile-title-error" className="popup__error"></span>
      <input id="input-profile-subtitle" className="popup__input" name="about" type="text"  placeholder="О себе" required  />
      <span id="input-profile-subtitle-error" className="popup__error"></span>
      <button id="popup-edit__save" className="popup__save" type="submit">
        Сохранить
      </button>
    </form>
  </div>
</div>
)
*/
