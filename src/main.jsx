import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Search from './pages/Search/Search.jsx';
import NotFoundPages from './pages/NotFOund/NotFoundPage.jsx';
import SignUpForm from './pages/Authentication/SignUp.jsx';
import SignIn from './pages/Authentication/SignIn.jsx';
import { Profile } from './pages/Profiles/Profile.jsx';
import { UserProvider } from './assets/UserProvider.jsx';
import { Conta } from './pages/Profiles/Conta.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <NotFoundPages />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search/:title',
        element: <Search />,
      },
      {
        path: '/profile',
        element: <Profile />,
        children:[
          {
            path: 'conta',
            element: <Conta/>
          },
        ]
      },
    ],
  },
  {
    path: '/auth',
    element: <SignUpForm />,
  },
  {
    path: '/login',
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <UserProvider>
      <RouterProvider router={router} />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </>,
);