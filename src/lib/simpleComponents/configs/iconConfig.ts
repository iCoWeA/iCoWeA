import { type IconDefaultProps } from '../components/UI/Icon';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'full';
export type IconColors = 'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface IconConfig {
  defaultProps: Required<IconDefaultProps>;
  styles: {
    base: Record<string, string>;
    sizes: Record<IconSizes, Record<string, string>>;
    colors: Record<string, Record<IconColors, Record<string, string>>>
  }
}

const iconConfig: IconConfig = {
  defaultProps: {
    size: 'full',
    color: 'none'
  },
  styles: {
    base: {
      display: 'inline-block',
      focus: 'focus:outline-0'
    },
    sizes: {
      xs: {
        width: 'w-4'
      },
      sm: {
        width: 'w-5'
      },
      md: {
        width: 'w-6'
      },
      lg: {
        width: 'w-7'
      },
      full: {
        width: 'w-full'
      }
    },
    colors: {
      default: {
        default: {
          fill: 'fill-default-text'
        },
        primary: {
          fill: 'fill-default-primary'
        },
        secondary: {
          fill: 'fill-default-secondary'
        },
        success: {
          fill: 'fill-default-success'
        },
        warning: {
          fill: 'fill-default-warning'
        },
        error: {
          fill: 'fill-default-error'
        },
        light: {
          fill: 'fill-default-text-light'
        },
        dark: {
          fill: 'fill-default-text-dark'
        }
      }
    }
  }
};

export default iconConfig;
