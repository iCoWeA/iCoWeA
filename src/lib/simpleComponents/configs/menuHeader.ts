export interface MenuHeaderConfig {
  defaultProps: {
    columns: boolean;
    fullwidht: boolean;
    className: string;
  }
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const menuHeaderConfig: MenuHeaderConfig = {
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
      padding: 'pt-2 px-2',
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

export default menuHeaderConfig;
