export type ContainerVariants = 'flex' | 'flex-col' | 'grid' | 'column' | 'default' | 'standard' | 'dashboard' | 'fluid';

export interface ContainerDefaultProps {
  variant?: ContainerVariants;
}

export interface ContainerConfig {
  defaultProps: Required<ContainerDefaultProps>;
  styles: {
    base: Record<string, string>;
    variants: Record<ContainerVariants, Record<string, string>>;
  }
}

const containerConfig: ContainerConfig = {
  defaultProps: {
    variant: 'flex'
  },
  styles: {
    base: {
      focus: 'focus:outline-0'
    },
    variants: {
      flex: {
        display: 'flex',
        gap: 'gap-6'
      },
      'flex-col': {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-6'
      },
      grid: {
        display: 'grid',
        gap: 'gap-6'
      },
      column: {
        display: 'grid',
        gridTemplateColumns: 'grid-cols-4',
        gap: 'gap-y-6 gap-x-[16px]',
        width: 'w-full',
        md: 'md:grid-cols-8 md:gap-x-[24px]'
      },
      default: {
        display: 'grid',
        height: 'min-h-screen',
        width: 'w-screen'
      },
      standard: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-layout',
        height: 'min-h-screen',
        width: 'w-screen'
      },
      dashboard: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-layout',
        gridTemplateCols: 'grid-rows-layout',
        height: 'min-h-screen',
        width: 'w-screen'
      },
      fluid: {
        display: 'grid',
        gridTemplateColumns: 'grid-cols-4',
        gap: 'gap-[16px]',
        margin: 'mx-[16px]',
        width: 'w-full',
        md: 'md:grid-cols-8 md:gap-[24px] md:mx-[32px]',
        lg: 'lg:grid-cols-12 lg:mx-auto lg:max-w-[840px]',
        xl: 'xl:mx-[200px] xl:max-w-none',
        xxl: 'xxl:mx-auto xxl:max-w-[1040px]'
      }
    }
  }
};

export default containerConfig;
