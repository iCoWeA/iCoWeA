export interface AvatarConfig {
  defaultProps: {
    size: Sizes;
    color: Colors;
    withBorder: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      withBorder: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
    },
    image: {
      base: Record<string, string>;
    }
  }
}

const avatarConfig: AvatarConfig = {
  defaultProps: {
    size: 'md',
    color: 'default',
    withBorder: false
  },
  styles: {
    container: {
      base: {
        display: 'inline-flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        aspectRatio: 'aspect-square',
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal font-sans',
        overflow: 'overflow-hidden',
        userSelect: 'select-none'
      },
      withBorder: {
        outline: 'outline outline-2 outline-transparent'
      },
      sizes: {
        xs: {
          height: 'h-6',
          fontSize: 'text-xs'
        },
        sm: {
          height: 'h-8',
          fontSize: 'text-sm'
        },
        md: {
          height: 'h-10',
          fontSize: 'text-base'
        },
        lg: {
          height: 'h-12',
          fontSize: 'text-lg'
        }
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-dark'
          },
          primary: {
            fill: 'fill-light-on-primary',
            color: 'text-light-on-primary',
            background: 'bg-light-primary'
          },
          secondary: {
            fill: 'fill-light-on-secondary',
            color: 'text-light-on-secondary',
            background: 'bg-light-secondary'
          },
          success: {
            fill: 'fill-light-on-success',
            color: 'text-light-on-success',
            background: 'bg-light-success'
          },
          warning: {
            fill: 'fill-light-on-warning',
            color: 'text-light-on-warning',
            background: 'bg-light-warning'
          },
          error: {
            fill: 'fill-light-on-error',
            color: 'text-light-on-error',
            background: 'bg-light-error'
          }
        }
      }
    },
    image: {
      base: {
        width: 'w-full'
      }
    }
  }
};

export default avatarConfig;
