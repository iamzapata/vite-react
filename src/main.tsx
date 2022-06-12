import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const DOMRoot = document.getElementById('root')

if (!DOMRoot) {
  console.error('Did not find a dom node with an id of #root')
} else {
  ReactDOM.createRoot(DOMRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
