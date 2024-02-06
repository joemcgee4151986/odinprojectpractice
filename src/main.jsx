import React from 'react'
import ReactDOM from 'react-dom/client'
import {Header} from './Components/Header/Header.jsx'
import {Body} from './Components/Body/Body.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
  </React.StrictMode>,
)
