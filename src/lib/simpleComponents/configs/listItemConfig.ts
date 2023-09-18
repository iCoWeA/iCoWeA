export interface ListItemConfig {
  styles: {
    base: Record<string, string>;
    color: Record<Themes, Record<string, string>>;
    colors: Record<Themes, Record<Colors, Record<string, string>>>;
  }
}

const listItemConfig: ListItemConfig = {
  styles: {
    base: {
      display: 'flex',
      gap: 'gap-4',
      alignItems: 'items-center',
      height: 'min-h-[3.5rem]',
      width: 'w-full',
      padding: 'py-2 px-4',
      font: 'antialiased font-normal text-sm font-sans'
    },
    color: {
      light: {
        fill: 'fill-light-on-surface-variant',
        color: 'text-light-on-surface-variant',
        background: 'bg-light-surface-low'
      }
    },
    colors: {
      light: {
        default: {
          fill: 'fill-light-on-surface',
          color: 'text-light-on-surface'
        },
        primary: {
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        scondary: {
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

export default listItemConfig;
