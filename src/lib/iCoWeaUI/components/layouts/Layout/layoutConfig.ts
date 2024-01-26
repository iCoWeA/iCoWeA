const layoutConfig = {
  defaultProps: {
    layout: 'standard'
  },
  styles: {
    layouts: {
      root: {
        minHeight: 'min-h-screen',
        font: 'antialiased font-normal text-sm font-sans'
      },
      default: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-4 md:px-8'
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
