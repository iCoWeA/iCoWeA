export interface AccordionHeaderConfig {
  styles: {
    button: {
      base: Record<string, string>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    before: {
      base: Record<string, string>;
      divider: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
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
        height: 'h-12',
        width: 'w-full',
        padding: 'py-3',
        font: 'antialiased font-normal text-base font-sans',
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
        border: 'before:border-b',
        transition: 'before:transition'
      },
      divider: {
        light: {
          border: 'before:border-light-divider'
        }
      },
      colors: {
        light: {
          default: {
            hover: 'hover:before:bg-light-on-surface/10',
            active: 'active:before:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'hover:before:bg-light-primary/10',
            active: 'active:before:bg-light-primary/[0.15]'
          },
          secondary: {
            hover: 'hover:before:bg-light-secondary/10',
            active: 'active:before:bg-light-secondary/[0.15]'
          },
          success: {
            hover: 'hover:before:bg-light-success/10',
            active: 'active:before:bg-light-success/[0.15]'
          },
          warning: {
            hover: 'hover:before:bg-light-warning/10',
            active: 'active:before:bg-light-warning/[0.15]'
          },
          error: {
            hover: 'hover:before:bg-light-error/10',
            active: 'active:before:bg-light-error/[0.15]'
          }
        }
      }
    }
  }
};

export default accordionHeaderConfig;
