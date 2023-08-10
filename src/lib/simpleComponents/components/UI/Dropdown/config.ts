/* import { type DropdownDefaultProps } from '.';

export type DropdownPositions = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';

export interface DropdownConfig {
  defaultProps: Required<DropdownDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
    },
    dropdown: {
      base: Record<string, string>;
      positions: Record<string, Record<string, string>>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    }
  }
}

const dropdownConfig: DropdownConfig = {
  defaultProps: {
    open: false,
    position: 'bottom',
    color: 'default',
    closeOnClick: false,
    disableScrolling: false,
    onClose: () => {},
    backdropProps: {}
  },
  styles: {
    root: {
      base: {
        position: 'relative',
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit'
      }
    },
    dropdown: {
      base: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'flex-col',
        shadow: 'shadow-md',
        borderRadius: 'rounded-2xl',
        overflow: 'overflow-hidden'
      },
      positions: {
        top: {
          top: '-top-2',
          left: 'left-2/4',
          translate: '-translate-y-full -translate-x-2/4'
        },
        bottom: {
          bottom: '-bottom-2',
          left: 'left-2/4',
          translate: 'translate-y-full -translate-x-2/4'
        },
        left: {
          top: 'top-2/4',
          left: '-left-2',
          translate: '-translate-y-2/4 -translate-x-full'
        },
        right: {
          top: 'top-2/4',
          right: '-right-2',
          translate: '-translate-y-2/4 translate-x-full'
        },
        'top-start': {
          top: '-top-2',
          left: 'left-0',
          translate: '-translate-y-full'
        },
        'top-end': {
          top: '-top-2',
          right: 'right-0',
          translate: '-translate-y-full'
        },
        'bottom-start': {
          bottom: '-bottom-2',
          left: 'left-0',
          translate: 'translate-y-full'
        },
        'bottom-end': {
          bottom: '-bottom-2',
          right: 'right-0',
          translate: 'translate-y-full'
        },
        'left-start': {
          top: 'top-0',
          left: '-left-2',
          translate: '-translate-x-full'
        },
        'left-end': {
          bottom: 'bottom-0',
          left: '-left-2',
          translate: '-translate-x-full'
        },
        'right-start': {
          top: 'top-0',
          right: '-lright2',
          translate: 'translate-x-full'
        },
        'right-end': {
          bottom: 'bottom-0',
          right: '-right-2',
          translate: 'translate-x-full'
        }
      },
      colors: {
        default: {
          default: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-light'
          },
          primary: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-primary'
          },
          secondary: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-secondary'
          },
          success: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-success'
          },
          warning: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-warning'
          },
          error: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-error'
          },
          light: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-light'
          },
          dark: {
            shadow: 'shadow-default-dark/20',
            background: 'bg-default-dark'
          }
        }
      }
    }
  }
};

export default dropdownConfig; */
