import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './store/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <BrowserRouter>
            <App />
            <ToastContainer autoClose={1000} theme={ localStorage.getItem('theme')==='light'? 'light' : 'dark' } />
        </BrowserRouter>
    </AuthProvider>
)
