import { createContext } from 'react';

import { config } from '../config';

export type ConfigContext = {
  config: Config;
};

export const configInitialState: ConfigContext = {
  config
};

const configContext = createContext<ConfigContext>(configInitialState);

export default configContext;
