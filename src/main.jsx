import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Resister from './components/Resister.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import Order from './components/Order.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element: <Resister></Resister>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
