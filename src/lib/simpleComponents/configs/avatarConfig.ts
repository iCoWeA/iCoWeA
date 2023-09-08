import { type BaseHTMLAttributes } from 'react';

export interface AvatarConfig {
  defaultProps: {
    variant: Borders;
    size: Sizes;
    color: ContainerColors;
    withBorder: boolean;
    containerProps: BaseHTMLAttributes<HTMLDivElement>;
  };
  styles: {
    container: {
      base: Record<string, string>;
      withBorder: Record<string, string>;
      sizes: Record<Sizes, Record<string, string>>;
      variants: Record<Borders, Record<string, string>>;
      colors: Record<Themes, Record<ContainerColors, Record<string, string>>>;
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
        light: {
          primary: {
            fill: 'fill-light-primary-text',
            color: 'text-light-primary-text',
            background: 'bg-light-primary-container'
          },
          secondary: {
            fill: 'fill-light-secondary-text',
            color: 'text-light-secondary-text',
            background: 'bg-light-secondary-container'
          },
          success: {
            fill: 'fill-light-success-text',
            color: 'text-light-success-text',
            background: 'bg-light-success-container'
          },
          warning: {
            fill: 'fill-light-warning-text',
            color: 'text-light-warning-text',
            background: 'bg-light-warning-container'
          },
          error: {
            fill: 'fill-light-error-text',
            color: 'text-light-error-text',
            background: 'bg-light-error-container'
          },
          light: {
            fill: 'fill-light-light-text',
            color: 'text-light-light-text',
            background: 'bg-light-light-container'
          },
          dark: {
            fill: 'fill-light-light',
            color: 'text-light-light',
            background: 'bg-light-dark-container'
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
