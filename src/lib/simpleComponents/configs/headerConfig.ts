import { type AriaRole, type BaseHTMLAttributes } from 'react';

export interface HeaderConfig {
  defaultProps: {
    container: {
      role: AriaRole;
    },
    box: {
      fullwidth: boolean;
      containerProps: BaseHTMLAttributes<HTMLElement>;
      gap: Sizes;
      color: Colors;
      elevated: boolean;
    }
  };
  styles: {
    base: Record<string, string>;
    divider: Record<string, string>;
  };
}

const headerConfig: HeaderConfig = {
  defaultProps: {
    container: {
      role: 'banner'
    },
    box: {
      fullwidth: false,
      containerProps: {},
      gap: 'lg',
      color: 'default',
      elevated: false
    }
  },
  styles: {
    base: {
      padding: 'px-lg py-lg-y'
    },
    divider: {
      border: 'border-b'
    }
  }
};

export default headerConfig;
