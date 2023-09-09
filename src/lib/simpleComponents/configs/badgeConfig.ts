import { type BaseHTMLAttributes } from 'react';

export interface BadgeConfig {
  defaultProps: {
    position: CornerPositions;
    color: Colors;
    withBorder: boolean;
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
      translate: Record<CornerPositions, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    }
  }
}

const badgeConfig: BadgeConfig = {
  defaultProps: {
    position: 'top-right',
    color: 'error',
    withBorder: false,
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
        justifyContent: 'justify-center',
        minWidth: 'min-w-[1.5rem]',
        padding: 'p-1',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-xs font-sans'
      },
      empty: {
        height: 'h-1.5',
        width: 'w-1.5',
        minWidth: 'min-w-0',
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
          left: 'left-0'
        },
        'top-right': {
          top: 'top-0',
          right: 'right-0'
        },
        'bottom-left': {
          bottom: 'bottom-0',
          left: 'left-0'
        },
        'bottom-right': {
          bottom: 'bottom-0',
          right: 'right-0'
        }
      },
      translate: {
        'top-left': {
          translate: '-translate-y-[calc(100%-0.75rem)] -translate-x-[calc(100%-0.75rem)]'
        },
        'top-right': {
          translate: '-translate-y-[calc(100%-0.75rem)] translate-x-[calc(100%-0.75rem)]'
        },
        'bottom-left': {
          translate: 'translate-y-[calc(100%-0.75rem)] -translate-x-[calc(100%-0.75rem)]'
        },
        'bottom-right': {
          translate: 'translate-y-[calc(100%-0.75rem)] translate-x-[calc(100%-0.75rem)]'
        }
      },
      colors: {
        light: {
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    }
  }
};

export default badgeConfig;
