export interface BackdropConfig {
  defaultProps: {
    invisible: boolean;
  };
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
    colors: Record<Themes, Record<string, string>>;
  }
}

const backdropConfig: BackdropConfig = {
  defaultProps: {
    invisible: false
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
