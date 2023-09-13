import { type CardVariants } from '../components/UI/Card';

export interface CardConfig {
  defaultProps: {
    variant: CardVariants;
    elevated: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    variants: Record<CardVariants, Record<Themes, Record<string, string>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'plain',
    elevated: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-xl',
      overflow: 'overflow-hidden'
    },
    elevated: {
      shadow: 'shadow-md shadow-black/50'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-light'
        }
      },
      filled: {
        light: {
          background: 'bg-light-surface'
        }
      },
      outlined: {
        light: {
          border: 'border border-light-divider'
        }
      }
    }
  }
};

export default cardConfig;
