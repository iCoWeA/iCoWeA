export interface DropdownBodyConfig {
  styles: {
    base: Record<string, string>;
  }
}

const dropdownBodyConfig: DropdownBodyConfig = {
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

export default dropdownBodyConfig;
