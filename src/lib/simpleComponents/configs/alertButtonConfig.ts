import { type BaseHTMLAttributes } from 'react';

export interface AlertButtonConfig {
  defaultProps: {
    iconProps: BaseHTMLAttributes<HTMLDivElement>;
  };
}

const alertButtonConfig: AlertButtonConfig = {
  defaultProps: {
    iconProps: {}
  }
};

export default alertButtonConfig;
