const layoutConfig = {
  defaultProps: {
    layout: 'default',
    panel: false
  },
  styles: {
    layouts: {
      default: {
        minHeight: 'min-h-screen'
      },
      standard: {
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
