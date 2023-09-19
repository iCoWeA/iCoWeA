export interface MenuHeaderConfig {
  styles: {
    base: Record<string, string>;
  }
}

const menuHeaderConfig: MenuHeaderConfig = {
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-3',
      alignItems: 'items-center',
      width: 'w-full',
      padding: 'p-3'
    }
  }
};

export default menuHeaderConfig;
