import React, { type FC } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ConfigProvider from './lib/iCoWeaUI/components/providers/ConfigProvider';
import ThemeProvider from './lib/iCoWeaUI/components/providers/ThemeProvider';
import Root from './pages/Root';
import store from './store';

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
            path: 'admin-home',
            lazy: async () => await import('./pages/AdminHome')
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
