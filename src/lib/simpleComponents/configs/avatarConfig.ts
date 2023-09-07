export interface AvatarConfig {
  defaultProps: {
    variant: Borders;
    size: Sizes;
    color: Colors;
    withBorder: boolean;
    borderColor: Colors;
  };
  styles: {
    container: {
      base: Record<string, string>;
      withBorder: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<Borders, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
      borderColors: Record<string, Record<Colors, Record<string, string>>>;
    },
    image: {
      base: Record<string, string>;
    }
  }
}

const avatarConfig: AvatarConfig = {
  defaultProps: {
    variant: 'circular',
    size: 'md',
    color: 'primary',
    withBorder: false,
    borderColor: 'light'
  },
  styles: {
    container: {
      base: {
        display: 'inline-flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        aspectRatio: 'aspect-square',
        font: 'antialiased font-normal text-lg font-sans',
        overflow: 'overflow-hidden'
      },
      withBorder: {
        border: 'border-2'
      },
      sizes: {
        xs: {
          width: 'w-6'
        },
        sm: {
          width: 'w-8'
        },
        md: {
          width: 'w-10'
        },
        lg: {
          width: 'w-11'
        }
      },
      variants: {
        circular: {
          borderRadius: 'rounded-full'
        },
        rounded: {
          borderRadius: 'rounded-xl'
        },
        square: {
          borderRadius: 'rounded-none'
        }
      },
      colors: {
        default: {
          default: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-default'
          },
          primary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-primary'
          },
          secondary: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-secondary'
          },
          success: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-success'
          },
          warning: {
            fill: 'fill-default-dark',
            color: 'text-default-dark',
            background: 'bg-default-warning'
          },
          error: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-error'
          },
          light: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-light'
          },
          dark: {
            fill: 'fill-default-light',
            color: 'text-default-light',
            background: 'bg-default-dark'
          }
        }
      },
      borderColors: {
        default: {
          default: {
            border: 'border-default-default'
          },
          primary: {
            border: 'border-default-primary'
          },
          secondary: {
            border: 'border-default-secondary'
          },
          success: {
            border: 'border-default-success'
          },
          warning: {
            border: 'border-default-warning'
          },
          error: {
            border: 'border-default-error'
          },
          light: {
            border: 'border-default-light'
          },
          dark: {
            border: 'border-default-dark'
          }
        }
      }
    },
    image: {
      base: {
        width: 'w-full',
        aspectRatio: 'aspect-square',
        outline: 'outline-0'
      }
    }
  }
};

export default avatarConfig;
