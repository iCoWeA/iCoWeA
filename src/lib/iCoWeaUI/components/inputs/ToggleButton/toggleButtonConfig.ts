const toggleButtonConfig = {
  defaultProps: {
    uncheckedVariant: 'default',
    variant: 'default',
    uncheckedColor: 'neutral',
    color: 'primary',
    size: 'md',
    inner: false,
    icon: false,
    bordered: false,
    block: false,
    shadow: false,
    noRipple: false
  },
  styles: {
    checked: {
      group: 'checked'
    },
    uncheckedVariants: {
      default: {
        light: {
          neutral: {
            fill: 'fill-light-neutral/75',
            color: 'text-light-neutral/75',
            hover: 'hover:fill-light-neutral hover:text-light-neutral',
            active: 'active:fill-light-neutral active:text-light-neutral',
            focus: 'focus:fill-light-neutral focus:text-light-neutral'
          },
          primary: {
            fill: 'fill-light-primary/75',
            color: 'text-light-primary/75',
            hover: 'hover:fill-light-primary hover:text-light-primary',
            active: 'active:fill-light-primary active:text-light-primary',
            focus: 'focus:fill-light-primary focus:text-light-primary'
          },
          secondary: {
            fill: 'fill-light-secondary/75',
            color: 'text-light-secondary/75',
            hover: 'hover:fill-light-secondary hover:text-light-secondary',
            active: 'active:fill-light-secondary active:text-light-secondary',
            focus: 'focus:fill-light-secondary focus:text-light-secondary'
          },
          success: {
            fill: 'fill-light-success/75',
            color: 'text-light-success/75',
            hover: 'hover:fill-light-success hover:text-light-success',
            active: 'active:fill-light-success active:text-light-success',
            focus: 'focus:fill-light-success focus:text-light-success'
          },
          warning: {
            fill: 'fill-light-warning/75',
            color: 'text-light-warning/75',
            hover: 'hover:fill-light-warning hover:text-light-warning',
            active: 'active:fill-light-warning active:text-light-warning',
            focus: 'focus:fill-light-warning focus:text-light-warning'
          },
          error: {
            fill: 'fill-light-error/75',
            color: 'text-light-error/75',
            hover: 'hover:fill-light-error hover:text-light-error',
            active: 'active:fill-light-error active:text-light-error',
            focus: 'focus:fill-light-error focus:text-light-error'
          }
        }
      }
    }
  }
};

export default toggleButtonConfig;
