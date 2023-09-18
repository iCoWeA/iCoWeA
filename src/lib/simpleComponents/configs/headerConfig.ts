import { type HeaderVariants } from '../components/layouts/Header';

export interface HeaderConfig {
  defaultProps: {
    variant: HeaderVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<HeaderVariants, Record<Themes, Record<string, string>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'py-2 px-4'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-low'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface'
        }
      }
    }
  }
};

export default headerConfig;
