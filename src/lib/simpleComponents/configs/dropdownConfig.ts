export interface DropdownConfig {
  defaultProps: {
    color: Colors;
    elevated: boolean;
  };
  styles: {
    base: Record<string, string>;
    elevated: Record<string, Record<string, string>>;
    colors: Record<string, Record<Colors, Record<string, string>>>;
  }
}

const dropdownConfig: DropdownConfig = {
  defaultProps: {
    color: 'light',
    elevated: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      borderRadius: 'rounded-2xl',
      overflow: 'overflow-hidden',
      focus: 'focus:outline-0'
    },
    elevated: {
      default: {
        shadow: 'shadow-md shadow-default-default/80'
      }
    },
    colors: {
      default: {
        default: {
          background: 'bg-default-default'
        },
        primary: {
          background: 'bg-default-primary'
        },
        secondary: {
          background: 'bg-default-secondary'
        },
        success: {
          background: 'bg-default-success'
        },
        warning: {
          background: 'bg-default-warning'
        },
        error: {
          background: 'bg-default-error'
        },
        light: {
          background: 'bg-default-light'
        },
        dark: {
          background: 'bg-default-dark'
        }
      }
    }
  }
};

export default dropdownConfig;
