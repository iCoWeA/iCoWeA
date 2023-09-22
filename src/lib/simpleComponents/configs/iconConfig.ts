export interface IconConfig {
  defaultProps: {
    'aria-hidden': boolean;
    viewBox: '0 0 24 24';
  },
  styles: {
    base: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>
  }
}

const iconConfig: IconConfig = {
  defaultProps: {
    'aria-hidden': true,
    viewBox: '0 0 24 24'
  },
  styles: {
    base: {
      display: 'inline-block',
      height: 'h-full',
      aspectRatio: 'aspect-square'
    },
    sizes: {
      xs: {
        height: 'h-6'
      },
      sm: {
        height: 'h-8'
      },
      md: {
        height: 'h-10'
      },
      lg: {
        height: 'h-12'
      }
    },
    colors: {
      light: {
        default: {
          fill: 'fill-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary'
        },
        success: {
          fill: 'fill-light-success'
        },
        warning: {
          fill: 'fill-light-warning'
        },
        error: {
          fill: 'fill-light-error'
        }
      }
    }
  }
};

export default iconConfig;
