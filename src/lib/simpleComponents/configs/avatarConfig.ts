export type AvatarVariants = 'rounded' | 'circular' | 'square';
export type AvatarSizes = 'none' | 'sm' | 'md' | 'lg';

export interface AvatarConfig {
  defaultProps: {
    variant: AvatarVariants;
    size: AvatarSizes;
    color: Colors;
    withBorder: boolean;
  };
  styles: {
    base: Record<string, string>;
    withBorder: Record<string, Record<string, string>>;
    sizes: Record<AvatarSizes, Record<string, string>>;
    variants: Record<AvatarVariants, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const avatarConfig: AvatarConfig = {
  defaultProps: {
    variant: 'circular',
    size: 'none',
    color: 'default',
    withBorder: false
  },
  styles: {
    base: {
      display: 'inline-block',
      width: 'max-w-none',
      aspectRatio: 'aspect-square',
      focus: 'focus:outline-0'
    },
    withBorder: {
      default: {
        border: 'border-2'
      }
    },
    sizes: {
      none: {
        width: 'w-full'
      },
      sm: {
        width: 'w-9'
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
        borderRadius: 'rounded-2xl'
      },
      square: {
        borderRadius: 'rounded-none'
      }
    },
    colors: {
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
  }
};

export default avatarConfig;
