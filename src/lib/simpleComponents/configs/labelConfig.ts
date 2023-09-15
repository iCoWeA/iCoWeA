export interface LabelConfig {
  styles: {
    base: Record<string, string>;
    color: Record<Themes, Record<string, string>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>;
  }
}

const labelConfig: LabelConfig = {
  styles: {
    base: {
      display: 'inline-block',
      font: 'antialiased font-normal text-xs font-sans'
    },
    color: {
      light: {
        fill: 'fill-light-on-surface-variant',
        color: 'text-light-on-surface-varaint'
      }
    },
    colors: {
      default: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    }
  }
};

export default labelConfig;
