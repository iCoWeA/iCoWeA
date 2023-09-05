export type TypographyVariants = 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'lead'
| 'paragraph'
| 'small'
| 'span';

export interface TypographyConfig {
  defaultProps: {
    variant: TypographyVariants;
    align: Aligns;
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    aligns: Record<Aligns, Record<string, string>>;
    variants: Record<TypographyVariants, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const typographyConfig: TypographyConfig = {
  defaultProps: {
    variant: 'paragraph',
    align: 'start',
    color: 'default'
  },
  styles: {
    base: {
      font: 'antialiased font-normal font-sans'
    },
    aligns: {
      start: {
        textAlign: 'text-start'
      },
      left: {
        textAlign: 'text-left'
      },
      center: {
        textAlign: 'text-center'
      },
      justify: {
        textAlign: 'text-justify'
      },
      end: {
        textAlign: 'text-end'
      },
      right: {
        textAlign: 'text-right'
      }
    },
    variants: {
      h1: {
        display: 'block',
        font: 'text-5xl'
      },
      h2: {
        display: 'block',
        font: 'text-4xl'
      },
      h3: {
        display: 'block',
        font: 'text-3xl'
      },
      h4: {
        display: 'block',
        font: 'text-2xl'
      },
      h5: {
        display: 'block',
        font: 'text-xl'
      },
      h6: {
        display: 'block',
        font: 'text-lg'
      },
      lead: {
        display: 'block',
        font: 'text-xl'
      },
      paragraph: {
        display: 'block',
        font: 'text-base'
      },
      small: {
        display: 'block',
        font: 'text-sm'
      },
      span: {
        display: 'inline-block',
        font: 'text-base'
      }
    },
    colors: {
      default: {
        default: {
          color: 'text-default-default'
        },
        primary: {
          color: 'text-default-primary'
        },
        secondary: {
          color: 'text-default-secondary'
        },
        success: {
          color: 'text-default-success'
        },
        warning: {
          color: 'text-default-warning'
        },
        error: {
          color: 'text-default-error'
        },
        light: {
          color: 'text-default-light'
        },
        dark: {
          color: 'text-default-dark'
        }
      }
    }
  }
};

export default typographyConfig;
