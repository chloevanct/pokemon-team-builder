import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom" // enables dynamic routing, components render based on current URL
import { Provider } from 'react-redux' // make store available to the entire app
import { store } from './redux/store.jsx'

// react app entry point - inject into root element of DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)