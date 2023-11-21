import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import Search from './pages/Search/Search.jsx'
import NotFoundPages from './pages/NotFOund/NotFoundPage.jsx'
// import Authentication from './pages/Authentication/Authentication.jsx.jsx'
import SignIn from './pages/Authentication/Singin.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <NotFoundPages/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/search/:title",
        element: <Search/>
      }
    ]
  },  
  {
    path: "/auth",
    element: <SignIn/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
    <App />
  </React.StrictMode>
)
