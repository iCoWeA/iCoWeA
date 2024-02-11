const imageConfig = {
  defaultProps: {
    radius: 'rounded'
  },
  styles: {
    base: {
      display: 'inline-block',
      width: 'w-full'
    },
    radiuses: {
      rounded: {
        borderRadius: 'rounded-xl'
      },
      circular: {
        borderRadius: 'rounded-full'
      }
    }
  }
};

export default imageConfig;
