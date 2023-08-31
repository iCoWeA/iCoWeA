import React, { forwardRef, type BaseHTMLAttributes, useContext, useMemo, useState, useEffect } from 'react';
import accordionContext, { type AccordionContext } from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import usePrevious from '../../../hooks/usePrevious';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onToggle?: (open?: boolean) => void;
  open?: boolean;
  duration?: number;
  disabled?: boolean;
  clasName?: string;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  /* --- Set default props --- */
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordion;
  const { onToggle, open, duration, disabled, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(false);

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsOpen(prevOpen);
    }
  }, [open]);

  /* --- Set context --- */
  const context: AccordionContext = useMemo(
    () => ({
      open: open ?? isOpen,
      duration,
      disabled,
      onClick: () => {
        if (onToggle !== undefined) {
          onToggle();
        }

        if (open === undefined) {
          setIsOpen((isOpen) => !isOpen);
        }
      }
    }),
    [open, isOpen, disabled]
  );

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, disabled && styles.disabled, className);

  return (
    <accordionContext.Provider value={context}>
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    </accordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;
