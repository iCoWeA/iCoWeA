import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent, type MouseEventHandler } from 'react';
import Icon, { type IconProps } from '../Icon/Icon';
import AccordionHeaderIconContainer, { type AccordionHeaderIconContainerProps } from './AccordionHeaderIconContainer';
import accordionContext from '../../../contexts/accordion';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  icon?: ReactNode;
  iconProps?: IconProps;
  iconContainerProps?: AccordionHeaderIconContainerProps;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((props, ref) => {
  /* --- Set context props --- */
  const { isOpen, isDisabled, transitionDuration, onClick: onAccordionClick } = useContext(accordionContext);
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.button;
  const { color, icon, iconProps, iconContainerProps, onClick, disabled, className, children, ...restProps } = {
    ...accordionHeaderConfig.defaultProps,
    disabled: isDisabled,
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
  let iconNode = icon;

  if (icon === undefined) {
    iconNode = (
      <Icon {...iconProps}>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </Icon>
    );
  }

  /* Set icon container --- */
  let iconContainerNode = icon;

  if (icon !== null) {
    iconContainerNode = (
      <AccordionHeaderIconContainer
        open={isOpen}
        transitionDuration={transitionDuration}
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
