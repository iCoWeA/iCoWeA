import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ConfigProvider from './lib/iCoWeaUI/components/providers/ConfigProvider';
import ThemeProvider from './lib/iCoWeaUI/components/providers/ThemeProvider';
import Root from './pages/Root';
import store from './store';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';

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
          }
        ]
      },
      {
        path: '',
        lazy: async () => await import('./pages/StandardLayout'),
        children: [
          {
            path: '',
            index: true,
            lazy: async () => await import('./pages/Home')
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
                path: '',
                index: true,
                lazy: async () => await import('./pages/AdminHome')
              },
              {
                path: 'my-account',
                lazy: async () => await import('./pages/AdminMyAccount')
              }
            ]
          }
        ]
      }
    ]
  }
]);

const App: FC = () => (
  <ConfigProvider>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </ConfigProvider>
);

export default App;
