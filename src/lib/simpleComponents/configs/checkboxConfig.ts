import { type BaseHTMLAttributes, type SVGAttributes, type HTMLInputTypeAttribute, type MutableRefObject, type ReactNode } from 'react';

export type CheckboxColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface CheckboxProps {
  color?: CheckboxColors;
  valid?: boolean;
  invalid?: boolean;
  icon?: ReactNode;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  iconProps?: SVGAttributes<SVGSVGElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
  checked?: boolean;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute
  className?: string;
  children?: ReactNode;
}

export interface CheckboxConfig {
  defaultProps: {
    color: CheckboxColors;
    valid: boolean;
    invalid: boolean;
    rootProps: BaseHTMLAttributes<HTMLDivElement>;
    iconProps: SVGAttributes<SVGSVGElement>;
    checked: boolean;
    disabled: boolean;
    type: HTMLInputTypeAttribute
    className: string;
    children?: ReactNode;
  };
  styles: {
    root: {
      base: Record<string, string>;
    },
    input: {
      base: Record<string, string>;
      after: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      colors: Record<string, Record<CheckboxColors, Record<string, string>>>
    },
    icon: {
      base: Record<string, string>;
      colors: Record<string, Record<CheckboxColors, Record<string, string>>>
    }
  }
}

const checkboxConfig: CheckboxConfig = {
  defaultProps: {
    color: 'primary',
    valid: false,
    invalid: false,
    rootProps: {},
    iconProps: {},
    checked: false,
    disabled: false,
    type: 'checkbox',
    className: ''
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'inline-block',
        width: 'w-10',
        aspectRatio: 'aspect-square',
        focus: 'focus:outline-0'
      }
    },
    input: {
      base: {
        display: 'block',
        width: 'w-full',
        aspectRatio: 'aspect-square',
        borderRadius: 'rounded-full',
        background: 'bg-transparent',
        transition: 'transition-colors',
        appearance: 'appearance-none',
        peer: 'peer',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      after: {
        position: 'after:absolute',
        top: 'after:top-2/4',
        left: 'after:left-2/4',
        translate: 'after:-translate-y-2/4 after:-translate-x-2/4',
        display: 'after:block',
        width: 'after:w-6',
        aspectRatio: 'after:aspect-square',
        border: 'after:border',
        borderRadius: 'after:rounded-lg',
        transition: 'after:transition-colors',
        focus: 'focus:outline-0'
      },
      valid: {
        default: {
          border: 'after:border-default-success',
          hover: 'hover:bg-default-success/10 hover:checked:bg-default-success/10',
          checked: 'checked:after:border-default-success checked:after:bg-default-success'
        }
      },
      invalid: {
        default: {
          border: 'after:border-default-error',
          hover: 'hover:bg-default-error/10 hover:checked:bg-default-error/10',
          checked: 'checked:after:border-default-error checked:after:bg-default-error'
        }
      },
      colors: {
        default: {
          default: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg/10 hover:checked:bg-default-bg/10',
            checked: 'checked:after:border-default-bg checked:after:bg-default-bg'
          },
          primary: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg-dark/10 hover:checked:bg-default-primary/10',
            checked: 'checked:after:border-default-primary checked:after:bg-default-primary'
          },
          secondary: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg-dark/10 hover:checked:bg-default-secondary/10',
            checked: 'checked:after:border-default-secondary checked:after:bg-default-secondary'
          },
          success: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg-dark/10 hover:checked:bg-default-success/10',
            checked: 'checked:after:border-default-success checked:after:bg-default-success'
          },
          warning: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg-dark/10 hover:checked:bg-default-warning/10',
            checked: 'checked:after:border-default-warning checked:after:bg-default-warning'
          },
          error: {
            border: 'after:border-default-bg-light',
            hover: 'hover:bg-default-bg-dark/10 hover:checked:bg-default-error/10',
            checked: 'checked:after:border-default-error checked:after:bg-default-error'
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
        width: 'w-6',
        aspectRatio: 'aspect-square',
        padding: 'p-0.5',
        fill: 'fill-transparent',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        focus: 'focus:outline-0'
      },
      colors: {
        default: {
          default: {
            peer: 'peer-checked:fill-default-text-dark'
          },
          primary: {
            peer: 'peer-checked:fill-default-text-light'
          },
          secondary: {
            peer: 'peer-checked:fill-default-text-light'
          },
          success: {
            peer: 'peer-checked:fill-default-text-light'
          },
          warning: {
            peer: 'peer-checked:fill-default-text-dark'
          },
          error: {
            peer: 'peer-checked:fill-default-text-light'
          }
        }
      }
    }
  }
};

export default checkboxConfig;
