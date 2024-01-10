const fabConfig = {
  defaultProps: {
    variant: 'solid',
    color: 'primary',
    size: 'md',
    icon: false,
    bordered: false,
    noRipple: false
  },
  styles: {
    base: {
      position: 'absolute',
      zIndex: 'z-3000'
    },
    shadow: {
      shadow: 'shadow-md',
      hover: 'hover:shadow-lg',
      active: 'active:shadow-sm',
      focus: 'focus:shadow-sm',
      focusVisible: 'focus-visible:shadow-sm'
    }
  }
};

export default fabConfig;
