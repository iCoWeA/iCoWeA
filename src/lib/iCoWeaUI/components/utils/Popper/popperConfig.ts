const popperConfig = {
  defaultProps: {
    lockScroll: false,
    closeOnOutsideClick: true,
    closeOnEscape: false,
    closeDuration: -1,
    focusTrap: false,
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
