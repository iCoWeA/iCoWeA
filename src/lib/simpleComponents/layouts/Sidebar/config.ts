import { type SidebarDefaultProps } from '.';

export interface SidebarConfig {
  defaultProps: Required<SidebarDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    };
  };
}

const sidebarConfig: SidebarConfig = {
  defaultProps: {
    color: 'none'
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

export default sidebarConfig;
