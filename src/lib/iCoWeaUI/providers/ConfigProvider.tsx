import React, { type ReactNode, type FC } from 'react';

import configContext, { type Config } from '../contexts/config';

type ConfigProviderProps = {
  config: Config;
  children: ReactNode;
};

const ConfigProvider: FC<ConfigProviderProps> = ({ config, children }) => (
  <configContext.Provider value={config}>{children}</configContext.Provider>
);

export default ConfigProvider;
