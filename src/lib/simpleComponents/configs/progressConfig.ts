import { type CSSProperties, type BaseHTMLAttributes, type MutableRefObject, type ReactNode } from 'react';

export type ProgressSizeVariants = 'default' | 'label';

export interface ProgressConfig {
  defaultProps: {
    value: number | string;
    size: Sizes;
    color: Colors;
    rootProps: BaseHTMLAttributes<HTMLDivElement>;
    barRef?: MutableRefObject<HTMLDivElement> | null;
    style: CSSProperties;
    className: string;
    children?: ReactNode
  };
  styles: {
    root: {
      base: Record<string, string>;
      sizes: Record<ProgressSizeVariants, Record<Sizes, Record<string, string>>>;
      color: Record<string, Record<string, string>>;
    },
    bar: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    }
  }
}

const progressConfig: ProgressConfig = {
  defaultProps: {
    value: 0,
    size: 'md',
    color: 'primary',
    rootProps: {},
    style: {},
    className: ''
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
      color: {
        default: {
          background: 'bg-default-bg-light'
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
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-default'
          },
          primary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-primary'
          },
          secondary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-secondary'
          },
          success: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-success'
          },
          warning: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-warning'
          },
          error: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-error'
          },
          light: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-light'
          },
          dark: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-dark'
          }
        }
      }
    }
  }
};

export default progressConfig;
