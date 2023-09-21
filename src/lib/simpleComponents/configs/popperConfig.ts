export interface PopperConfig {
  defaultProps: {
    open: boolean;
    unmountOnExit: boolean;
    lockScroll: boolean;
    closeOnAwayClick: boolean;
    backdrop: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const popperConfig: PopperConfig = {
  defaultProps: {
    open: false,
    unmountOnExit: true,
    lockScroll: true,
    closeOnAwayClick: true,
    backdrop: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      borderRadius: 'rounded-xl',
      shadow: 'shadow-md shadow-black/50',
      overflow: 'overflow-hidden'
    }
  }
};

export default popperConfig;
