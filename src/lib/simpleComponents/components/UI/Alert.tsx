import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent, type ButtonHTMLAttributes } from 'react';
import { type AlertVariants } from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  variant?: AlertVariants;
  color?: Colors;
  invisible?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  children?: ReactNode;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((containerProps, containerRef) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.alert;
  const {
    onClose,
    variant,
    color,
    invisible,
    icon,
    action,
    iconContainerProps,
    bodyProps,
    buttonContainerProps,
    buttonProps,
    className: containerClassName,
    children: containerChildren,
    ...restContainerProps
  } = mergeProps(defaultProps, containerProps);

  /* --- Set container props --- */
  const containerStyles = styles.container;
  const mergedContainerClassName = mergeClasses(
    containerStyles.base,
    containerStyles.variants[variant][theme][color],
    invisible && containerStyles.invisible,
    containerClassName
  );

  /* --- Set icon container props --- */
  let iconContainerNode: ReactNode;

  if (icon !== undefined) {
    const iconContainerStyles = styles.iconContainer;
    const { className: iconContainerClassName, ...restButtonContainerProps } = iconContainerProps;

    const mergedButtonContainerClassName = mergeClasses(iconContainerStyles.base, iconContainerClassName);

    iconContainerNode = (
      <div
        className={mergedButtonContainerClassName}
        {...restButtonContainerProps}
      >
        {icon}
      </div>
    );
  }

  /* --- Set body props --- */
  const bodyStyles = styles.body;
  const { className: bodyClassName, ...restBodyProps } = bodyProps;

  const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

  /* --- Set button props --- */
  let buttonNode: ReactNode;

  if (action === undefined && onClose !== undefined) {
    const buttonStyles = styles.button;
    const { onClick: onButtonClick, className: buttonClassName, ...restButtonProps } = buttonProps;

    const clickButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
      onClose();

      if (onButtonClick !== undefined) {
        onButtonClick(event);
      }
    };

    const mergedButtonClassName = mergeClasses(buttonStyles.base, buttonStyles.variants[variant][theme][color], buttonClassName);

    buttonNode = (
      <button
        onClick={clickButtonHandler}
        className={mergedButtonClassName}
        {...restButtonProps}
      >
        <svg viewBox="0 0 24 24">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      </button>
    );
  }

  /* --- Set button container props --- */
  let buttonContainerNode: ReactNode;

  if (action !== undefined || onClose !== undefined) {
    const buttonContainerStyles = styles.buttonContainer;
    const { className: buttonContainerClassName, ...restButtonContainerProps } = buttonContainerProps;

    const mergedButtonContainerClassName = mergeClasses(buttonContainerStyles.base, buttonContainerClassName);

    buttonContainerNode = (
      <div
        className={mergedButtonContainerClassName}
        {...restButtonContainerProps}
      >
        {buttonNode}
      </div>
    );
  }

  return (
    <div
      className={mergedContainerClassName}
      ref={containerRef}
      {...restContainerProps}
    >
      {iconContainerNode}
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      >
        {containerChildren}
      </div>
      {buttonContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
