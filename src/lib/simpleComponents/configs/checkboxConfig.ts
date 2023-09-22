import { type HTMLInputTypeAttribute } from 'react';

export interface CheckboxConfig {
  defaultProps: {
    color: Colors;
    valid: boolean;
    invalid: boolean;
    checked: boolean;
    disabled: boolean;
    type: HTMLInputTypeAttribute;
  };
  styles: {
    container: {
      base: Record<string, string>;
    },
    input: {
      base: Record<string, string>;
      color: Record<Themes, Record<string, string>>;
      checked: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    icon: {
      base: Record<string, string>;
      border: Record<Themes, Record<string, string>>;
      valid: Record<Themes, Record<string, string>>;
      invalid: Record<Themes, Record<string, string>>;
      disabled: Record<Themes, Record<string, string>>;
      disabledChecked: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    }
  }
}

const checkboxConfig: CheckboxConfig = {
  defaultProps: {
    color: 'primary',
    valid: false,
    invalid: false,
    checked: false,
    disabled: false,
    type: 'checkbox'
  },
  styles: {
    container: {
      base: {
        position: 'relative',
        display: 'inline-flex',
        height: 'h-10',
        width: 'w-10',
        borderRadius: 'rounded-full',
        userSelect: 'select-none'
      }
    },
    input: {
      base: {
        display: 'block',
        height: 'h-full',
        width: 'w-full',
        borderRadius: 'rounded-full',
        background: 'bg-transparent',
        appearance: 'appearance-none',
        hover: 'hover:bg-gradient-to-r',
        active: 'active:bg-gradient-to-r',
        focus: 'focus:outline-0',
        disabled: 'disabled:pointer-events-none'
      },
      color: {
        light: {
          hover: 'hover:bg-light-on-surface/10',
          active: 'active:bg-light-on-surface/[0.15]'
        }
      },
      checked: {
        light: {
          default: {
            hover: 'hover:bg-light-on-surface/10',
            active: 'active:bg-light-on-surface/[0.15]',
            focus: 'focus:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'hover:bg-light-primary/10',
            active: 'active:bg-light-primary/[0.15]',
            focus: 'focus:bg-light-primary/[0.15]'
          },
          secondary: {
            hover: 'hover:bg-light-secondary/10',
            active: 'active:bg-light-secondary/[0.15]',
            focus: 'focus:bg-light-secondary/[0.15]'
          },
          success: {
            hover: 'hover:bg-light-success/10',
            active: 'active:bg-light-success/[0.15]',
            focus: 'focus:bg-light-success/[0.15]'
          },
          warning: {
            hover: 'hover:bg-light-warning/10',
            active: 'active:bg-light-warning/[0.15]',
            focus: 'focus:bg-light-warning/[0.15]'
          },
          error: {
            hover: 'hover:bg-light-error/10',
            active: 'active:bg-light-error/[0.15]',
            focus: 'focus:bg-light-error/[0.15]'
          }
        }
      }
    },
    icon: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-2/4',
        translate: '-translate-y-2/4 -translate-x-2/4',
        display: 'block',
        height: 'h-5',
        borderRadius: 'rounded',
        fill: 'fill-transparent',
        transition: 'transition-colors',
        pointerEvent: 'pointer-events-none'
      },
      border: {
        light: {
          border: 'border-2 border-light-divider'
        }
      },
      valid: {
        light: {
          border: 'border-light-success'
        }
      },
      invalid: {
        light: {
          border: 'border-light-error'
        }
      },
      disabled: {
        light: {
          border: 'border-light-on-surface/40'
        }
      },
      disabledChecked: {
        light: {
          border: 'border-0',
          fill: 'fill-light-on-surface/40',
          background: 'bg-light-on-surface/20'
        }
      },
      colors: {
        light: {
          default: {
            border: 'border-0',
            fill: 'fill-light-on-surface',
            background: 'bg-light-surface-dark'
          },
          primary: {
            border: 'border-0',
            fill: 'fill-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            border: 'border-0',
            fill: 'fill-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            border: 'border-0',
            fill: 'fill-light-on-success',
            bnackground: 'bg-light-success'
          },
          warning: {
            border: 'border-0',
            fill: 'fill-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            border: 'border-0',
            fill: 'fill-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    }
  }
};

export default checkboxConfig;
