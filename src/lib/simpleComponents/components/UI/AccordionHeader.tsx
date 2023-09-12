import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const {
    onToggle: onAccordionToggle,
    variant: accordionVariant,
    color: accordionColor,
    open: isAccordionOpen,
    id: accordionId,
    disabled: isAccordionDisabled
  } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles;
  const { startDecoration, endDecoration, disabled, className, children, ...restProps } = {
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(
    styles.button.base,
    styles.button.colors[theme][accordionColor],
    accordionVariant === 'text' && styles.before.base,
    accordionVariant === 'text' && styles.before.colors[theme][accordionColor],
    styles.divider.base,
    styles.divider.colors[theme],
    className
  );

  return (
    <button
      aria-expanded={isAccordionOpen}
      aria-controls={ariaContarols}
      id={id}
      onClick={onAccordionToggle}
      disabled={disabled}
      type="button"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {startDecoration}
      {children}
      {endDecoration}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
