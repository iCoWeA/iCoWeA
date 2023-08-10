/* import { type CheckboxDefaultProps } from '.';

export interface CheckboxConfig {
  defaultProps: Required<CheckboxDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
    },
    input: {
      base: Record<string, string>;
      before: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    },
    uncheckedIcon: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    },
    checkedIcon: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>
    }
  }
}

const checkboxConfig: CheckboxConfig = {
  defaultProps: {
    valid: false,
    invalid: false,
    color: 'primary',
    uncheckedIcon: null,
    checkedIcon: null,
    containerProps: {},
    uncheckedIconProps: {},
    checkedIconProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'block',
        width: 'w-12',
        aspectRatio: 'aspect-square',
        padding: 'p-3'
      }
    },
    input: {
      base: {
        display: 'block',
        width: 'w-full',
        aspectRatio: 'aspect-square',
        outline: 'outline-none',
        border: 'border',
        borderRadius: 'rounded-lg',
        background: 'bg-transparent',
        transition: 'transition-colors',
        appearance: 'appearance-none',
        disabled: 'disabled:checked:bg-transparent disabled:cursor-not-allowed disabled:select-none',
        peer: 'peer'
      },
      before: {
        position: 'before:absolute',
        top: 'before:top-0',
        left: 'before:left-0',
        display: 'before:block',
        width: 'before:w-full',
        aspectRatio: 'before:aspect-square',
        borderRadius: 'before:rounded-full',
        disabled: 'disabled:before:hidden'
      },
      colors: {
        default: {
          default: {
            border: 'border-default-dark/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-dark/10',
            checked: 'checked:border-default-dark checked:bg-default-dark',
            disabled: 'disabled:border-default-dark/10'
          },
          primary: {
            border: 'border-default-dark/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-primary/10',
            checked: 'checked:border-default-primary checked:bg-default-primary',
            disabled: 'disabled:border-default-dark/10'
          },
          secondary: {
            border: 'border-default-dark/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-secondary/10',
            checked: 'checked:border-default-secondary checked:bg-default-secondary',
            disabled: 'disabled:border-default-dark/10'
          },
          success: {
            border: 'border-default-success/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-success/10',
            checked: 'checked:border-default-success checked:bg-default-success',
            disabled: 'disabled:border-default-dark/10'
          },
          warning: {
            border: 'border-default-dark/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-warning/10',
            checked: 'checked:border-default-warning checked:bg-default-warning',
            disabled: 'disabled:border-default-dark/10'
          },
          error: {
            border: 'border-default-error/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-error/10',
            checked: 'checked:border-default-error checked:bg-default-error',
            disabled: 'disabled:border-default-dark/10'
          },
          light: {
            border: 'border-default-light/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-light/10',
            checked: 'checked:border-default-light checked:bg-default-light',
            disabled: 'disabled:border-default-light/10'
          },
          dark: {
            border: 'border-default-dark/30',
            hover: 'hover:before:bg-default-dark/10 hover:checked:before:bg-default-dark/10',
            checked: 'checked:border-default-dark checked:bg-default-dark',
            disabled: 'disabled:border-default-dark/10'
          }
        }
      }
    },
    uncheckedIcon: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        translate: '-translate-y-2/4',
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-6',
        aspectRatio: 'aspect-square',
        padding: 'p-0.5',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        checked: 'peer-checked:hidden'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          primary: {
            fill: 'fill-default-dark/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          secondary: {
            fill: 'fill-default-dark/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          success: {
            fill: 'fill-default-success/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          warning: {
            fill: 'fill-default-dark/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          error: {
            fill: 'fill-default-error/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          light: {
            fill: 'fill-default-light/30',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          dark: {
            fill: 'fill-default-dark/30',
            peer: 'peer-disabled:fill-default-dark/30'
          }
        }
      }
    },
    checkedIcon: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        translate: '-translate-y-2/4',
        display: 'hidden',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-6',
        aspectRatio: 'aspect-square',
        padding: 'p-0.5',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        checked: 'peer-checked:flex'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          primary: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          secondary: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          success: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          warning: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          error: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          },
          light: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-light/30'
          },
          dark: {
            fill: 'fill-default-light',
            peer: 'peer-disabled:fill-default-dark/30'
          }
        }
      }
    }
  }
};

export default checkboxConfig; */
