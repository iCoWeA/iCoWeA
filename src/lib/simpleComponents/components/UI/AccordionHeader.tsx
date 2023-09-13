import React, { type ButtonHTMLAttributes, type ReactNode, type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import accordionHeaderConfig from '../../configs/accordionHeaderConfig';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import StateLayer from './StateLayer';

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
    id: accordionId,
    disabled: isAccordionDisabled
  } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles;
  const { startDecorator, endDecorator, stateLayerProps, disabled, className, children, ...restProps } = {
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set state props --- */
  let stateLayerNode: ReactNode;

  if (accordionVariant === 'filled') {
    stateLayerNode = (
      <StateLayer
        state="text-click"
        color={accordionColor}
        {...stateLayerProps}
      />
    );
  }

  /* --- Set props --- */
  const ariaContarols = accordionId === undefined ? undefined : `acd-body-${accordionId}`;
  const id = accordionId === undefined ? undefined : `acd-header-${accordionId}`;

  const mergedClassName = mergeClasses(styles.base, styles.divider[theme], styles.colors[theme][accordionColor], className);

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
      {stateLayerNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
