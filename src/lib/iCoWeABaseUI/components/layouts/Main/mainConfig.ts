const mainConfig = {
  defaultProps: {
    placement: 'middle'
  },
  styles: {
    base: {
      display: 'flex',
      width: 'w-full',
      flexDirection: 'flex-col'
    },
    placements: {
      left: {
        margin: 'ml-auto mr-8',
        maxWidth: 'max-w-232'
      },
      middle: {
        margin: 'mx-auto',
        maxWidth: 'max-w-232'
      },
      right: {
        margin: 'ml-8 mr-auto',
        maxWidth: 'max-w-232'
      }
    }
  }
};

export default mainConfig;
