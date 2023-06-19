import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import About from "./About"
import Contact from './Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"contact",
    element:<Contact></Contact>,
  },
  {
  path:"about",
  element:<About></About>,
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
