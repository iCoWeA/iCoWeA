export interface DividerConfig {
  defaultProps: {
    orientation: Orientations;
    margin: boolean;
  }
  styles: {
    base: Record<string, string>;
    orientations: Record<Orientations, Record<string, string>>;
    margin: Record<Orientations, Record<string, string>>;
    color: Record<Themes, Record<string, string>>;
  }
}

const dividerConfig: DividerConfig = {
  defaultProps: {
    orientation: 'horizontal',
    margin: false
  },
  styles: {
    base: {
      display: 'block'
    },
    orientations: {
      horizontal: {
        height: 'h-px',
        width: 'w-full'
      },
      vertical: {
        height: 'h-full',
        width: 'w-px'
      }
    },
    margin: {
      horizontal: {
        margin: 'my-2'
      },
      vertical: {
        margin: 'mx-2'
      }
    },
    color: {
      light: {
        background: 'bg-light-divider'
      }
    }
  }
};

export default dividerConfig;
