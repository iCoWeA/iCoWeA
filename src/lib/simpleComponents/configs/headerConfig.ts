export interface HeaderConfig {
  defaultProps: {
    variant: ContainerVariants;
  };
  styles: {
    base: Record<string, string>;
    variants: Record<ContainerVariants, Record<Themes, Record<string, string>>>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    variant: 'plain'
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-lg',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'p-lg'
    },
    variants: {
      plain: {
        light: {
          background: 'bg-light-surface-light'
        },
        dark: {
          background: 'bg-dark-surface-light'
        }
      },
      soft: {
        light: {
          background: 'bg-light-surface-soft'
        },
        dark: {
          background: 'bg-dark-surface-soft'
        }
      },
      solid: {
        light: {
          background: 'bg-light-surface'
        },
        dark: {
          background: 'bg-dark-surface'
        }
      }
    }
  }
};

export default headerConfig;
