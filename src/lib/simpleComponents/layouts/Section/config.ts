import { type SectionDefaultProps } from '.';

export interface SectionConfig {
  defaultProps: Required<SectionDefaultProps>;
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<Colors, Record<string, string>>>;
    }
  }
}

const sectionConfig: SectionConfig = {
  defaultProps: {
    color: 'none'
  },
  styles: {
    root: {
      base: {
        display: 'flex'
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

export default sectionConfig;
