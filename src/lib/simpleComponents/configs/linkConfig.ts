export type LinkUnderlines = 'none' | 'hover' | 'always';

export interface LinkConfig {
  defaultProps: {
    underline: LinkUnderlines;
    color: Colors;
    fullwidth: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    disabled: Record<string, string>;
    underlines: Record<LinkUnderlines, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const linkConfig: LinkConfig = {
  defaultProps: {
    underline: 'none',
    color: 'primary',
    fullwidth: false,
    disabled: false
  },
  styles: {
    base: {
      display: 'inline-flex',
      alignItems: 'items-center',
      gap: 'gap-3',
      height: 'h-fit',
      width: 'w-fit',
      font: 'antialiased font-normal text-base font-sans',
      transition: 'transition-colors',
      focus: 'focus:outline-0'
    },
    fullwidth: {
      height: 'h-full',
      width: 'w-full'
    },
    disabled: {
      opacity: 'opacity-50',
      userSelect: 'select-none',
      pointer: 'pointer-events-none'
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
      default: {
        default: {
          fill: 'fill-default-default',
          color: 'text-default-default',
          underline: 'decoration-default-default/60',
          hover: 'hover:decoration-default-default'
        },
        primary: {
          fill: 'fill-default-primary',
          color: 'text-default-primary',
          underline: 'decoration-default-primary/60',
          hover: 'hover:decoration-default-primary'
        },
        secondary: {
          fill: 'fill-default-secondary',
          color: 'text-default-secondary',
          underline: 'decoration-default-secondary/60',
          hover: 'hover:decoration-default-secondary'
        },
        success: {
          fill: 'fill-default-success',
          color: 'text-default-success',
          underline: 'decoration-default-success/60',
          hover: 'hover:decoration-default-success'
        },
        warning: {
          fill: 'fill-default-warning',
          color: 'text-default-warning',
          decoration: 'decoration-default-warning/60',
          hover: 'hover:decoration-default-warning'
        },
        error: {
          ffill: 'fill-default-error',
          color: 'text-default-error',
          underline: 'decoration-default-error/60',
          hover: 'hover:decoration-default-error'
        },
        light: {
          fill: 'fill-default-light',
          color: 'text-default-light',
          underline: 'decoration-default-light/60',
          hover: 'hover:decoration-default-light'
        },
        dark: {
          fill: 'fill-default-dark',
          color: 'text-default-dark',
          underline: 'decoration-default-dark/60',
          hover: 'hover:decoration-default-dark'
        }
      }
    }
  }
};

export default linkConfig;
