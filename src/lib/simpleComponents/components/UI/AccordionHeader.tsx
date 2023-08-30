import React, { type ButtonHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent, type MouseEventHandler, type SVGAttributes } from 'react';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  icon?: boolean;
  iconProps?: SVGAttributes<SVGSVGElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((buttonProps, buttonRef) => {
  const { open, disabled, duration, onClick } = useContext(accordionContext);
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionHeader;
  const {
    color,
    icon,
    iconProps,
    onClick: onButtonClick,
    disabled: buttonDisabled,
    className: buttonClassName,
    children: buttonChildren,
    ...restButtonProps
  } = mergeProps({ ...defaultProps, disabled }, buttonProps);
  let iconNode: ReactNode;

  /* Set button props */
  const buttonStyles = styles.button;
  const clickButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick();

    if (onButtonClick !== undefined) {
      onButtonClick(event);
    }
  };

  const mergedButtonClassName = mergeClasses(buttonStyles.base, buttonStyles.colors[theme][color], buttonClassName);

  /* Set icon props */
  if (icon) {
    const iconStyles = styles.icon;
    const { style: iconStyle, className: iconClassName, ...restIconProps } = iconProps;

    const mergedIconStyle = mergeStyles({ transitionDuration: `${duration}ms` }, iconStyle);

    const mergedIconClassName = mergeClasses(iconStyles.base, open && iconStyles.open, iconClassName);

    iconNode = (
      <svg
        style={mergedIconStyle}
        className={mergedIconClassName}
        {...restIconProps}
      >
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </svg>
    );
  }

  return (
    <button
      onClick={clickButtonHandler}
      disabled={buttonDisabled}
      className={mergedButtonClassName}
      ref={buttonRef}
      {...restButtonProps}
    >
      {buttonChildren}
      {iconNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
