import { type ReactNode, type OlHTMLAttributes, type LiHTMLAttributes } from 'react';

export interface BreadcrumbsConfig {
  defaultProps: {
    color: Colors;
    separator: ReactNode;
    fullwidth: boolean;
    listProps: OlHTMLAttributes<HTMLOListElement>;
    itemsProps: Record<number, LiHTMLAttributes<HTMLLIElement>>;
    separatorsProps: Record<number, LiHTMLAttributes<HTMLLIElement>>;
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
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    }
  }
}

const breadcrumbsConfig: BreadcrumbsConfig = {
  defaultProps: {
    color: 'default',
    separator: '/',
    fullwidth: false,
    listProps: {},
    itemsProps: {},
    separatorsProps: {}
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
        alignItems: 'items-center',
        width: 'w-fit'
      }
    },
    item: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        font: 'antialiased font-normal text-base font-sans'
      }
    },
    separator: {
      base: {
        display: 'block',
        font: 'antialiased font-normal text-sm font-sans',
        userSelect: 'select-none'
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface-variant',
            color: 'text-light-on-surface-variant'
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
