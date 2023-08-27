import React, { type FC } from 'react';
import Main from '../../lib/simpleComponents/components/layouts/Main';
import Messages from './Messages/Messages';
import { type DeferredData } from '@remix-run/router/dist/utils';
import { defer } from 'react-router-dom';
import { child, get, ref } from 'firebase/database';
import { database } from '../../firebase';

export const Component: FC = () => (
  <Main>
    <Messages />
  </Main>
);

Component.defaultProps = 'Component';

export const loader = (): DeferredData => defer({ snapchot: get(child(ref(database), 'messages')) });
