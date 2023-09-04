import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent, type BaseHTMLAttributes } from 'react';
import Icon, { type IconProps } from '../Icon/Icon';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import AccordionHeaderIconContainer from './AccordionHeaderIconContainer';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  disableIcon?: boolean;
  iconProps?: IconProps;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const {
    open: isAccordionOpen,
    disabled: isAccordionDisabled,
    transitionDuration: accordionTransitionDuration,
    onClick: onAccordionClick
  } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.button;
  const { color, disableIcon, iconProps, iconContainerProps, onClick, disabled, className, children, ...restProps } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isAccordionDisabled,
    ...props
  };

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onAccordionClick();

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  /* --- Set icon --- */
  let iconNode: ReactNode;

  if (!disableIcon) {
    iconNode = (
      <Icon {...iconProps}>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </Icon>
    );
  }

  /* --- Set icon container --- */
  let iconContainerNode: ReactNode;

  if (!disableIcon) {
    iconContainerNode = (
      <AccordionHeaderIconContainer
        open={isAccordionOpen}
        transitionDuration={accordionTransitionDuration}
        {...iconContainerProps}
      >
        {iconNode}
      </AccordionHeaderIconContainer>
    );
  }

  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {iconContainerNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
