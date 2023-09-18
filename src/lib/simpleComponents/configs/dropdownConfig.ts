import { type DropdownVariants } from '../components/UI/Dropdown';

export interface DropdownConfig {
  defaultProps: {
    variant: DropdownVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<DropdownVariants, Record<Themes, Record<string, string>>>;
  }
}

const dropdownConfig: DropdownConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      shadow: 'shadow-md shadow-black/50',
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-low'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface'
        }
      },
      outlined: {
        light: {
          border: 'border border-light-divider'
        }
      }
    }
  }
};

export default dropdownConfig;
