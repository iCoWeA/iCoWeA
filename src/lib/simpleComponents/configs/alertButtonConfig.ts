import { type AlertVariants } from '../components/UI/Alert';

export interface AlertButtonConfig {
  defaultProps: {
    alertVariant: AlertVariants;
    color: Colors;
  };
}

const alertButtonConfig: AlertButtonConfig = {
  defaultProps: {
    alertVariant: 'filled',
    color: 'error'
  }
};

export default alertButtonConfig;
