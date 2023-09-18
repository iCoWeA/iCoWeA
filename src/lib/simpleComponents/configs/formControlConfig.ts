export interface FormControlConfig {
  styles: {
    container: {
      base: Record<string, string>;
    },
    helperTextContainer: {
      base: Record<string, string>;
    }
  }
}

const formControlConfig: FormControlConfig = {
  styles: {
    container: {
      base: {
        display: 'flex',
        flexDirection: 'flex-col',
        gap: 'gap-1',
        height: 'h-fit',
        width: 'w-fit'
      }
    },
    helperTextContainer: {
      base: {
        display: 'flex',
        gap: 'gap-2',
        padding: 'px-4',
        font: 'antialiased font-normal text-xs font-sans'
      }
    }
  }
};

export default formControlConfig;
