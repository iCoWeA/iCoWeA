import { type AriaRole } from 'react';

export interface SectionConfig {
  defaultProps: {
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
  };
}

const sectionConfig: SectionConfig = {
  defaultProps: {
    role: 'region'
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full'
    }
  }
};

export default sectionConfig;
