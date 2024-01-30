import { useContext } from 'react';

import configContext from '../../iCoWeAUI/contexts/config';

const useConfig = <D, P>(element: string, defaultProps: D, props: P): D & P & { defaultClassName?: string } => {
  const elementConfig = useContext(configContext)?.router?.[element];

  return { ...defaultProps, defaultClassName: elementConfig?.styles, ...elementConfig?.defaultProps, ...props };
};

export default useConfig;
