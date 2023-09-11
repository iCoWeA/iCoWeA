export interface AccordionHeaderConfig {
  defaultProps: {
    color: Colors;
    divider: boolean;
  };
  styles: {
    button: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
      open: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    before: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
      open: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    divider: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  defaultProps: {
    color: 'default',
    divider: true
  },
  styles: {
    button: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-4',
        alignItems: 'items-center',
        justifyContent: 'justify-between',
        height: 'h-12',
        width: 'w-full',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition',
        focus: 'focus:outline-0'
      },
      colors: {
        light: {
          fill: 'fill-light-on-surface-variant',
          color: 'text-light-on-surface-variant',
          hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
        }
      },
      open: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-low',
            hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
          },
          primary: {
            fill: 'fill-light-on-primary-container',
            color: 'text-light-on-primary-container',
            background: 'bg-light-primary-container',
            hover: 'hover:fill-light-on-primary-container hover:text-light-on-primary-container'
          },
          secondary: {
            fill: 'fill-light-on-secondary-container',
            color: 'text-light-on-secondary-container',
            background: 'bg-light-secondary-container',
            hover: 'hover:fill-light-on-secondary-container hover:text-light-on-secondary-container'
          },
          success: {
            fill: 'fill-light-on-success-container',
            color: 'text-light-on-success-container',
            background: 'bg-light-success-container',
            hover: 'hover:fill-light-on-success-container hover:text-light-on-success-container'
          },
          warning: {
            fill: 'fill-light-on-warning-container',
            color: 'text-light-on-warning-container',
            background: 'bg-light-warning-container',
            hover: 'hover:fill-light-on-warning-container hover:text-light-on-warning-container'
          },
          error: {
            fill: 'fill-light-on-error-container',
            color: 'text-light-on-error-container',
            background: 'bg-light-error-container',
            hover: 'hover:fill-light-on-error-container hover:text-light-on-error-container'
          }
        }
      }
    },
    before: {
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
          hover: 'hover:before:bg-light-on-surface/[0.08]',
          active: 'active:before:bg-light-on-surface/[0.12]'
        }
      },
      open: {
        light: {
          default: {
            hover: 'hover:before:bg-light-on-surface-variant/[0.08]',
            active: 'active:before:bg-light-on-surface-variant/[0.12]'
          },
          primary: {
            hover: 'hover:before:bg-light-on-primary-container/[0.08]',
            active: 'active:before:bg-light-on-primary-container/[0.12]'
          },
          secondary: {
            hover: 'hover:before:bg-light-on-secondary-container/[0.08]',
            active: 'active:before:bg-light-on-secondary-container/[0.12]'
          },
          success: {
            hover: 'hover:before:bg-light-on-success-container/[0.08]',
            active: 'active:before:bg-light-on-success-container/[0.12]'
          },
          warning: {
            hover: 'hover:before:bg-light-on-warning-container/[0.08]',
            active: 'active:before:bg-light-on-warning-container/[0.12]'
          },
          error: {
            hover: 'hover:before:bg-light-on-error-container/[0.08]',
            active: 'active:before:bg-light-on-error-container/[0.12]'
          }
        }
      }
    },
    divider: {
      base: {
        border: 'border-y'
      },
      colors: {
        light: {
          border: 'border-t-transparent border-b-light-divider-variant'
        }
      }
    }
  }
};

export default accordionHeaderConfig;
