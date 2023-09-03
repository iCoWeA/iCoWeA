export interface ListItemConfig {
  defaultProps: {
    size: Sizes;
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    disablePadding: Record<string, string>;
    sizes: Record<Sizes, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const listItemConfig: ListItemConfig = {
  defaultProps: {
    size: 'md',
    color: 'default'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-3',
      alignItems: 'items-center',
      width: 'w-full',
      font: 'antialiased font-normal text-base font-sans',
      focus: 'focus:outline-0'
    },
    disablePadding: {
      padding: 'p-0'
    },
    sizes: {
      sm: {
        padding: 'py-1.5 px-3'
      },
      md: {
        padding: 'py-2 px-4'
      },
      lg: {
        padding: 'py-2.5 px-5'
      }
    },
    colors: {
      default: {
        default: {
          fill: 'fill-default-default',
          color: 'text-default-default'
        },
        primary: {
          fill: 'fill-default-primary',
          color: 'text-default-primary'
        },
        secondary: {
          fill: 'fill-default-secondary',
          color: 'text-default-secondary'
        },
        success: {
          fill: 'fill-default-success',
          color: 'text-default-success'
        },
        warning: {
          fill: 'fill-default-warning',
          color: 'text-default-warning'
        },
        error: {
          fill: 'fill-default-error',
          color: 'text-default-error'
        },
        light: {
          fill: 'fill-default-light',
          color: 'text-default-light'
        },
        dark: {
          fill: 'fill-default-dark',
          color: 'text-default-dark'
        }
      }
    }
  }
};

export default listItemConfig;
