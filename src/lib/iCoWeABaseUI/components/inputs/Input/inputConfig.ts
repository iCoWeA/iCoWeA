const inputConfig = {
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
        width: 'w-fit',
        height: 'h-fit',
        focus: 'focus:outline-0',
        group: 'group'
      },
      block: {
        width: 'w-full'
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
          padding: 'pr-4'
        },
        middle: {
          position: 'relative',
          dispaly: 'block',
          width: 'w-full'
        },
        right: {
          padding: 'pl-4'
        }
      },
      padding: {
        left: {
          padding: 'pl-4'
        },
        right: {
          padding: 'pr-4'
        }
      },
      variants: {
        default: {
          left: {
            margin: 'mb-px',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          middle: {
            margin: 'mb-px',
            padding: 'pt-4 pb-0.5',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          right: {
            margin: 'mb-px',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          }
        },
        outlined: {
          left: {
            margin: 'my-px ml-px',
            border: 'border-y border-l',
            borderRadius: 'rounded-l-lg',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2 group-[.focus]:border-l-2'
          },
          middle: {
            margin: 'my-px',
            padding: 'py-2',
            border: 'border-y',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2'
          },
          right: {
            margin: 'my-px mr-px',
            border: 'border-y border-r',
            borderRadius: 'rounded-r-lg',
            focusWithin: 'group-[.focus]:m-0 group-[.focus]:border-y-2 group-[.focus]:border-r-2'
          }
        },
        soft: {
          left: {
            margin: 'mb-px',
            border: 'border-b',
            borderRadius: 'rounded-tl-lg',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          middle: {
            margin: 'mb-px',
            padding: 'pt-4 pb-0.5',
            border: 'border-b',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          },
          right: {
            margin: 'mb-px',
            border: 'border-b',
            borderRadius: 'rounded-tr-lg',
            focusWithin: 'group-[.focus]:mb-0 group-[.focus]:border-b-2'
          }
        }
      },
      background: {
        light: {
          background: 'bg-light-neutral/10'
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
    input: {
      base: {
        display: 'block',
        width: 'w-full',
        height: 'h-5',
        font: 'font-semibold',
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
        top: 'top-2/4',
        left: 'left-0',
        translate: '-translate-y-2/4',
        display: 'flex',
        alignItems: 'align-center',
        gap: 'gap-2',
        transition: 'transition-all',
        pointer: 'pointer-events-none',
        userSelect: 'select-none',
        shift: 'group-[.shift]:h-4 group-[.shift]:text-xs',
        focusWithin: 'group-[.focus]:h-4 group-[.focus]:text-xs'
      },
      variants: {
        default: {
          shift: 'group-[.shift]:top-0 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0 group-[.focus]:translate-y-0'
        },
        outlined: {
          shift: 'group-[.shift]:-top-px group-[.shift]:left-1',
          focusWithin: 'group-[.focus]:-top-px group-[.focus]:left-1'
        },
        soft: {
          shift: 'group-[.shift]:top-0 group-[.shift]:translate-y-0',
          focusWithin: 'group-[.focus]:top-0 group-[.focus]:translate-y-0'
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
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-neutral group-[.focus]:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-primary group-[.focus]:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-secondary group-[.focus]:text-light-secondary'
          },
          success: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-success group-[.focus]:text-light-success'
          },
          warning: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-warning group-[.focus]:text-light-warning'
          },
          error: {
            fill: 'fill-light-neutral',
            color: 'text-light-neutral',
            focusWithin: 'group-[.focus]:fill-light-error group-[.focus]:text-light-error'
          }
        }
      }
    }
  }
};

export default inputConfig;
