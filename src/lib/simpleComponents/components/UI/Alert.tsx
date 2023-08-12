import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  type ButtonHTMLAttributes,
  type MouseEvent
} from 'react';
import {
  type AlertColors,
  type AlertVariants
} from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AlertDefaultProps {
  variant?: AlertVariants;
  color?: AlertColors;
  invisible?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  componentsProps: {
    body?: BaseHTMLAttributes<HTMLDivElement>;
    button?: ButtonHTMLAttributes<HTMLButtonElement>;
  };
}

interface AlertProps
  extends AlertDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      onClose,
      variant,
      color,
      invisible,
      icon,
      action,
      componentsProps,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.alert;
    const rootStyles = styles.root;
    const bodyStyles = styles.body;
    let buttonNode: ReactNode;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    invisible = invisible ?? defaultProps.invisible;
    icon = icon ?? defaultProps.icon;
    action = action ?? defaultProps.action;
    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set root props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.variants[variant][theme][color],
        invisible && rootStyles.invisible,
        (action !== null || onClose !== undefined) && rootStyles.actionSpace,
        rootClassName
      )
    );

    /* Set body props */
    const { className: bodyClassName, ...restBodyProps } =
      componentsProps.body ?? {};

    const mergedBodyClassName = twMerge(
      mergeClasses(bodyStyles.base, bodyClassName)
    );

    /* Set button props */
    if (action === null && onClose !== undefined) {
      const buttonStyles = styles.button;
      const {
        className: buttonClassName,
        onClick: onButtonClick,
        ...restButtonProps
      } = componentsProps.button ?? {};

      const clickButtonHandler = (
        event: MouseEvent<HTMLButtonElement>
      ): void => {
        onClose();

        if (onButtonClick !== undefined) {
          onButtonClick(event);
        }
      };

      const mergedButtonClassName = twMerge(
        mergeClasses(
          buttonStyles.base,
          buttonStyles.variants[variant][theme][color],
          buttonClassName
        )
      );

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

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        {icon}
        <div
          className={mergedBodyClassName}
          {...restBodyProps}
        >
          {rootChildren}
        </div>
        {buttonNode}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export default Alert;
