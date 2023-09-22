import { type AlertVariants } from '../components/UI/Alert';

export interface AlertButtonConfig {
  defaultProps: {
    alertVariant: AlertVariants;
    borderShape: Shapes;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
}

const alertButtonConfig: AlertButtonConfig = {
  defaultProps: {
    alertVariant: 'filled',
    borderShape: 'circular',
    size: 'md',
    color: 'error',
    elevated: false,
    fullwidth: false
  }
};

export default alertButtonConfig;
