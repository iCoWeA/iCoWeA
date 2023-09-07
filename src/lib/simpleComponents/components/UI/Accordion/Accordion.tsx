import React, { type BaseHTMLAttributes, type ReactNode, forwardRef, useState, useEffect, useMemo } from 'react';
import accordionConfig from '../../../configs/accordionConfig';
import accordionContext, { type AccordionContext } from '../../../contexts/accordion';
import usePrevious from '../../../hooks/usePrevious';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  defaultOpen?: boolean;
  icon?: ReactNode;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = accordionConfig.styles;
  const { open, defaultOpen, icon, disabled, className, ...restProps } = { ...accordionConfig.defaultProps, ...props };
  const isControlled = open !== undefined;

  /* --- Set states --- */
  const [isOpen, setIsOpen] = useState(defaultOpen);

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
      disabled,
      icon,
      onToggle: () => {
        if (!isControlled) {
          setIsOpen((isOpen) => !isOpen);
        }
      }
    }),
    [open, isOpen, disabled, icon, isControlled]
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
