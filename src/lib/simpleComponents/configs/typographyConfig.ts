import { type TypographyVariants } from '../components/UI/Typography';

export interface TypographyConfig {
  defaultProps: {
    variant: TypographyVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<TypographyVariants, Record<Themes, Record<string, string>>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>;
  }
}

const typographyConfig: TypographyConfig = {
  defaultProps: {
    variant: 'body-medium'
  },
  styles: {
    base: {
      font: 'antialiased font-normal font-sans'
    },
    variants: {
      'display-large': {
        light: {
          display: 'block',
          font: 'text-7xl',
          color: 'text-light-on-surface'
        }
      },
      'display-medium': {
        light: {
          display: 'block',
          font: 'text-6xl',
          color: 'text-light-on-surface'
        }
      },
      'display-small': {
        light: {
          display: 'block',
          font: 'text-5xl',
          color: 'text-light-on-surface'
        }
      },
      'headline-large': {
        light: {
          display: 'block',
          font: 'text-4xl',
          color: 'text-light-on-surface'
        }
      },
      'headline-medium': {
        light: {
          display: 'block',
          font: 'text-3xl',
          color: 'text-light-on-surface'
        }
      },
      'headline-small': {
        light: {
          display: 'block',
          font: 'text-2xl',
          color: 'text-light-on-surface'
        }
      },
      'title-large': {
        light: {
          display: 'block',
          font: 'text-lg',
          color: 'text-light-on-surface'
        }
      },
      'title-medium': {
        light: {
          display: 'block',
          font: 'text-base',
          color: 'text-light-on-surface'
        }
      },
      'title-small': {
        light: {
          display: 'block',
          font: 'text-sm',
          color: 'text-light-on-surface'
        }
      },
      'body-large': {
        light: {
          display: 'block',
          font: 'text-base',
          color: 'text-light-on-surface-variant'
        }
      },
      'body-medium': {
        light: {
          display: 'block',
          font: 'text-sm',
          color: 'text-light-on-surface-variant'
        }
      },
      'body-small': {
        light: {
          display: 'block',
          font: 'text-sx',
          color: 'text-light-on-surface-variant'
        }
      }
    },
    colors: {
      light: {
        default: {
          color: 'text-light-on-surface'
        },
        primary: {
          color: 'text-light-primary'
        },
        secondary: {
          color: 'text-light-secondary'
        },
        success: {
          color: 'text-light-success'
        },
        warning: {
          color: 'text-light-warning'
        },
        error: {
          color: 'text-light-error'
        }
      }
    }
  }
};

export default typographyConfig;
