export interface AccordionHeaderConfig {
  styles: {
    button: {
      base: Record<string, string>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    before: {
      base: Record<string, string>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    divider: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
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
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none disabled:select-none'
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          primary: {
            fill: 'fill-light-primary',
            color: 'text-light-primary',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          secondary: {
            fill: 'fill-light-secondary',
            color: 'text-light-secondary',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          success: {
            fill: 'fill-light-success',
            color: 'text-light-success',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          warning: {
            fill: 'fill-light-warning',
            color: 'text-light-warning',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
          },
          error: {
            fill: 'fill-light-error',
            color: 'text-light-error',
            disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
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
          default: {
            hover: 'hover:before:bg-light-on-surface/[0.08]',
            active: 'active:before:bg-light-on-surface/[0.12]'
          },
          primary: {
            hover: 'hover:before:bg-light-on-primary/[0.08]',
            active: 'active:before:bg-light-on-primary/[0.12]'
          },
          secondary: {
            hover: 'hover:before:bg-light-on-secondary/[0.08]',
            active: 'active:before:bg-light-on-secondary/[0.12]'
          },
          success: {
            hover: 'hover:before:bg-light-on-success/[0.08]',
            active: 'active:before:bg-light-on-success/[0.12]'
          },
          warning: {
            hover: 'hover:before:bg-light-on-warning/[0.08]',
            active: 'active:before:bg-light-on-warning/[0.12]'
          },
          error: {
            hover: 'hover:before:bg-light-on-error/[0.08]',
            active: 'active:before:bg-light-on-error/[0.12]'
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
