export interface FormConfig {
  styles: {
    base: Record<string, string>;
  }
}

const formConfig: FormConfig = {
  styles: {
    base: {
      display: 'grid',
      gap: 'gap-6',
      width: 'w-full'
    }
  }
};

export default formConfig;
