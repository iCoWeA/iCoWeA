import { type TooltipVariants } from '../components/UI/Tooltip';

export interface TooltipConfig {
  defaultProps: {
    variant: TooltipVariants;
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
      variants: Record<TooltipVariants, Record<Themes, Record<string, string>>>;
    },
    arrow: {
      base: Record<string, string>;
      variants: Record<TooltipVariants, Record<Themes, Record<string, string>>>;
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
    offset: 16,
    followCursor: false,
    keepMounted: false,
    arrow: false
  },
  styles: {
    container: {
      base: {
        position: 'absolute',
        zIndex: 'z-50',
        flexDirection: 'flex-col',
        borderRadius: 'rounded-xl'
      },
      empty: {
        flexDirection: 'flex-row',
        gap: 'gap-2',
        padding: 'py-1 px-2',
        font: 'antialiased font-normal text-xs font-sans'
      },
      variants: {
        plain: {
          light: {
            fill: 'fill-light-on-suface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface-high'
          }
        },
        filled: {
          light: {
            fill: 'fill-light-on-suface',
            color: 'text-light-on-surface',
            background: 'bg-light-surface'
          }
        },
        outlined: {
          light: {
            fill: 'fill-light-on-suface',
            color: 'text-light-on-surface',
            border: 'border border-light-divider',
            background: 'bg-light-surface-low'
          }
        }
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
