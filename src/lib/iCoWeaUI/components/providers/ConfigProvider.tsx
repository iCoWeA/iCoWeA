import React, { type ReactNode, type FC } from 'react';

import configContext, { configInitialState } from '../../contexts/config';

type ConfigProviderProps = {
  children: ReactNode;
};

const ConfigProvider: FC<ConfigProviderProps> = (props) => (
  <configContext.Provider
    value={configInitialState}
    {...props}
  />
);

export default ConfigProvider;
