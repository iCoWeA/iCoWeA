import { type BoxVariants } from '../components/UI/Box';

export interface BoxConfig {
  defaultProps: {
    variant: BoxVariants;
  };
  styles: {
    variants: Record<BoxVariants, Record<string, string>>;
    sizes: Record<Sizes, Record<string, string>>;
  }
}

const boxConfig: BoxConfig = {
  defaultProps: {
    variant: 'row'
  },
  styles: {
    variants: {
      row: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-between'
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
      },
      layout: {
        display: 'grid',
        gridTemplateRows: 'grid-rows-[auto_1fr_auto]',
        width: 'w-screen',
        height: 'min-h-screen'
      },
      page: {
        display: 'flex',
        justifyContent: 'justify-between',
        alignItems: 'items-center',
        margin: 'mx-auto',
        width: 'w-full',
        maxWidth: 'max-w-[70.5rem]'
      },
      dashboard: {
        display: 'flex',
        justifyContent: 'justify-between',
        alignItems: 'items-center'
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

export default boxConfig;
