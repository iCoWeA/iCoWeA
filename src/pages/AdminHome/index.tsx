import React, { type FC } from 'react';

import Main from '../../lib/iCoWeABaseUI/components/layouts/Main/Main';
import Introduction from './Introduction';

export const Component: FC = () => (
  <Main placement="full">
    <Introduction />
  </Main>
);

Component.displayName = 'AdminHomeRoute';
