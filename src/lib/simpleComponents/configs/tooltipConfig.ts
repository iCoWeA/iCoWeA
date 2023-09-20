import { type PopperVariants } from '../components/UI/Popper';

export interface TooltipConfig {
  defaultProps: {
    variant: PopperVariants;
    rich: boolean;
    keepOnHover: boolean;
    position: OuterPositions;
    responsive: boolean;
    offset: number;
    followCursor: boolean;
    keepMounted: boolean;
    arrow: boolean;
  };
  styles: {
    container: {
      base: Record<string, string>;
      empty: Record<string, string>;
    },
    arrow: {
      base: Record<string, string>;
      variants: Record<PopperVariants, Record<Themes, Record<string, string>>>;
    }
  }
}

const tooltipConfig: TooltipConfig = {
  defaultProps: {
    variant: 'plain',
    rich: false,
    keepOnHover: false,
    position: 'bottom',
    responsive: true,
    offset: 4,
    followCursor: false,
    keepMounted: false,
    arrow: false
  },
  styles: {
    container: {
      base: {
        zIndex: 'z-50'
      },
      empty: {
        padding: 'py-1.5 px-3',
        font: 'antialiased font-normal text-xs font-sans'
      }
    },
    arrow: {
      base: {
        position: 'absolute',
        display: 'block',
        height: 'h-0',
        width: 'w-0',
        border: 'border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8'
      },
      variants: {
        plain: {
          light: {
            border: 'border-b-light-surface-high'
          }
        },
        filled: {
          light: {
            border: 'border-b-light-surface'
          }
        },
        outlined: {
          light: {
            border: 'border-b-light-surface-low'
          }
        }
      }
    }
  }
};

export default tooltipConfig;
