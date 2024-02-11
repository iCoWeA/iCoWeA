const fabConfig = {
  defaultProps: {
    size: 'md',
    icon: false,
    variant: 'solid',
    color: 'primary',
    border: false,
    radius: 'rounded',
    loading: false,
    noRipple: false
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-3000'
    },
    shadow: {
      shadow: 'shadow-xl',
      hover: 'hover:shadow-2xl',
      active: 'active:shadow-xl',
      focus: 'focus:shadow-xl',
      focusVisible: 'focus-visible:shadow-xl'
    }
  }
};

export default fabConfig;
