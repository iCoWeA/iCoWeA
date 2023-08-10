import { type TextAreaDefaultProps } from '../components/UI/TextArea';

export type TextAreaVariants = 'outlined' | 'filled' | 'standard';
export type TextAreaColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface TextAreaConfig {
  defaultProps: Required<TextAreaDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      focused: Record<string, string>;
      shifted: Record<string, string>;
      variants: Record<TextAreaVariants, Record<string, string>>;
    },
    container: {
      base: Record<string, string>;
      valid: Record<TextAreaVariants, Record<string, Record<string, string>>>;
      invalid: Record<TextAreaVariants, Record<string, Record<string, string>>>;
      variants: Record<TextAreaVariants, Record<string, Record<TextAreaColors, Record<string, string>>>>;
    },
    textArea: {
      base: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      colors: Record<string, Record<TextAreaColors, Record<string, string>>>;
    },
    legend: {
      base: Record<string, string>;
    },
    label: {
      base: Record<string, string>;
      startAdornment: Record<string, string>;
      valid: Record<string, Record<string, string>>;
      invalid: Record<string, Record<string, string>>;
      variants: Record<TextAreaVariants, Record<string, string>>;
      colors: Record<string, Record<TextAreaColors, Record<string, string>>>;
    }
  }
}

const textAreaConfig: TextAreaConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    valid: false,
    invalid: false,
    label: null,
    startAdornment: null,
    endAdornment: null,
    labelPosition: '',
    componentsProps: {
      root: {},
      container: {},
      legend: {},
      label: {}
    }
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        width: 'w-full',
        padding: 'px-4',
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
          padding: 'pt-2.5 pb-1.5'
        },
        filled: {
          top: 'pt-7 pb-1.5'
        },
        outlined: {
          top: 'py-2'
        }
      }
    },
    textArea: {
      base: {
        display: 'block',
        width: 'w-full',
        resize: 'resize-none',
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
          top: 'top-3.5',
          left: 'left-4',
          group: 'group-[.shifted]:-top-px group-[.shifted]:-translate-y-2/4 group-[.shifted]:text-sm'
        },
        filled: {
          top: 'top-7',
          left: 'left-4',
          group: 'group-[.shifted]:top-2 group-[.shifted]:text-sm'
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
            color: 'text-default-text',
            group: 'group-[.shifted]:text-default-text-dark group-[.focused]:group-[.shifted]:text-default-text-light'
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

export default textAreaConfig;
