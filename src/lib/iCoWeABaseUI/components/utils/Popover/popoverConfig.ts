const popoverConfig = {
  defaultProps: {
    placement: 'bottom',
    offset: 0,
    spacing: 'none',
    variant: 'solid',
    color: 'neutral',
    border: false,
    radius: 'circular',
    responsive: true,
    openOnHover: false,
    lockScroll: false,
    closeOnOutsideClick: true,
    closeOnEscape: false,
    closeOnBackdropClick: true,
    arrow: false,
    backdrop: 'none'
  },
  styles: {
    root: {
      base: {
        position: 'absolute',
        zIndes: 'z-3000'
      }
    },
    dropdown: {
      base: {
        font: 'text-md'
      },
      sizes: {
        sm: {
          paddding: 'px-2 py-1'
        },
        md: {
          paddding: 'px-3 py-1.5'
        },
        lg: {
          paddding: 'px-4 py-2'
        }
      },
      radius: {
        borderRadius: 'rounded-lg'
      }
    },
    arrow: {
      base: {
        position: 'absolute',
        border: 'border-t-[6px] border-r-[3px] border-b-[0px] border-l-[3px]'
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-on-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-on-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-on-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-on-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-on-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-on-error border-r-transparent border-l-transparent border-b-transparent'
            }
          },
          dark: {
            neutral: {
              border: 'border-dark-on-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-dark-on-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-dark-on-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-dark-on-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-dark-on-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-dark-on-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        },
        text: {
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
          },
          dark: {
            neutral: {
              border: 'border-dark-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-dark-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-dark-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-dark-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-dark-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-dark-error border-r-transparent border-l-transparent border-b-transparent'
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
          },
          dark: {
            neutral: {
              border: 'border-dark-soft-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-dark-soft-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-dark-soft-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-dark-soft-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-dark-soft-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-dark-soft-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-on-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-light-on-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-light-on-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-light-on-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-light-on-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-light-on-error border-r-transparent border-l-transparent border-b-transparent'
            }
          },
          dark: {
            neutral: {
              border: 'border-dark-on-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-dark-on-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-dark-on-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-dark-on-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-dark-on-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-dark-on-error border-r-transparent border-l-transparent border-b-transparent'
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
          },
          dark: {
            neutral: {
              border: 'border-dark-neutral border-r-transparent border-l-transparent border-b-transparent'
            },
            primary: {
              border: 'border-dark-primary border-r-transparent border-l-transparent border-b-transparent'
            },
            secondary: {
              border: 'border-dark-secondary border-r-transparent border-l-transparent border-b-transparent'
            },
            success: {
              border: 'border-dark-success border-r-transparent border-l-transparent border-b-transparent'
            },
            warning: {
              border: 'border-dark-warning border-r-transparent border-l-transparent border-b-transparent'
            },
            error: {
              border: 'border-dark-error border-r-transparent border-l-transparent border-b-transparent'
            }
          }
        }
      }
    }
  }
};

export default popoverConfig;
