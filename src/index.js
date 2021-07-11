import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './components/Header'
import App from './components/App'
import Footer from './components/Footer'
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

reportWebVitals();
