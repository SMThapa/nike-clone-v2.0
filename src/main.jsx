import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer, Slide } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

    </Router>
  </StrictMode>
)
