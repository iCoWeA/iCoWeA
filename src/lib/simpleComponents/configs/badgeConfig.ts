import { type BaseHTMLAttributes } from 'react';

export interface BadgeConfig {
  defaultProps: {
    position: CornerPositions;
    color: Colors;
    withBorder: boolean;
    borderColor: Colors;
    invisible: boolean;
    containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
    },
    badge: {
      base: Record<string, string>;
      empty: Record<string, string>;
      withBorder: Record<string, string>;
      invisible: Record<string, string>;
      positions: Record<CornerPositions, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
      borderColors: Record<string, Record<Colors, Record<string, string>>>;
    }
  }
}

const badgeConfig: BadgeConfig = {
  defaultProps: {
    position: 'top-right',
    color: 'error',
    withBorder: false,
    borderColor: 'default',
    invisible: false,
    containerProps: {}
  },
  styles: {
    container: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        height: 'h-fit',
        widdth: 'w-fit'
      }
    },
    badge: {
      base: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'items-center',
        padding: 'p-1',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-[0.5rem] leading-[0.5rem] font-sans'
      },
      empty: {
        height: 'h-1.5',
        width: 'w-1.5',
        padding: 'p-0'
      },
      withBorder: {
        border: 'border-2'
      },
      invisible: {
        display: 'hidden'
      },
      positions: {
        'top-left': {
          top: 'top-0',
          left: 'left-0',
          translate: '-translate-y-2/4 -translate-x-2/4'
        },
        'top-right': {
          top: 'top-0',
          right: 'right-0',
          translate: '-translate-y-2/4 translate-x-2/4'
        },
        'bottom-left': {
          bottom: 'bottom-0',
          left: 'left-0',
          translate: 'translate-y-2/4 -translate-x-2/4'
        },
        'bottom-right': {
          bottom: 'bottom-0',
          right: 'right-0',
          translate: 'translate-y-2/4 translate-x-2/4'
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
      },
      borderColors: {
        default: {
          default: {
            border: 'border-default-default'
          },
          primary: {
            border: 'border-default-primary'
          },
          secondary: {
            border: 'border-default-secondary'
          },
          success: {
            border: 'border-default-success'
          },
          warning: {
            border: 'border-default-warning'
          },
          error: {
            border: 'border-default-error'
          },
          light: {
            border: 'border-default-light'
          },
          dark: {
            border: 'border-default-dark'
          }
        }
      }
    }
  }
};

export default badgeConfig;
