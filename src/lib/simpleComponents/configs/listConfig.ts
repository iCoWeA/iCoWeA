export interface ListConfig {
  defaultProps: {
    row: boolean;
    group: boolean;
  },
  styles: {
    base: Record<string, string>;
    row: Record<string, string>;
    group: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  defaultProps: {
    row: false,
    group: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      padding: 'py-2'
    },
    row: {
      padding: 'p-0',
      flexDirection: 'flex-row'
    },
    group: {
      padding: 'p-0'
    }
  }
};

export default listConfig;
