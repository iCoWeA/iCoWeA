const dividerConfig = {
  defaultProps: {
    color: 'neutral',
    vertical: false,
    spacing: 'none',
    panel: false,
    justify: 'middle',
    gap: 'base'
  },
  styles: {
    root: {
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
          border: 'border-light-divider',
          fill: 'fill-light-divider',
          color: 'text-light-divider'
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
          default: {
            left: {
              sm: {
                margin: 'mt-4'
              },
              md: {
                margin: 'mt-6'
              },
              lg: {
                margin: 'mt-8'
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
              }
            }
          },
          panel: {
            left: {
              sm: {
                margin: 'mt-2'
              },
              md: {
                margin: 'mt-3'
              },
              lg: {
                margin: 'mt-4'
              }
            },
            middle: {
              sm: {
                margin: 'my-2'
              },
              md: {
                margin: 'my-3'
              },
              lg: {
                margin: 'my-4'
              }
            },
            right: {
              sm: {
                margin: 'mb-2'
              },
              md: {
                margin: 'mb-3'
              },
              lg: {
                margin: 'mb-4'
              }
            }
          }
        }
      }
    }
  }
};

export default dividerConfig;
