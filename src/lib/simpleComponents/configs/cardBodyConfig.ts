export interface CardBodyConfig {
  defaultProps: {
    columns: boolean;
    fullwidht: boolean;
  };
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const cardBodyConfig: CardBodyConfig = {
  defaultProps: {
    columns: false,
    fullwidht: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      height: 'h-full',
      width: 'w-full',
      padding: 'p-4'
    },
    columns: {
      display: 'grid',
      gridTemplateColumns: 'grid-cols-4',
      gap: 'gap-y-4 gap-x-[16px]',
      md: 'md:grid-cols-8 md:gap-x-[24px]'
    },
    fullwidth: {
      padding: 'px-0'
    }
  }
};

export default cardBodyConfig;
