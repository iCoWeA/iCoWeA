import { type SectionVariants } from '../components/layouts/Section';

export interface SectionConfig {
  defaultProps: {
    variant: SectionVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<SectionVariants, Record<Themes, Record<string, string>>>;
  };
}

const sectionConfig: SectionConfig = {
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

export default sectionConfig;
