export interface BadgeConfig {
  defaultProps: {
    position: CornerPositions;
    color: Colors;
    withBorder: boolean;
    invisible: boolean;
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
    invisible: false
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
        gap: 'gap-2',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        minWidth: 'min-w-[1rem]',
        padding: 'px-1',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-xs font-sans',
        opacity: 'opacity-100',
        transition: 'transition'
      },
      empty: {
        height: 'h-1.5',
        width: 'w-1.5',
        minWidth: 'min-w-0',
        padding: 'p-0'
      },
      withBorder: {
        outline: 'outline outline-2 outline-transparent'
      },
      invisible: {
        opacity: 'opacity-0'
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
          translate: '-translate-y-2/4 -translate-x-2/4'
        },
        'top-right': {
          translate: '-translate-y-2/4 translate-x-2/4'
        },
        'bottom-left': {
          translate: 'translate-y-2/4 -translate-x-2/4'
        },
        'bottom-right': {
          translate: 'translate-y-2/4 translate-x-2/4'
        }
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-dark'
          },
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
