import React, { type BaseHTMLAttributes, forwardRef, useState, useEffect, useMemo } from 'react';
import accordionConfig from '../../configs/accordionConfig';
import accordionContext, { type AccordionContext } from '../../contexts/accordion';
import usePrevious from '../../hooks/usePrevious';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-controls to handler
 * Set aria-labeledby to region
 *
 */

export type AccordionVariants = 'plain' | 'text' | 'filled';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: AccordionVariants;
  color?: Colors;
  open?: boolean;
  defaultOpen?: boolean;
  id?: string;
  disabled?: boolean;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = accordionConfig.styles;
  const { variant, color, open, defaultOpen, id, disabled, className, children, ...restProps } = { ...accordionConfig.defaultProps, ...props };
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
      onToggle: () => {
        if (!isControlled) {
          setIsOpen((isOpen) => !isOpen);
        }
      },
      variant,
      color,
      open: open ?? isOpen,
      disabled
    }),
    [isControlled, variant, color, open, isOpen, disabled]
  );

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <accordionContext.Provider value={context}>{children}</accordionContext.Provider>
    </div>
  );
});

Accordion.displayName = 'Accordion';

export default Accordion;
