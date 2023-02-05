import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import Post from './routes/Post';
import Listing from './routes/Listing';
import UserListings from './routes/UserListings';
import Account from './routes/Account';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/post',
    element: <Post />,
  },
  {
    path: '/listing/:id',
    element: <Listing />,
  },
  {
    path: '/userListings',
    element: <UserListings />,
  },
  {
    path: '/myAccount',
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-ix13ko5ij4ojfhls.us.auth0.com'
    clientId='cD25UP2jxVUSl5uYSN1J1viKfXW8WR1R'
    // onRedirectCallback
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://unicorn-api.com',
      // scope: 'openid profile email',
    }}

    // redirecturi={window.location.origin}
    // audience='https://unicorn-api.com'
    // scope='openid profile email'
  >
    <RouterProvider router={router} />
  </Auth0Provider>
);
