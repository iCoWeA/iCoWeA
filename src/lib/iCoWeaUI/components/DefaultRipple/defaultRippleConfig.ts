const defaultRippleConfig = {
  defaultProps: {
    color: 'neutral',
    border: false,
    sibling: false
  },
  styles: {
    base: {
      position: 'absolute',
      left: 'left-0',
      top: 'top-0',
      display: 'block',
      width: 'w-full',
      height: 'h-full',
      borderRadius: 'rounded-[inherit]',
      pointerEvents: 'pointer-events-none'
    },
    border: {
      parent: {
        left: '[*:focus-visible>&]:-left-px',
        top: '[*:focus-visible>&]:-top-px',
        width: '[*:focus-visible>&]:w-[calc(100%_+_2px)]',
        height: '[*:focus-visible>&]:h-[calc(100%_+_2px)]'
      },
      sibling: {
        left: '[*:focus-visibl+&]:-left-px',
        top: '[*:focus-visible+&]:-top-px',
        width: '[*:focus-visible+&]:w-[calc(100%_+_2px)]',
        height: '[*:focus-visible+&]:h-[calc(100%_+_2px)]'
      }
    },
    colors: {
      parent: {
        light: {
          neutral: {
            hover: '[*:hover>&]:bg-light-neutral/8',
            active: '[*:active:hover>&]:bg-light-neutral/15',
            focus: '[*:focus:hover>&]:bg-light-neutral/15 [*:focus>&]:bg-light-neutral/15'
          },
          primary: {
            hover: '[*:hover>&]:bg-light-primary/8',
            active: '[*:active:hover>&]:bg-light-primary/15',
            focus: '[*:focus:hover>&]:bg-light-primary/15 [*:focus>&]:bg-light-primary/15'
          },
          secondary: {
            hover: '[*:hover>&]:bg-light-secondary/8',
            active: '[*:active:hover>&]:bg-light-secondary/15',
            focus: '[*:focus:hover>&]:bg-light-secondary/15 [*:focus>&]:bg-light-secondary/15'
          },
          success: {
            hover: '[*:hover>&]:bg-light-success/8',
            active: '[*:active:hover>&]:bg-light-success/15',
            focus: '[*:focus:hover>&]:bg-light-success/15 [*:focus>&]:bg-light-success/15'
          },
          warning: {
            hover: '[*:hover>&]:bg-light-warning/8',
            active: '[*:active:hover>&]:bg-light-warning/15',
            focus: '[*:focus:hover>&]:bg-light-warning/15 [*:focus>&]:bg-light-warning/15'
          },
          error: {
            hover: '[*:hover>&]:bg-light-error/8',
            active: '[*:active:hover>&]:bg-light-error/15',
            focus: '[*:focus:hover>&]:bg-light-error/15 [*:focus>&]:bg-light-error/15'
          },
          'on-neutral': {
            hover: '[*:hover>&]:bg-light-on-neutral/8',
            active: '[*:active:hover>&]:bg-light-on-neutral/15',
            focus: '[*:focus:hover>&]:bg-light-on-neutral/15 [*:focus>&]:bg-light-on-neutral/15'
          },
          'on-primary': {
            hover: '[*:hover>&]:bg-light-on-primary/8',
            active: '[*:active:hover>&]:bg-light-on-primary/15',
            focus: '[*:focus:hover>&]:bg-light-on-primary/15 [*:focus>&]:bg-light-on-primary/15'
          },
          'on-secondary': {
            hover: '[*:hover>&]:bg-light-on-secondary/8',
            active: '[*:active:hover>&]:bg-light-on-secondary/15',
            focus: '[*:focus:hover>&]:bg-light-on-secondary/15 [*:focus>&]:bg-light-on-secondary/15'
          },
          'on-success': {
            hover: '[*:hover>&]:bg-light-on-success/8',
            active: '[*:active:hover>&]:bg-light-on-success/15',
            focus: '[*:focus:hover>&]:bg-light-on-success/15 [*:focus>&]:bg-light-on-success/15'
          },
          'on-warning': {
            hover: '[*:hover>&]:bg-light-on-warning/8',
            active: '[*:active:hover>&]:bg-light-on-warning/15',
            focus: '[*:focus:hover>&]:bg-light-on-warning/15 [*:focus>&]:bg-light-on-warning/15'
          },
          'on-error': {
            hover: '[*:hover>&]:bg-light-on-error/8',
            active: '[*:active:hover>&]:bg-light-on-error/15',
            focus: '[*:focus:hover>&]:bg-light-on-error/15 [*:focus>&]:bg-light-on-error/15'
          }
        },
        dark: {
          neutral: {
            hover: '[*:hover>&]:bg-dark-neutral/8',
            active: '[*:active:hover>&]:bg-dark-neutral/15',
            focus: '[*:focus:hover>&]:bg-dark-neutral/15 [*:focus>&]:bg-dark-neutral/15'
          },
          primary: {
            hover: '[*:hover>&]:bg-dark-primary/8',
            active: '[*:active:hover>&]:bg-dark-primary/15',
            focus: '[*:focus:hover>&]:bg-dark-primary/15 [*:focus>&]:bg-dark-primary/15'
          },
          secondary: {
            hover: '[*:hover>&]:bg-dark-secondary/8',
            active: '[*:active:hover>&]:bg-dark-secondary/15',
            focus: '[*:focus:hover>&]:bg-dark-secondary/15 [*:focus>&]:bg-dark-secondary/15'
          },
          success: {
            hover: '[*:hover>&]:bg-dark-success/8',
            active: '[*:active:hover>&]:bg-dark-success/15',
            focus: '[*:focus:hover>&]:bg-dark-success/15 [*:focus>&]:bg-dark-success/15'
          },
          warning: {
            hover: '[*:hover>&]:bg-dark-warning/8',
            active: '[*:active:hover>&]:bg-dark-warning/15',
            focus: '[*:focus:hover>&]:bg-dark-warning/15 [*:focus>&]:bg-dark-warning/15'
          },
          error: {
            hover: '[*:hover>&]:bg-dark-error/8',
            active: '[*:active:hover>&]:bg-dark-error/15',
            focus: '[*:focus:hover>&]:bg-dark-error/15 [*:focus>&]:bg-dark-error/15'
          },
          'on-neutral': {
            hover: '[*:hover>&]:bg-dark-on-neutral/8',
            active: '[*:active:hover>&]:bg-dark-on-neutral/15',
            focus: '[*:focus:hover>&]:bg-dark-on-neutral/15 [*:focus>&]:bg-dark-on-neutral/15'
          },
          'on-primary': {
            hover: '[*:hover>&]:bg-dark-on-primary/8',
            active: '[*:active:hover>&]:bg-dark-on-primary/15',
            focus: '[*:focus:hover>&]:bg-dark-on-primary/15 [*:focus>&]:bg-dark-on-primary/15'
          },
          'on-secondary': {
            hover: '[*:hover>&]:bg-dark-on-secondary/8',
            active: '[*:active:hover>&]:bg-dark-on-secondary/15',
            focus: '[*:focus:hover>&]:bg-dark-on-secondary/15 [*:focus>&]:bg-dark-on-secondary/15'
          },
          'on-success': {
            hover: '[*:hover>&]:bg-dark-on-success/8',
            active: '[*:active:hover>&]:bg-dark-on-success/15',
            focus: '[*:focus:hover>&]:bg-dark-on-success/15 [*:focus>&]:bg-dark-on-success/15'
          },
          'on-warning': {
            hover: '[*:hover>&]:bg-dark-on-warning/8',
            active: '[*:active:hover>&]:bg-dark-on-warning/15',
            focus: '[*:focus:hover>&]:bg-dark-on-warning/15 [*:focus>&]:bg-dark-on-warning/15'
          },
          'on-error': {
            hover: '[*:hover>&]:bg-dark-on-error/8',
            active: '[*:active:hover>&]:bg-dark-on-error/15',
            focus: '[*:focus:hover>&]:bg-dark-on-error/15 [*:focus>&]:bg-dark-on-error/15'
          }
        }
      },
      sibling: {
        light: {
          neutral: {
            hover: '[*:hover+&]:bg-light-neutral/8',
            active: '[*:active:hover+&]:bg-light-neutral/15',
            focus: '[*:focus:hover+&]:bg-light-neutral/15 [*:focus+&]:bg-light-neutral/15'
          },
          primary: {
            hover: '[*:hover+&]:bg-light-primary/8',
            active: '[*:active:hover+&]:bg-light-primary/15',
            focus: '[*:focus:hover+&]:bg-light-primary/15 [*:focus+&]:bg-light-primary/15'
          },
          secondary: {
            hover: '[*:hover+&]:bg-light-secondary/8',
            active: '[*:active:hover+&]:bg-light-secondary/15',
            focus: '[*:focus:hover+&]:bg-light-secondary/15 [*:focus+&]:bg-light-secondary/15'
          },
          success: {
            hover: '[*:hover+&]:bg-light-success/8',
            active: '[*:active:hover+&]:bg-light-success/15',
            focus: '[*:focus:hover+&]:bg-light-success/15 [*:focus+&]:bg-light-success/15'
          },
          warning: {
            hover: '[*:hover+&]:bg-light-warning/8',
            active: '[*:active:hover+&]:bg-light-warning/15',
            focus: '[*:focus:hover+&]:bg-light-warning/15 [*:focus+&]:bg-light-warning/15'
          },
          error: {
            hover: '[*:hover+&]:bg-light-error/8',
            active: '[*:active:hover+&]:bg-light-error/15',
            focus: '[*:focus:hover+&]:bg-light-error/15 [*:focus+&]:bg-light-error/15'
          },
          'on-neutral': {
            hover: '[*:hover+&]:bg-light-on-neutral/8',
            active: '[*:active:hover+&]:bg-light-on-neutral/15',
            focus: '[*:focus:hover+&]:bg-light-on-neutral/15 [*:focus+&]:bg-light-on-neutral/15'
          },
          'on-primary': {
            hover: '[*:hover+&]:bg-light-on-primary/8',
            active: '[*:active:hover+&]:bg-light-on-primary/15',
            focus: '[*:focus:hover+&]:bg-light-on-primary/15 [*:focus+&]:bg-light-on-primary/15'
          },
          'on-secondary': {
            hover: '[*:hover+&]:bg-light-on-secondary/8',
            active: '[*:active:hover+&]:bg-light-on-secondary/15',
            focus: '[*:focus:hover+&]:bg-light-on-secondary/15 [*:focus+&]:bg-light-on-secondary/15'
          },
          'on-success': {
            hover: '[*:hover+&]:bg-light-on-success/8',
            active: '[*:active:hover+&]:bg-light-on-success/15',
            focus: '[*:focus:hover+&]:bg-light-on-success/15 [*:focus+&]:bg-light-on-success/15'
          },
          'on-warning': {
            hover: '[*:hover+&]:bg-light-on-warning/8',
            active: '[*:active:hover+&]:bg-light-on-warning/15',
            focus: '[*:focus:hover+&]:bg-light-on-warning/15 [*:focus+&]:bg-light-on-warning/15'
          },
          'on-error': {
            hover: '[*:hover+&]:bg-light-on-error/8',
            active: '[*:active:hover+&]:bg-light-on-error/15',
            focus: '[*:focus:hover+&]:bg-light-on-error/15 [*:focus+&]:bg-light-on-error/15'
          }
        },
        dark: {
          neutral: {
            hover: '[*:hover+&]:bg-dark-neutral/8',
            active: '[*:active:hover+&]:bg-dark-neutral/15',
            focus: '[*:focus:hover+&]:bg-dark-neutral/15 [*:focus+&]:bg-dark-neutral/15'
          },
          primary: {
            hover: '[*:hover+&]:bg-dark-primary/8',
            active: '[*:active:hover+&]:bg-dark-primary/15',
            focus: '[*:focus:hover+&]:bg-dark-primary/15 [*:focus+&]:bg-dark-primary/15'
          },
          secondary: {
            hover: '[*:hover+&]:bg-dark-secondary/8',
            active: '[*:active:hover+&]:bg-dark-secondary/15',
            focus: '[*:focus:hover+&]:bg-dark-secondary/15 [*:focus+&]:bg-dark-secondary/15'
          },
          success: {
            hover: '[*:hover+&]:bg-dark-success/8',
            active: '[*:active:hover+&]:bg-dark-success/15',
            focus: '[*:focus:hover+&]:bg-dark-success/15 [*:focus+&]:bg-dark-success/15'
          },
          warning: {
            hover: '[*:hover+&]:bg-dark-warning/8',
            active: '[*:active:hover+&]:bg-dark-warning/15',
            focus: '[*:focus:hover+&]:bg-dark-warning/15 [*:focus+&]:bg-dark-warning/15'
          },
          error: {
            hover: '[*:hover+&]:bg-dark-error/8',
            active: '[*:active:hover+&]:bg-dark-error/15',
            focus: '[*:focus:hover+&]:bg-dark-error/15 [*:focus+&]:bg-dark-error/15'
          },
          'on-neutral': {
            hover: '[*:hover+&]:bg-dark-on-neutral/8',
            active: '[*:active:hover+&]:bg-dark-on-neutral/15',
            focus: '[*:focus:hover+&]:bg-dark-on-neutral/15 [*:focus+&]:bg-dark-on-neutral/15'
          },
          'on-primary': {
            hover: '[*:hover+&]:bg-dark-on-primary/8',
            active: '[*:active:hover+&]:bg-dark-on-primary/15',
            focus: '[*:focus:hover+&]:bg-dark-on-primary/15 [*:focus+&]:bg-dark-on-primary/15'
          },
          'on-secondary': {
            hover: '[*:hover+&]:bg-dark-on-secondary/8',
            active: '[*:active:hover+&]:bg-dark-on-secondary/15',
            focus: '[*:focus:hover+&]:bg-dark-on-secondary/15 [*:focus+&]:bg-dark-on-secondary/15'
          },
          'on-success': {
            hover: '[*:hover+&]:bg-dark-on-success/8',
            active: '[*:active:hover+&]:bg-dark-on-success/15',
            focus: '[*:focus:hover+&]:bg-dark-on-success/15 [*:focus+&]:bg-dark-on-success/15'
          },
          'on-warning': {
            hover: '[*:hover+&]:bg-dark-on-warning/8',
            active: '[*:active:hover+&]:bg-dark-on-warning/15',
            focus: '[*:focus:hover+&]:bg-dark-on-warning/15 [*:focus+&]:bg-dark-on-warning/15'
          },
          'on-error': {
            hover: '[*:hover+&]:bg-dark-on-error/8',
            active: '[*:active:hover+&]:bg-dark-on-error/15',
            focus: '[*:focus:hover+&]:bg-dark-on-error/15 [*:focus+&]:bg-dark-on-error/15'
          }
        }
      }
    }
  }
};

export default defaultRippleConfig;
