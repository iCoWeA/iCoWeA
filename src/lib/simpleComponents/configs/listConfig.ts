export interface ListConfig {
  defaultProps: {
    row: boolean;
    disableGap: boolean;
  };
  styles: {
    base: Record<string, string>;
    row: Record<string, string>;
    disableGap: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  defaultProps: {
    row: false,
    disableGap: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-2'
    },
    row: {
      flexDirection: 'flex-row'
    },
    disableGap: {
      gap: 'gap-0'
    }
  }
};

export default listConfig;
