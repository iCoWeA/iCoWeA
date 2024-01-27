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
        padding: 'px-8 max-md:px-4'
      },
      standard: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-8 max-md:px-4'
      },
      dashboard: {
        padding: 'px-8 max-md:px-4'
      },
      fullbleed: {
        margin: 'mx-auto',
        maxWidth: 'max-w-376',
        padding: 'px-8 max-md:px-4'
      }
    }
  }
};

export default layoutConfig;
