import { type MainVariants } from '../components/layouts/Main';

export interface MainConfig {
  defaultProps: {
    variant: MainVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<MainVariants, Record<Themes, Record<string, string>>>;
  };
}

const mainConfig: MainConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-6',
      width: 'w-full',
      padding: 'py-6'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-low'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface-light'
        }
      }
    }
  }
};

export default mainConfig;
