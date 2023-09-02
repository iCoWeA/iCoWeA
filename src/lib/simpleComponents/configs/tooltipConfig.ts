import { type BaseHTMLAttributes } from 'react';

export interface TooltipConfig {
  defaultProps: {
    color: Colors;
    position: Positions;
    gap: number;
    responsive: boolean;
    followCursor: boolean;
    unmountOnExit: boolean;
    arrow: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
    overlayRef: Element | null;
    arrowProps: BaseHTMLAttributes<HTMLDivElement>
  };
  styles: {
    container: {
      base: Record<string, string>;
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
    position: 'bottom',
    gap: 1,
    responsive: true,
    followCursor: false,
    unmountOnExit: true,
    arrow: false,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    overlayRef: null,
    arrowProps: {}
  },
  styles: {
    container: {
      base: {
        position: 'absolute',
        display: 'block',
        gap: 'gap-2',
        alignItems: 'items-center',
        padding: 'py-1.5 px-3',
        borderRadius: 'rounded-xl',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition-[opacity]',
        focus: 'focus:outline-0'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-default/90'
          },
          primary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-primary/90'
          },
          secondary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-secondary/90'
          },
          success: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-success/90'
          },
          warning: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-warning/90'
          },
          error: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-error/90'
          },
          light: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-light/90'
          },
          dark: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-dark/90'
          }
        }
      }
    },
    arrow: {
      base: {
        pisition: 'absolute',
        height: 'h-0',
        width: 'w-0',
        border: 'border-l-[0.25rem] border-l-transparent border-r-[0.25rem] border-r-transparent border-b-[0.5rem]',
        focus: 'focus:outline-0'
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
