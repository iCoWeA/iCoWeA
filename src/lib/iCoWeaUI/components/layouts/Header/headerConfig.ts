const headerConfig = {
  defaultProps: {
    variant: 'default',
    color: 'neutral',
    bordered: false,
    block: false,
    shadow: false,
    justify: 'start',
    align: 'center'
  },
  styles: {
    root: {
      base: {
        display: 'flex',
        width: 'w-full',
        height: 'h-fit',
        flexDirection: 'flex-col'
      },
      shadow: {
        shadow: 'shadow-sm'
      }
    },
    container: {
      base: {
        padding: 'py-4'
      },
      border: {
        border: 'border-0 border-b'
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
      }
    }
  }
};

export default headerConfig;
