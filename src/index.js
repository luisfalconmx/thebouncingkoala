import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from '@containers/App'
import 'tailwindcss/tailwind.css'
import './i18n'

ReactDOM.render(
  <Suspense fallback="loading">
    <App />
  </Suspense>,
  document.getElementById('app')
)
