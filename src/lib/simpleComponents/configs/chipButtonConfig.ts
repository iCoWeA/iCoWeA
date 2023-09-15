import { type ChipVariants } from '../components/UI/Chip';

export interface ChipButtonConfig {
  defaultProps: {
    chipVariant: ChipVariants;
    color: Colors;
  };
}

const chipButtonConfig: ChipButtonConfig = {
  defaultProps: {
    chipVariant: 'filled',
    color: 'primary'
  }
};

export default chipButtonConfig;
