import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './views/About.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import LoginComponent from './components/Login/LoginComponent.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/login',
    element: <LoginComponent/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
