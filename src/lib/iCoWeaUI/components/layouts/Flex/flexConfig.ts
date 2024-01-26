const flexConfig = {
  defaultProps: {
    direction: 'row',
    wrap: 'wrap',
    justify: 'start',
    align: 'center',
    gap: 'none',
    grow: false
  },
  styles: {
    base: {
      display: 'flex'
    },
    grow: {
      flexGrow: 'grow'
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
      end: {
        justifyContent: 'justify-end'
      },
      center: {
        justifyContent: 'justify-center'
      },
      stretch: {
        justifyContent: 'justify-stretch'
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
