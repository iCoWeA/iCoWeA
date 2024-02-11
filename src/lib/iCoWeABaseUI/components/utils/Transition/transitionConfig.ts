const transitionConfig = {
  defaultProps: {
    transition: 'fade',
    smooth: false,
    unmountOnExit: false
  },
  styles: {
    base: {
      position: 'relative',
      display: 'block',
      transitionDuration: 'duration-[2000ms]'
    },
    transitions: {
      default: {
        fade: {
          transition: 'transition-opacity'
        },
        grow: {
          transition: 'transition-transform'
        },
        'grow-x': {
          whiteSpace: 'whitespace-nowrap',
          overflow: 'overflow-hidden',
          transition: 'transition-[width]'
        },
        'grow-y': {
          overflow: 'overflow-hidden',
          transition: 'transition-[height]'
        },
        'slide-top': {
          transition: 'transition-transform'
        },
        'slide-bottom': {
          transition: 'transition-transform'
        },
        'slide-left': {
          transition: 'transition-transform'
        },
        'slide-right': {
          transition: 'transition-transform'
        }
      },
      smooth: {
        fade: {
          transition: 'transition-opacity'
        },
        grow: {
          transition: 'transition-[transform_opacity]'
        },
        'grow-x': {
          whiteSpace: 'whitespace-nowrap',
          overflow: 'overflow-hidden',
          transition: 'transition-[width_opacity]'
        },
        'grow-y': {
          overflow: 'overflow-hidden',
          transition: 'transition-[height_opacity]'
        },
        'slide-top': {
          transition: 'transition-[transform_opacity]'
        },
        'slide-bottom': {
          transition: 'transition-[transform_opacity]'
        },
        'slide-left': {
          transition: 'transition-[transform_opacity]'
        },
        'slide-right': {
          transition: 'transition-[transform_opacity]'
        }
      }
    }
  }
};

export default transitionConfig;
