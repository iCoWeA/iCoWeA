export interface CardHeaderConfig {
  defaultProps: {
    fullwidht: boolean;
  }
  styles: {
    base: Record<string, string>;
    fullwidth: Record<string, string>;
  }
}

const cardHeaderConfig: CardHeaderConfig = {
  defaultProps: {
    fullwidht: false
  },
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'pt-4 px-4'
    },
    fullwidth: {
      padding: 'p-0'
    }
  }
};

export default cardHeaderConfig;
