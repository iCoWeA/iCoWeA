const layoutConfig = {
  defaultProps: {
    layout: 'standard'
  },
  styles: {
    layouts: {
      default: {
        display: 'grid',
        height: 'min-h-screen',
        gridTemplateRows: 'grid-rows-[1fr]'
      },
      standard: {
        display: 'grid',
        height: 'min-h-screen',
        gridTemplateRows: 'grid-rows-[auto_1fr_auto]'
      },
      sticky: {
        display: 'grid',
        height: 'min-h-screen',
        padding: 'pt-14',
        gridTemplateRows: 'grid-rows-[1fr_auto]'
      },
      fullbleed: {
        display: 'flex',
        margin: 'mx-auto',
        maxWidth: 'max-w-content',
        padding: 'px-4 md:px-8',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        gap: 'gap-8'
      },
      dashboard: {
        display: 'flex',
        padding: 'px-4 md:px-8',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        gap: 'gap-8'
      }
    },
    border: {
      border: 'border-y'
    }
  }
};

export default layoutConfig;
