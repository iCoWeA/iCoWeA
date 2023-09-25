import { type AriaRole } from 'react';

export interface SectionConfig {
  defaultProps: {
    role: AriaRole;
  };
  styles: {
    base: Record<string, string>;
    gaps: Record<Sizes, Record<string, string>>;
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
    },
    gaps: {
      xs: {
        gap: 'gap-xs'
      },
      sm: {
        gap: 'gap-sm'
      },
      md: {
        gap: 'gap-md'
      },
      lg: {
        gap: 'gap-lg'
      }
    }
  }
};

export default sectionConfig;
