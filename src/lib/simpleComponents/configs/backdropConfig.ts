export interface BackdropConfig {
  defaultProps: {
    invisible: boolean;
    overlayRef: Element | null;
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
  }
}

const backdropConfig: BackdropConfig = {
  defaultProps: {
    invisible: false,
    overlayRef: null,
    open: false,
    unmountOnExit: false
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
