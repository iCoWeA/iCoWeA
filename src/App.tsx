import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import ConfigProvider from './lib/iCoWeAUI/providers/ConfigProvider';
import ThemeProvider from './lib/iCoWeAUI/providers/ThemeProvider';
import Root from './pages/Root';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '',
        lazy: async () => await import('./pages/DefaultLayout'),
        children: [
          {
            path: 'login',
            lazy: async () => await import('./pages/Login')
          },
          {
            path: 'logout',
            lazy: async () => await import('./pages/Logout')
          }
        ]
      },
      {
        path: '',
        lazy: async () => await import('./pages/StandardLayout'),
        children: [
          {
            index: true,
            lazy: async () => await import('./pages/Home')
          },
          {
            path: 'projects',
            lazy: async () => await import('./pages/Projects')
          },
          {
            path: 'about',
            lazy: async () => await import('./pages/About')
          },
          {
            path: 'contact',
            lazy: async () => await import('./pages/Contact')
          }
        ]
      },
      {
        path: 'admin',
        lazy: async () => await import('./pages/Admin'),
        children: [
          {
            path: '',
            lazy: async () => await import('./pages/DashboardLayout'),
            children: [
              {
                index: true,
                lazy: async () => await import('./pages/AdminHome')
              },
              {
                path: 'projects',
                lazy: async () => await import('./pages/AdminProjects')
              },
              {
                path: 'settings',
                lazy: async () => await import('./pages/AdminSettings')
              }
            ]
          }
        ]
      }
    ]
  }
]);

const App: FC = () => (
  <ConfigProvider config={{}}>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </ConfigProvider>
);

export default App;
