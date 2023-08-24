export type SectionColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | string;

export interface SectionConfig {
  defaultProps: {
    color: SectionColors;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    colors: Record<string, Record<SectionColors, Record<string, string>>>;
  };
}

const sectionConfig: SectionConfig = {
  defaultProps: {
    color: 'none',
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      padding: 'py-4'
    },
    colors: {
      default: {
        default: {
          background: 'bg-default-bg'
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
          background: 'bgs-default-warning'
        },
        error: {
          background: 'bg-default-error'
        }
      }
    }
  }
};

export default sectionConfig;
