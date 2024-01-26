const gridConfig = {
  defaultProps: {
    flow: 'row',
    justify: 'start',
    align: 'center',
    justifyContent: 'start',
    alignContent: 'start',
    gap: 'none',
    rowGap: 'none',
    colGap: 'none'
  },
  styles: {
    base: {
      display: 'grid'
    },
    flows: {
      col: {
        gridAutoFlow: 'grid-flow-col'
      },
      dense: {
        gridAutoFlow: 'grid-flow-dense'
      },
      'row-dense': {
        gridAutoFlow: 'grid-flow-row-dense'
      },
      'col-dense': {
        gridAutoFlow: 'grid-flow-col-dense'
      }
    },
    justifies: {
      start: {
        justifyItems: 'justify-items-start'
      },
      end: {
        justifyItems: 'justify-items-end'
      },
      center: {
        justifyItems: 'justify-items-center'
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
    contentJustifies: {
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
    contentAligns: {
      end: {
        alignContent: 'content-end'
      },
      center: {
        alignContent: 'content-center'
      },
      stretch: {
        alignContent: 'content-stretch'
      },
      between: {
        alignContent: 'content-between'
      },
      around: {
        alignContent: 'content-around'
      },
      evenly: {
        alignContent: 'content-evenly'
      },
      baseline: {
        alignContent: 'content-baseline'
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
    },
    rowGaps: {
      base: {
        gap: 'gap-y-2'
      },
      sm: {
        gap: 'gap-y-4'
      },
      md: {
        gap: 'gap-y-6'
      },
      lg: {
        gap: 'gap-y-8'
      }
    },
    colGaps: {
      base: {
        gap: 'gap-x-2'
      },
      sm: {
        gap: 'gap-x-4'
      },
      md: {
        gap: 'gap-x-6'
      },
      lg: {
        gap: 'gap-x-8'
      }
    }
  }
};

export default gridConfig;
