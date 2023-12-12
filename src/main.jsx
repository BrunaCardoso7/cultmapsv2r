import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Search from './pages/Search/Search.jsx';
import NotFoundPages from './pages/NotFOund/NotFoundPage.jsx';
import SignUpForm from './pages/Authentication/SignUp.jsx';
import SignIn from './pages/Authentication/SignIn.jsx';
import { Profile } from './pages/Profiles/Profile.jsx';
import { UserProvider } from './assets/UserProvider.jsx';
import { FormEventos } from './pages/Profiles/FormEventos.jsx';
import Perfil from './pages/Perfil/Perfil.jsx';
import { MeusEventos } from './pages/Profiles/MeusEventos.jsx';
import { Eventos } from './pages/eventos/Eventos.jsx';
import VerMais from './pages/Home/VerMais.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:(
    <>
    <Navbar/>
    <div className="main-content">
      <Outlet />
    </div>
    </>
    ),
    errorElement: <NotFoundPages />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/vermais/:id',
        element: <VerMais/>
      },
      {
        path: 'eventos',
        element: <Eventos/>
      },
      {
        path: '/search/:title',
        element: <Search />,
      },
      {
        path: 'profile',
        element: <Profile />,
        children:[
          {
            path: 'conta',
            element: <Perfil/>,
          },
          {
            path: 'meuseventos',
            element: <MeusEventos/>
          },
          {
            path: 'cad_evento',
            element: <FormEventos/>,
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