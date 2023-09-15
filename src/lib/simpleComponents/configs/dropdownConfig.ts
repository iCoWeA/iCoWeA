import { type DropdownVariants } from '../components/UI/Dropdown';

export interface DropdownConfig {
  defaultProps: {
    variant: DropdownVariants;
    elevated: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    variants: Record<DropdownVariants, Record<Themes, Record<string, string>>>;
  }
}

const dropdownConfig: DropdownConfig = {
  defaultProps: {
    variant: 'plain',
    elevated: false
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-light'
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
