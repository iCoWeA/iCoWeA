import { type TextareaDefaultProps } from '../components/UI/Textarea';

export type TextareaVariants = 'outlined' | 'filled' | 'standard';
export type TextareaColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface TextareaConfig {
  defaultProps: Required<TextareaDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      focused: Record<string, string>;
      shifted: Record<string, string>;
      variants: Record<TextareaVariants, Record<string, string>>;
    },
    container: {
      base: Record<string, string>;
      valid: Record<TextareaVariants, Record<string, Record<string, string>>>;
      invalid: Record<TextareaVariants, Record<string, Record<string, string>>>;
      variants: Record<TextareaVariants, Record<string, Record<TextareaColors, Record<string, string>>>>;
    },
    textarea: {
      base: Record<string, string>;
      startAdornment: Record<string, string>;
      endAdornment: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      variants: Record<TextareaVariants, Record<string, string>>;
      colors: Record<string, Record<TextareaColors, Record<string, string>>>;
    },
    legend: {
      base: Record<string, string>;
    },
    label: {
      base: Record<string, string>;
      startAdornment: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      variants: Record<TextareaVariants, Record<string, string>>;
      colors: Record<string, Record<TextareaColors, Record<string, string>>>;
    }
  }
}

const textareaConfig: TextareaConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    valid: false,
    invalid: false,
    label: null,
    startAdornment: null,
    endAdornment: null,
    rootProps: {},
    containerProps: {},
    legendProps: {},
    labelProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-full',
        focus: 'focus:outline-0',
        group: 'group'
      },
      focused: {
        group: 'focused'
      },
      shifted: {
        group: 'shifted'
      },
      variants: {
        standard: {
          padding: 'pt-2.5'
        },
        filled: {
          padding: 'pt-6'
        },
        outlined: {
          padding: 'pt-2.5'
        }
      }
    },
    textarea: {
      base: {
        display: 'block',
        width: 'w-full',
        padding: 'pt-1 px-4',
        resize: 'resize-none',
        overflow: 'overflow-scroll',
        font: 'antialiased font-normal text-base font-sans',
        background: 'bg-transparent',
        focus: 'focus:outline-0'
      },
      startAdornment: {
        padding: 'pl-12'
      },
      endAdornment: {
        padding: 'pr-12'
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
      variants: {
        standard: {
          padding: 'pb-1.5'
        },
        filled: {
          padding: 'pb-1.5'
        },
        outlined: {
          padding: 'pb-2'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-text-light'
          },
          primary: {
            color: 'text-default-text-dark'
          },
          secondary: {
            color: 'text-default-text-dark'
          },
          success: {
            color: 'text-default-text-dark'
          },
          warning: {
            color: 'text-default-text-dark'
          },
          error: {
            color: 'text-default-text-dark'
          }
        }
      }
    },
    container: {
      base: {
        position: 'absolute',
        top: 'top-0',
        left: 'left-0',
        display: 'block',
        height: 'h-full',
        width: 'w-full',
        transition: 'transition-colors',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        focus: 'focus:outline-0',
        disabled: 'disabled:opacity-50 disabled:pointer-events-none disabled:select-none'
      },
      valid: {
        standard: {
          default: {
            border: 'pb-px border-b border-default-success',
            group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
          }
        },
        filled: {
          default: {
            border: 'pb-px border-b border-default-success',
            borderRadius: 'rounded-t-2xl',
            background: 'bg-default-success/10',
            hover: 'hover:bg-default-success/20',
            focused: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
            groupHover: 'group-[.focused]:hover:bg-default-success/10'
          }
        },
        outlined: {
          default: {
            border: 'p-px border border-default-success',
            borderRadius: 'rounded-2xl',
            group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-success'
          }
        }
      },
      invalid: {
        standard: {
          default: {
            border: 'pb-px border-b border-default-error',
            group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
          }
        },
        filled: {
          default: {
            border: 'pb-px border-b border-default-error',
            borderRadius: 'rounded-t-2xl',
            background: 'bg-default-error/10',
            hover: 'hover:bg-default-error/20',
            group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
            groupHover: 'group-[.focused]:hover:bg-default-error/10'
          }
        },
        outlined: {
          default: {
            border: 'p-px border border-default-error',
            borderRadius: 'rounded-2xl',
            group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-error'
          }
        }
      },
      variants: {
        standard: {
          default: {
            default: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-bg'
            },
            primary: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary'
            },
            success: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success'
            },
            warning: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning'
            },
            error: {
              border: 'pb-px border-b border-default-bg-light',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error'
            }
          }
        },
        filled: {
          default: {
            default: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg/10',
              hover: 'hover:bg-default-bg/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-bg',
              groupHover: 'group-[.focused]:hover:bg-default-bg/10'
            },
            primary: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg-dark/10',
              hover: 'hover:bg-default-bg-dark/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-primary',
              groupHover: 'group-[.focused]:hover:bg-default-bg-dark/10'
            },
            secondary: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg-dark/10',
              hover: 'hover:bg-default-bg-dark/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-secondary',
              groupHover: 'group-[.focused]:hover:bg-default-bg-dark/10'
            },
            success: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg-dark/10',
              hover: 'hover:bg-default-bg-dark/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-success',
              groupHover: 'group-[.focused]:hover:bg-default-bg-dark/10'
            },
            warning: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg-dark/10',
              hover: 'hover:bg-default-bg-dark/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-warning',
              groupHover: 'group-[.focused]:hover:bg-default-bg-dark/10'
            },
            error: {
              border: 'pb-px border-b border-default-bg-light',
              borderRadius: 'rounded-t-2xl',
              background: 'bg-default-bg-dark/10',
              hover: 'hover:bg-default-bg-dark/20',
              group: 'group-[.focused]:pb-0 group-[.focused]:border-b-2 group-[.focused]:border-default-error',
              groupHover: 'group-[.focused]:hover:bg-default-bg-dark/10'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-bg'
            },
            primary: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-primary'
            },
            secondary: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-secondary'
            },
            success: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-success'
            },
            warning: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-warning'
            },
            error: {
              border: 'p-px border border-default-bg-light',
              borderRadius: 'rounded-2xl',
              group: 'group-[.focused]:p-0 group-[.focused]:border-2 group-[.focused]:border-default-error'
            }
          }
        }
      }
    },
    legend: {
      base: {
        position: 'absolute',
        display: 'block',
        font: 'antialiased font-normal text-base font-sans text-transparent',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        focus: 'focus:outline-0',
        group: 'group-[.shifted]:relative group-[.shifted]:mx-4 group-[.shifted]:h-0 group-[.shifted]:px-0.5 group-[.shifted]:text-sm'
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
        focus: 'focus:outline-0'
      },
      startAdornment: {
        position: 'left-12'
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
      variants: {
        standard: {
          top: 'top-[1.625rem]',
          left: 'left-4',
          group: 'group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4 group-[.shifted]:text-sm'
        },
        filled: {
          top: 'top-[1.625rem]',
          left: 'left-4',
          group: 'group-[.shifted]:top-1 group-[.shifted]:text-sm'
        },
        outlined: {
          top: 'top-2',
          left: 'left-4',
          group: 'group-[.shifted]:left-0 group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4 group-[.shifted]:mx-4 group-[.shifted]:px-0.5 group-[.shifted]:text-sm'
        }
      },
      colors: {
        default: {
          default: {
            color: 'text-default-text-light',
            group: 'group-[.shifted]:text-default-text-light group-[.focused]:group-[.shifted]:text-default-text-light'
          },
          primary: {
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-primary'
          },
          secondary: {
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-secondary'
          },
          success: {
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-success'
          },
          warning: {
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-warning'
          },
          error: {
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-error'
          }
        }
      }
    }
  }
};

export default textareaConfig;
