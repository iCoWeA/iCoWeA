export interface SectionConfig {
  styles: {
    base: Record<string, string>;
  };
}

const sectionConfig: SectionConfig = {
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full',
      padding: 'py-lg'
    }
  }
};

export default sectionConfig;
