export interface PopperConfig {
  defaultProps: {
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    backdrop: boolean;
    overlayRef: Element | null;
    open: boolean;
    unmountOnExit: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const popperConfig: PopperConfig = {
  defaultProps: {
    lockScroll: true,
    closeOnAwayClick: true,
    backdrop: false,
    overlayRef: null,
    open: false,
    unmountOnExit: true
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      shadow: 'shadow-md shadow-black/50',
      overflow: 'overflow-hidden'
    }
  }
};

export default popperConfig;
