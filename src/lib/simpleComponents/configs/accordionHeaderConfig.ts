export interface AccordionHeaderConfig {
  styles: {
    base: Record<string, string>;
    disabled: Record<Themes, Record<string, string>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>;
    text: Record<Themes, Record<string, string>>;
    filled: Record<Themes, Record<string, string>>;
    'open-text': Record<Themes, Record<Colors, Record<string, string>>>;
    'open-filled': Record<Themes, Record<Colors, Record<string, string>>>;
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      height: 'h-12',
      width: 'w-full',
      padding: 'py-3',
      font: 'antialiased font-normal text-base font-sans',
      hover: 'hover:bg-gradient-to-r',
      active: 'active:bg-gradient-to-r',
      focus: 'focus:outline-0',
      disabled: 'disabled:pointer-events-none disabled:select-none'
    },
    disabled: {
      light: {
        disabled: 'disabled:fill-light-on-surface/40 disabled:fill-light-on-surface/40'
      }
    },
    colors: {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    },
    text: {
      light: {
        fill: 'fill-light-on-surface-variant',
        color: 'text-light-on-surface-variant',
        hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
      }
    },
    filled: {
      light: {
        fill: 'fill-light-on-surface-variant',
        color: 'text-light-on-surface-variant',
        hover: 'hover:fill-light-on-surface hover:text-light-on-surface hover:from-light-on-surface/10 hover:to-light-on-surface/10',
        active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]'
      }
    },
    'open-text': {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface',
          hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary',
          hover: 'hover:fill-light-primary hover:text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary',
          hover: 'hover:fill-light-secondary hover:text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success',
          hover: 'hover:fill-light-success hover:text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning',
          hover: 'hover:fill-light-warning hover:text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error',
          hover: 'hover:fill-light-error hover:text-light-error'
        }
      }
    },
    'open-filled': {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface',
          hover: 'hover:fill-light-on-surface hover:text-light-on-surface hover:from-light-on-surface/10 hover:to-light-on-surface/10',
          active: 'active:from-light-on-surface/[0.15] active:to-light-on-surface/[0.15]'
        },
        primary: {
          fill: 'fill-text-primary',
          color: 'text-light-primary',
          hover: 'hover:fill-light-primary hover:text-light-primary hover:from-light-primary/10 hover:to-light-primary/10',
          active: 'active:from-light-primary/[0.15] active:to-light-primary/[0.15]'
        },
        secondary: {
          fill: 'fill-text-secondary',
          color: 'text-light-secondary',
          hover: 'hover:fill-light-secondary hover:text-light-secondary hover:from-light-secondary/10 hover:to-light-secondary/10',
          active: 'active:from-light-secondary/[0.15] active:to-light-secondary/[0.15]'
        },
        success: {
          fill: 'fill-text-success',
          color: 'text-light-success',
          hover: 'hover:fill-light-success hover:text-light-success hover:from-light-success/10 hover:to-light-success/10',
          active: 'active:from-light-success/[0.15] active:to-light-success/[0.15]'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning',
          hover: 'hover:fill-light-warning hover:text-light-warning hover:from-light-warning/10 hover:to-light-warning/10',
          active: 'active:from-light-warning/[0.15] active:to-light-warning/[0.15]'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error',
          hover: 'hover:fill-light-error hover:text-light-error hover:from-light-error/10 hover:to-light-error/10',
          active: 'active:from-light-error/[0.15] active:to-light-error/[0.15]'
        }
      }
    }
  }
};

export default accordionHeaderConfig;
