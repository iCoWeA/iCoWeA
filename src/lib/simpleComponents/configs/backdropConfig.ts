export interface BackdropConfig {
  defaultProps: {
    open: boolean;
    invisible: boolean;
    keepMounted: boolean;
  };
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
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
      height: 'h-screen',
      width: 'w-screen',
      background: 'bg-black/50'
    },
    invisible: {
      background: 'bg-transparent'
    }
  }
};

export default backdropConfig;
