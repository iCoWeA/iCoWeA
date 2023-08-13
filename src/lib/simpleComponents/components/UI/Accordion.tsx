import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useMemo,
  useContext,
  useEffect
} from 'react';
import accordionContext, {
  type AccordionContext
} from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';
import useMount from '../../hooks/useMount';

export interface AccordionDefaultProps {
  disabled?: boolean;
  unmountOnExit?: boolean;
}

export interface AccordionProps
  extends AccordionDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onToggle?: (isOpen: boolean) => void;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { open, onToggle, disabled, unmountOnExit, className, ...restProps },
    ref
  ) => {
    const prevOpen = usePrevious(open);
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordion;

    disabled = disabled ?? defaultProps.disabled;
    unmountOnExit = unmountOnExit ?? defaultProps.unmountOnExit;

    const { isMounted, isOpen, show, hide, unmount } = useMount({
      open: open ?? false
    });

    useEffect(() => {
      if (open === true) {
        show();
      }

      if (open === false) {
        hide();
      }

      if (prevOpen !== undefined && open === undefined) {
        if (prevOpen) {
          show();
        } else {
          hide();
        }
      }
    }, [open]);

    const context: AccordionContext = useMemo(
      () => ({
        isMounted,
        isOpen,
        isDisabled: disabled ?? defaultProps.disabled,
        unmountOnExit: unmountOnExit ?? defaultProps.unmountOnExit,
        unmount,
        onToggle: () => {
          if (open === undefined && isOpen) {
            hide();
          }

          if (open === undefined && !isOpen) {
            show();
          }
        }
      }),
      [isMounted, isOpen, disabled, unmountOnExit, unmount, onToggle]
    );

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        isOpen && styles.open,
        disabled && styles.disabled,
        className
      )
    );

    return (
      <accordionContext.Provider value={context}>
        <div
          className={mergedClassName}
          ref={ref}
          {...restProps}
        />
      </accordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
