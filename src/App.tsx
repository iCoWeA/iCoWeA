import React, { type FC } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootComponent from './pages/Root';
import ThemeProvider from './lib/simpleComponents/components/providers/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootComponent />
  }
]);

const App: FC = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
