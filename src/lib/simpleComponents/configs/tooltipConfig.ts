import { type ReactElement, type TransitionEventHandler, type AnimationEventHandler, type CSSProperties, type ReactNode, type BaseHTMLAttributes } from 'react';

export type TooltipPositions = Positions;
export type TooltipColors = 'default' | 'light' | string;

export interface TooltipConfig {
  defaultProps: {
    open?: boolean;
    color: TooltipColors;
    position: TooltipPositions;
    gap: number;
    responsive: boolean;
    followCursor: boolean;
    overlayRef: Element | null;
    unmountOnExit: boolean;
    transitionConfig: {
      enterDuration: number,
      exitDuration: number
    };
    handler?: ReactElement;
    arrow: boolean;
    arrowProps: BaseHTMLAttributes<HTMLDivElement>
    onTransitionEnd?: TransitionEventHandler;
    onAnimationEnd?: AnimationEventHandler;
    style: CSSProperties;
    className: string;
    children?: ReactNode;
  };
  styles: {
    root: {
      base: Record<string, string>;
      colors: Record<string, Record<TooltipColors, Record<string, string>>>
    },
    arrow: {
      base: Record<string, string>;
      colors: Record<string, Record<TooltipColors, Record<string, string>>>
    }
  }
}

const tooltipConfig: TooltipConfig = {
  defaultProps: {
    color: 'default',
    position: 'bottom',
    gap: 1,
    responsive: true,
    followCursor: false,
    overlayRef: null,
    unmountOnExit: true,
    transitionConfig: {
      enterDuration: 500,
      exitDuration: 500
    },
    arrow: false,
    arrowProps: {},
    style: {},
    className: ''
  },
  styles: {
    root: {
      base: {
        position: 'absolute',
        display: 'block',
        gap: 'gap-2',
        alignItems: 'items-center',
        padding: 'py-1.5 px-3',
        borderRadius: 'rounded-xl',
        font: 'antialiased font-normal text-sm font-sans',
        transition: 'transition-[opacity]',
        focus: 'focus:outline-0'
      },
      colors: {
        default: {
          default: {
            background: 'bg-default-bg-dark/70'
          },
          light: {
            background: 'bg-default-bg/70'
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
      colors: {
        default: {
          default: {
            border: 'border-b-default-bg-dark/70'
          },
          light: {
            border: 'border-b-default-bg/70'
          }
        }
      }
    }
  }
};

export default tooltipConfig;
