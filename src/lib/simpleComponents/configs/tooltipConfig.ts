import { type BaseHTMLAttributes } from 'react';

export type TooltipPositions = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export type TooltipColors = 'default' | 'light' | string;

export interface TooltipConfig {
  defaultProps: {
    anchorRef: Element | null;
    overlayRef: Element | null;
    position: TooltipPositions;
    spacing: number;
    color: TooltipColors;
    arrow: boolean;
    transitionProps: {
      enterDuration: number;
      exitDuration: number;
      unmountOnExit: boolean;
    };
    componentsProps: {
      arrow: BaseHTMLAttributes<HTMLDivElement>;
    };
  };
  styles: {
    root: {
      base: Record<string, string>;
      open: Record<string, string>;
      positions: Record<TooltipPositions, Record<string, string>>;
      colors: Record<string, Record<TooltipColors, Record<string, string>>>
    },
    arrow: {
      base: Record<string, string>;
      positions: Record<string, Record<string, string>>;
      colors: Record<string, Record<TooltipColors, Record<string, string>>>
    }
  }
}

const tooltipConfig: TooltipConfig = {
  defaultProps: {
    anchorRef: null,
    overlayRef: null,
    position: 'bottom',
    spacing: 1,
    color: 'default',
    arrow: false,
    transitionProps: {
      enterDuration: 500,
      exitDuration: 500,
      unmountOnExit: true
    },
    componentsProps: {
      arrow: {}
    }
  },
  styles: {
    root: {
      base: {
        position: 'absolute',
        display: 'flex',
        gap: 'gap-2',
        alignItems: 'items-center',
        padding: 'py-1.5 px-3',
        borderRadius: 'rounded-xl',
        font: 'antialiased font-normal text-sm font-sans',
        opacity: 'opacity-0',
        transition: 'transition-[opacity]',
        focus: 'focus:outline-0'
      },
      open: {
        opacity: 'opacity-100'
      },
      positions: {
        top: {
          translate: '-translate-y-full -translate-x-2/4'
        },
        'top-start': {
          translate: '-translate-y-full'
        },
        'top-end': {
          translate: '-translate-y-full -translate-x-full'
        },
        bottom: {
          translate: '-translate-x-2/4'
        },
        'bottom-start': {},
        'bottom-end': {
          translate: '-translate-x-full'
        },
        left: {
          translate: '-translate-y-2/4 -translate-x-full'
        },
        'left-start': {
          translate: '-translate-x-full'
        },
        'left-end': {
          translate: '-translate-y-full -translate-x-full'
        },
        right: {
          translate: '-translate-y-2/4'
        },
        'right-start': {},
        'right-end': {
          translate: '-translate-y-full'
        }
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-bg-dark/20'
          },
          light: {
            background: 'bg-default-bg/20'
          }
        }
      }
    },
    arrow: {
      base: {
        pisition: 'absolute',
        height: 'h-0',
        width: 'w-0',
        border: 'border-l-[0.25rem] border-l-transparent border-r-[0.25rem] border-r-transparent border-b-[0.5rem]',
        focus: 'focus:outline-0'
      },
      positions: {
        top: {
          bottom: 'bottom-0',
          left: 'left-2/4',
          translate: 'translate-y-full -translate-x-1',
          transform: 'rotate-180'
        },
        bottom: {
          top: 'top-0',
          left: 'left-2/4',
          translate: '-translate-y-full -translate-x-1'
        },
        left: {
          top: 'top-2/4',
          left: 'right-0',
          translate: '-translate-y-1 translate-x-full',
          transform: 'rotate-90'
        },
        right: {
          top: 'top-2/4',
          left: 'left-0',
          translate: '-translate-y-1 -translate-x-full',
          transform: '-rotate-90'
        }
      },
      colors: {
        default: {
          default: {
            border: 'border-b-default-bg-dark/20'
          },
          light: {
            border: 'border-b-default-bg/20'
          }
        }
      }
    }
  }
};

export default tooltipConfig;
