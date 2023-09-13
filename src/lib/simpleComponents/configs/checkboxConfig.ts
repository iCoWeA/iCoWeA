import { type BaseHTMLAttributes, type HTMLInputTypeAttribute } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';

export interface CheckboxConfig {
  defaultProps: {
    color: Colors;
    valid: boolean;
    invalid: boolean;
    containerProps: BaseHTMLAttributes<HTMLDivElement>;
    iconProps: IconProps;
    layerProps: BaseHTMLAttributes<HTMLSpanElement>;
    checked: boolean;
    disabled: boolean;
    type: HTMLInputTypeAttribute;
  };
  styles: {
    container: {
      base: Record<string, string>;
      checked: Record<string, string>;
      disabled: Record<string, string>;
    },
    input: {
      base: Record<string, string>;
    },
    icon: {
      base: Record<string, string>;
      border: Record<Themes, Record<string, string>>;
      valid: Record<Themes, Record<string, string>>;
      invalid: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>
    },
    layer: {
      base: Record<string, string>;
      valid: Record<Themes, Record<string, string>>;
      invalid: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>
    }
  }
}

const checkboxConfig: CheckboxConfig = {
  defaultProps: {
    color: 'primary',
    valid: false,
    invalid: false,
    containerProps: {},
    iconProps: {},
    layerProps: {},
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
        group: 'group'
      },
      checked: {
        group: 'checked'
      },
      disabled: {
        group: 'disabled',
        pointerEvent: 'pointer-events-none'
      }
    },
    input: {
      base: {
        display: 'block',
        height: 'h-full',
        width: 'w-full',
        background: 'bg-transparent',
        appearance: 'appearance-none',
        focus: 'focus:outline-0'
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
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      border: {
        light: {
          border: 'border-2 border-light-divider',
          checked: 'group-[.checked]:border-0',
          disabled: 'group-[.disabled]:border-light-on-surface/40'
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
      colors: {
        light: {
          default: {
            checked: 'group-[.checked]:fill-light-on-surface group-[.checked]:bg-light-surface-dark',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          },
          primary: {
            checked: 'group-[.checked]:fill-light-on-primary group-[.checked]:bg-light-primary',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          },
          secondary: {
            checked: 'group-[.checked]:fill-light-on-secondary group-[.checked]:bg-light-secondary',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          },
          success: {
            checked: 'group-[.checked]:fill-light-on-success group-[.checked]:bg-light-success',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          },
          warning: {
            checked: 'group-[.checked]:fill-light-on-warning group-[.checked]:bg-light-warning',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          },
          error: {
            checked: 'group-[.checked]:fill-light-on-error group-[.checked]:bg-light-error',
            disabled: 'group-[.checked]:group-[.disabled]:fill-light-on-surface/40 group-[.checked]:group-[.disabled]:bg-light-on-surface/20'
          }
        }
      }
    },
    layer: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        display: 'block',
        height: 'h-full',
        width: 'w-full',
        borderRadius: 'rounded-full',
        transition: 'transition',
        pointerEvent: 'pointer-events-none'
      },
      valid: {
        light: {
          hover: 'group-hover:bg-light-success/10',
          checkedActive: 'group-[.checked]:group-active:bg-light-success/[0.15]'
        }
      },
      invalid: {
        light: {
          hover: 'group-hover:bg-light-error/10',
          checkedActive: 'group-[.checked]:group-active:bg-light-error/[0.15]'
        }
      },
      colors: {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-on-surface/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-primary/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-primary/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-secondary/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-secondary/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-success/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-success/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-warning/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-warning/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-error/[0.15]',
            checkedHover: 'group-[.checked]:group-hover:bg-light-error/10',
            checkedActive: 'group-[.checked]:group-active:bg-light-on-surface/[0.15]'
          }
        }
      }
    }
  }
};

export default checkboxConfig;
