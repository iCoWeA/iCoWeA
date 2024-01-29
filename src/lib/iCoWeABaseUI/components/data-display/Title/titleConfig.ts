const titleConfig = {
  defaultProps: {
    variant: '6',
    color: 'neutral',
    align: 'left',
    gutter: false
  },
  styles: {
    base: {
      display: 'block',
      font: 'font-semibold'
    },
    aligns: {
      right: {
        textAlign: 'text-right'
      },
      center: {
        textAlign: 'text-center'
      },
      justify: {
        textAlign: 'text-justify'
      }
    },
    variants: {
      1: {
        font: 'text-6xl'
      },
      2: {
        font: 'text-4xl'
      },
      3: {
        font: 'text-3xl'
      },
      4: {
        font: 'text-2xl'
      },
      5: {
        font: 'text-xl'
      },
      6: {
        font: 'text-base'
      }
    },
    gutters: {
      1: {
        margin: 'mb-5'
      },
      2: {
        margin: 'mb-4'
      },
      3: {
        margin: 'mb-3.5'
      },
      4: {
        margin: 'mb-3'
      },
      5: {
        margin: 'mb-2.5'
      },
      6: {
        margin: 'mb-2'
      }
    },
    colors: {
      light: {
        neutral: {
          border: 'border-light-neutral',
          fill: 'fill-light-neutral',
          color: 'text-light-neutral'
        },
        primary: {
          border: 'border-light-primary',
          fill: 'fill-light-primary',
          color: 'text-light-primary'
        },
        secondary: {
          border: 'border-light-secondary',
          fill: 'fill-light-secondary',
          color: 'text-light-secondary'
        },
        success: {
          border: 'border-light-success',
          fill: 'fill-light-success',
          color: 'text-light-success'
        },
        warning: {
          border: 'border-light-warning',
          fill: 'fill-light-warning',
          color: 'text-light-warning'
        },
        error: {
          border: 'border-light-error',
          fill: 'fill-light-error',
          color: 'text-light-error'
        }
      }
    }
  }
};

export default titleConfig;
