import React, { type ButtonHTMLAttributes, type ReactNode, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
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
  const { button: buttonStyles, layer: layerStyles } = accordionHeaderConfig.styles;
  const { startDecorator, endDecorator, disabled, className, children, ...restProps } = {
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(
    buttonStyles.base,
    buttonStyles.colors[theme][accordionColor],
    layerStyles.base,
    layerStyles.divider[theme],
    accordionVariant === 'filled' && layerStyles.colors[theme][accordionColor],
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
      {startDecorator}
      {children}
      {endDecorator}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
