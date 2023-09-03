export interface BadgePosition {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right'
}

export interface BadgeConfig {
  defaultProps: {
    position: BadgePosition;
    color: Colors;
    withBorder: boolean;
    borderColor: Colors;
    invisible: boolean;
  };
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
    withBorder: Record<string, string>;
    positions: Record<string, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
    borderColors: Record<string, Record<Colors, Record<string, string>>>;
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
      gap: 'gap-1.5',
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
};

export default badgeConfig;
