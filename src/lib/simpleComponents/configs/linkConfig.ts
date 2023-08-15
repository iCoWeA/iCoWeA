export type LinkUnderlines = 'none' | 'hover' | 'always';
export type LinkColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface LinkDefaultProps {
  underline?: LinkUnderlines;
  color?: LinkColors;
  fullwidth?: boolean;
  disabled?: boolean;
}

export interface LinkConfig {
  defaultProps: Required<LinkDefaultProps>;
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
    disabled: Record<string, string>;
    underlines: Record<LinkUnderlines, Record<string, string>>;
    colors: Record<string, Record<LinkColors, Record<string, string>>>;
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
          fill: 'fill-default-text',
          color: 'text-default-text',
          underline: 'decoration-default-text/60',
          hover: 'hover:decoration-default-text'
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
          fill: 'fill-default-text-light',
          color: 'text-default-text-light',
          underline: 'decoration-default-text-light/60',
          hover: 'hover:decoration-default-text-light'
        },
        dark: {
          fill: 'fill-default-text-dark',
          color: 'text-default-text-dark',
          underline: 'decoration-default-text-dark/60',
          hover: 'hover:decoration-default-text-dark'
        }
      }
    }
  }
};

export default linkConfig;
