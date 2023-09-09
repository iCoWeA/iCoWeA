import { type IconProps } from '../components/UI/Icon/Icon';

export interface AccordionHeaderConfig {
  defaultProps: {
    iconProps: IconProps;
  };
  styles: {
    button: {
      base: Record<string, string>;
      divider: Record<Themes, Record<string, string>>;
      colors: Record<Themes, Record<string, string>>;
    },
    icon: {
      base: Record<string, string>;
      open: Record<string, string>;
    }
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  defaultProps: {
    iconProps: {}
  },
  styles: {
    button: {
      base: {
        display: 'flex',
        gap: 'gap-3',
        alignItems: 'items-center',
        width: 'w-full',
        padding: 'py-3',
        font: 'antialiased font-normal text-base font-sans',
        transition: 'transition-colors',
        focus: 'focus:outline-0'
      },
      divider: {
        light: {
          border: 'border-b border-light-divider'
        }
      },
      colors: {
        light: {
          fill: 'fill-light-text',
          color: 'text-light-text',
          hover: 'hover:fill-light-dark-container hover:text-light-dark-container',
          focus: 'focus:fill-light-dark-container hover:text-light-dark-container'
        }
      }
    },
    icon: {
      base: {
        margin: 'ml-auto',
        transition: 'transition',
        transitionDuration: 'duration-500'
      },
      open: {
        transform: 'rotate-180'
      }
    }
  }
};

export default accordionHeaderConfig;
