const containerConfig = {
  defaultProps: {
    layout: 'default',
    spacing: 'md',
    panel: false,
    closable: 'none',
    closeGap: 'base'
  },
  styles: {
    closable: {
      position: 'relative'
    },
    layouts: {
      header: {
        padding: 'pb-0'
      },
      footer: {
        padding: 'pt-0'
      }
    },
    gap: {
      sm: {
        none: {
          left: {
            padding: 'pl-10.5'
          },
          right: {
            padding: 'pr-10.5'
          }
        },
        base: {
          left: {
            padding: 'pl-12.5'
          },
          right: {
            padding: 'pr-12.5'
          }
        },
        sm: {
          left: {
            padding: 'pl-14.5'
          },
          right: {
            padding: 'pr-14.5'
          }
        },
        md: {
          left: {
            padding: 'pl-16.5'
          },
          right: {
            padding: 'pr-16.5'
          }
        },
        lg: {
          left: {
            padding: 'pl-18.5'
          },
          right: {
            padding: 'pr-18.5'
          }
        }
      },
      md: {
        none: {
          left: {
            padding: 'pl-13'
          },
          right: {
            padding: 'pr-13'
          }
        },
        base: {
          left: {
            padding: 'pl-15'
          },
          right: {
            padding: 'pr-15'
          }
        },
        sm: {
          left: {
            padding: 'pl-17'
          },
          right: {
            padding: 'pr-17'
          }
        },
        md: {
          left: {
            padding: 'pl-19'
          },
          right: {
            padding: 'pr-19'
          }
        },
        lg: {
          left: {
            padding: 'pl-21'
          },
          right: {
            padding: 'pr-21'
          }
        }
      },
      lg: {
        none: {
          left: {
            padding: 'pl-15.5'
          },
          right: {
            padding: 'pr-15.5'
          }
        },
        base: {
          left: {
            padding: 'pl-17.5'
          },
          right: {
            padding: 'pr-17.5'
          }
        },
        sm: {
          left: {
            padding: 'pl-19.5'
          },
          right: {
            padding: 'pr-19.5'
          }
        },
        md: {
          left: {
            padding: 'pl-21.5'
          },
          right: {
            padding: 'pr-21.5'
          }
        },
        lg: {
          left: {
            padding: 'pl-23.5'
          },
          right: {
            padding: 'pr-23.5'
          }
        }
      }
    }
  }
};

export default containerConfig;
