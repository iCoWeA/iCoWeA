/* import { type TextareaDefaultProps } from '../TextArea';

export type TextareaVariants = 'outlined' | 'filled' | 'standard';

export interface TextareaConfig {
  defaultProps: Required<TextareaDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
    },
    container: {
      base: Record<string, string>;
      focused: Record<string, string>;
      shifted: Record<string, string>;
      variants: Record<TextareaVariants, Record<string, Record<Colors, Record<string, string>>>>;
    },
    textarea: {
      base: Record<string, string>;
      startAdornment: Record<string, string>;
      endAdornment: Record<string, string>;
      variants: Record<TextareaVariants, Record<string, Record<Colors, Record<string, string>>>>;
    },
    legend: {
      base: Record<string, string>;
    },
    label: {
      base: Record<string, string>;
      startAdornment: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    startAdornment: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    endAdornment: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    }
  }
}

const textareaConfig: TextareaConfig = {
  defaultProps: {
    variant: 'outlined',
    valid: false,
    invalid: false,
    color: 'primary',
    label: null,
    startAdornment: null,
    endAdornment: null,
    outerContainerProps: {},
    containerProps: {},
    legendProps: {},
    labelProps: {},
    startAdornmentProps: {},
    endAdornmentProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-full'
      }
    },
    container: {
      base: {
        position: 'relative',
        display: 'flex',
        width: 'w-full',
        transition: 'transition-colors',
        disabled: 'disabled:border-none',
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
          default: {
            default: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-dark'
            },
            primary: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-primary'
            },
            secondary: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-secondary'
            },
            success: {
              border: 'border-b border-default-success/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-success'
            },
            warning: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-warning'
            },
            error: {
              border: 'border-b border-default-error/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-error'
            },
            light: {
              border: 'border-b border-default-light/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-light'
            },
            dark: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-dark'
            }
          }
        },
        filled: {
          default: {
            default: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-dark'
            },
            primary: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-primary'
            },
            secondary: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-secondary'
            },
            success: {
              border: 'border-b border-default-success/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-success'
            },
            warning: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-warning'
            },
            error: {
              border: 'border-b border-default-error/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-error'
            },
            light: {
              border: 'border-b border-default-light/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-light'
            },
            dark: {
              border: 'border-b border-default-dark/30',
              'focus-within': 'focus-within:border-b-2 focus-within:border-default-dark'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border border-default-dark/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-dark'
            },
            primary: {
              border: 'border border-default-dark/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-primary'
            },
            secondary: {
              border: 'border border-default-dark/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-secondary'
            },
            success: {
              border: 'border border-default-success/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-success'
            },
            warning: {
              border: 'border border-default-dark/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-warning'
            },
            error: {
              border: 'border border-default-error/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-error'
            },
            light: {
              border: 'border border-default-light/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-light'
            },
            dark: {
              border: 'border border-default-dark/30',
              borderRadius: 'rounded-2xl',
              'focus-within': 'focus-within:border-2 focus-within:border-default-dark'
            }
          }
        }
      }
    },
    textarea: {
      base: {
        display: 'flex',
        width: 'w-full',
        resize: 'resize-none',
        padding: 'p-3',
        outline: 'outline-none',
        border: 'border-transparent',
        font: 'text-base font-sans',
        background: 'bg-transparent',
        transition: 'transition-colors',
        focus: 'focus:border-none',
        disabled: 'disabled:cursor-not-allowed disabled:select-none'
      },
      startAdornment: {
        padding: 'pl-12'
      },
      endAdornment: {
        padding: 'pr-12'
      },
      variants: {
        standard: {
          default: {
            default: {
              border: 'border-b',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            primary: {
              border: 'border-b',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            secondary: {
              border: 'border-b',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            success: {
              border: 'border-b',
              color: 'text-default-success',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            warning: {
              border: 'border-b',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            error: {
              border: 'border-b',
              color: 'text-default-error',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            light: {
              border: 'border-b',
              color: 'text-default-light',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            dark: {
              border: 'border-b',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            }
          }
        },
        filled: {
          default: {
            default: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-dark',
              background: 'bg-default-dark/10',
              hover: 'hover:bg-default-dark/20',
              focus: 'focus:bg-default-dark/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            primary: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-dark',
              background: 'bg-default-dark/10',
              hover: 'hover:bg-default-dark/20',
              focus: 'focus:bg-default-dark/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            secondary: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-dark',
              background: 'bg-default-dark/10',
              hover: 'hover:bg-default-dark/20',
              focus: 'focus:bg-default-dark/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            success: {
              border: 'border-b',
              color: 'text-default-success',
              background: 'bg-default-success/10',
              hover: 'hover:bg-default-success/20',
              focus: 'focus:bg-default-success/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            warning: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-dark',
              background: 'bg-default-dark/10',
              hover: 'hover:bg-default-dark/20',
              focus: 'focus:bg-default-dark/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            error: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-error',
              background: 'bg-default-error/10',
              hover: 'hover:bg-default-error/20',
              focus: 'focus:bg-default-error/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            light: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-light',
              background: 'bg-default-light/10',
              hover: 'hover:bg-default-light/20',
              focus: 'focus:bg-default-light/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            dark: {
              border: 'border-b',
              borderRadius: 'rounded-t-2xl',
              color: 'text-default-dark',
              background: 'bg-default-dark/10',
              hover: 'hover:bg-default-dark/20',
              focus: 'focus:bg-default-dark/10',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            }
          }
        },
        outlined: {
          default: {
            default: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            primary: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            secondary: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            success: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-success',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            warning: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            error: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-error',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            light: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-light',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            },
            dark: {
              border: 'border',
              borderRadius: 'rounded-2xl',
              color: 'text-default-dark',
              disabled: 'disabled:bg-default-dark/10 disabled:text-default-dark/70'
            }
          }
        }
      }
    },
    legend: {
      base: {
        position: 'absolute',
        display: 'block',
        font: 'text-base font-sans text-transparent',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        group: 'group-[.shifted]:relative group-[.shifted]:mx-5 group-[.shifted]:h-0 group-[.shifted]:px-0.5 group-[.shifted]:text-sm'
      }
    },
    label: {
      base: {
        position: 'absolute',
        top: 'top-2.5',
        left: 'left-3',
        display: 'block',
        font: 'text-base font-sans',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        group: 'group-[.shifted]:left-0 group-[.shifted]:top-0 group-[.shifted]:-translate-y-2/4 group-[.shifted]:mx-5 group-[.shifted]:px-0.5 group-[.shifted]:text-sm'
      },
      startAdornment: {
        position: 'left-12'
      },
      colors: {
        default: {
          default: {
            color: 'text-default-dark/70',
            group: 'group-[.focused]:text-default-dark'
          },
          primary: {
            color: 'text-default-dark/70',
            group: 'group-[.focused]:text-default-primary'
          },
          secondary: {
            color: 'text-default-dark/70',
            group: 'group-[.focused]:text-default-secondary'
          },
          success: {
            color: 'text-default-success/70',
            group: 'group-[.focused]:text-default-success'
          },
          warning: {
            color: 'text-default-dark/70',
            group: 'group-[.focused]:text-default-warning'
          },
          error: {
            color: 'text-default-error/70',
            group: 'group-[.focused]:text-default-error'
          },
          light: {
            color: 'text-default-light/70',
            group: 'group-[.focused]:text-default-light'
          },
          dark: {
            color: 'text-default-dark/70',
            group: 'group-[.focused]:text-default-dark'
          }
        }
      }
    },
    startAdornment: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        left: 'left-3',
        translate: '-translate-y-2/4',
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-6',
        pointer: 'pointer-events-none'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark//30'
          },
          primary: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          secondary: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          success: {
            fill: 'fill-default-success/30',
            color: 'text-default-success/30'
          },
          warning: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          error: {
            fill: 'fill-default-error/30',
            color: 'text-default-error/30'
          },
          light: {
            fill: 'fill-default-light/30',
            color: 'text-default-light/30'
          },
          dark: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          }
        }
      }
    },
    endAdornment: {
      base: {
        position: 'absolute',
        top: 'top-2/4',
        right: 'right-3',
        translate: '-translate-y-2/4',
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        width: 'w-6',
        pointer: 'pointer-events-none'
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark//30'
          },
          primary: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          secondary: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          success: {
            fill: 'fill-default-success/30',
            color: 'text-default-success/30'
          },
          warning: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          },
          error: {
            fill: 'fill-default-error/30',
            color: 'text-default-error/30'
          },
          light: {
            fill: 'fill-default-light/30',
            color: 'text-default-light/30'
          },
          dark: {
            fill: 'fill-default-dark/30',
            color: 'text-default-dark/30'
          }
        }
      }
    }
  }
};

export default textareaConfig; */
