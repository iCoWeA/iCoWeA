import { type HeaderDefaultProps } from '.';

export interface HeaderConfig {
  defaultProps: Required<HeaderDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    };
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    color: 'primary'
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        padding: 'py-4'
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-light'
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
  }
};

export default headerConfig;
