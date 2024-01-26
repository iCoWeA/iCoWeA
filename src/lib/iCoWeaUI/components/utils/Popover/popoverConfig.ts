const popoverConfig = {
  defaultProps: {
    position: 'bottom',
    offset: 0,
    variant: 'plain',
    color: 'neutral',
    spacing: 'none',
    responsive: true,
    arrow: false,
    openOnHover: false,
    lockScroll: false,
    closeOnOutsideClick: true,
    closeOnEscape: false,
    backdrop: false,
    closeOnBackdropClick: true
  },
  styles: {
    root: {
      base: {
        position: 'absolute',
        zIndes: 'z-3000',
        transition: 'transition-[opacity]'
      },
      offsets: {
        top: {
          top: 'top-full',
          left: 'left-2/4',
          transform: '-translate-x-2/4'
        },
        bottom: {
          top: 'top-0',
          left: 'left-2/4',
          transform: '-translate-x-2/4 -translate-y-full'
        },
        left: {
          top: 'top-2/4',
          left: 'left-full',
          transform: '-translate-y-2/4'
        },
        right: {
          top: 'top-2/4',
          left: 'left-0',
          transform: '-translate-x-full -translate-y-2/4'
        }
      }
    },
    dropdown: {
      base: {
        position: 'relative'
      },
      spacings: {
        sm: {
          paddding: 'px-2 py-1'
        },
        md: {
          paddding: 'px-3 py-1.5'
        },
        lg: {
          paddding: 'px-4 py-2'
        }
      }
    },
    arrow: {
      base: {
        position: 'absolute',
        border: 'border-t-[6px] border-r-[3px] border-b-[0px] border-l-[3px]'
      },
      positions: {
        top: {
          top: 'top-full',
          left: 'left-2/4',
          transform: '-translate-x-2/4'
        },
        bottom: {
          top: 'top-0',
          left: 'left-2/4',
          transform: '-translate-x-2/4 -translate-y-full -rotate-180'
        },
        left: {
          top: 'top-2/4',
          left: 'left-full',
          transform: '-translate-y-2/4 -rotate-90'
        },
        right: {
          top: 'top-2/4',
          left: 'left-0',
          transform: '-translate-x-full -translate-y-2/4 rotate-90'
        }
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-neutral-variant border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              border: 'border-light-soft-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-soft-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-soft-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-soft-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-soft-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-soft-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        }
      }
    }
  }
};

export default popoverConfig;
