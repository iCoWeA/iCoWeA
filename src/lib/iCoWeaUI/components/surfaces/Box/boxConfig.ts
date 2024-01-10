const boxConfig = {
  defaultProps: {
    layout: 'default',
    size: 'md',
    inner: false,
    closable: 'none',
    buttonGap: 'base'
  },
  styles: {
    base: {
      font: 'antialiased font-normal font-sans'
    },
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
    fontSize: {
      default: {
        font: 'text-sm'
      },
      inner: {
        font: 'text-xs'
      }
    },
    sizes: {
      default: {
        sm: {
          paddding: 'p-4'
        },
        md: {
          paddding: 'p-6'
        },
        lg: {
          paddding: 'p-8'
        }
      },
      panel: {
        sm: {
          paddding: 'px-4 py-2'
        },
        md: {
          paddding: 'px-6 py-3'
        },
        lg: {
          paddding: 'px-8 py-4'
        }
      }
    },
    innerSizes: {
      default: {
        sm: {
          paddding: 'p-1'
        },
        md: {
          paddding: 'p-2'
        },
        lg: {
          paddding: 'p-3'
        }
      },
      panel: {
        sm: {
          paddding: 'px-1 py-0.5'
        },
        md: {
          paddding: 'px-2 py-1'
        },
        lg: {
          paddding: 'px-3 py-1.5'
        }
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
      },
      'sm-in': {
        none: {
          left: {
            padding: 'pl-5'
          },
          right: {
            padding: 'pr-5'
          }
        },
        base: {
          left: {
            padding: 'pl-7'
          },
          right: {
            padding: 'pr-7'
          }
        },
        sm: {
          left: {
            padding: 'pl-9'
          },
          right: {
            padding: 'pr-9'
          }
        },
        md: {
          left: {
            padding: 'pl-11'
          },
          right: {
            padding: 'pr-11'
          }
        },
        lg: {
          left: {
            padding: 'pl-13'
          },
          right: {
            padding: 'pr-13'
          }
        }
      },
      'md-in': {
        none: {
          left: {
            padding: 'pl-6'
          },
          right: {
            padding: 'pr-6'
          }
        },
        base: {
          left: {
            padding: 'pl-8'
          },
          right: {
            padding: 'pr-8'
          }
        },
        sm: {
          left: {
            padding: 'pl-10'
          },
          right: {
            padding: 'pr-10'
          }
        },
        md: {
          left: {
            padding: 'pl-12'
          },
          right: {
            padding: 'pr-12'
          }
        },
        lg: {
          left: {
            padding: 'pl-14'
          },
          right: {
            padding: 'pr-14'
          }
        }
      },
      'lg-in': {
        none: {
          left: {
            padding: 'pl-7'
          },
          right: {
            padding: 'pr-7'
          }
        },
        base: {
          left: {
            padding: 'pl-9'
          },
          right: {
            padding: 'pr-9'
          }
        },
        sm: {
          left: {
            padding: 'pl-11'
          },
          right: {
            padding: 'pr-11'
          }
        },
        md: {
          left: {
            padding: 'pl-13'
          },
          right: {
            padding: 'pr-13'
          }
        },
        lg: {
          left: {
            padding: 'pl-15'
          },
          right: {
            padding: 'pr-15'
          }
        }
      }
    }
  }
};

export default boxConfig;
