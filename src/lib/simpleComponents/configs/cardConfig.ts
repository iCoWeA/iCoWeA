import { type CardVariants } from '../components/UI/Card';

export interface CardConfig {
  defaultProps: {
    variant: CardVariants;
    elevated: boolean;
    clickable: boolean;
    grabed: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, string>;
    disabled: Record<Themes, Record<string, string>>;
    clickable: Record<Themes, Record<string, string>>;
    grabed: Record<Themes, Record<string, string>>;
    variants: Record<CardVariants, Record<Themes, Record<string, string>>>;
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'plain',
    elevated: false,
    clickable: false,
    grabed: false,
    disabled: false
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
    disabled: {
      light: {
        userSelect: 'select-none',
        pointerEvents: 'pointer-event-none',
        background: 'bg-light-on-surface/20'
      }
    },
    clickable: {
      light: {
        hover: 'hover:bg-gradient-to-r hover:from-light-on-surface/10 hover:to-light-on-surface/10',
        active: 'active:bg-gradient-to-r active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]',
        focus: 'focus:outline-0 focus:bg-gradient-to-r focus:from-light-on-surface/[0.15] focus:to-light-on-surface/[0.15]',
        focusVisible: 'focus-visible:ring-2 focus-visible:ring-light-on-surface'
      }
    },
    grabed: {
      light: {
        background: 'bg-gradient-to-r from-light-on-surface/20 to-light-on-surface/20'
      }
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
      },
      outlined: {
        light: {
          border: 'border border-light-divider',
          background: 'bg-light-surface-low'
        }
      }
    }
  }
};

export default cardConfig;
