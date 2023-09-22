import React, { useRef, type FC, useState, useEffect } from 'react';
import { Provider } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ThemeProvider from './lib/simpleComponents/components/providers/ThemeProvider';
import store from './store';
import Button from './lib/simpleComponents/components/UI/Button';
import Drawer from './lib/simpleComponents/components/UI/Drawer';
// import Root from './pages/Root';

/* const router = createBrowserRouter([
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
]); */

const App: FC = () => {
  const [open, setOpen] = useState(true);

  // const overlay = document.getElementById('overlay');

  const refDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (refDiv.current !== null) {
      refDiv.current.style.opacity = '100';
      refDiv.current.style.display = 'block';
    }
  }, []);

  console.log(open);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className='h-[5000px]'>
          <Drawer direction='right' backdrop={false} closeOnAwayClick onClose={() => { setOpen(false); }} open={open}><div className='p-4 bg-light-primary'>Hlo</div></Drawer>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              setOpen((open) => !open);
            }}
          >
            Click
          </Button>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default App;

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
