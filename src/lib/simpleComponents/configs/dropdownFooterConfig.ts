export interface DropdownFooterConfig {
  styles: {
    base: Record<string, string>;
  }
}

const dropdownFooterConfig: DropdownFooterConfig = {
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

export default dropdownFooterConfig;
