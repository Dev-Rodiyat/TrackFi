import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import store from './redux/store.js'
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
      <ToastContainer position='top-right'/>
        <App />
      </Provider>
  </StrictMode>,
)
