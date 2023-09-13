import { type StateLayerVariants } from '../components/UI/StateLayer';

export interface StateLayerConfig {
  defaultProps: {
    variant: StateLayerVariants;
    color: Colors;
    valid: boolean;
    invalid: boolean;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<StateLayerVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
  }
}

const stateLayerConfig: StateLayerConfig = {
  defaultProps: {
    variant: 'filled',
    color: 'default',
    valid: false,
    invalid: false
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
      plain: {
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
      text: {
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
      outlined: {
        light: {
          default: {
            hover: 'group-hover:bg-light-on-surface/10',
            active: 'group-active:bg-light-on-surface/[0.15]',
            disabled: 'group-'
          },
          primary: {
            hover: 'group-hover:bg-light-primary/10',
            active: 'group-active:bg-light-primary/[0.15]',
            disabled: 'group-disabled:border-light-on-surface/40'
          },
          secondary: {
            hover: 'group-hover:bg-light-secondary/10',
            active: 'group-active:bg-light-secondary/[0.15]',
            disabled: 'group-disabled:border-light-on-surface/40'
          },
          success: {
            hover: 'group-hover:bg-light-success/10',
            active: 'group-active:bg-light-success/[0.15]',
            disabled: 'group-disabled:border-light-on-surface/40'
          },
          warning: {
            hover: 'group-hover:bg-light-warning/10',
            active: 'group-active:bg-light-warning/[0.15]',
            disabled: 'group-disabled:border-light-on-surface/40'
          },
          error: {
            hover: 'group-hover:bg-light-error/10',
            active: 'group-active:bg-light-error/[0.15]',
            disabled: 'group-disabled:border-light-on-surface/40'
          }
        }
      },
      filled: {
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
      checked: {
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
      unchecked: {
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
      }
    }
  }
};

export default stateLayerConfig;

/* layer: {
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

  <Layer
  variant={variant}
  color={color}
  {...layerProps}

  interface LayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  variant: ButtonVariants;
  color: Colors;
}

const Layer: FC<LayerProps> = ({ variant, color, className, ...restProps }) => {
  /* --- Set context props ---
  const theme = useContext(themeContext).theme;

  /* --- Set default props ---
  const styles = buttonConfig.styles.layer;

  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    ></span>
  );
}; */
