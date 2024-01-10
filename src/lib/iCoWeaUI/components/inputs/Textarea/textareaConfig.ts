const textareaConfig = {
  defaultProps: {
    textarea: {
      variant: 'outlined',
      color: 'primary',
      valid: false,
      invalid: false
    }
  },
  styles: {
    root: {
      base: {
        width: 'w-fit',
        height: 'h-fit',
        focus: 'focus:outline-0',
        group: 'group'
      },
      disabled: {
        pointer: 'pointer-events-none',
        userSelect: 'select-none'
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
      positions: {
        left: {
          margin: 'mr-0',
          padding: 'pl-4',
          border: 'border-r-0',
          borderRadius: 'rounded-r-none',
          focusWithing: 'group-[.focus]:border-r-0'
        },
        middle: {
          position: 'relative',
          dispaly: 'block',
          margin: 'mx-0',
          border: 'border-x-0',
          borderRadius: 'rounded-none',
          focusWithing: 'group-[.focus]:border-x-0'
        },
        right: {
          margin: 'ml-0',
          padding: 'pr-4',
          border: 'border-l-0',
          borderRadius: 'rounded-l-none',
          focusWithing: 'group-[.focus]:border-l-0'
        }
      },
      padding: {
        left: {
          padding: 'pr-4'
        },
        right: {
          padding: 'pl-4'
        }
      },
      variants: {
        default: {
          margin: 'mt-0.5 mb-px',
          padding: 'pt-5.5 pb-0.5',
          border: 'border-b',
          borderRadius: 'rounded rounded-b-none',
          focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
        },
        outlined: {
          margin: 'm-px',
          padding: 'py-3',
          border: 'border',
          borderRadius: 'rounded-xl',
          focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-2'
        },
        soft: {
          margin: 'mt-0.5 mb-px',
          padding: 'pt-5.5 pb-0.5',
          border: 'border-b',
          borderRadius: 'rounded rounded-b-none',
          focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
        }
      },
      background: {
        light: {
          background: 'bg-light-soft-neutral/20'
        }
      },
      valid: {
        light: {
          border: 'border-light-success'
        }
      },
      invalid: {
        light: {
          border: 'border-light-error'
        }
      },
      disabled: {
        light: {
          border: 'border-light-neutral/40',
          background: 'bg-light-neutral/20'
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
        font: 'antialiased font-semibold text-sm font-sans',
        background: 'bg-transparent',
        focus: 'focus:outline-0'
      },
      colors: {
        light: {
          color: 'text-light-neutral'
        }
      }
    },
    clearance: {
      base: {
        display: 'hidden',
        height: 'h-0',
        padding: 'px-1',
        font: 'antialiased font-normal text-xs font-sans',
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
        font: 'antialiased font-normal text-sm font-sans',
        alignItems: 'align-center',
        gap: 'gap-2',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        shift: 'group-[.shift]:text-xs',
        focusWithin: 'group-[.focus]:text-xs'
      },
      variants: {
        default: {
          top: 'top-5.5',
          shift: 'group-[.shift]:top-0.5 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0.5 group-[.focus]:translate-y-0'
        },
        outlined: {
          top: 'top-3',
          shift: 'group-[.shift]:-top-px group-[.shift]:left-1 group-[.shift]:-translate-y-2/4',
          focusWithin: 'group-[.focus]:-top-px group-[.focus]:left-1 group-[.focus]:-translate-y-2/4'
        },
        soft: {
          top: 'top-5.5',
          shift: 'group-[.shift]:top-0.5 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0.5 group-[.focus]:translate-y-0'
        }
      },
      valid: {
        light: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        }
      },
      invalid: {
        light: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      },
      disabled: {
        light: {
          fill: 'fill-light-neutral/40',
          color: 'text-light-neutral/40'
        }
      },
      colors: {
        light: {
          neutral: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-neutral group-[.focus]:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-primary group-[.focus]:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-secondary group-[.focus]:text-light-secondary'
          },
          success: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-success group-[.focus]:text-light-success'
          },
          warning: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-warning group-[.focus]:text-light-warning'
          },
          error: {
            fill: 'fill-light-on-neutral-variant',
            color: 'text-light-on-neutral-variant',
            focusWithin: 'group-[.focus]:fill-light-error group-[.focus]:text-light-error'
          }
        }
      }
    }
  }
};

export default textareaConfig;
