export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'full';

export interface IconConfig {
  defaultProps: {
    size: IconSizes;
    color: Colors;
    viewBox: string;
  };
  styles: {
    base: Record<string, string>;
    sizes: Record<IconSizes, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>
  }
}

const iconConfig: IconConfig = {
  defaultProps: {
    size: 'full',
    color: 'none',
    viewBox: '0 0 24 24'
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
          fill: 'fill-default-default'
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
          fill: 'fill-default-light'
        },
        dark: {
          fill: 'fill-default-dark'
        }
      }
    }
  }
};

export default iconConfig;
