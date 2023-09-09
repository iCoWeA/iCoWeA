import { type ReactNode, type OlHTMLAttributes, type LiHTMLAttributes } from 'react';

export interface BreadcrumbsConfig {
  defaultProps: {
    separator: ReactNode;
    color: ContainerColors;
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
      colors: Record<Themes, Record<ContainerColors, Record<string, string>>>;
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
            fill: 'fill-light-default-container',
            color: 'text-light-default-container'
          },
          primary: {
            fill: 'fill-light-primary-container',
            color: 'text-light-primary-container'
          },
          secondary: {
            fill: 'fill-light-secondary-container',
            color: 'text-light-secondary-container'
          },
          success: {
            fill: 'fill-light-success-container',
            color: 'text-light-success-container'
          },
          warning: {
            fill: 'fill-light-warning-container',
            color: 'text-light-warning-container'
          },
          error: {
            fill: 'fill-light-error-container',
            color: 'text-light-error-container'
          },
          light: {
            fill: 'fill-light-light-container',
            color: 'text-light-light-container'
          },
          dark: {
            fill: 'fill-light-dark-container',
            color: 'text-light-dark-container'
          }
        }
      }
    }
  }
};

export default breadcrumbsConfig;
