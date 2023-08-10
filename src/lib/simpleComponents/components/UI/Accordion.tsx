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
}

export interface AccordionProps
  extends AccordionDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  handler?: () => void;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ open, disabled, handler, className, ...restProps }, ref) => {
    const prevOpen = usePrevious(open);
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordion;

    disabled = disabled ?? defaultProps.disabled;

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
        onToggle: () => {
          if (open === undefined) {
            setIsOpen((isOpen) => !isOpen);
          }

          if (handler !== undefined) {
            handler();
          }
        }
      }),
      [open, isOpen, disabled, handler]
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
