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
    autoFocus: boolean;
    disabled: boolean;
    value: string;
  };
  styles: {
    container: {
      base: Record<string, string>;
      shift: Record<string, string>;
      variants: Record<InputVariants, Record<string, string>>;
      colors: Record<string, Record<string, string>>;
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
    autoFocus: false,
    disabled: false,
    value: ''
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        width: 'w-full',
        transition: 'transition-colors',
        focus: 'focus:outline-0',
        group: 'group'
      },
      shift: {
        group: 'shift'
      },
      variants: {
        standard: {
          height: 'h-10'
        },
        filled: {
          height: 'h-14',
          borderRadius: 'rounded-t-2xl'
        },
        outlined: {
          height: 'h-10'
        }
      },
      colors: {
        default: {
          background: 'bg-default-default/10',
          hover: 'hover:bg-default-default/20',
          focusWithin: 'focus-within:hover:bg-default-default/10'
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
        padding: 'pl-3'
      },
      rightGap: {
        padding: 'pr-3'
      },
      start: {
        margin: 'mr-0',
        padding: 'pl-4',
        border: 'border-r-0',
        borderRadius: 'rounded-r-none',
        group: 'group-focus-within:border-r-0'
      },
      end: {
        margin: 'ml-0',
        padding: 'pr-4',
        border: 'border-l-0',
        borderRadius: 'rounded-l-none',
        group: 'group-focus-within:border-l-0'
      },
      variants: {
        standard: {
          margin: 'mb-px',
          padding: 'pt-0.5',
          border: 'border-b',
          group: 'group-focus-within:mb-0 group-focus-within:border-b-2'
        },
        filled: {
          margin: 'mb-px',
          padding: 'pt-[1.125rem]',
          border: 'border-b',
          group: 'group-focus-within:mb-0 group-focus-within:border-b-2'
        },
        outlined: {
          margin: 'm-px',
          padding: 'py-0',
          border: 'border',
          borderRadius: 'rounded-2xl',
          group: 'group-focus-within:m-0 group-focus-within:border-2'
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
        alignItems: 'items-center',
        width: 'w-full',
        transition: 'transition-colors',
        pointer: 'pointer-events-none',
        userSelect: 'select-none'
      },
      variants: {
        standard: {
          margin: 'mb-px',
          padding: 'pt-0.5',
          border: 'border-b',
          group: 'group-focus-within:mb-0 group-focus-within:border-b-2'
        },
        filled: {
          margin: 'mb-px',
          padding: 'pt-[1.125rem]',
          border: 'border-b',
          group: 'group-focus-within:mb-0 group-focus-within:border-b-2'
        },
        outlined: {
          margin: 'my-px',
          padding: 'pt-0',
          border: 'border-y',
          group: 'group-focus-within:my-0 group-focus-within:border-y-2'
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
          top: 'top-1.5',
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
