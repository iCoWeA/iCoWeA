const buttonGroupConfig = {
  defaultProps: {
    vertical: false,
    variant: 'solid',
    color: 'primary',
    size: 'md',
    inner: false,
    icon: false,
    divided: true,
    bordered: false,
    block: false,
    shadow: false,
    noRipple: false
  },
  styles: {
    root: {
      base: {
        width: 'w-fit',
        height: 'h-fit'
      },
      block: {
        width: 'w-full'
      }
    },
    button: {
      base: {
        width: 'w-auto',
        height: 'h-auto',
        zIndex: 'z-100',
        active: 'active:z-200',
        focus: 'focus:z-200',
        focusVisible: 'focus-visible:z-200 focus-visible:border-transparent',
        disabled: 'disabled:z-0'
      },
      block: {
        width: 'w-full'
      },
      orientations: {
        horizontal: {
          left: {
            borderRadius: 'rounded-r-none'
          },
          middle: {
            borderRadius: 'rounded-none'
          },
          right: {
            borderRadius: 'rounded-l-none'
          }
        },
        vertical: {
          left: {
            borderRadius: 'rounded-b-none'
          },
          middle: {
            borderRadius: 'rounded-none'
          },
          right: {
            borderRadius: 'rounded-t-none'
          }
        }
      },
      divider: {
        horizontal: {
          left: {
            border: 'border-r',
            borderRadius: 'rounded-r-none'
          },
          middle: {
            margin: '-ml-px',
            border: 'border-x',
            borderRadius: 'rounded-none'
          },
          right: {
            margin: '-ml-px',
            border: 'border-l',
            borderRadius: 'rounded-l-none'
          }
        },
        vertical: {
          left: {
            border: 'border-b',
            borderRadius: 'rounded-b-none'
          },
          middle: {
            margin: '-mt-px',
            border: 'border-y',
            borderRadius: 'rounded-none'
          },
          right: {
            margin: '-mt-px',
            border: 'border-t',
            borderRadius: 'rounded-t-none'
          }
        }
      },
      variants: {
        default: {
          light: {
            neutral: {
              border: 'border-light-neutral'
            },
            primary: {
              border: 'border-light-primary'
            },
            secondary: {
              border: 'border-light-secondary'
            },
            success: {
              border: 'border-light-success'
            },
            warning: {
              border: 'border-light-warning'
            },
            error: {
              border: 'border-light-error'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              border: 'border-light-neutral'
            },
            primary: {
              border: 'border-light-primary'
            },
            secondary: {
              border: 'border-light-secondary'
            },
            success: {
              border: 'border-light-success'
            },
            warning: {
              border: 'border-light-warning'
            },
            error: {
              border: 'border-light-error'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              border: 'border-light-neutral'
            },
            primary: {
              border: 'border-light-primary'
            },
            secondary: {
              border: 'border-light-secondary'
            },
            success: {
              border: 'border-light-success'
            },
            warning: {
              border: 'border-light-warning'
            },
            error: {
              border: 'border-light-error'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              border: 'border-light-on-neutral/20'
            },
            primary: {
              border: 'border-light-on-primary/20'
            },
            secondary: {
              border: 'border-light-on-secondary/20'
            },
            success: {
              border: 'border-light-on-success/20'
            },
            warning: {
              border: 'border-light-on-warning/20'
            },
            error: {
              border: 'border-light-on-error/20'
            }
          }
        }
      }
    }
  }
};

export default buttonGroupConfig;
