import React, { type BaseHTMLAttributes, type ReactNode, forwardRef, useState, useEffect, useMemo } from 'react';
import accordionConfig from '../../../configs/accordionConfig';
import accordionContext, { type AccordionContext } from '../../../contexts/accordion';
import usePrevious from '../../../hooks/usePrevious';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: CheckVariants;
  size?: Sizes;
  color?: Colors;
  open?: boolean;
  defaultOpen?: boolean;
  icon?: ReactNode;
  id?: string;
  disabled?: boolean;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = accordionConfig.styles;
  const { variant, size, color, open, defaultOpen, icon, id, disabled, className, children, ...restProps } = { ...accordionConfig.defaultProps, ...props };
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
      size,
      color,
      open: open ?? isOpen,
      icon,
      id,
      disabled
    }),
    [isControlled, variant, size, color, open, isOpen, icon, id, disabled]
  );

  /* Set props */
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
