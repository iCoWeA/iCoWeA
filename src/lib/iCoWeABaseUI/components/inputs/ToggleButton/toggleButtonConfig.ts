const toggleButtonConfig = {
  defaultProps: {
    size: 'md',
    block: false,
    icon: false,
    variant: 'text',
    color: 'primary',
    border: false,
    radius: 'rounded',
    noRipple: false
  },
  styles: {
    base: {
      transition: 'transition-all'
    },
    checked: {
      group: 'checked'
    }
  }
};

export default toggleButtonConfig;
