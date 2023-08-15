import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent } from 'react';
import { type AlertDefaultProps } from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface AlertProps extends AlertDefaultProps, BaseHTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((rootProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.alert;
  const {
    icon,
    action,
    onClose,
    variant,
    color,
    invisible,
    iconContainerProps,
    bodyProps,
    buttonContainerProps,
    buttonProps,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = setDefaultProps(rootProps, defaultProps);
  let iconContainerNode: ReactNode;
  let buttonContainerNode: ReactNode;
  let buttonNode: ReactNode;

  /* Set root props */
  const rootStyles = styles.root;
  const mergedRootClassName = mergeClasses(rootStyles.base, rootStyles.variants[variant][theme][color], invisible && rootStyles.invisible, rootClassName);

  /* Set icon container props */
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

  /* Set body props */
  const bodyStyles = styles.body;
  const { className: bodyClassName, ...restBodyProps } = bodyProps;

  const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

  /* Set button props */
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

  /* Set button container props */
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
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
    >
      {iconContainerNode}
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      >
        {rootChildren}
      </div>
      {buttonContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
