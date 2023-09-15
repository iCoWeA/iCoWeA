export interface ListConfig {
  styles: {
    base: Record<string, string>;
  }
}

const listConfig: ListConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      padding: 'py-2'
    }
  }
};

export default listConfig;
