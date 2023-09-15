export interface LinkConfig {
  defaultProps: {
    underline: Underlines;
    color: Colors;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
    disabled: Record<string, string>;
    disabledColor: Record<Themes, Record<string, string>>;
    underlines: Record<Underlines, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const linkConfig: LinkConfig = {
  defaultProps: {
    underline: 'none',
    color: 'primary',
    disabled: false
  },
  styles: {
    base: {
      display: 'inline-flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      height: 'h-fit',
      width: 'w-fit',
      font: 'antialiased font-normal text-sm font-sans',
      focus: 'focus:outline-0'
    },
    disabled: {
      userSelect: 'select-none',
      pointer: 'pointer-events-none'
    },
    disabledColor: {
      light: {
        fill: 'fill-light-on-surface/40',
        color: 'text-light-on-surface/40'
      }
    },
    underlines: {
      none: {
        textDecoration: 'no-underline'
      },
      hover: {
        hover: 'hover:underline'
      },
      always: {
        textDecoration: 'underline'
      }
    },
    colors: {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    }
  }
};

export default linkConfig;
