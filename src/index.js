import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './components/cadastro/cadastro';
import Login from './components/login/login'
import Criartarefa from './components/main/criartarefa/criartarefa';

const router = createBrowserRouter([
  {
  path: '/',
  element: <App />,
  children: [
    {
      path: '/criartarefa',
      element:<Criartarefa />
    }
  ]
  },
  {
    path: '/cadastro',
    element:<Cadastro />
  },
  {
    path:'/login',
    element:<Login />
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
