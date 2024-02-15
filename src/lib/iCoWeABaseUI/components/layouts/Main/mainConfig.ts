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
    block: {
      maxWidth: 'max-w-232'
    },
    placements: {
      left: {
        margin: 'mx-8 max-md:ml-4'
      },
      middle: {
        margin: 'mx-auto'
      },
      right: {
        margin: 'mx-8 max-md:mr-4'
      },
      full: {
        margin: 'mx-8 max-md:mx-4'
      }
    }
  }
};

export default mainConfig;
