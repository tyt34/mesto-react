import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body class="page">
      <header class="header">
        /*<img class="header__logo" alt="Логотип сайта" src=<%=require('./images/logo.svg')%>>*/
        <img class="header__logo" src="./images/logo.svg" alt="Логотип сайта" >
      </header>

      <main>
        <section class="profile">
          <div class="profile__container">
          /*<img class="profile__img" alt="Изображение профиля" src=<%=require('./images/load.gif')%>>*/
            <img class="profile__img" alt="Изображение профиля" src='./images/load.gif'>
            <div class="profile__overlay">
              <button class="profile__edit" type="button"></button>
            </div>
          </div>

          <div class="profile-char">
            <div class="profile-char__discr">
              <div class="profile-char__info">
                <h1 id="text-up" class="profile-char__title"></h1>
                <button class="profile-char__edit" type="button"></button>
              </div>
              <p id="text-dw" class="profile-char__subtitle"></p>
            </div>
            <button class="profile-char__add" type="button"></button>
          </div>
        </section>

        <section class="places">
        </section>
      </main>

      <footer class="footer">
        <p class="footer__title">© 2020 Mesto Russia</p>
      </footer>

      <div id="popup-edit" class="popup">
        <div class="popup__container" id="popup__container_edit">
          <button id="popup-edit__close" class="popup__close" type="button"></button>
          <h2 class="popup__title">Редактировать профиль</h2>
          <form novalidate id="popup-edit__form" class="popup__form" action="index.html" method="post" name="persona">
            <input id="input-profile-title" class="popup__input" name="name" type="text" value="" placeholder="Имя" required minlength="2" maxlength="40">
            <span id="input-profile-title-error" class="popup__error"></span>
            <input id="input-profile-subtitle" class="popup__input" name="about" type="text" value="" placeholder="О себе" required minlength="2" maxlength="200">
            <span id="input-profile-subtitle-error" class="popup__error"></span>
            <button id="popup-edit__save" class="popup__save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div id="popup-add" class="popup">
        <div class="popup__container" id="popup__container_add">
          <button id="popup-add__close" class="popup__close" type="button"></button>
          <h2 class="popup__title">Новое место</h2>
          <form novalidate id="popup-add__form" class="popup__form" action="index.html" method="post" name="discription">
            <input id="popup-add-title" class="popup__input" name="name" type="text" value="" placeholder="Название" minlength="2" maxlength="30" required>
            <span id="popup-add-title-error" class="popup__error"></span>
            <input id="popup-add-link" class="popup__input" name="link" type="url" value="" placeholder="Ссылка на картинку" required>
            <span id="popup-add-link-error" class="popup__error"></span>
            <button id="popup-add__save" class="popup__save" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>

      <div id="popup-img" class="popup-img popup">
        <div class="popup-img__container">
          /*<img class="popup-img__img" alt="Test" src=<%=require('./images/logo.svg')%>>*/
          <img class="popup-img__img" src="./images/logo.svg" alt="Test">
          <p class="popup-img__title">Test</p>
          <button id="popup-img__close" class="popup__close"></button>
        </div>
      </div>

      <template class="template">
        <article class="place">
          /*<img class="place__img" alt="Test" src=<%=require('./images/logo.svg')%>>*/
          <img class="place__img" src="./images/logo.svg" alt="Test">
          <button class="place__del" type="button"></button>
          <div class="place__option">
              <h2 class="place__title">Test</h2>
              <div class="place__like-container">
                <button class="place__like" type="button"></button>
                <p class="place__num">0</p>
              </div>
          </div>
        </article>
      </template>

      <div id="popup-confirm" class="popup-confirm popup">
        <div class="popup-confirm__container">
          <p class="popup-confirm__title">Вы уверены?</p>
          <button id="popup-confirm__acces" class="popup__acces" type="submit">
            Да
          </button>
        </div>
      </div>

      <div id="popup-avatar" class="popup-avatar popup">
        <div class="popup-avatar__container">
          <button id="popup-avatar__close" class="popup__close" type="button"></button>
          <p class="popup-avatar__title">Обновить аватар</p>
          <form novalidate id="popup-avatar__form" class="popup__form" action="index.html" method="post" name="avatar">
            <input id="popup-avatar-link" class="popup__input" name="link" type="url" value="" placeholder="Ссылка на картинку" required>
            <span id="popup-avatar-link-error" class="popup__error"></span>
            <button id="popup-avatar__save" class="popup__save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>

      <div id="popup-del" class="popup-del popup">
        <div class="popup-del__container">
          <button id="popup-del__close" class="popup__close" type="button"></button>
          <p class="popup-del__title">Вы уверены?</p>
          <form novalidate  class="popup-del__form" action="index.html" method="post">
            <button id="popup-del__save" class="popup__save" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
      /*
      <script src="./pages/index.js" type="module"></script>
      <script src="./scripts/utils/constants.js" type="module"></script>
      <script src="./scripts/components/FormValidator.js" type="module"></script>
      <script src="./scripts/components/Card.js" type="module"></script>
      <script src="./scripts/components/Section.js" type="module"></script>
      <script src="./scripts/components/Popup.js" type="module"></script>
      <script src="./scripts/components/PopupWithImage.js" type="module"></script>
      <script src="./scripts/components/PopupWithForm.js" type="module"></script>
      <script src="./scripts/components/PopupWithSubmit.js" type="module"></script>
      <script src="./scripts/components/UserInfo.js" type="module"></script>
      <script src="./scripts/components/Api.js" type="module"></script>
      */
    </body>
  );
}

export default App;
