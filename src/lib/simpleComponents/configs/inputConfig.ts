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
      focused: Record<string, string>;
      shifted: Record<string, string>;
    },
    adornment: {
      base: Record<string, string>;
      leftGap: Record<string, string>;
      rightGap: Record<string, string>;
      start: Record<string, string>;
      end: Record<string, string>;
      sizes: Record<string, Record<string, string>>;
      valid: Record<InputVariants, Record<string, Record<string, string>>>;
      invalid: Record<InputVariants, Record<string, Record<string, string>>>;
      variants: Record<InputVariants, Record<string, Record<Colors, Record<string, string>>>>;
    }
    fieldset: {
      base: Record<string, string>;
      sizes: Record<string, Record<string, string>>;
      valid: Record<InputVariants, Record<string, Record<string, string>>>;
      invalid: Record<InputVariants, Record<string, Record<string, string>>>;
      variants: Record<InputVariants, Record<string, Record<Colors, Record<string, string>>>>;
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
        width: 'w-fit',
        focus: 'focus:outline-0',
        group: 'group'
      },
      focused: {
        group: 'focused'
      },
      shifted: {
        group: 'shifted'
      }
    },
    adornment: {
      base: {
        boxSizing: 'box-content',
        position: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        height: 'h-9',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        focus: 'focus:outline-0'
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
        group: 'group-[.focused]:border-r-0'
      },
      end: {
        margin: 'ml-0',
        padding: 'pr-4',
        border: 'border-l-0',
        borderRadius: 'rounded-l-none',
        group: 'group-[.focused]:border-l-0'
      },
      sizes: {
        standard: {
          padding: 'pt-0.5'
        },
        filled: {
          padding: 'pt-[1.125rem]'
        },
        outlined: {
          padding: 'py-0'
        }
      },
      valid: {
        standard: {
          default: {
            margin: 'mb-px',
            border: 'border-y border-default-success',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
          }
        },
        filled: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-success',
            borderRadius: 'rounded-t-2xl',
            background: 'bg-default-success/10',
            hover: 'hover:bg-default-success/20',
            focused: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
            groupHover: 'group-[.focused]:hover:bg-default-success/10'
          }
        },
        outlined: {
          default: {
            margin: 'm-px',
            border: 'border border-default-success',
            borderRadius: 'rounded-2xl',
            group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-success'
          }
        }
      },
      invalid: {
        standard: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-error',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
          }
        },
        filled: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-error',
            borderRadius: 'rounded-t-2xl',
            background: 'bg-default-error/10',
            hover: 'hover:bg-default-error/20',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
            groupHover: 'group-[.focused]:hover:bg-default-error/10'
          }
        },
        outlined: {
          default: {
            margin: 'm-px',
            border: 'border border-default-error',
            borderRadius: 'rounded-2xl',
            group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-error'
          }
        }
      },
      variants: {
        standard: {
          default: {
            default: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-default'
            },
            primary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary'
            },
            success: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
            },
            warning: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning'
            },
            error: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
            },
            light: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-light'
            },
            dark: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-dark'
            }
          }
        },
        filled: {
          default: {
            default: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-default',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            primary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            secondary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            success: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            warning: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            error: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            light: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-light',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            dark: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-dark',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            }
          }
        },
        outlined: {
          default: {
            default: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-default'
            },
            primary: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-secondary'
            },
            success: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-success'
            },
            warning: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-warning'
            },
            error: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-error'
            },
            light: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-light'
            },
            dark: {
              margin: 'm-px',
              border: 'border border-default-divider',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:m-0 group-[.focused]:border-2 group-[.focused]:border-default-dark'
            }
          }
        }
      }
    },
    fieldset: {
      base: {
        boxSizing: 'box-content',
        position: 'relative',
        display: 'flex',
        alignItems: 'items-center',
        height: 'h-9',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      sizes: {
        standard: {
          padding: 'pt-0.5'
        },
        filled: {
          padding: 'pt-[1.125rem]'
        },
        outlined: {
          padding: 'pt-0'
        }
      },
      valid: {
        standard: {
          default: {
            margin: 'mb-px',
            border: 'border-y border-default-success',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
          }
        },
        filled: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-success',
            background: 'bg-default-success/10',
            hover: 'hover:bg-default-success/20',
            focused: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
            groupHover: 'group-[.focused]:hover:bg-default-success/10'
          }
        },
        outlined: {
          default: {
            margin: 'my-px',
            border: 'border-y border-default-success',
            group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-success'
          }
        }
      },
      invalid: {
        standard: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-error',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
          }
        },
        filled: {
          default: {
            margin: 'mb-px',
            border: 'border-b border-default-error',
            background: 'bg-default-error/10',
            hover: 'hover:bg-default-error/20',
            group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
            groupHover: 'group-[.focused]:hover:bg-default-error/10'
          }
        },
        outlined: {
          default: {
            margin: 'my-px',
            border: 'border-y border-default-error',
            group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-error'
          }
        }
      },
      variants: {
        standard: {
          default: {
            default: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-default'
            },
            primary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary'
            },
            success: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
            },
            warning: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning'
            },
            error: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
            },
            light: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-light'
            },
            dark: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-dark'
            }
          }
        },
        filled: {
          default: {
            default: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-default',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            primary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            secondary: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            success: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            warning: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            error: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            light: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-light',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            },
            dark: {
              margin: 'mb-px',
              border: 'border-b border-default-divider',
              background: 'bg-default-default/10',
              hover: 'hover:bg-default-default/20',
              group: 'group-[.focused]:mb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-dark',
              groupHover: 'group-[.focused]:hover:bg-default-default/10'
            }
          }
        },
        outlined: {
          default: {
            default: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-default'
            },
            primary: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-secondary'
            },
            success: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-success'
            },
            warning: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-warning'
            },
            error: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-error'
            },
            light: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-light'
            },
            dark: {
              margin: 'my-px',
              border: 'border-y border-default-divider',
              group: 'group-[.focused]:my-0 group-[.focused]:border-y-2 group-[.focused]:border-default-dark'
            }
          }
        }
      }
    },
    input: {
      base: {
        display: 'block',
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
        focus: 'focus:outline-0',
        group: 'group-[.shifted]:block group-[.shifted]:h-0 group-[.shifted]:px-1'
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
        focus: 'focus:outline-0',
        group: 'group-[.shifted]:text-sm group-[.shifted]:px-1'
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
          group: 'group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4'
        },
        filled: {
          top: 'top-6',
          group: 'group-[.shifted]:top-0.5'
        },
        outlined: {
          top: 'top-1.5',
          group: 'group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-default'
          },
          primary: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-primary'
          },
          secondary: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-secondary'
          },
          success: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-success'
          },
          warning: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-warning'
          },
          error: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-error'
          },
          light: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-light'
          },
          dark: {
            color: 'text-default-default',
            group: 'group-[.shifted]:text-default-default group-[.focused]:group-[.shifted]:text-default-dark'
          }
        }
      }
    }
  }
};

export default inputConfig;
