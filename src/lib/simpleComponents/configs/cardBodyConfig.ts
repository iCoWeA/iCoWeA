export interface CardBodyConfig {
  styles: {
    base: Record<string, string>;
  }
}

const cardBodyConfig: CardBodyConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      height: 'h-full',
      width: 'w-full',
      padding: 'p-4'
    }
  }
};

export default cardBodyConfig;
