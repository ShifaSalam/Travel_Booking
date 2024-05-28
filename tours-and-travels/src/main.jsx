import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Contextapi from './Context Api/Contextapi.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Contextapi>
        <App />
      </Contextapi>
    </BrowserRouter>
  </React.StrictMode>,
)
