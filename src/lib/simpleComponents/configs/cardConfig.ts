import { type CardDefaultProps } from '../components/UI/Card';

export type CardColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface CardConfig {
  defaultProps: Required<CardDefaultProps>;
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<CardColors, Record<string, string>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    color: 'default'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      shadow: 'shadow-md',
      borderRadius: 'rounded-2xl',
      overflow: 'overflow-hidden',
      focus: 'focus:outline-0'
    },
    colors: {
      default: {
        default: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-bg'
        },
        primary: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-primary'
        },
        secondary: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-secondary'
        },
        success: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-success'
        },
        warning: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-warning'
        },
        error: {
          shadow: 'shadow-default-bg-dark/20',
          background: 'bg-default-error'
        }
      }
    }
  }
};

export default cardConfig;
