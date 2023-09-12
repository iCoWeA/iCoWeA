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
      colors: {
        light: {
          default: {
            fill: 'fill-light-surface-on-surface',
            color: 'text-light-surface-on-surface',
            background: 'bg-light-surface'
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
        outline: 'outline-0'
      }
    }
  }
};

export default avatarConfig;
