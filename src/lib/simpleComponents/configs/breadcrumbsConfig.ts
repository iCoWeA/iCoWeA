import { type LiHTMLAttributes, type ReactNode } from 'react';

export type BreadcrumbsColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'light' | 'dark' | string;

export interface BreadcrumbsProps {
  separator?: ReactNode;
  color?: BreadcrumbsColors;
  fullwidth?: boolean;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  className?: string;
  children?: ReactNode;
}

export interface BreadcrumbsConfig {
  defaultProps: {
    separator: ReactNode;
    color: BreadcrumbsColors;
    fullwidth: boolean;
    itemsProps: Record<number, LiHTMLAttributes<HTMLLIElement>>;
    separatorsProps: Record<number, LiHTMLAttributes<HTMLLIElement>>;
    className: string;
    children?: ReactNode;
  };
  styles: {
    root: {
      base: Record<string, string>;
      fullwidth: Record<string, string>;
    },
    item: {
      base: Record<string, string>;
    },
    separator: {
      base: Record<string, string>;
      colors: Record<string, Record<BreadcrumbsColors, Record<string, string>>>;
    }
  }
}

const breadcrumbsConfig: BreadcrumbsConfig = {
  defaultProps: {
    separator: '/',
    color: 'default',
    fullwidth: false,
    itemsProps: {},
    separatorsProps: {},
    className: ''
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        flexWrap: 'flex-wrap',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-fit',
        focus: 'focus:outline-0'
      },
      fullwidth: {
        width: 'w-full',
        justifyContent: 'justify-center'
      }
    },
    item: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        font: 'antialiased font-normal text-base font-sans',
        focus: 'focus:outline-0'
      }
    },
    separator: {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        font: 'antialiased font-normal text-sm font-sans',
        userSelect: 'select-none',
        focus: 'focus:outline-0'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-text/70',
            color: 'text-default-text/70'
          },
          primary: {
            fill: 'fill-default-primary/70',
            color: 'text-default-primary/70'
          },
          secondary: {
            fill: 'fill-default-secondary/70',
            color: 'text-default-secondary/70'
          },
          success: {
            fill: 'fill-default-success/70',
            color: 'text-default-success/70'
          },
          warning: {
            fill: 'fill-default-warning/70',
            color: 'text-default-warning/70'
          },
          error: {
            fill: 'fill-default-error/70',
            color: 'text-default-error/70'
          },
          light: {
            fill: 'fill-default-text-light/70',
            color: 'text-default-text-light/70'
          },
          dark: {
            fill: 'fill-default-text-dark/70',
            color: 'text-default-text-dark/70'
          }
        }
      }
    }
  }
};

export default breadcrumbsConfig;
