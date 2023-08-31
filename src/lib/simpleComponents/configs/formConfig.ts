export interface FormConfig {
  defaultProps: {
    columns: boolean;
  };
  styles: {
    base: Record<string, string>;
    columns: Record<string, string>;
  }
}

const formConfig: FormConfig = {
  defaultProps: {
    columns: false
  },
  styles: {
    base: {
      display: 'grid',
      gap: 'gap-6',
      width: 'w-full',
      focus: 'focus:outline-0'
    },
    columns: {
      gridTemplateColumns: 'grid-cols-4',
      gap: 'gap-y-6 gap-x-[16px]',
      md: 'md:grid-cols-8 md:gap-x-[24px]'
    }
  }
};

export default formConfig;
