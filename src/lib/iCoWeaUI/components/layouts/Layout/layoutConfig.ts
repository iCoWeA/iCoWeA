const layoutConfig = {
  defaultProps: {
    layout: 'default',
    panel: false
  },
  styles: {
    layouts: {
      default: {
        height: 'min-h-screen'
      },
      fullbleed: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-4 md:px-8'
      },
      dashboard: {
        padding: 'px-4 md:px-8'
      }
    }
  }
};

export default layoutConfig;
