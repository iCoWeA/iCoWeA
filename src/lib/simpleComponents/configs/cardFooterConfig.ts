export interface CardFooterConfig {
  styles: {
    base: Record<string, string>;
  }
}

const cardFooterConfig: CardFooterConfig = {
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'p-4'
    }
  }
};

export default cardFooterConfig;
