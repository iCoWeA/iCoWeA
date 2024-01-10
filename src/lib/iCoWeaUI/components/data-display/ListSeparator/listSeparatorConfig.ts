const listSeparatorConfig = {
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
      base: {
        display: 'flex',
        alignItems: 'items-center'
      },
      orientations: {
        horizontal: {
          width: 'w-full'
        },
        vertical: {
          height: 'h-full',
          flexDirection: 'flex-col'
        }
      },
      gaps: {
        base: {
          gap: 'gap-2'
        },
        sm: {
          gap: 'gap-4'
        },
        md: {
          gap: 'gap-6'
        },
        lg: {
          gap: 'gap-8'
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
            text: 'text-light-primary'
          },
          secondary: {
            border: 'border-light-secondary',
            fill: 'fill-light-secondary',
            text: 'text-light-secondary'
          },
          success: {
            border: 'border-light-success',
            fill: 'fill-light-success',
            text: 'text-light-success'
          },
          warning: {
            border: 'border-light-warning',
            fill: 'fill-light-warning',
            text: 'text-light-warning'
          },
          error: {
            border: 'border-light-error',
            fill: 'fill-light-error',
            text: 'text-light-error'
          }
        }
      }
    },
    line: {
      base: {
        display: 'block',
        flexGrow: 'grow',
        border: 'border-inherit'
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

export default listSeparatorConfig;
