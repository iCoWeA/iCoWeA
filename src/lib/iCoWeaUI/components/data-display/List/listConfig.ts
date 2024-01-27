const listConfig = {
  defaultProps: {
    spacing: 'md',
    gap: 'none',
    row: false,
    block: false
  },
  styles: {
    base: {
      display: 'flex'
    },
    block: {
      width: 'w-full'
    },
    row: {
      flexWrap: 'flex-wrap',
      alignItems: 'align-center'
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
