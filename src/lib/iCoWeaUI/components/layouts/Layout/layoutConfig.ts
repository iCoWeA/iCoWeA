const layoutConfig = {
  defaultProps: {
    layout: 'page',
    panel: false
  },
  styles: {
    layouts: {
      page: {
        minHeight: 'min-h-screen'
      },
      default: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-4 md:px-8'
      },
      dashboard: {
        padding: 'px-4 md:px-8'
      },
      fullbleed: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-4 md:px-8'
      }
    }
  }
};

export default layoutConfig;
