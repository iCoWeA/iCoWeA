import { type AsideVariants } from '../components/layouts/Aside';

export interface AsideConfig {
  defaultProps: {
    variant: AsideVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<AsideVariants, Record<Themes, Record<string, string>>>;
  };
}

const asideConfig: AsideConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full'
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

export default asideConfig;
