const textareaConfig = {
  defaultProps: {
    variant: 'outlined',
    color: 'primary',
    block: false,
    valid: false,
    invalid: false
  },
  styles: {
    root: {
      base: {
        display: 'inline-flex',
        height: 'h-fit',
        focus: 'focus:outline-0',
        group: 'group'
      },
      block: {
        width: 'w-full'
      },
      shift: {
        group: 'shift'
      },
      focus: {
        group: 'focus'
      }
    },
    container: {
      base: {
        transition: 'transition-colors'
      },
      padding: {
        left: {
          padding: 'pl-4'
        },
        right: {
          padding: 'pr-4'
        }
      },
      placements: {
        default: {
          left: {
            margin: 'mb-px',
            padding: 'pr-4 pt-4 pb-0.5',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          middle: {
            position: 'relative',
            dispaly: 'block',
            margin: 'mb-px',
            padding: 'pt-4 pb-0.5',
            border: 'border-b',
            flexGrow: 'grow',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          right: {
            margin: 'mb-px',
            padding: 'pl-4 pt-4 pb-0.5',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          }
        },
        outlined: {
          left: {
            margin: 'my-px ml-px',
            padding: 'pr-4 py-2',
            border: 'border-y border-l',
            borderRadius: 'rounded-l-lg',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2 group-[.focus]:border-l-2'
          },
          middle: {
            position: 'relative',
            dispaly: 'block',
            margin: 'my-px',
            padding: 'py-2',
            border: 'border-y',
            flexGrow: 'grow',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2'
          },
          right: {
            margin: 'my-px mr-px',
            padding: 'pl-4 py-2',
            border: 'border-y border-r',
            borderRadius: 'rounded-r-lg',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2 group-[.focus]:border-r-2'
          }
        },
        soft: {
          left: {
            margin: 'mb-px',
            padding: 'pr-4 pt-4 pb-0.5',
            border: 'border-b',
            borderRadius: 'rounded-tl-lg',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          middle: {
            position: 'relative',
            dispaly: 'block',
            margin: 'mb-px',
            padding: 'pt-4 pb-0.5',
            border: 'border-b',
            flexGrow: 'grow',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          right: {
            margin: 'mb-px',
            padding: 'pl-4 pt-4 pb-0.5',
            border: 'border-b',
            borderRadius: 'rounded-tr-lg',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          }
        }
      },
      color: {
        disabled: {
          light: {
            border: 'border-light-neutral/40',
            background: 'bg-light-neutral/20'
          },
          dark: {
            border: 'border-dark-neutral/40',
            background: 'bg-dark-neutral/20'
          }
        },
        valid: {
          light: {
            border: 'border-light-success'
          },
          dark: {
            border: 'border-dark-success'
          }
        },
        invalid: {
          light: {
            border: 'border-light-error'
          },
          dark: {
            border: 'border-dark-error'
          }
        }
      },
      background: {
        light: {
          background: 'bg-light-neutral/10'
        },
        dark: {
          background: 'bg-dark-neutral/10'
        }
      },
      colors: {
        light: {
          neutral: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-neutral'
          },
          primary: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-primary'
          },
          secondary: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-secondary'
          },
          success: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-success'
          },
          warning: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-warning'
          },
          error: {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-error'
          },
          'on-neutral': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-on-neutral'
          },
          'on-primary': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-primary'
          },
          'on-secondary': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-secondary'
          },
          'on-success': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-success'
          },
          'on-warning': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-warning'
          },
          'on-error': {
            border: 'border-light-divider',
            focusWithin: 'group-[.focus]:border-light-error'
          }
        },
        dark: {
          neutral: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-neutral'
          },
          primary: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-primary'
          },
          secondary: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-secondary'
          },
          success: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-success'
          },
          warning: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-warning'
          },
          error: {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-error'
          },
          'on-neutral': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-on-neutral'
          },
          'on-primary': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-primary'
          },
          'on-secondary': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-secondary'
          },
          'on-success': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-success'
          },
          'on-warning': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-warning'
          },
          'on-error': {
            border: 'border-dark-divider',
            focusWithin: 'group-[.focus]:border-dark-error'
          }
        }
      }
    },
    textarea: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-20',
        resize: 'resize-none',
        font: 'text-sm font-semibold',
        background: 'bg-transparent',
        focus: 'focus:outline-0'
      },
      colors: {
        light: {
          neutral: {
            color: 'text-light-on-neutral-variant'
          },
          primary: {
            color: 'text-light-neutral'
          },
          secondary: {
            color: 'text-light-neutral'
          },
          success: {
            color: 'text-light-neutral'
          },
          warning: {
            color: 'text-light-neutral'
          },
          error: {
            color: 'text-light-neutral'
          },
          'on-neutral': {
            color: 'text-light-on-neutral'
          },
          'on-primary': {
            color: 'text-light-on-primary'
          },
          'on-secondary': {
            color: 'text-light-on-secondary'
          },
          'on-success': {
            color: 'text-light-on-success'
          },
          'on-warning': {
            color: 'text-light-on-warning'
          },
          'on-error': {
            color: 'text-light-on-error'
          }
        },
        dark: {
          neutral: {
            color: 'text-dark-on-neutral-variant'
          },
          primary: {
            color: 'text-dark-neutral'
          },
          secondary: {
            color: 'text-dark-neutral'
          },
          success: {
            color: 'text-dark-neutral'
          },
          warning: {
            color: 'text-dark-neutral'
          },
          error: {
            color: 'text-dark-neutral'
          },
          'on-neutral': {
            color: 'text-dark-on-neutral'
          },
          'on-primary': {
            color: 'text-dark-on-primary'
          },
          'on-secondary': {
            color: 'text-dark-on-secondary'
          },
          'on-success': {
            color: 'text-dark-on-success'
          },
          'on-warning': {
            color: 'text-dark-on-warning'
          },
          'on-error': {
            color: 'text-dark-on-error'
          }
        }
      }
    },
    clearance: {
      base: {
        display: 'hidden',
        height: 'h-0',
        padding: 'px-1',
        font: 'text-xs',
        fill: 'fill-transparent',
        color: 'text-transparent',
        alignItems: 'align-center',
        gap: 'gap-2',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        shift: 'group-[.shift]:flex',
        focusWithin: 'group-[.focus]:flex'
      }
    },
    label: {
      base: {
        position: 'absolute',
        left: 'left-0',
        display: 'flex',
        font: 'text-sm',
        alignItems: 'align-center',
        gap: 'gap-2',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        shift: 'group-[.shift]:h-4 group-[.shift]:text-xs',
        focusWithin: 'group-[.focus]:h-4 group-[.focus]:text-xs'
      },
      placements: {
        default: {
          top: 'top-4',
          shift: 'group-[.shift]:top-0 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0 group-[.focus]:translate-y-0'
        },
        outlined: {
          top: 'top-2',
          shift: 'group-[.shift]:-top-px group-[.shift]:left-1 group-[.shift]:-translate-y-2/4',
          focusWithin: 'group-[.focus]:-top-px group-[.focus]:left-1 group-[.focus]:-translate-y-2/4'
        },
        soft: {
          top: 'top-4',
          shift: 'group-[.shift]:top-0 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0 group-[.focus]:translate-y-0'
        }
      },
      color: {
        default: {
          light: {
            fill: 'fill-light-divider',
            color: 'text-light-divider'
          },
          dark: {
            fill: 'fill-dark-divider',
            color: 'text-dark-divider'
          }
        },
        disabled: {
          light: {
            fill: 'fill-light-neutral/40',
            color: 'text-light-neutral/40'
          },
          dark: {
            fill: 'fill-dark-neutral/40',
            color: 'text-dark-neutral/40'
          }
        },
        valid: {
          light: {
            fill: 'fill-light-success',
            color: 'text-light-success'
          },
          dark: {
            fill: 'fill-dark-success',
            color: 'text-dark-success'
          }
        },
        invalid: {
          light: {
            fill: 'fill-light-error',
            color: 'text-light-error'
          },
          dark: {
            fill: 'fill-dark-error',
            color: 'text-dark-error'
          }
        }
      },
      colors: {
        light: {
          neutral: {
            focusWithin: 'group-[.focus]:fill-light-neutral group-[.focus]:text-light-neutral'
          },
          primary: {
            focusWithin: 'group-[.focus]:fill-light-primary group-[.focus]:text-light-primary'
          },
          secondary: {
            focusWithin: 'group-[.focus]:fill-light-secondary group-[.focus]:text-light-secondary'
          },
          success: {
            focusWithin: 'group-[.focus]:fill-light-success group-[.focus]:text-light-success'
          },
          warning: {
            focusWithin: 'group-[.focus]:fill-light-warning group-[.focus]:text-light-warning'
          },
          error: {
            focusWithin: 'group-[.focus]:fill-light-error group-[.focus]:text-light-error'
          },
          'on-neutral': {
            focusWithin: 'group-[.focus]:fill-light-on-neutral group-[.focus]:text-light-on-neutral'
          },
          'on-primary': {
            focusWithin: 'group-[.focus]:fill-light-primary group-[.focus]:text-light-primary'
          },
          'on-secondary': {
            focusWithin: 'group-[.focus]:fill-light-secondary group-[.focus]:text-light-secondary'
          },
          'on-success': {
            focusWithin: 'group-[.focus]:fill-light-success group-[.focus]:text-light-success'
          },
          'on-warning': {
            focusWithin: 'group-[.focus]:fill-light-warning group-[.focus]:text-light-warning'
          },
          'on-error': {
            focusWithin: 'group-[.focus]:fill-light-error group-[.focus]:text-light-error'
          }
        },
        dark: {
          neutral: {
            focusWithin: 'group-[.focus]:fill-dark-neutral group-[.focus]:text-dark-neutral'
          },
          primary: {
            focusWithin: 'group-[.focus]:fill-dark-primary group-[.focus]:text-dark-primary'
          },
          secondary: {
            focusWithin: 'group-[.focus]:fill-dark-secondary group-[.focus]:text-dark-secondary'
          },
          success: {
            focusWithin: 'group-[.focus]:fill-dark-success group-[.focus]:text-dark-success'
          },
          warning: {
            focusWithin: 'group-[.focus]:fill-dark-warning group-[.focus]:text-dark-warning'
          },
          error: {
            focusWithin: 'group-[.focus]:fill-dark-error group-[.focus]:text-dark-error'
          },
          'on-neutral': {
            focusWithin: 'group-[.focus]:fill-dark-on-neutral group-[.focus]:text-dark-on-neutral'
          },
          'on-primary': {
            focusWithin: 'group-[.focus]:fill-dark-primary group-[.focus]:text-dark-primary'
          },
          'on-secondary': {
            focusWithin: 'group-[.focus]:fill-dark-secondary group-[.focus]:text-dark-secondary'
          },
          'on-success': {
            focusWithin: 'group-[.focus]:fill-dark-success group-[.focus]:text-dark-success'
          },
          'on-warning': {
            focusWithin: 'group-[.focus]:fill-dark-warning group-[.focus]:text-dark-warning'
          },
          'on-error': {
            focusWithin: 'group-[.focus]:fill-dark-error group-[.focus]:text-dark-error'
          }
        }
      }
    }
  }
};

export default textareaConfig;
