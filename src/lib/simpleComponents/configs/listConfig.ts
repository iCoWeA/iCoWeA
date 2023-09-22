export interface ListConfig {
  defaultProps: {
    orientation: Orientations;
    group: boolean;
  },
  styles: {
    base: Record<string, string>;
    vertical: Record<string, string>;
    group: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  defaultProps: {
    orientation: 'vertical',
    group: false
  },
  styles: {
    base: {
      display: 'flex',
      padding: 'py-2'
    },
    vertical: {
      flexDirection: 'flex-col'
    },
    group: {
      padding: 'p-0'
    }
  }
};

export default listConfig;
