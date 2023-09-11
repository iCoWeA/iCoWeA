import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  divider?: boolean;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const { onToggle: onAccordionToggle, open: isAccordionOpen, id: accordionId, disabled: isAccordionDisabled } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles;
  const { color, divider, startDecoration, endDecoration, disabled, className, children, ...restProps } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(
    styles.button.base,
    styles.button.colors[theme],
    isAccordionOpen && styles.button.open[theme][color],
    styles.before.base,
    styles.before.colors[theme],
    isAccordionOpen && styles.before.open[theme][color],
    divider && styles.divider.base,
    divider && styles.divider.colors[theme],
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
