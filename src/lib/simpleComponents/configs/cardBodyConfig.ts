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
      gap: 'gap-4',
      height: 'h-full',
      width: 'w-full',
      padding: 'p-4'
    }
  }
};

export default cardBodyConfig;
