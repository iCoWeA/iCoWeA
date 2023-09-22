import { type ChipVariants } from '../components/UI/Chip';

export interface ChipButtonConfig {
  defaultProps: {
    chipVariant: ChipVariants;
    borderShape: Shapes;
    size: Sizes;
    color: Colors;
    elevated: boolean;
    fullwidth: boolean;
  };
}

const chipButtonConfig: ChipButtonConfig = {
  defaultProps: {
    chipVariant: 'filled',
    borderShape: 'circular',
    size: 'xs',
    color: 'primary',
    elevated: false,
    fullwidth: false
  }
};

export default chipButtonConfig;
