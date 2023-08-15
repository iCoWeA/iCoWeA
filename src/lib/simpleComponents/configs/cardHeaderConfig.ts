export interface CardHeaderProps {
  columns?: boolean;
  fullwidht?: boolean;
  className?: string;
}

export interface CardHeaderConfig {
  defaultProps: Required<CardHeaderProps>;
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const cardHeaderConfig: CardHeaderConfig = {
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
      padding: 'pt-4 px-4',
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

export default cardHeaderConfig;
