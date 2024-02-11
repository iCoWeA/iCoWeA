const dividerConfig = {
  defaultProps: {
    placement: 'middle',
    vertical: false,
    spacing: 'none',
    color: 'neutral',
    gap: 'base'
  },
  styles: {
    root: {
      base: {
        font: 'text-xs'
      },
      orientations: {
        horizontal: {
          width: 'w-full'
        },
        vertical: {
          height: 'h-full'
        }
      },
      color: {
        light: {
          fill: 'fill-light-divider',
          color: 'text-light-divider'
        },
        dark: {
          fill: 'fill-dark-divider',
          color: 'text-dark-divider'
        }
      }
    },
    line: {
      base: {
        display: 'block',
        flexGrow: 'grow'
      },
      orientations: {
        horizontal: {
          border: 'border-t'
        },
        vertical: {
          border: 'border-t-0 border-r'
        }
      },
      spacing: {
        horizontal: {
          left: {
            sm: {
              margin: 'ml-4'
            },
            md: {
              margin: 'ml-6'
            },
            lg: {
              margin: 'ml-8'
            }
          },
          middle: {
            sm: {
              margin: 'mx-4'
            },
            md: {
              margin: 'mx-6'
            },
            lg: {
              margin: 'mx-8'
            }
          },
          right: {
            sm: {
              margin: 'mr-4'
            },
            md: {
              margin: 'mr-6'
            },
            lg: {
              margin: 'mr-8'
            }
          }
        },
        vertical: {
          left: {
            sm: {
              margin: 'mt-4'
            },
            md: {
              margin: 'mt-6'
            },
            lg: {
              margin: 'mt-8'
            },
            'sm-panel': {
              margin: 'mt-2'
            },
            'md-panel': {
              margin: 'mt-3'
            },
            'lg-panel': {
              margin: 'mt-4'
            }
          },
          middle: {
            sm: {
              margin: 'my-4'
            },
            md: {
              margin: 'my-6'
            },
            lg: {
              margin: 'my-8'
            },
            'sm-panel': {
              margin: 'my-2'
            },
            'md-panel': {
              margin: 'my-3'
            },
            'lg-panel': {
              margin: 'my-4'
            }
          },
          right: {
            sm: {
              margin: 'mb-4'
            },
            md: {
              margin: 'mb-6'
            },
            lg: {
              margin: 'mb-8'
            },
            'sm-panel': {
              margin: 'mb-2'
            },
            'md-panel': {
              margin: 'mb-3'
            },
            'lg-panel': {
              margin: 'mb-4'
            }
          }
        }
      }
    }
  }
};

export default dividerConfig;
