import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './views/home/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter
([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "*",
    element: <h1>404 Page Not Found</h1>
  }
  // {
  //   path: "/newsCard",
  //   element: <NewsView/>
  // }
])
root.render(
<RouterProvider router={router}/>
);

