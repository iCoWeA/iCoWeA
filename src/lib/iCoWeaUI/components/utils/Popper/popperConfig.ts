const popperConfig = {
  defaultProps: {
    open: false,
    lockScroll: false,
    closeOnOutsideClick: true,
    closeOnEscape: false,
    closeDuration: -1,
    backdrop: false,
    closeOnBackdropClick: true
  },
  styles: {
    base: {
      zIndex: 'z-2000'
    }
  }
};

export default popperConfig;
