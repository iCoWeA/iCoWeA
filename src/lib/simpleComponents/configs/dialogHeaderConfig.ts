export interface DialogHeaderConfig {
  styles: {
    base: Record<string, string>;
  }
}

const dialogHeaderConfig: DialogHeaderConfig = {
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

export default dialogHeaderConfig;
