import React, { useEffect, type FC, useState, useRef } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import Button from '../../lib/simpleComponents/components/UI/Button';
import Popover from '../../lib/simpleComponents/components/UI/Popover';

const Component: FC = () => {
  useEffect(() => {
    document.body.classList.add('bg-default-body');
  }, []);

  const setRerender = useState(false)[1];
  const [open, setOpen] = useState(false);

  // const [mounted, setMounted] = useState(true);
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setRerender(true);
  }, []);

  /* const refs = {
    root: document.getElementById('overlay'),
    backdrop: document.getElementById('backdrop')
  }; */
  return (
    <>
      <ScrollRestoration />
      <Button
        ref={ref}
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        OPEN
      </Button>
      <Popover anchorRef={ref.current} open={open}>POPOVER</Popover>
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';

/*
 sizes: {
        sm: {
          padding: 'py-1 px-2'
        },
        md: {
          padding: 'py-1.5 px-3'
        },
        lg: {
          padding: 'py-2 px-4'
        }
      },

      <Button
          onClick={() => {
            setMounted((isMounted) => !isMounted);
          }}
        >
          Mount
        </Button>
        <Button
          onClick={() => {
            setOpen((isOpen) => !isOpen);
          }}
          ref={ref}
        >
          OPEN
        </Button>
      */
