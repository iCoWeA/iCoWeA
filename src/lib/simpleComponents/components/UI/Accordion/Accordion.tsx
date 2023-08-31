import React, { forwardRef, type BaseHTMLAttributes, useMemo, useState, useEffect } from 'react';
import accordionConfig from '../../../configs/accordionConfig';
import usePrevious from '../../../hooks/usePrevious';
import accordionContext, { type AccordionContext } from '../../../contexts/accordion';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onToggle?: (open?: boolean) => void;
  open?: boolean;
  transitionDuration?: number;
  disabled?: boolean;
  clasName?: string;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = accordionConfig.styles;
  const { onToggle, open, transitionDuration, disabled, className, ...restProps } = { ...accordionConfig.defaultProps, ...props };

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
      isOpen: open ?? isOpen,
      transitionDuration,
      isDisabled: disabled,
      onClick: () => {
        if (onToggle !== undefined) {
          onToggle();
        }

        if (open === undefined) {
          setIsOpen((isOpen) => !isOpen);
        }
      }
    }),
    [open, isOpen, transitionDuration, disabled, onToggle]
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