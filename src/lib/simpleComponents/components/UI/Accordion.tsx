import React, { forwardRef, type BaseHTMLAttributes, useContext, useMemo, useState } from 'react';
import accordionContext, { type AccordionContext } from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  onToggle?: (open?: boolean) => void;
  open?: boolean;
  duration?: number;
  disabled?: boolean;
  clasName?: string;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordion;
  const { onToggle, open, duration, disabled, className, ...restProps } = setDefaultProps(props, defaultProps);

  const [isOpen, setIsOpen] = useState(false);

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
