import { type CardVariants } from '../components/UI/Card';

export interface CardConfig {
  defaultProps: {
    variant: CardVariants;
    elevated: boolean;
    clickable: boolean;
    grabed: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      elevated: Record<string, string>;
      variants: Record<CardVariants, Record<Themes, Record<string, string>>>;
    },
    layer: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
      grabed: Record<Themes, Record<string, string>>;
    }
  }
}

const cardConfig: CardConfig = {
  defaultProps: {
    variant: 'plain',
    elevated: false,
    clickable: false,
    grabed: false
  },
  styles: {
    container: {
      base: {
        position: 'relative',
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
    },
    layer: {
      base: {
        position: 'before:absolute',
        top: 'before:top-0',
        left: 'before:left-0',
        display: 'before:block',
        height: 'before:h-full',
        width: 'before:w-full',
        transition: 'before:transition'
      },
      colors: {
        light: {
          hover: 'hover:before:bg-light-on-surface/10',
          active: 'active:before:bg-light-on-surface/[0.15]'
        }
      },
      grabed: {
        light: {
          background: 'before:bg-light-on-surface/20'
        }
      }
    }
  }
};

export default cardConfig;
