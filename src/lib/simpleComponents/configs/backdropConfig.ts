import { type MouseEventHandler } from 'react';

export interface BackdropConfig {
  defaultProps: {
    onClose?: () => void;
    open: boolean;
    invisible: boolean;
    onClick?: MouseEventHandler;
    className: string;
  };
  styles: {
    base: Record<string, string>;
    open: Record<string, string>;
    invisible: Record<string, string>;
    color: Record<string, Record<string, string>>;
  }
}

const backdropConfig: BackdropConfig = {
  defaultProps: {
    open: false,
    invisible: false,
    className: ''
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-0',
      left: 'left-0',
      display: 'block',
      height: 'h-screen',
      width: 'w-screen',
      opacity: 'opacity-0',
      transition: 'transition-[opacity]',
      focus: 'focus:outline-0'
    },
    open: {
      opacity: 'opacity-100'
    },
    invisible: {
      background: 'bg-transparent'
    },
    color: {
      default: {
        background: 'bg-default-dark/70'
      }
    }
  }
};

export default backdropConfig;
