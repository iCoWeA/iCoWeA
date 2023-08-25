import React, { type FC } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Tooltip from '../../lib/simpleComponents/components/UI/Tooltip';
import Button from '../../lib/simpleComponents/components/UI/Button';

const Component: FC = () => (
  <>
    <ScrollRestoration />
    <Outlet />
    <Tooltip arrow handler={<Button>B</Button>}color="default" >Text</Tooltip>
    <Tooltip arrow handler={<Button>B</Button>}color="dark" >Text</Tooltip>
    <Tooltip arrow handler={<Button>B</Button>}color="primary" >Text</Tooltip>
    <div className="bg-default-primary">
      <Tooltip arrow handler={<Button>B</Button>}color="light" >Text</Tooltip>
    </div>
  </>
);

export default Component;

Component.displayName = 'RootRoute';
