export interface DropdownHeaderConfig {
  styles: {
    base: Record<string, string>;
  }
}

const dropdownHeaderConfig: DropdownHeaderConfig = {
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

export default dropdownHeaderConfig;
