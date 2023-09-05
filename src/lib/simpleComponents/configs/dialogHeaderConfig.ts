export interface DialogHeaderConfig {
  defaultProps: {
    columns: boolean;
    fullwidht: boolean;
  }
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const dialogHeaderConfig: DialogHeaderConfig = {
  defaultProps: {
    columns: false,
    fullwidht: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      width: 'w-full',
      padding: 'pt-4 px-4'
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

export default dialogHeaderConfig;
