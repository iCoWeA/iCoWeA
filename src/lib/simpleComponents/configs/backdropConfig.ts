export interface BackdropConfig {
  defaultProps: {
    open: boolean;
    invisible: boolean;
    overlayRef: Element | null;
  };
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
    color: Record<Themes, Record<string, string>>;
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
      zIndex: 'z-10',
      display: 'block',
      height: 'h-screen',
      width: 'w-screen',
      background: 'bg-transparent',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      transitionDuration: 'duration-500'
    },
    open: {
      opacity: 'opacity-100'
    },
    color: {
      light: {
        background: 'bg-light-dark-container/70'
      }
    }
  }
};

export default backdropConfig;
