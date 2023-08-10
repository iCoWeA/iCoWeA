import { type ProgressDefaultProps } from '../components/UI/Progress';

export type ProgressSizeVariants = 'default' | 'label';
export type ProgressSizes = 'sm' | 'md' | 'lg';
export type ProgressColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface ProgressConfig {
  defaultProps: Required<ProgressDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      sizes: Record<ProgressSizeVariants, Record<ProgressSizes, Record<string, string>>>;
      colors: Record<string, Record<ProgressColors, Record<string, string>>>;
    },
    bar: {
      base: Record<string, string>;
      colors: Record<string, Record<ProgressColors, Record<string, string>>>
    }
  }
}

const progressConfig: ProgressConfig = {
  defaultProps: {
    value: 0,
    size: 'md',
    color: 'primary',
    rootProps: {}
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        width: 'w-full',
        borderRadius: 'rounded-full',
        focus: 'focus:outline-0'
      },
      sizes: {
        default: {
          sm: {
            height: 'h-2'
          },
          md: {
            height: 'h-3'
          },
          lg: {
            height: 'h-4'
          }
        },
        label: {
          sm: {
            height: 'h-4'
          },
          md: {
            height: 'h-4.5'
          },
          lg: {
            heiight: 'h-5'
          }
        }
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-bg-light'
          },
          primary: {
            background: 'bg-default-bg-light'
          },
          secondary: {
            background: 'bg-default-bg-light'
          },
          success: {
            background: 'bg-default-bg-light'
          },
          warning: {
            background: 'bg-default-bg-light'
          },
          error: {
            background: 'bg-default-bg-light'
          }
        }
      }
    },
    bar: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        height: 'h-full',
        width: 'w-0',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-xs font-sans',
        transition: 'transition-all',
        textOverflow: 'text-clip',
        focus: 'focus:outline-0'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark',
            background: 'bg-default-bg'
          },
          primary: {
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-primary'
          },
          secondary: {
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-secondary'
          },
          success: {
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-success'
          },
          warning: {
            fill: 'fill-default-text-dark',
            color: 'text-default-text-dark',
            background: 'bg-default-warning'
          },
          error: {
            fill: 'fill-default-text-light',
            color: 'text-default-text-light',
            background: 'bg-default-error'
          }
        }
      }
    }
  }
};

export default progressConfig;
