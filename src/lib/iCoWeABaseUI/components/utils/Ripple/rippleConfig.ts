const rippleConfig = {
  defaultProps: {
    variant: 'plain',
    color: 'primary',
    sibling: false
  },
  styles: {
    base: {
      position: 'absolute',
      left: 'left-0',
      top: 'top-0',
      display: 'block',
      width: 'w-full',
      height: 'h-full',
      borderRadius: 'rounded-[inherit]',
      pointerEvents: 'pointer-events-none'
    },
    variants: {
      parent: {
        default: {
          light: {
            neutral: {
              hover: '[*:hover>&]:bg-light-neutral/8',
              active: '[*:active:hover>&]:bg-light-neutral/15',
              focus: '[*:focus:hover>&]:bg-light-neutral/15 [*:focus>&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover>&]:bg-light-primary/8',
              active: '[*:active:hover>&]:bg-light-primary/15',
              focus: '[*:focus:hover>&]:bg-light-primary/15 [*:focus>&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover>&]:bg-light-secondary/8',
              active: '[*:active:hover>&]:bg-light-secondary/15',
              focus: '[*:focus:hover>&]:bg-light-secondary/15 [*:focus>&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover>&]:bg-light-success/8',
              active: '[*:active:hover>&]:bg-light-success/15',
              focus: '[*:focus:hover>&]:bg-light-success/15 [*:focus>&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover>&]:bg-light-warning/8',
              active: '[*:active:hover>&]:bg-light-warning/15',
              focus: '[*:focus:hover>&]:bg-light-warning/15 [*:focus>&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover>&]:bg-light-error/8',
              active: '[*:active:hover>&]:bg-light-error/15',
              focus: '[*:focus:hover>&]:bg-light-error/15 [*:focus>&]:bg-light-error/15'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              hover: '[*:hover>&]:bg-light-neutral/8',
              active: '[*:active:hover>&]:bg-light-neutral/15',
              focus: '[*:focus:hover>&]:bg-light-neutral/15 [*:focus>&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover>&]:bg-light-primary/8',
              active: '[*:active:hover>&]:bg-light-primary/15',
              focus: '[*:focus:hover>&]:bg-light-primary/15 [*:focus>&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover>&]:bg-light-secondary/8',
              active: '[*:active:hover>&]:bg-light-secondary/15',
              focus: '[*:focus:hover>&]:bg-light-secondary/15 [*:focus>&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover>&]:bg-light-success/8',
              active: '[*:active:hover>&]:bg-light-success/15',
              focus: '[*:focus:hover>&]:bg-light-success/15 [*:focus>&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover>&]:bg-light-warning/8',
              active: '[*:active:hover>&]:bg-light-warning/15',
              focus: '[*:focus:hover>&]:bg-light-warning/15 [*:focus>&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover>&]:bg-light-error/8',
              active: '[*:active:hover>&]:bg-light-error/15',
              focus: '[*:focus:hover>&]:bg-light-error/15 [*:focus>&]:bg-light-error/15'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              hover: '[*:hover>&]:bg-light-neutral/8',
              active: '[*:active:hover>&]:bg-light-neutral/15',
              focus: '[*:focus:hover>&]:bg-light-neutral/15 [*:focus>&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover>&]:bg-light-primary/8',
              active: '[*:active:hover>&]:bg-light-primary/15',
              focus: '[*:focus:hover>&]:bg-light-primary/15 [*:focus>&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover>&]:bg-light-secondary/8',
              active: '[*:active:hover>&]:bg-light-secondary/15',
              focus: '[*:focus:hover>&]:bg-light-secondary/15 [*:focus>&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover>&]:bg-light-success/8',
              active: '[*:active:hover>&]:bg-light-success/15',
              focus: '[*:focus:hover>&]:bg-light-success/15 [*:focus>&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover>&]:bg-light-warning/8',
              active: '[*:active:hover>&]:bg-light-warning/15',
              focus: '[*:focus:hover>&]:bg-light-warning/15 [*:focus>&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover>&]:bg-light-error/8',
              active: '[*:active:hover>&]:bg-light-error/15',
              focus: '[*:focus:hover>&]:bg-light-error/15 [*:focus>&]:bg-light-error/15'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              hover: '[*:hover>&]:bg-light-on-neutral/8',
              active: '[*:active:hover>&]:bg-light-on-neutral/15',
              focus: '[*:focus:hover>&]:bg-light-on-neutral/15 [*:focus>&]:bg-light-on-neutral/15'
            },
            primary: {
              hover: '[*:hover>&]:bg-light-on-primary/8',
              active: '[*:active:hover>&]:bg-light-on-primary/15',
              focus: '[*:focus:hover>&]:bg-light-on-primary/15 [*:focus>&]:bg-light-on-primary/15'
            },
            secondary: {
              hover: '[*:hover>&]:bg-light-on-secondary/8',
              active: '[*:active:hover>&]:bg-light-on-secondary/15',
              focus: '[*:focus:hover>&]:bg-light-on-secondary/15 [*:focus>&]:bg-light-on-secondary/15'
            },
            success: {
              hover: '[*:hover>&]:bg-light-on-success/8',
              active: '[*:active:hover>&]:bg-light-on-success/15',
              focus: '[*:focus:hover>&]:bg-light-on-success/15 [*:focus>&]:bg-light-on-success/15'
            },
            warning: {
              hover: '[*:hover>&]:bg-light-on-warning/8',
              active: '[*:active:hover>&]:bg-light-on-warning/15',
              focus: '[*:focus:hover>&]:bg-light-on-warning/15 [*:focus>&]:bg-light-on-warning/15'
            },
            error: {
              hover: '[*:hover>&]:bg-light-on-error/8',
              active: '[*:active:hover>&]:bg-light-on-error/15',
              focus: '[*:focus:hover>&]:bg-light-on-error/15 [*:focus>&]:bg-light-on-error/15'
            }
          }
        }
      },
      sibling: {
        default: {
          light: {
            neutral: {
              hover: '[*:hover+&]:bg-light-neutral/8',
              active: '[*:active:hover+&]:bg-light-neutral/15',
              focus: '[*:focus:hover+&]:bg-light-neutral/15 [*:focus+&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover+&]:bg-light-primary/8',
              active: '[*:active:hover+&]:bg-light-primary/15',
              focus: '[*:focus:hover+&]:bg-light-primary/15 [*:focus+&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover+&]:bg-light-secondary/8',
              active: '[*:active:hover+&]:bg-light-secondary/15',
              focus: '[*:focus:hover+&]:bg-light-secondary/15 [*:focus+&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover+&]:bg-light-success/8',
              active: '[*:active:hover+&]:bg-light-success/15',
              focus: '[*:focus:hover+&]:bg-light-success/15 [*:focus+&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover+&]:bg-light-warning/8',
              active: '[*:active:hover+&]:bg-light-warning/15',
              focus: '[*:focus:hover+&]:bg-light-warning/15 [*:focus+&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover+&]:bg-light-error/8',
              active: '[*:active:hover+&]:bg-light-error/15',
              focus: '[*:focus:hover+&]:bg-light-error/15 [*:focus+&]:bg-light-error/15'
            }
          }
        },
        plain: {
          light: {
            neutral: {
              hover: '[*:hover+&]:bg-light-neutral/8',
              active: '[*:active:hover+&]:bg-light-neutral/15',
              focus: '[*:focus:hover+&]:bg-light-neutral/15 [*:focus+&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover+&]:bg-light-primary/8',
              active: '[*:active:hover+&]:bg-light-primary/15',
              focus: '[*:focus:hover+&]:bg-light-primary/15 [*:focus+&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover+&]:bg-light-secondary/8',
              active: '[*:active:hover+&]:bg-light-secondary/15',
              focus: '[*:focus:hover+&]:bg-light-secondary/15 [*:focus+&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover+&]:bg-light-success/8',
              active: '[*:active:hover+&]:bg-light-success/15',
              focus: '[*:focus:hover+&]:bg-light-success/15 [*:focus+&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover+&]:bg-light-warning/8',
              active: '[*:active:hover+&]:bg-light-warning/15',
              focus: '[*:focus:hover+&]:bg-light-warning/15 [*:focus+&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover+&]:bg-light-error/8',
              active: '[*:active:hover+&]:bg-light-error/15',
              focus: '[*:focus:hover+&]:bg-light-error/15 [*:focus+&]:bg-light-error/15'
            }
          }
        },
        soft: {
          light: {
            neutral: {
              hover: '[*:hover+&]:bg-light-neutral/8',
              active: '[*:active:hover+&]:bg-light-neutral/15',
              focus: '[*:focus:hover+&]:bg-light-neutral/15 [*:focus+&]:bg-light-neutral/15'
            },
            primary: {
              hover: '[*:hover+&]:bg-light-primary/8',
              active: '[*:active:hover+&]:bg-light-primary/15',
              focus: '[*:focus:hover+&]:bg-light-primary/15 [*:focus+&]:bg-light-primary/15'
            },
            secondary: {
              hover: '[*:hover+&]:bg-light-secondary/8',
              active: '[*:active:hover+&]:bg-light-secondary/15',
              focus: '[*:focus:hover+&]:bg-light-secondary/15 [*:focus+&]:bg-light-secondary/15'
            },
            success: {
              hover: '[*:hover+&]:bg-light-success/8',
              active: '[*:active:hover+&]:bg-light-success/15',
              focus: '[*:focus:hover+&]:bg-light-success/15 [*:focus+&]:bg-light-success/15'
            },
            warning: {
              hover: '[*:hover+&]:bg-light-warning/8',
              active: '[*:active:hover+&]:bg-light-warning/15',
              focus: '[*:focus:hover+&]:bg-light-warning/15 [*:focus+&]:bg-light-warning/15'
            },
            error: {
              hover: '[*:hover+&]:bg-light-error/8',
              active: '[*:active:hover+&]:bg-light-error/15',
              focus: '[*:focus:hover+&]:bg-light-error/15 [*:focus+&]:bg-light-error/15'
            }
          }
        },
        solid: {
          light: {
            neutral: {
              hover: '[*:hover+&]:bg-light-on-neutral/8',
              active: '[*:active:hover+&]:bg-light-on-neutral/15',
              focus: '[*:focus:hover+&]:bg-light-on-neutral/15 [*:focus+&]:bg-light-on-neutral/15'
            },
            primary: {
              hover: '[*:hover+&]:bg-light-on-primary/8',
              active: '[*:active:hover+&]:bg-light-on-primary/15',
              focus: '[*:focus:hover+&]:bg-light-on-primary/15 [*:focus+&]:bg-light-on-primary/15'
            },
            secondary: {
              hover: '[*:hover+&]:bg-light-on-secondary/8',
              active: '[*:active:hover+&]:bg-light-on-secondary/15',
              focus: '[*:focus:hover+&]:bg-light-on-secondary/15 [*:focus+&]:bg-light-on-secondary/15'
            },
            success: {
              hover: '[*:hover+&]:bg-light-on-success/8',
              active: '[*:active:hover+&]:bg-light-on-success/15',
              focus: '[*:focus:hover+&]:bg-light-on-success/15 [*:focus+&]:bg-light-on-success/15'
            },
            warning: {
              hover: '[*:hover+&]:bg-light-on-warning/8',
              active: '[*:active:hover+&]:bg-light-on-warning/15',
              focus: '[*:focus:hover+&]:bg-light-on-warning/15 [*:focus+&]:bg-light-on-warning/15'
            },
            error: {
              hover: '[*:hover+&]:bg-light-on-error/8',
              active: '[*:active:hover+&]:bg-light-on-error/15',
              focus: '[*:focus:hover+&]:bg-light-on-error/15 [*:focus+&]:bg-light-on-error/15'
            }
          }
        }
      }
    }
  }
};

export default rippleConfig;
