import { type BaseHTMLAttributes } from 'react';

export interface AvatarConfig {
  defaultProps: {
    variant: Borders;
    size: Sizes;
    color: Colors;
    withBorder: boolean;
    containerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
      withBorder: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<Borders, Record<string, string>>;
      colors: Record<Themes, Record<Colors, Record<string, string>>>;
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
    containerProps: {}
  },
  styles: {
    container: {
      base: {
        display: 'inline-flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        gap: 'gap-2',
        aspectRatio: 'aspect-square',
        font: 'antialiased font-normal text-lg font-sans',
        overflow: 'overflow-hidden'
      },
      withBorder: {
        border: 'border-2 border-transparent'
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
          width: 'w-12'
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
        light: {
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
        width: 'w-full',
        outline: 'outline-0'
      }
    }
  }
};

export default avatarConfig;
