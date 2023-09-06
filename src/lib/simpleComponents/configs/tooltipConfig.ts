import { type BaseHTMLAttributes } from 'react';

export interface TooltipConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    position: Positions;
    gap: number;
    responsive: boolean;
    followCursor: boolean;
    unmountOnExit: boolean;
    arrow: boolean;
    overlayRef: Element | null;
    arrowProps: BaseHTMLAttributes<HTMLDivElement>
  };
  styles: {
    container: {
      base: Record<string, string>;
      open: Record<string, string>;
      elevated: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    },
    arrow: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    }
  }
}

const tooltipConfig: TooltipConfig = {
  defaultProps: {
    color: 'default',
    elevated: false,
    position: 'bottom',
    gap: 1,
    responsive: true,
    followCursor: false,
    unmountOnExit: true,
    arrow: false,
    overlayRef: null,
    arrowProps: {}
  },
  styles: {
    container: {
      base: {
        position: 'absolute',
        zIndex: 'z-[90]',
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        padding: 'py-1.5 px-3',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-sm font-sans',
        opacity: 'opacity-0',
        transition: 'transition-[opacity]'
      },
      open: {
        opacity: 'opacity-100'
      },
      elevated: {
        default: {
          shadow: 'shadow-md shadow-default-default/80'
        }
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
    },
    arrow: {
      base: {
        pisition: 'absolute',
        display: 'block',
        height: 'h-0',
        width: 'w-0',
        border: 'border-l-[0.25rem] border-l-transparent border-r-[0.25rem] border-r-transparent border-b-[0.5rem]'
      },
      colors: {
        default: {
          default: {
            border: 'border-b-default-default/90'
          },
          primary: {
            border: 'border-b-default-primary/90'
          },
          secondary: {
            border: 'border-b-default-secondary/90'
          },
          success: {
            border: 'border-b-default-success/90'
          },
          warning: {
            border: 'border-b-default-warning/90'
          },
          error: {
            border: 'border-b-default-error/90'
          },
          light: {
            border: 'border-b-default-light/90'
          },
          dark: {
            border: 'border-b-default-dark/90'
          }
        }
      }
    }
  }
};

export default tooltipConfig;
