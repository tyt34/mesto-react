(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(6),c=n.n(i),s=(n(14),n.p+"static/media/logo.abb64ac9.svg"),r=n(0);var l=function(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsx)("img",{className:"header__logo",src:s,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0441\u0430\u0439\u0442\u0430"})})},u=n(9),p=n(2),d=o.a.createContext();var h=function(e){var t,n=o.a.useContext(d),a=e.isOwn._id===n._id,i="".concat(a?"place__del":"nothing"),c=e.likes.some((function(e){return e._id===n._id})),s="".concat(c?"place__like place-like":"place__like");return Object(r.jsxs)("article",{className:"place",children:[Object(r.jsx)("img",{className:"place__img",src:e.img,onClick:function(){e.onCardClick(e)},alt:(t=e.name,'\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430: "'+t+'"')}),Object(r.jsx)("button",{onClick:function(){e.onCardDelete(e)},className:i,type:"button"}),Object(r.jsxs)("div",{className:"place__option",children:[Object(r.jsx)("h2",{className:"place__title",children:e.name}),Object(r.jsxs)("div",{className:"place__like-container",children:[Object(r.jsx)("button",{onClick:function(){e.onCardLike(e)},className:s,type:"button"}),Object(r.jsx)("p",{className:"place__num",children:e.likes.length})]})]})]})};var m=function(e){var t=o.a.useContext(d);return Object(r.jsxs)("main",{children:[Object(r.jsxs)("section",{className:"profile",children:[Object(r.jsxs)("div",{className:"profile__container",children:[Object(r.jsx)("img",{className:"profile__img",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:t.avatar}),Object(r.jsx)("div",{onClick:e.onEditAvatar,className:"profile__overlay",children:Object(r.jsx)("button",{className:"profile__edit",type:"button"})})]}),Object(r.jsxs)("div",{className:"profile-char",children:[Object(r.jsxs)("div",{className:"profile-char__discr",children:[Object(r.jsxs)("div",{className:"profile-char__info",children:[Object(r.jsx)("h1",{id:"text-up",className:"profile-char__title",children:t.name}),Object(r.jsx)("button",{className:"profile-char__edit",type:"button",onClick:e.onEditProfile})]}),Object(r.jsx)("p",{id:"text-dw",className:"profile-char__subtitle",children:t.about})]}),Object(r.jsx)("button",{className:"profile-char__add",type:"button",onClick:e.onAddPlace})]})]}),Object(r.jsxs)("section",{className:"places",children:[e.cards.map((function(t){return Object(r.jsx)(h,{name:t.name,img:t.link,likes:t.likes,id:t._id,onCardClick:e.onCardClick,isOwn:t.owner,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))," "]})]})};var j=function(e){var t,n=e.card,a=e.onClose;return Object(r.jsx)("div",{id:"popup-img",className:n.name?"popup-img popup popup_open":"popup-img popup",children:Object(r.jsxs)("div",{className:"popup-img__container",children:[Object(r.jsx)("img",{className:"popup-img__img",alt:(t=n.name,'\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u0430: "'+t+'"'),src:n.img}),Object(r.jsx)("p",{className:"popup-img__title",children:n.name}),Object(r.jsx)("button",{id:"popup-img__close",className:"popup__close",onClick:a})]})})},_=n(7),f=n(8),b=new(function(){function e(t){Object(_.a)(this,e),this._token=t.token,this._cohortId=t.cohortId,this._url=t.url,this._me="/v1/"+this._cohortId+"/users/me",this._ava=this._me+"/avatar",this._cards="/v1/"+this._cohortId+"/cards",this._likes=this._url+this._cards+"/likes/"}return Object(f.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch(this._url+this._me,{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"getCardsFromServer",value:function(){var e=this;return fetch(this._url+this._cards,{headers:{authorization:this._token}}).then((function(t){return e._getResponseData(t)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch(this._url+this._ava,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"loadProfile",value:function(e){var t=this;return fetch(this._url+this._me,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"loadNewCard",value:function(e){var t=this;return fetch(this._url+this._cards,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponseData(e)}))}},{key:"delCard",value:function(e){var t=this;return fetch(this._url+this._cards+"/"+e,{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch(this._likes+e,{method:t,headers:{authorization:this._token}}).then((function(e){return n._getResponseData(e)}))}}]),e}())({token:"54e47a58-a3be-4854-bdb0-d150680efc4c",cohortId:"cohort-24",myId:"34f519f4db31bcdefd2e9e7c",url:"https://mesto.nomoreparties.co"}),O=n.p+"static/media/load.0bbdeb44.gif";var v=function(e){return Object(r.jsx)("div",{id:"popup-".concat(e.name),className:e.isOpen?"popup popup_open":"popup",children:Object(r.jsxs)("div",{className:"popup-".concat(e.name,"__container popup__container"),children:[Object(r.jsx)("button",{id:"popup-".concat(e.name,"__close"),onClick:e.onClose,className:"popup__close",type:"button"}),Object(r.jsx)("p",{className:"popup-".concat(e.name,"__title"),children:"".concat(e.textTitle)}),Object(r.jsxs)("form",{onSubmit:e.onSubmit,name:"".concat(e.name),className:"popup-".concat(e.name,"__form popup__form"),children:[" ",e.children,Object(r.jsx)("button",{id:"popup-".concat(e.name,"__save"),className:"popup__save",type:"submit",children:"".concat(e.textButton)})]})]})})};var x=function(e){var t=o.a.useContext(d),n=o.a.useState(t.name),a=Object(p.a)(n,2),i=a[0],c=a[1],s=o.a.useState(t.about),l=Object(p.a)(s,2),u=l[0],h=l[1];return o.a.useEffect((function(){c(t.name),h(t.about)}),[t]),Object(r.jsxs)(v,{name:"edit",textTitle:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:u})},children:[Object(r.jsx)("input",{value:i,onChange:function(e){c(e.target.value)},id:"input-profile-title",className:"popup__input",name:"name",type:"text",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(r.jsx)("span",{id:"input-profile-title-error",className:"popup__error"}),Object(r.jsx)("input",{value:u,onChange:function(e){h(e.target.value)},id:"input-profile-subtitle",className:"popup__input",name:"about",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200"}),Object(r.jsx)("span",{id:"input-profile-subtitle-error",className:"popup__error"})]})};var g=function(e){var t=o.a.useRef();return Object(r.jsxs)(v,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvarar({link:t.current.value})},name:"avatar",isOpen:e.isOpen,textTitle:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",textButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,children:[Object(r.jsx)("input",{ref:t,id:"popup-avatar-link",className:"popup__input",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(r.jsx)("span",{id:"popup-avatar-link-error",className:"popup__error"})]})};var k=function(e){var t=o.a.useState(""),n=Object(p.a)(t,2),a=n[0],i=n[1],c=o.a.useState(""),s=Object(p.a)(c,2),l=s[0],u=s[1];return Object(r.jsxs)(v,{onSubmit:function(t){t.preventDefault(),e.onAddNewPlace({place:a,linkPlace:l})},name:"add",isOpen:e.isOpen,textTitle:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",textButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClose:e.onClose,children:[Object(r.jsx)("input",{value:a,onChange:function(e){i(e.target.value)},id:"popup-add-title",className:"popup__input",name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(r.jsx)("span",{id:"popup-add-title-error",className:"popup__error"}),Object(r.jsx)("input",{value:l,onChange:function(e){u(e.target.value)},id:"popup-add-link",className:"popup__input",name:"link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(r.jsx)("span",{id:"popup-add-link-error",className:"popup__error"})]})};var C=function(){var e=o.a.useState({name:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",about:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",avatar:O}),t=Object(p.a)(e,2),n=t[0],a=t[1],i=o.a.useState(!1),c=Object(p.a)(i,2),s=c[0],l=c[1],h=o.a.useState(!1),_=Object(p.a)(h,2),f=_[0],v=_[1],C=o.a.useState(!1),N=Object(p.a)(C,2),y=N[0],S=N[1],D=o.a.useState([]),P=Object(p.a)(D,2),L=P[0],T=P[1],E=o.a.useState({name:"",img:""}),w=Object(p.a)(E,2),A=w[0],I=w[1];function R(){l(!1),S(!1),v(!1),I({name:"",img:""})}return o.a.useEffect((function(){Promise.all([b.getCardsFromServer(),b.getUserInfo()]).then((function(e){T(e[0]),a(e[1])})).catch((function(e){console.log("1 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))}),[]),Object(r.jsxs)(d.Provider,{value:n,children:[Object(r.jsx)(m,{cards:L,onEditAvatar:function(){l(!0)},onEditProfile:function(){S(!0)},onAddPlace:function(){v(!0)},onCardClick:function(e){I({name:e.name,img:e.img})},onCardLike:function(e){var t;t=e.likes.some((function(e){return e._id===n._id}))?"DELETE":"PUT",b.changeLikeCardStatus(e.id,t).then((function(t){T((function(n){return n.map((function(n){return n._id===e.id?t:n}))}))})).catch((function(e){console.log("3 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))},onCardDelete:function(e){b.delCard(e.id).then((function(t){var n=L.filter((function(t){return t._id!==e.id}));T(n)})).catch((function(e){console.log("5 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))}}),Object(r.jsx)(g,{onUpdateAvarar:function(e){b.changeAvatar(e).then((function(e){a(e),R()})).catch((function(e){console.log("8 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))},isOpen:s,onClose:R}),Object(r.jsx)(x,{onUpdateUser:function(e){b.loadProfile(e).then((function(e){a(e),R()})).catch((function(e){console.log("7 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))},isOpen:y,onClose:R}),Object(r.jsx)(k,{onAddNewPlace:function(e){b.loadNewCard({name:e.place,link:e.linkPlace}).then((function(e){T([e].concat(Object(u.a)(L))),R()})).catch((function(e){console.log("6 \u041e\u0448\u0438\u0431\u043a\u0430 ===> ",e)}))},isOpen:f,onClose:R}),Object(r.jsx)(j,{card:A,onClose:R})]})};var N=function(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsxs)("p",{className:"footer__title",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),i(e),c(e)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(l,{}),Object(r.jsx)(C,{}),Object(r.jsx)(N,{})]})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.b39e4ff0.chunk.js.map