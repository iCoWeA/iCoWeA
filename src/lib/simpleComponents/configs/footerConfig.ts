import { type FooterVariants } from '../components/layouts/Footer';

export interface FooterConfig {
  defaultProps: {
    variant: FooterVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<FooterVariants, Record<Themes, Record<string, string>>>;
  };
}

const footerConfig: FooterConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'py-2 px-4',
      md: 'md:px-8'
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

export default footerConfig;
