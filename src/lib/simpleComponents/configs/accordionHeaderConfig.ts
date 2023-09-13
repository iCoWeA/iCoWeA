export interface AccordionHeaderConfig {
  styles: {
    base: Record<string, string>;
    divider: Record<Themes, Record<string, string>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>;
  }
}

const accordionHeaderConfig: AccordionHeaderConfig = {
  styles: {
    base: {
      position: 'relative',
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      height: 'h-12',
      width: 'w-full',
      padding: 'py-3',
      font: 'antialiased font-normal text-base font-sans',
      overflow: 'overflow-hidden',
      focus: 'focus:outline-0',
      disabled: 'disabled:pointer-events-none disabled:select-none',
      group: 'group'
    },
    divider: {
      light: {
        border: 'border-b border-light-divider'
      }
    },
    colors: {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error',
          disabled: 'disabled:fill-light-on-surface/40 disabled:text-light-on-surface/40'
        }
      }
    }
  }
};

export default accordionHeaderConfig;
