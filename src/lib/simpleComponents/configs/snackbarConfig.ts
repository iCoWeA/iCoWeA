export interface SnackbarConfig {
  defaultProps: {
    open: boolean;
    closeOnAwayClick: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      open: Record<string, string>;
      empty: Record<string, string>;
      colors: Record<Themes, Record<string, string>>;
      positions: Record<InnerPositions, Record<string, string>>;
    }
  }
}

const snackbarConfig: SnackbarConfig = {
  defaultProps: {
    open: true,
    closeOnAwayClick: true,
    unmountOnExit: false
  },
  styles: {
    container: {
      base: {
        display: 'flex',
        height: 'h-fit',
        width: 'w-fit',
        opacity: 'opacity-0',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        opacity: 'opacity-100'
      },
      empty: {
        flexDirection: 'flex-col',
        padding: 'py-3.5 px-4',
        font: 'antialiased font-normal text-sm font-sans'
      },
      colors: {
        light: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface',
          background: 'bg-light-surface-dark'
        }
      },
      positions: {
        top: {
          position: 'fixed',
          top: 'top-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'top-left': {
          position: 'fixed',
          top: 'top-6',
          left: 'left-6'
        },
        'top-right': {
          position: 'fixed',
          top: 'top-6',
          right: 'right-6'
        },
        bottom: {
          position: 'fixed',
          bottom: 'bottom-6',
          left: 'left-2/4',
          translate: '-translate-x-2/4'
        },
        'bottom-left': {
          position: 'fixed',
          bottom: 'bottom-6',
          left: 'left-6'
        },
        'bottom-right': {
          position: 'fixed',
          bottom: 'bottom-6',
          right: 'right-6'
        },
        left: {
          position: 'fixed',
          top: 'top-2/4',
          left: 'left-6',
          translate: '-translate-y-2/4'
        },
        right: {
          position: 'fixed',
          top: 'top-2/4',
          right: 'right-6',
          translate: '-translate-y-2/4'
        }
      }
    }
  }
};

export default snackbarConfig;
