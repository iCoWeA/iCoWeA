export interface CardFooterProps {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

export interface CardFooterConfig {
  defaultProps: CardFooterProps;
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const cardFooterConfig: CardFooterConfig = {
  defaultProps: {
    columns: false,
    fullwidht: false,
    className: ''
  },
  styles: {
    base: {
      display: 'grid',
      gap: 'gap-4',
      width: 'w-full',
      padding: 'pb-4 px-4',
      focus: 'focus:outline-0'
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

export default cardFooterConfig;
