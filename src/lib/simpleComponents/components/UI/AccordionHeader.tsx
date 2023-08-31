import React, {
  type ButtonHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  type MouseEvent,
  type MouseEventHandler,
  type SVGAttributes,
  type BaseHTMLAttributes
} from 'react';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeStyles, mergeProps } from '../../utils/propsHelper';
import Icon from './Icon';

export interface AccordionHeaderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
  icon?: ReactNode;
  iconProps?: SVGAttributes<SVGSVGElement>;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

const AccordionHeader = forwardRef<HTMLButtonElement, AccordionHeaderProps>((buttonProps, buttonRef) => {
  /* --- Set default props --- */
  const { open, disabled, duration, onClick } = useContext(accordionContext);
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionHeader;
  const {
    color,
    icon,
    iconProps,
    iconContainerProps,
    onClick: onButtonClick,
    disabled: buttonDisabled,
    className: buttonClassName,
    children: buttonChildren,
    ...restButtonProps
  } = mergeProps({ ...defaultProps, disabled }, buttonProps);

  /* --- Set button props --- */
  const buttonStyles = styles.button;
  const clickButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    onClick();

    if (onButtonClick !== undefined) {
      onButtonClick(event);
    }
  };

  const mergedButtonClassName = mergeClasses(buttonStyles.base, buttonStyles.colors[theme][color], buttonClassName);

  /* --- Set icon props --- */
  let iconNode = icon;

  if (icon === undefined) {
    iconNode = (
      <Icon>
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
      </Icon>
    );
  }

  /* Set icon container props --- */
  let iconContainerNode: ReactNode;

  if (icon !== null) {
    const iconContainerStyles = styles.iconContainer;
    const { style: iconContainerStyle, className: iconContainerClassName, ...restIconContainerProps } = iconContainerProps;

    const mergedIconContainerStyle = mergeStyles({ transitionDuration: `${duration}ms` }, iconContainerStyle);

    const mergedIconContainerClassName = mergeClasses(iconContainerStyles.base, open && iconContainerStyles.open, iconContainerClassName);

    iconContainerNode = (
      <div
        style={mergedIconContainerStyle}
        className={mergedIconContainerClassName}
        {...restIconContainerProps}
      >
        {iconNode}
      </div>
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
      {iconContainerNode}
    </button>
  );
});

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
