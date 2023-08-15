export interface ListProps {
  row?: boolean;
  disableGap?: boolean;
  className?: string;
}

export interface ListConfig {
  defaultProps: Required<ListProps>;
  styles: {
    base: Record<string, string>;
    row: Record<string, string>;
    disableGap: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  defaultProps: {
    row: false,
    disableGap: false,
    className: ''
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-2',
      focus: 'focus:outline-0'
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
