import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, createBrowserRouter, Link, RouterProvider, Route } from 'react-router-dom';
import { Login} from "./components/auth/Login/Login";
import { Home } from "../src/components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home/>
      </>
    ),
  },
  {
    path: "/Login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  // {
  //   path: "/Login",
  //   element: (
  //     <>
  //       <Navbar />
  //       <Login />
  //       <Footer />
  //     </>
  //   ),
  // },
  
]);

export default function App() {
  return <RouterProvider router={router} />;
}