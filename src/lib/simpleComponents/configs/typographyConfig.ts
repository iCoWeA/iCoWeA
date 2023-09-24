import { type TypographyTypes } from '../components/UI/Typography';

export interface TypographyConfig {
  defaultProps: {
    type: TypographyTypes;
    variant: TextVariants;
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    types: Record<TypographyTypes, Record<string, string>>;
    variants: Record<TextVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const typographyConfig: TypographyConfig = {
  defaultProps: {
    type: 'body-medium',
    variant: 'plain',
    color: 'default'
  },
  styles: {
    base: {
      font: 'antialiased font-normal font-sans'
    },
    types: {
      'display-large': {
        display: 'block',
        font: 'text-7xl'
      },
      'display-medium': {
        display: 'block',
        font: 'text-6xl'
      },
      'display-small': {
        display: 'block',
        font: 'text-5xl'
      },
      'headline-large': {
        display: 'block',
        font: 'text-4xl'
      },
      'headline-medium': {
        display: 'block',
        font: 'text-3xl'
      },
      'headline-small': {
        display: 'block',
        font: 'text-2xl'
      },
      'title-large': {
        display: 'block',
        font: 'text-lg'
      },
      'title-medium': {
        display: 'block',
        font: 'text-base'
      },
      'title-small': {
        display: 'block',
        font: 'text-sm'
      },
      'body-large': {
        display: 'block',
        font: 'text-base'
      },
      'body-medium': {
        display: 'block',
        font: 'text-sm'
      },
      'body-small': {
        display: 'block',
        font: 'text-sx'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            color: 'text-light-on-surface-variant'
          },
          primary: {
            color: 'text-light-on-primary'
          },
          secondary: {
            color: 'text-light-on-secondary'
          },
          success: {
            color: 'text-light-on-success'
          },
          warning: {
            color: 'text-light-on-warning'
          },
          error: {
            color: 'text-light-on-error'
          }
        },
        dark: {
          default: {
            color: 'text-dark-on-surface-variant'
          },
          primary: {
            color: 'text-dark-on-primary'
          },
          secondary: {
            color: 'text-dark-on-secondary'
          },
          success: {
            color: 'text-dark-on-success'
          },
          warning: {
            color: 'text-dark-on-warning'
          },
          error: {
            color: 'text-dark-on-error'
          }
        }
      },
      solid: {
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
        },
        dark: {
          default: {
            color: 'text-dark-on-surface'
          },
          primary: {
            color: 'text-dark-primary'
          },
          secondary: {
            color: 'text-dark-secondary'
          },
          success: {
            color: 'text-dark-success'
          },
          warning: {
            color: 'text-dark-warning'
          },
          error: {
            color: 'text-dark-error'
          }
        }
      }
    }
  }
};

export default typographyConfig;
