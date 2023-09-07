import { type BaseHTMLAttributes, type FieldsetHTMLAttributes, type LabelHTMLAttributes } from 'react';
import { type IconProps } from '../components/UI/Icon/Icon';
import { type MenuProps } from '../components/UI/Menu/Menu';

export interface SelectConfig {
  defaultProps: {
    variant: InputVariants;
    color: Colors;
    valid: boolean;
    invalid: boolean;
    arrow: boolean;
    position: Positions;
    lockScroll: boolean;
    overlayRef: Element | null;
    menuProps: MenuProps;
    containerProps: BaseHTMLAttributes<HTMLDivElement>;
    startAdornmentContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    fieldsetProps: FieldsetHTMLAttributes<HTMLFieldSetElement>;
    endAdornmentContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    arrowProps: IconProps;
    legendProps: BaseHTMLAttributes<HTMLLegendElement>;
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    disabled: boolean;
    readonly: boolean;
    value: string;
  };
  styles: {
    container: {
      base: Record<string, string>;
      focus: Record<string, string>;
      shift: Record<string, string>;
      colors: Record<string, Record<string, string>>;
      disabled: Record<string, string>;
      disabledColors: Record<string, Record<string, string>>;
    },
    adornmentContainer: {
      base: Record<string, string>;
      leftGap: Record<string, string>;
      rightGap: Record<string, string>;
      start: Record<string, string>;
      end: Record<string, string>;
      variants: Record<InputVariants, Record<string, string>>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    }
    fieldset: {
      base: Record<string, string>;
      variants: Record<InputVariants, Record<string, string>>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    input: {
      base: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    legend: {
      base: Record<string, string>;
    },
    label: {
      base: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      sizes: Record<InputVariants, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    arrow: {
      base: Record<string, string>;
      open: Record<string, string>;
    }
  }
}

const selectConfig: SelectConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    valid: false,
    invalid: false,
    arrow: true,
    position: 'bottom',
    lockScroll: false,
    overlayRef: null,
    menuProps: {},
    containerProps: {},
    startAdornmentContainerProps: {},
    fieldsetProps: {},
    endAdornmentContainerProps: {},
    arrowProps: {},
    legendProps: {},
    labelProps: {},
    disabled: false,
    readonly: true,
    value: ''
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-full',
        borderRadius: 'rounded-t-2xl',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        group: 'group'
      },
      focus: {
        group: 'focus'
      },
      shift: {
        group: 'shift'
      },
      colors: {
        default: {
          background: 'bg-default-default/10',
          hover: 'hover:bg-default-default/20',
          group: 'group-[.focus]:hover:bg-default-default/10'
        }
      },
      disabled: {
        opacity: 'opacity-50',
        pointer: 'pointer-events-none',
        userSelect: 'select-none'
      },
      disabledColors: {
        default: {
          background: 'bg-default-default/10'
        }
      }
    },
    adornmentContainer: {
      base: {
        position: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        transition: 'transition-colors',
        userSelect: 'select-none'
      },
      leftGap: {
        padding: 'pl-3',
        groupFocus: 'group-[.focus]:pl-3'
      },
      rightGap: {
        padding: 'pr-3',
        groupFocus: 'group-[.focus]:pr-3'
      },
      start: {
        padding: 'pr-0',
        border: 'border-r-0',
        borderRadius: 'rounded-r-none',
        groupFocus: 'group-[.focus]:border-r-0 group-[.focus]:pr-0'
      },
      end: {
        padding: 'pl-0',
        border: 'border-l-0',
        borderRadius: 'rounded-l-none',
        groupFocus: 'group-[.focus]:border-l-0 group-[.focus]:pl-0'
      },
      variants: {
        standard: {
          padding: 'pt-0.5 pb-px px-4',
          border: 'border-b',
          groupFocus: 'group-[.focus]:pb-0 group-[.focus]:border-b-2'
        },
        filled: {
          padding: 'pt-[1.125rem] pb-px px-4',
          border: 'border-b',
          groupFocus: 'group-[.focus]:pb-0 group-[.focus]:border-b-2'
        },
        outlined: {
          padding: 'py-px px-[0.9375rem]',
          border: 'border',
          borderRadius: 'rounded-2xl',
          groupFocus: 'group-[.focus]:py-0 group-[.focus]:px-3.5 group-[.focus]:border-2'
        }
      },
      valid: {
        default: {
          border: 'border-default-success',

          groupFocus: 'group-[.focus]:border-default-success'
        }
      },
      invalid: {
        default: {
          border: 'border-default-error',

          groupFocus: 'group-[.focus]:border-default-error'
        }
      },
      colors: {
        default: {
          default: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-default'
          },
          primary: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-primary'
          },
          secondary: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-secondary'
          },
          success: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-success'
          },
          warning: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-warning'
          },
          error: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-error'
          },
          light: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-light'
          },
          dark: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-dark'
          }
        }
      }
    },
    fieldset: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-full',
        transition: 'transition-colors',
        pointer: 'pointer-events-none',
        userSelect: 'select-none'
      },
      variants: {
        standard: {
          padding: 'pt-2 pb-[0.4375rem]',
          border: 'border-b',
          groupFocus: 'group-[.focus]:pb-1.5 group-[.focus]:border-b-2'
        },
        filled: {
          padding: 'pt-6 pb-[0.4375rem]',
          border: 'border-b',
          groupFocus: 'group-[.focus]:pb-1.5 group-[.focus]:border-b-2'
        },
        outlined: {
          padding: 'py-[0.4375rem]',
          border: 'border-y',
          groupFocus: 'group-[.focus]:py-1.5 group-[.focus]:border-y-2'
        }
      },
      valid: {
        default: {
          border: 'border-default-success',
          groupFocus: 'group-[.focus]:border-default-success'
        }
      },
      invalid: {
        default: {
          border: 'border-default-error',
          groupFocus: 'group-[.focus]:border-default-error'
        }
      },
      colors: {
        default: {
          default: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-default'
          },
          primary: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-primary'
          },
          secondary: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-secondary'
          },
          success: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-success'
          },
          warning: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-warning'
          },
          error: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-error'
          },
          light: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-light'
          },
          dark: {
            border: 'border-default-divider',
            groupFocus: 'group-[.focus]:border-default-dark'
          }
        }
      }
    },
    input: {
      base: {
        display: 'block',
        height: 'h-6',
        width: 'w-full',
        font: 'antialiased font-normal text-base font-sans',
        background: 'bg-transparent',
        focus: 'focus:outline-0'
      },
      valid: {
        default: {
          color: 'text-default-success'
        }
      },
      invalid: {
        default: {
          color: 'text-default-error'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-dark'
          },
          primary: {
            color: 'text-default-dark'
          },
          secondary: {
            color: 'text-default-dark'
          },
          success: {
            color: 'text-default-dark'
          },
          warning: {
            color: 'text-default-dark'
          },
          error: {
            color: 'text-default-dark'
          },
          light: {
            color: 'text-default-light'
          },
          dark: {
            color: 'text-default-dark'
          }
        }
      }
    },
    legend: {
      base: {
        display: 'hidden',
        font: 'antialiased font-normal text-sm font-sans text-transparent',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        groupShift: 'group-[.shift]:block group-[.shift]:h-0 group-[.shift]:px-1'
      }
    },
    label: {
      base: {
        position: 'absolute',
        display: 'block',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        groupShift: 'group-[.shift]:text-sm group-[.shift]:px-1'
      },
      valid: {
        default: {
          color: 'text-default-success'
        }
      },
      invalid: {
        default: {
          color: 'text-default-error'
        }
      },
      sizes: {
        standard: {
          top: 'top-2',
          groupShift: 'group-[.shift]:-top-px group-[.shift]:-translate-y-2/4'
        },
        filled: {
          top: 'top-6',
          groupShift: 'group-[.shift]:top-0.5'
        },
        outlined: {
          top: 'top-[0.4375rem]',
          groupShift: 'group-[.shift]:-top-px group-[.shift]:-translate-y-2/4'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-default'
          },
          primary: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-primary'
          },
          secondary: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-secondary'
          },
          success: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-success'
          },
          warning: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-warning'
          },
          error: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-error'
          },
          light: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-light'
          },
          dark: {
            color: 'text-default-default',
            group: 'group-[.focus]:text-default-dark'
          }
        }
      }
    },
    arrow: {
      base: {
        transition: 'transition-transform',
        focus: 'focus:outline-0'
      },
      open: {
        transform: 'rotate-180'
      }
    }
  }
};

export default selectConfig;
