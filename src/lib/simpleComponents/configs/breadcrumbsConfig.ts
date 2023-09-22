import { type ReactNode } from 'react';

export interface BreadcrumbsConfig {
  defaultProps: {
    separator: ReactNode;
    fullwidth: boolean;
    'aria-label': string;
  };
  styles: {
    container: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
    },
    list: {
      base: Record<string, string>;
    },
    item: {
      base: Record<string, string>;
    },
    separator: {
      base: Record<string, string>;
      color: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    }
  }
}

const breadcrumbsConfig: BreadcrumbsConfig = {
  defaultProps: {
    separator: '/',
    fullwidth: false,
    'aria-label': 'breadcrumb'
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit'
      },
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
      }
    },
    list: {
      base: {
        display: 'flex',
        flexWrap: 'flex-wrap',
        gap: 'gap-2',
        alignItems: 'items-center'
      }
    },
    item: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center'
      }
    },
    separator: {
      base: {
        display: 'block',
        font: 'antialiased font-normal text-sm font-sans',
        userSelect: 'select-none'
      },
      color: {
        light: {
          fill: 'fill-light-on-surface-variant',
          color: 'text-light-on-surface-variant'
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
  }
};

export default breadcrumbsConfig;
