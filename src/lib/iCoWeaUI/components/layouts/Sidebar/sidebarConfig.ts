const sidebarConfig = {
  defaultProps: {
    position: 'left'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-3/12',
      maxWidth: 'max-w-120',
      flexGrow: 'grow'
    },
    positions: {
      left: {
        margin: 'mr-8'
      },
      right: {
        margin: 'ml-8'
      }
    }
  }
};

export default sidebarConfig;
