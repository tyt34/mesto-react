import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header.jsx'
import App from './components/App.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <div className='page'>
      <Header />
      <App />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
