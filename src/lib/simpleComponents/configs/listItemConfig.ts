export type ListItemSizes = 'sm' | 'md' | 'lg';
export type ListItemColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface ListItemConfig {
  defaultProps: {
    size: ListItemSizes;
    color: ListItemColors;
    disablePadding: boolean;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    disablePadding: Record<string, string>;
    sizes: Record<ListItemSizes, Record<string, string>>;
    colors: Record<string, Record<ListItemColors, Record<string, string>>>;
  }
}

const listItemConfig: ListItemConfig = {
  defaultProps: {
    size: 'md',
    color: 'default',
    disablePadding: false,
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
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
          fill: 'fill-default-text',
          color: 'text-default-text'
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
          fill: 'fill-default-text-light',
          color: 'text-default-text-light'
        },
        dark: {
          fill: 'fill-default-text-dark',
          color: 'text-default-text-dark'
        }
      }
    }
  }
};

export default listItemConfig;
