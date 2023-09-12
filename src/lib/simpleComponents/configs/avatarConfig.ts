import { type BaseHTMLAttributes } from 'react';

export interface AvatarConfig {
  defaultProps: {
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
        borderRadius: 'rounded-full',
        font: 'antialiased font-normal text-lg font-sans',
        overflow: 'overflow-hidden'
      },
      withBorder: {
        border: 'border-2 border-transparent'
      },
      sizes: {
        xs: {
          height: 'h-6'
        },
        sm: {
          width: 'h-8'
        },
        md: {
          width: 'h-10'
        },
        lg: {
          width: 'h-12'
        }
      },
      colors: {
        light: {
          default: {
            fill: 'fill-light-on-surface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-high'
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
        width: 'w-full',
        maxWidth: 'max-w-0'
      }
    }
  }
};

export default avatarConfig;
