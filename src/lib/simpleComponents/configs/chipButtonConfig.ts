import { type ChipVariants } from '../components/UI/Chip';

export interface ChipButtonConfig {
  defaultProps: {
    chipVariant: ChipVariants;
  };
}

const chipButtonConfig: ChipButtonConfig = {
  defaultProps: {
    chipVariant: 'filled'
  }
};

export default chipButtonConfig;
