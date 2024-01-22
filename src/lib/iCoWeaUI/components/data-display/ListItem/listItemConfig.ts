const listItemConfig = {
  defaultProps: {
    spacing: 'md',
    divider: false,
    block: false,
    justify: 'start',
    align: 'center',
    gap: 'md'
  },
  styles: {
    base: {
      display: 'flex',
      font: 'antialiased font-normal text-sm font-sans'
    },
    block: {
      width: 'w-full',
      padding: 'px-0'
    },
    divider: {
      border: 'border-b'
    },
    spacings: {
      sm: {
        padding: 'px-4 py-2'
      },
      md: {
        padding: 'px-6 py-3'
      },
      lg: {
        padding: 'px-8 py-4'
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

export default listItemConfig;
