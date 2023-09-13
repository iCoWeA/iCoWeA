import { type StateLayerStates } from '../components/UI/StateLayer';

export interface StateLayerConfig {
  defaultProps: {
    state: StateLayerStates;
    color: Colors;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<StateLayerStates, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const stateLayerConfig: StateLayerConfig = {
  defaultProps: {
    state: 'filled-click',
    color: 'default'
  },
  styles: {
    base: {
      position: 'absolute',
      top: 'top-0',
      left: 'left-0',
      display: 'block',
      height: 'h-full',
      width: 'w-full',
      transition: 'transition',
      pointerEvent: 'pointer-events-none'
    },
    variants: {
      'plain-click': {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface-variant/10',
            active: 'group-active:bg-light-on-surface-variant/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-on-primary/10',
            active: 'group-active:bg-light-on-primary/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-on-secondary/10',
            active: 'group-active:bg-light-on-secondary/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-on-success/10',
            active: 'group-active:bg-light-on-success/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-on-warning/10',
            active: 'group-active:bg-light-on-warning/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-on-error/10',
            active: 'group-active:bg-light-on-error/[0.15]'
          }
        }
      },
      'text-click': {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-primary/10',
            active: 'group-active:bg-light-primary/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-secondary/10',
            active: 'group-active:bg-light-secondary/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-success/10',
            active: 'group-active:bg-light-success/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-warning/10',
            active: 'group-active:bg-light-warning/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-error/10',
            active: 'group-active:bg-light-error/[0.15]'
          }
        }
      },
      'outlined-click': {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-primary/10',
            active: 'group-active:bg-light-primary/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-secondary/10',
            active: 'group-active:bg-light-secondary/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-success/10',
            active: 'group-active:bg-light-success/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-warning/10',
            active: 'group-active:bg-light-warning/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-error/10',
            active: 'group-active:bg-light-error/[0.15]'
          }
        }
      },
      'filled-click': {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-on-primary/10',
            active: 'group-active:bg-light-on-primary/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-on-secondary/10',
            active: 'group-active:bg-light-on-secondary/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-on-success/10',
            active: 'group-active:bg-light-on-success/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-on-warning/10',
            active: 'group-active:bg-light-on-warning/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-on-error/10',
            active: 'group-active:bg-light-on-error/[0.15]'
          }
        }
      },
      unchecked: {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-primary/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-secondary/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-success/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-warning/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-error/[0.15]'
          }
        }
      },
      checked: {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          primary: {
            hover: 'group-hover:bg-light-primary/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          secondary: {
            hover: 'group-hover:bg-light-secondary/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          success: {
            hover: 'group-hover:bg-light-success/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          warning: {
            hover: 'group-hover:bg-light-warning/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          },
          error: {
            hover: 'group-hover:bg-light-error/10',
            active: 'group-active:bg-light-on-surface/[0.15]'
          }
        }
      },
      grab: {
        light: {
          default: {
            background: 'after:bg-light-on-surface/20'
          },
          primary: {
            background: 'after:bg-light-primary/20'
          },
          secondary: {
            background: 'after:bg-light-secondary/20'
          },
          success: {
            background: 'after:bg-light-success/20'
          },
          warning: {
            background: 'after:bg-light-warning20'
          },
          error: {
            background: 'after:bg-light-error/20'
          }
        }
      }
    }
  }
};

export default stateLayerConfig;
