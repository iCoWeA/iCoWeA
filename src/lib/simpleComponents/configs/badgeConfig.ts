import { type BadgeDefaultProps } from '../components/UI/Badge';

export type BadgeColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;
export type BadgeBorderColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface BadgeConfig {
  defaultProps: Required<BadgeDefaultProps>;
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
    withBorder: Record<string, string>;
    positions: Record<string, Record<string, string>>;
    colors: Record<string, Record<BadgeColors, Record<string, string>>>;
    borderColors: Record<string, Record<BadgeBorderColors, Record<string, string>>>;
  }
}

const badgeConfig: BadgeConfig = {
  defaultProps: {
    position: { vertical: 'top', horizontal: 'right' },
    color: 'primary',
    withBorder: false,
    borderColor: 'default',
    invisible: false
  },
  styles: {
    base: {
      position: 'absolute',
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      height: 'min-h-[8px]',
      width: 'min-w-[8px]',
      padding: 'p-1',
      borderRadius: 'rounded-full',
      font: 'antialiased font-normal text-xs font-sans',
      focus: 'focus:outline-0'
    },
    invisible: {
      display: 'hidden'
    },
    withBorder: {
      border: 'border-2'
    },
    positions: {
      top: {
        position: 'top-0',
        translate: '-translate-y-2/4'
      },
      bottom: {
        position: 'bottom-0',
        translate: 'translate-y-2/4'
      },
      left: {
        position: 'left-0',
        translate: '-translate-x-2/4'
      },
      right: {
        position: 'right-0',
        translate: 'translate-x-2/4'
      }
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
    },
    borderColors: {
      default: {
        default: {
          border: 'border-default-bg'
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
        }
      }
    }
  }
};

export default badgeConfig;
