import { useContext } from 'react';

import configContext from '../contexts/config';

const useConfig = <D, P>(element: keyof Config, defaultProps: D, props: P): D & P & { defaultClassName?: string } => {
  const elementConfig = useContext(configContext).config[element];

  return { ...defaultProps, defaultClassName: elementConfig.styles, ...elementConfig.defaultProps, ...props };
};

export default useConfig;
