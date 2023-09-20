export interface DividerConfig {
  defaultProps: {
    orientation: Orientations;
  }
  styles: {
    base: Record<string, string>;
    orientations: Record<Orientations, Record<string, string>>;
    color: Record<Themes, Record<string, string>>;
  }
}

const dividerConfig: DividerConfig = {
  defaultProps: {
    orientation: 'horizontal'
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
    color: {
      light: {
        background: 'bg-light-divider'
      }
    }
  }
};

export default dividerConfig;
