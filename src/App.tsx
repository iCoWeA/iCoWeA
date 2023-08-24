import React, { type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootComponent from './pages/Root';
import { Provider } from 'react-redux';
import ThemeProvider from './lib/simpleComponents/components/providers/ThemeProvider';
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />
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
