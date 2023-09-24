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
        lazy: async () => await import('./pages/StandardLayout'),
        children: [
          {
            path: 'container',
            lazy: async () => await import('./pages/Container')
          }
        ]
      }
    ]
  }
]);

const App: FC = () => (
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);

export default App;
