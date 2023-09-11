import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    iconProps: IconProps;
  };
  styles: {
    button: {
      base: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<CheckVariants, Record<Themes, Record<string, string>>>;
      open: Record<CheckVariants, Record<Themes, Record<Colors, Record<string, string>>>>;
    },
    before: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
    },
    divider: {
      base: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
    },
    icon: {
      base: Record<string, string>;
      open: Record<string, string>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  defaultProps: {
    iconProps: {}
  },
  styles: {
    button: {
      base: {
        position: 'relative',
        display: 'flex',
        alignItems: 'items-center',
        width: 'w-full',
        font: 'antialiased font-normal font-sans',
        transition: 'transition',
        focus: 'focus:outline-0'
      },
      sizes: {
        sm: {
          height: 'h-8',
          padding: 'py-1.5',
          text: 'text-sm'
        },
        md: {
          height: 'h-10',
          padding: 'py-2',
          text: 'text-base'
        },
        lg: {
          height: 'h-12',
          padding: 'py-2.5',
          text: 'text-lg'
        }
      },
      variants: {
        plain: {
          light: {
            fill: 'fill-light-on-surface/70',
            color: 'text-light-on-surface/70',
            hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
          }
        },
        text: {
          light: {
            fill: 'fill-light-on-surface/70',
            color: 'text-light-on-surface/70',
            hover: 'hover:fill-light-on-surface hover:text-light-on-surface'
          }
        },
        filled: {
          light: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface'
          }
        }
      },
      open: {
        plain: {
          light: {
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              hover: 'hover:fill-light-primary hover:text-light-primary'
            }
          }
        },
        text: {
          light: {
            primary: {
              fill: 'fill-light-primary',
              color: 'text-light-primary',
              hover: 'hover:fill-light-primary hover:text-light-primary'
            }
          }
        },
        filled: {
          light: {
            primary: {
              fill: 'fill-light-on-primary-container',
              color: 'text-light-on-primary-container',
              background: 'bg-light-primary-container'
            }
          }
        }
      }
    },
    before: {
      base: {
        position: 'before:absolute',
        top: 'before:top-0',
        left: 'before:left-0',
        display: 'before:block',
        height: 'before:h-full',
        width: 'before:w-full',
        transition: 'before:transition'
      },
      colors: {
        light: {
          hover: 'hover:before:bg-light-on-surface/[0.08]',
          active: 'active:before:bg-light-on-surface/[0.12]'
        }
      }
    },
    divider: {
      base: {
        border: 'border-y'
      },
      colors: {
        light: {
          border: 'border-t-transparent border-b-light-divider-variant'
        }
      }
    },
    icon: {
      base: {
        margin: 'ml-auto',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        transform: 'rotate-180'
      }
    }
  }
};

export default accordionHeaderConfig;
