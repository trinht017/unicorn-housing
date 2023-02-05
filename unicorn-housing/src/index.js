import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css"
import Post from './routes/Post';
import Listing from './routes/Listing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Dashboard />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/listing/:id',
    loader: async ({ request, params }) => {
      return fetch(
        `/fake/api/teams/${params.id}`,
      );
    },
    element: <Listing/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-ix13ko5ij4ojfhls.us.auth0.com"
    clientId="c8Rrespf6YP8ZUC8fER9oYxuLulGryfL"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <RouterProvider router={router} />
  </Auth0Provider>
);
