import { type BackdropDefaultProps } from '../components/UI/Backdrop';

export interface BackdropConfig {
  defaultProps: Required<BackdropDefaultProps>;
  styles: {
    base: Record<string, string>;
    invisible: Record<string, string>;
  }
}

const backdropConfig: BackdropConfig = {
  defaultProps: {
    invisible: false
  },
  styles: {
    base: {
      position: 'fixed',
      top: 'top-0',
      left: 'left-0',
      display: 'block',
      height: 'h-screen',
      width: 'w-screen',
      background: 'bg-black/50',
      focus: 'focus:outline-0'
    },
    invisible: {
      background: 'bg-transparent'
    }
  }
};

export default backdropConfig;
