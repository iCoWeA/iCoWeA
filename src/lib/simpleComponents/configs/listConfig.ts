export interface ListConfig {
  defaultProps: {
    group: boolean;
  },
  styles: {
    base: Record<string, string>;
    group: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  defaultProps: {
    group: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      padding: 'py-2'
    },
    group: {
      padding: 'p-0'
    }
  }
};

export default listConfig;
