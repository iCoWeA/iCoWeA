const imageConfig = {
  defaultProps: {
    radius: 'rounded'
  },
  styles: {
    base: {
      display: 'inline-block',
      width: 'w-full',
      maxWidth: 'max-w-none'
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
