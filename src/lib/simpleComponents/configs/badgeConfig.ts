import { type BaseHTMLAttributes } from 'react';

export interface BadgeConfig {
  defaultProps: {
    position: CornerPositions;
    color: ContainerColors;
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
      colors: Record<Themes, Record<ContainerColors, Record<string, string>>>;
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
            fill: 'fill-light-primary-text',
            color: 'text-light-primary-text',
            background: 'bg-light-primary-container'
          },
          secondary: {
            fill: 'fill-light-secondary-text',
            color: 'text-light-secondary-text',
            background: 'bg-light-secondary-container'
          },
          success: {
            fill: 'fill-light-success-text',
            color: 'text-light-success-text',
            background: 'bg-light-success-container'
          },
          warning: {
            fill: 'fill-light-warning-text',
            color: 'text-light-warning-text',
            background: 'bg-light-warning-container'
          },
          error: {
            fill: 'fill-light-error-text',
            color: 'text-light-error-text',
            background: 'bg-light-error-container'
          },
          light: {
            fill: 'fill-light-light-text',
            color: 'text-light-light-text',
            background: 'bg-light-light-container'
          },
          dark: {
            fill: 'fill-light-dark-text',
            color: 'text-light-dark-text',
            background: 'bg-light-dark-container'
          }
        }
      }
    }
  }
};

export default badgeConfig;
