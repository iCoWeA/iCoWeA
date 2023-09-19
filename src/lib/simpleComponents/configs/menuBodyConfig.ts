export interface MenuBodyConfig {
  styles: {
    base: Record<string, string>;
  }
}

const menuBodyConfig: MenuBodyConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      height: 'h-full',
      width: 'w-full',
      padding: 'py-1.5'
    }
  }
};

export default menuBodyConfig;
