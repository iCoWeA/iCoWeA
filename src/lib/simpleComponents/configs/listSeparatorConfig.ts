import { type ListSeparatorVariants } from '../components/UI/ListSeparator';

export interface ListSeparatorConfig {
  defaultProps: {
    vertical: boolean;
    variant: ListSeparatorVariants;
    fullwidth: boolean;
    disabled: boolean;
    role: 'separator';
  }
  styles: {
    base: Record<string, string>;
    after: Record<string, string>;
    orientations: Record<Orientations, Record<string, string>>;
    fullwidthOrientations: Record<Orientations, Record<string, string>>;
    disabled: Record<Themes, Record<string, string>>;
    color: Record<Themes, Record<string, string>>;
    variants: Record<ListSeparatorVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const listSeparatorConfig: ListSeparatorConfig = {
  defaultProps: {
    vertical: false,
    variant: 'plain',
    fullwidth: false,
    disabled: false,
    role: 'separator'
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
        margin: 'my-2',
        height: 'h-px',
        width: 'w-full',
        after: 'after:left-4 after:h-px after:w-[calc(100%-2rem)]'
      },
      vertical: {
        margin: 'mx-2',
        height: 'h-full',
        width: 'w-px',
        after: 'after:top-2 after:h-[calc(100%-1rem)] after:w-px'
      }
    },
    fullwidthOrientations: {
      horizontal: {
        after: 'after:left-0 after:h-px after:w-full'
      },
      vertical: {
        after: 'after:top-0 after:h-full after:w-px'
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

export default listSeparatorConfig;
