import { type ReactNode, type OlHTMLAttributes, type LiHTMLAttributes } from 'react';

export interface BreadcrumbsConfig {
  defaultProps: {
    separator: ReactNode;
    color: Colors;
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
      colors: Record<string, Record<Colors, Record<string, string>>>;
    }
  }
}

const breadcrumbsConfig: BreadcrumbsConfig = {
  defaultProps: {
    separator: '/',
    color: 'default',
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
        gap: 'gap-3',
        alignItems: 'items-center',
        width: 'w-fit'
      }
    },
    item: {
      base: {
        display: 'flex',
        gap: 'gap-3',
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
  }
};

export default breadcrumbsConfig;
