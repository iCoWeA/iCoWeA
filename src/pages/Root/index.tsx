import React, { useEffect, type FC, useContext } from 'react';
import themeContext from '../../lib/simpleComponents/contexts/theme';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import StatusAlert from './StatusAlert';
import Accordion from '../../lib/simpleComponents/components/UI/Accordion/Accordion';
import AccordionHeader from '../../lib/simpleComponents/components/UI/Accordion/AccordionHeader';
import AccordionBody from '../../lib/simpleComponents/components/UI/Accordion/AccordionBody';
import Icon from '../../lib/simpleComponents/components/UI/Icon/Icon';

const Component: FC = () => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set background --- */
  useEffect(() => {
    if (theme === 'default') {
      document.body.classList.add('bg-default-background-');
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log('click');
        }}
        className="relative block bg-default-light before:z-[-1] before:w-10 before:h-10 before:bg-default-primary before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:block"
      >
        <Icon color="light">
          <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </Icon>
      </button>
      <Accordion id="1">
        <AccordionHeader>Header</AccordionHeader>
        <AccordionBody>Body</AccordionBody>
      </Accordion>
      <ScrollRestoration />
      <Outlet />
      <StatusAlert />
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
