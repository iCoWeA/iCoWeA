import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useContext,
  useMemo
} from 'react';
import accordionContext, {
  type AccordionContext
} from '../../contexts/accordion';
import usePrevious from '../../hooks/usePrevious';
import themeContext from '../../contexts/theme';
import useMount from '../../hooks/useMount';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AccordionDefaultProps {
  hideDuration?: number;
  disabled?: boolean;
  unmountOnExit?: boolean;
}

export interface AccordionProps
  extends AccordionDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      open,
      onOpen,
      onClose,
      hideDuration,
      disabled,
      unmountOnExit,
      className,
      ...restProps
    },
    ref
  ) => {
    const prevOpen = usePrevious(open);
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordion;

    hideDuration = hideDuration ?? defaultProps.hideDuration;
    disabled = disabled ?? defaultProps.disabled;
    unmountOnExit = unmountOnExit ?? defaultProps.unmountOnExit;

    const { isMounted, isOpen, show, hide, unmount } = useMount({
      open: open ?? false,
      hideDuration: hideDuration ?? defaultProps.hideDuration,
      onOpen,
      onClose
    });

    if ((!isMounted || !isOpen) && open === true) {
      show();
    }

    if ((isMounted || isOpen) && open === false) {
      hide();
    }

    if (prevOpen !== undefined && open === undefined) {
      if (prevOpen) {
        show();
      } else {
        hide();
      }
    }

    console.log(open, isMounted, isOpen);

    const context: AccordionContext = useMemo(
      () => ({
        isMounted,
        isOpen,
        hideDuration: hideDuration ?? defaultProps.hideDuration,
        isDisabled: disabled ?? defaultProps.disabled,
        unmountOnExit: unmountOnExit ?? defaultProps.unmountOnExit,
        unmount,
        onToggle: () => {
          if (open === undefined && !isOpen) {
            show();
          }

          if (open === undefined && isOpen) {
            hide();
          }
        }
      }),
      [
        isMounted,
        isOpen,
        hideDuration,
        disabled,
        unmountOnExit,
        unmount,
        open,
        show,
        hide
      ]
    );

    const mergedClassName = twMerge(
      mergeClasses(styles.base, disabled && styles.disabled, className)
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
