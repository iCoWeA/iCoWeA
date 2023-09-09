import { type ReactNode, type OlHTMLAttributes, type LiHTMLAttributes } from 'react';

export interface BreadcrumbsConfig {
  defaultProps: {
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
      colors: Record<Themes, Record<string, string>>;
    }
  }
}

const breadcrumbsConfig: BreadcrumbsConfig = {
  defaultProps: {
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
          fill: 'fill-light-on-surface-variant',
          color: 'text-light-on-surface-variant'
        }
      }
    }
  }
};

export default breadcrumbsConfig;
