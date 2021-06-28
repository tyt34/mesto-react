//import './App.css';
//import logo from './images/logo.svg'
//import profile__img from './images/load.gif'
//import ReactDom from 'react-dom'
import profile__img from './images/logo.png'
import React from 'react'

//import './Test.css';
//import Test from './test.jsx'
import PopupWithForm from './PopupWithForm.jsx'



function Main(props) {
  console.log('main props -> ', props);
  return (
      <main>
        <section className="profile">
          <div className="profile__container">
            <img className="profile__img" alt="Изображение профиля" src={profile__img} />
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
                <h1 id="text-up" className="profile-char__title"></h1>
                <button
                  className="profile-char__edit"
                  type="button"
                  onClick={props.onEditProfile}>
                </button>
              </div>
              <p id="text-dw" className="profile-char__subtitle"></p>
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
