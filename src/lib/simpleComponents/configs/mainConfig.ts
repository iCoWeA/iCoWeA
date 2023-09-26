export interface MainConfig {
  styles: {
    base: Record<string, string>;
  };
}

const mainConfig: MainConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      width: 'w-full',
      height: 'h-full',
      padding: 'px-lg'
    }
  }
};

export default mainConfig;
