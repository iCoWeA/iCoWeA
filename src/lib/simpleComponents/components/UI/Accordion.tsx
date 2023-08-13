import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useMemo,
  useContext,
  useState,
  useEffect
} from 'react';
import accordionContext, {
  type AccordionContext
} from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import usePrevious from '../../hooks/usePrevious';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

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

    const [isOpen, setIsOpen] = useState(open ?? false);

    useEffect(() => {
      if (prevOpen !== undefined && open === undefined) {
        setIsOpen(prevOpen);
      }
    }, [open]);

    const context: AccordionContext = useMemo(
      () => ({
        isOpen: open ?? isOpen,
        isDisabled: disabled ?? defaultProps.disabled,
        unmountOnExit: unmountOnExit ?? defaultProps.unmountOnExit,
        onToggle: () => {
          if (open === undefined) {
            setIsOpen((isOpen) => !isOpen);
          }

          if (onToggle !== undefined) {
            onToggle(open ?? isOpen);
          }
        }
      }),
      [open, isOpen, disabled, onToggle]
    );

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        (open ?? isOpen) && styles.open,
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
