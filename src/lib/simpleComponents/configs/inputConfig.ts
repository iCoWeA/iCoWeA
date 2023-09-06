import { type BaseHTMLAttributes, type FieldsetHTMLAttributes, type LabelHTMLAttributes } from 'react';

export interface InputConfig {
  defaultProps: {
    variant: InputVariants;
    color: Colors;
    valid: boolean;
    invalid: boolean;
    containerProps: BaseHTMLAttributes<HTMLDivElement>;
    startAdornmentContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    fieldsetProps: FieldsetHTMLAttributes<HTMLFieldSetElement>;
    endAdornmentContainerProps: BaseHTMLAttributes<HTMLDivElement>;
    legendProps: BaseHTMLAttributes<HTMLLegendElement>;
    labelProps: LabelHTMLAttributes<HTMLLabelElement>;
    disabled: boolean;
    value: string;
  };
  styles: {
    container: {
      base: Record<string, string>;
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
    }
  }
}

const inputConfig: InputConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    valid: false,
    invalid: false,
    containerProps: {},
    startAdornmentContainerProps: {},
    fieldsetProps: {},
    endAdornmentContainerProps: {},
    legendProps: {},
    labelProps: {},
    disabled: false,
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
      shift: {
        group: 'shift'
      },
      colors: {
        default: {
          background: 'bg-default-default/10',
          hover: 'hover:bg-default-default/20',
          focusWithin: 'focus-within:hover:bg-default-default/10'
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
        group: 'group-focus-within:pl-3'
      },
      rightGap: {
        padding: 'pr-3',
        group: 'group-focus-within:pr-3'
      },
      start: {
        padding: 'pr-0',
        border: 'border-r-0',
        borderRadius: 'rounded-r-none',
        group: 'group-focus-within:border-r-0'
      },
      end: {
        padding: 'px-4 pl-0',
        border: 'border-l-0',
        borderRadius: 'rounded-l-none',
        group: 'group-focus-within:border-l-0'
      },
      variants: {
        standard: {
          padding: 'pt-0.5 pb-px px-4',
          border: 'border-b',
          group: 'group-focus-within:pb-0 group-focus-within:border-b-2'
        },
        filled: {
          padding: 'pt-[1.125rem] pb-px px-4',
          border: 'border-b',
          group: 'group-focus-within:pb-0 group-focus-within:border-b-2'
        },
        outlined: {
          padding: 'py-px px-[0.9375rem]',
          border: 'border',
          borderRadius: 'rounded-2xl',
          group: 'group-focus-within:py-0 group-focus-within:px-3.5 group-focus-within:border-2'
        }
      },
      valid: {
        default: {
          border: 'border-default-success',
          group: 'group-focus-within:border-default-success'
        }
      },
      invalid: {
        default: {
          border: 'border-default-error',
          group: 'group-focus-within:border-default-error'
        }
      },
      colors: {
        default: {
          default: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-default'
          },
          primary: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-primary'
          },
          secondary: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-secondary'
          },
          success: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-success'
          },
          warning: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-warning'
          },
          error: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-error'
          },
          light: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-light'
          },
          dark: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-dark'
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
          group: 'group-focus-within:pb-1.5 group-focus-within:border-b-2'
        },
        filled: {
          padding: 'pt-6 pb-[0.4375rem]',
          border: 'border-b',
          group: 'group-focus-within:pb-1.5 group-focus-within:border-b-2'
        },
        outlined: {
          padding: 'py-[0.4375rem]',
          border: 'border-y',
          group: 'group-focus-within:py-1.5 group-focus-within:border-y-2'
        }
      },
      valid: {
        default: {
          border: 'border-default-success',
          group: 'group-focus-within:border-default-success'
        }
      },
      invalid: {
        default: {
          border: 'border-default-error',
          group: 'group-focus-within:border-default-error'
        }
      },
      colors: {
        default: {
          default: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-default'
          },
          primary: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-primary'
          },
          secondary: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-secondary'
          },
          success: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-success'
          },
          warning: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-warning'
          },
          error: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-error'
          },
          light: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-light'
          },
          dark: {
            border: 'border-default-divider',
            group: 'group-focus-within:border-default-dark'
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
        group: 'group-[.shift]:block group-[.shift]:h-0 group-[.shift]:px-1 group-focus-within:block group-focus-within:h-0 group-focus-within:px-1'
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
        group: 'group-[.shift]:text-sm group-[.shift]:px-1 group-focus-within:text-sm group-focus-within:px-1'
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
          group: 'group-[.shift]:-top-px group-[.shift]:-translate-y-2/4 group-focus-within:-top-px group-focus-within:-translate-y-2/4'
        },
        filled: {
          top: 'top-6',
          group: 'group-[.shift]:top-0.5 group-focus-within:top-0.5'
        },
        outlined: {
          top: 'top-[0.4375rem]',
          group: 'group-[.shift]:-top-px group-[.shift]:-translate-y-2/4 group-focus-within:-top-px group-focus-within:-translate-y-2/4'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-default'
          },
          primary: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-primary'
          },
          secondary: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-secondary'
          },
          success: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-success'
          },
          warning: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-warning'
          },
          error: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-error'
          },
          light: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-light'
          },
          dark: {
            color: 'text-default-default',
            group: 'group-focus-within:text-default-dark'
          }
        }
      }
    }
  }
};

export default inputConfig;
