export interface BackdropConfig {
  defaultProps: {
    open: boolean;
    invisible: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
    colors: Record<Themes, Record<string, string>>;
  }
}

const backdropConfig: BackdropConfig = {
  defaultProps: {
    open: false,
    invisible: false,
    keepMounted: false
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-0',
      left: 'left-0',
      zIndex: 'z-10',
      height: 'h-screen',
      width: 'w-screen'
    },
    invisible: {
      background: 'bg-transparent'
    },
    colors: {
      light: {
        background: 'bg-light-on-surface/50'
      }
    }
  }
};

export default backdropConfig;
