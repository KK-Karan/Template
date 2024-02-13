import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import App from './App.jsx'
import './index.css'
import './Hero/hero.css'
import './Navbar/navbar.css'
import './SignIn/signin.css'
import SignIn from './SignIn/SignIn.jsx'
import SignUp from './SignUp/SignUp.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path: "signin",
    element: <SignIn />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
  <RouterProvider router={router}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
  </NextUIProvider>
)
