export interface BackdropConfig {
  defaultProps: {
    open: boolean;
    invisible: boolean;
    overlayRef: Element | null;
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
    overlayRef: null
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-0',
      left: 'left-0',
      display: 'block',
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
