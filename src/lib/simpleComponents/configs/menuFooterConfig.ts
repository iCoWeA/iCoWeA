export interface MenuFooterConfig {
  styles: {
    base: Record<string, string>;
  }
}

const menuFooterConfig: MenuFooterConfig = {
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-2',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'p-3'
    }
  }
};

export default menuFooterConfig;
