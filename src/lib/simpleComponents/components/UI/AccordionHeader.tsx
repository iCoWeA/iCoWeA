import React, { type ButtonHTMLAttributes, type ReactNode, type BaseHTMLAttributes, forwardRef, useContext, type MouseEvent } from 'react';
import accordionHeaderConfig from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const {
    onToggle: onAccordionToggle,
    variant: accordionVariant,
    color: accordionColor,
    open: isAccordionOpen,
    disabled: isAccordionDisabled
  } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles;
  const { onClick, startDecorator, endDecorator, stateLayerProps, disabled, className, children, ...restProps } = {
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onAccordionToggle();

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    styles.disabled[theme],
    accordionVariant === 'plain' && styles.colors[theme][accordionColor],
    accordionVariant === 'text' && styles.text[theme],
    accordionVariant === 'filled' && styles.filled[theme],
    isAccordionOpen && accordionVariant === 'text' && styles['open-text'][theme][accordionColor],
    isAccordionOpen && accordionVariant === 'filled' && styles['open-filled'][theme][accordionColor],
    className
  );

  return (
    <button
      aria-expanded={isAccordionOpen}
      onClick={clickHandler}
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
