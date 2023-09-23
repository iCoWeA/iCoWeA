import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './lib/simpleComponents/components/providers/ThemeProvider';
import store from './store';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        lazy: async () => await import('./pages/DefaultLayout'),
        children: [
          {
            path: 'login',
            lazy: async () => await import('./pages/Login')
          }
        ]
      },
      {
        path: '',
        lazy: async () => await import('./pages/DashboardLayout'),
        children: [
          {
            path: 'admin',
            lazy: async () => await import('./pages/Admin'),
            children: [
              {
                path: 'messages',
                lazy: async () => await import('./pages/AdminMessages')
              }
            ]
          }
        ]
      }
    ]
  }
]);

const App: FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

/* <RouterProvider router={router} /> */

/* <RouterProvider router={router} />

import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './lib/simpleComponents/components/providers/ThemeProvider';
import store from './store';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        lazy: async () => await import('./pages/DefaultLayout'),
        children: [
          {
            path: 'login',
            lazy: async () => await import('./pages/Login')
          }
        ]
      },
      {
        path: '',
        lazy: async () => await import('./pages/DashboardLayout'),
        children: [
          {
            path: 'admin',
            lazy: async () => await import('./pages/Admin'),
            children: [
              {
                path: 'messages',
                lazy: async () => await import('./pages/AdminMessages')
              }
            ]
          }
        ]
      }
    ]
  }
]);

const App: FC = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;

/* <RouterProvider router={router} /> */
