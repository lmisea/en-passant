import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error("No element with id 'root' found in the document.")
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
