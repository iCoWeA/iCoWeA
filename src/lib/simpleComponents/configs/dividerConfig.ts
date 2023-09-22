import { type DividerVariants } from '../components/UI/Divider';

export interface DividerConfig {
  defaultProps: {
    orientation: Orientations;
    variant: DividerVariants;
    disabled: boolean;
  }
  styles: {
    base: Record<string, string>;
    after: Record<string, string>;
    orientations: Record<Orientations, Record<string, string>>;
    disabled: Record<Themes, Record<string, string>>;
    color: Record<Themes, Record<string, string>>;
    variants: Record<DividerVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const dividerConfig: DividerConfig = {
  defaultProps: {
    orientation: 'horizontal',
    variant: 'plain',
    disabled: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'block',
      shrink: 'shrink-0',
      border: 'border-0'
    },
    after: {
      position: 'after:absolute',
      top: 'top-0',
      left: 'left-0'
    },
    orientations: {
      horizontal: {
        height: 'h-px',
        width: 'w-full',
        after: 'after:h-px after:w-full'
      },
      vertical: {
        height: 'h-full',
        width: 'w-px',
        after: 'after:h-full after:w-px'
      }
    },
    color: {
      light: {
        after: 'after:bg-light-divider'
      }
    },
    disabled: {
      light: {
        after: 'after:bg-light-on-surface/40'
      }
    },
    variants: {
      plain: {
        light: {
          default: {
            after: 'after:bg-light-on-surface'
          },
          primary: {
            after: 'after:bg-light-on-primary'
          },
          secondary: {
            after: 'after:bg-light-on-secondary'
          },
          success: {
            after: 'after:bg-light-on-success'
          },
          warning: {
            after: 'after:bg-light-on-warning'
          },
          error: {
            after: 'after:bg-light-on-error'
          }
        }
      },
      text: {
        light: {
          default: {
            after: 'after:bg-light-on-surface'
          },
          primary: {
            after: 'after:bg-light-primary'
          },
          secondary: {
            after: 'after:bg-light-secondary'
          },
          success: {
            after: 'after:bg-light-success'
          },
          warning: {
            after: 'after:bg-light-warning'
          },
          error: {
            after: 'after:bg-light-error'
          }
        }
      },
      outlined: {
        light: {
          default: {
            after: 'after:bg-light-on-surface'
          },
          primary: {
            after: 'after:bg-light-primary'
          },
          secondary: {
            after: 'after:bg-light-secondary'
          },
          success: {
            after: 'after:bg-light-success'
          },
          warning: {
            after: 'after:bg-light-warning'
          },
          error: {
            after: 'after:bg-light-error'
          }
        }
      },
      filled: {
        light: {
          default: {
            after: 'after:bg-light-on-surface'
          },
          primary: {
            after: 'after:bg-light-on-primary'
          },
          secondary: {
            after: 'after:bg-light-on-secondary'
          },
          success: {
            after: 'after:bg-light-on-success'
          },
          warning: {
            after: 'after:bg-light-on-warning'
          },
          error: {
            after: 'after:bg-light-on-error'
          }
        }
      }
    }
  }
};

export default dividerConfig;
