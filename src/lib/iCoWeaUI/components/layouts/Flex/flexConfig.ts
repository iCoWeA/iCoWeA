const flexConfig = {
  defaultProps: {
    direction: 'row',
    justify: 'start',
    align: 'stretch',
    wrap: 'wrap',
    gap: 'none'
  },
  styles: {
    base: {
      display: 'flex'
    },
    directions: {
      col: {
        flexDirection: 'flex-col'
      },
      'row-reverse': {
        flexDirection: 'flex-row-reverse'
      },
      'col-reverse': {
        flexDirection: 'flex-col-reverse'
      }
    },
    wraps: {
      wrap: {
        flexWrap: 'flex-wrap'
      },
      'wrap-reverse': {
        flexWrap: 'flex-wrap-reverse'
      }
    },
    justifies: {
      normal: {
        justifyContent: 'justify-normal'
      },
      stretch: {
        justifyContent: 'justify-stretch'
      },
      end: {
        justifyContent: 'justify-end'
      },
      center: {
        justifyContent: 'justify-center'
      },
      between: {
        justifyContent: 'justify-between'
      },
      around: {
        justifyContent: 'justify-around'
      },
      evenly: {
        justifyContent: 'justify-evenly'
      }
    },
    aligns: {
      start: {
        alignItems: 'items-start'
      },
      end: {
        alignItems: 'items-end'
      },
      center: {
        alignItems: 'items-center'
      },
      baseline: {
        alignItems: 'items-baseline'
      }
    },
    gaps: {
      base: {
        gap: 'gap-2'
      },
      sm: {
        gap: 'gap-4'
      },
      md: {
        gap: 'gap-6'
      },
      lg: {
        gap: 'gap-8'
      }
    }
  }
};

export default flexConfig;
