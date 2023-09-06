import { type BackdropProps } from '../components/UI/Backdrop/Backdrop';

export interface DialogConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
    open: boolean;
    lockScroll: boolean;
    overlayRef: Element | null;
    backdropProps: BackdropProps;
  };
  styles: {
    dialog: {
      base: Record<string, string>;
      open: Record<string, string>;
      elevated: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    },
    backdrop: {
      base: Record<string, string>;
    }
  }
}

const dialogConfig: DialogConfig = {
  defaultProps: {
    color: 'light',
    elevated: false,
    open: false,
    lockScroll: true,
    overlayRef: null,
    backdropProps: {}
  },
  styles: {
    dialog: {
      base: {
        position: 'fixed',
        top: 'top-2/4',
        left: 'left-2/4',
        transform: '-translate-y-2/4 -translate-x-2/4',
        zIndex: 'z-[60]',
        display: 'flex',
        flexDirection: 'flex-col',
        width: 'w-[calc(100vw-32px)] md:w-[calc(100vw-64px)]',
        maxWidth: 'max-w-[40rem]',
        borderRadius: 'rounded-2xl',
        overflow: 'overflow-hidden',
        opacity: 'opacity-0',
        transition: 'transition-[opacity]'
      },
      open: {
        opacity: 'opacity-100'
      },
      elevated: {
        default: {
          shadow: 'shadow-md shadow-default-default/80'
        }
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-default'
          },
          primary: {
            background: 'bg-default-primary'
          },
          secondary: {
            background: 'bg-default-secondary'
          },
          success: {
            background: 'bg-default-success'
          },
          warning: {
            background: 'bg-default-warning'
          },
          error: {
            background: 'bg-default-error'
          },
          light: {
            background: 'bg-default-light'
          },
          dark: {
            background: 'bg-default-dark'
          }
        }
      }
    },
    backdrop: {
      base: {
        zIndex: 'z-50'
      }
    }
  }
};

export default dialogConfig;
