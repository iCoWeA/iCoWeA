export interface ContainerConfig {
  defaultProps: {
    variant: Layouts;
  };
  styles: {
    variants: Record<Layouts, Record<string, string>>;
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const containerConfig: ContainerConfig = {
  defaultProps: {
    variant: 'row'
  },
  styles: {
    variants: {
      row: {
        display: 'flex',
        alignItems: 'items-center'
      },
      col: {
        display: 'flex',
        flexDirection: 'flex-col'
      },
      grid: {
        display: 'grid'
      },
      block: {
        display: 'block'
      }
    },
    sizes: {
      xs: {
        gap: 'gap-xs'
      },
      sm: {
        gap: 'gap-sm'
      },
      md: {
        gap: 'gap-md'
      },
      lg: {
        gap: 'gap-lg'
      }
    }
  }
};

export default containerConfig;
