const listConfig = {
  defaultProps: {
    spacing: 'md',
    justify: 'start',
    align: 'stretch',
    gap: 'none',
    row: false,
    block: false
  },
  styles: {
    base: {
      display: 'flex',
      flexWrap: 'flex-wrap'
    },
    block: {
      width: 'w-full'
    },
    column: {
      flexDirection: 'flex-col'
    },
    spacing: {
      sm: {
        padding: 'py-2'
      },
      md: {
        padding: 'py-3'
      },
      lg: {
        padding: 'py-4'
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

export default listConfig;
