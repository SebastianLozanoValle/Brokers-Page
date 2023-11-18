import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrokersApp } from './BrokersApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BrokersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
