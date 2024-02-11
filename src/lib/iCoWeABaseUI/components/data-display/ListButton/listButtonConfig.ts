const listButtonConfig = {
  defaultProps: {
    size: 'md',
    variant: 'text',
    color: 'neutral',
    border: 'none',
    radius: 'circular',
    noRipple: false
  },
  styles: {
    base: {
      transition: 'transition-all',
      focus: 'focus:outline-none',
      focusVisible: 'focus-visible:ring-4 focus-visible:border-transparent'
    },
    selected: {
      group: 'selected'
    },
    ripple: {
      position: 'relative'
    },
    variants: {
      light: {
        neutral: {
          focusVisible: 'focus-visible:ring-light-neutral'
        },
        primary: {
          focusVisible: 'focus-visible:ring-light-primary'
        },
        secondary: {
          focusVisible: 'focus-visible:ring-light-secondary'
        },
        success: {
          focusVisible: 'focus-visible:ring-light-success'
        },
        warning: {
          focusVisible: 'focus-visible:ring-light-warning'
        },
        error: {
          focusVisible: 'focus-visible:ring-light-error'
        },
        'on-neutral': {
          focusVisible: 'focus-visible:ring-light-on-neutral'
        },
        'on-primary': {
          focusVisible: 'focus-visible:ring-light-on-primary'
        },
        'on-secondary': {
          focusVisible: 'focus-visible:ring-light-on-secondary'
        },
        'on-success': {
          focusVisible: 'focus-visible:ring-light-on-success'
        },
        'on-warning': {
          focusVisible: 'focus-visible:ring-light-on-warning'
        },
        'on-error': {
          focusVisible: 'focus-visible:ring-light-on-error'
        }
      },
      dark: {
        neutral: {
          focusVisible: 'focus-visible:ring-dark-neutral'
        },
        primary: {
          focusVisible: 'focus-visible:ring-dark-primary'
        },
        secondary: {
          focusVisible: 'focus-visible:ring-dark-secondary'
        },
        success: {
          focusVisible: 'focus-visible:ring-dark-success'
        },
        warning: {
          focusVisible: 'focus-visible:ring-dark-warning'
        },
        error: {
          focusVisible: 'focus-visible:ring-dark-error'
        },
        'on-neutral': {
          focusVisible: 'focus-visible:ring-dark-on-neutral'
        },
        'on-primary': {
          focusVisible: 'focus-visible:ring-dark-on-primary'
        },
        'on-secondary': {
          focusVisible: 'focus-visible:ring-dark-on-secondary'
        },
        'on-success': {
          focusVisible: 'focus-visible:ring-dark-on-success'
        },
        'on-warning': {
          focusVisible: 'focus-visible:ring-dark-on-warning'
        },
        'on-error': {
          focusVisible: 'focus-visible:ring-dark-on-error'
        }
      }
    }
  }
};

export default listButtonConfig;
