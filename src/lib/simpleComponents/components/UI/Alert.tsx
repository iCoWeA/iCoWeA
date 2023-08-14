import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  type MouseEvent
} from 'react';
import {
  type AlertDefaultProps
} from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface AlertProps extends AlertDefaultProps, BaseHTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    rootProps,
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.alert;
    const { icon, action, onClose, variant, color, invisible, bodyProps, buttonProps, className: rootClassName, children: rootChildren, ...restRootProps } = setDefaultProps(rootProps, defaultProps);
    const { root: rootStyles, body: bodyStyles } = styles;
    let buttonNode: ReactNode;

    /* Set root props */
    const mergedRootClassName = mergeClasses(
      rootStyles.base,
      rootStyles.variants[variant][theme][color],
      invisible && rootStyles.invisible,
      (action !== undefined || onClose !== undefined) && rootStyles.actionSpace,
      rootClassName

    );

    /* Set body props */
    const { className: bodyClassName, ...restBodyProps } = bodyProps;

    const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

    /* Set button props */
    if (action === undefined && onClose !== undefined) {
      const buttonStyles = styles.button;
      const {
        onClick: onButtonClick,
        className: buttonClassName,
        ...restButtonProps
      } = buttonProps;

      const clickButtonHandler = (
        event: MouseEvent<HTMLButtonElement>
      ): void => {
        onClose();

        if (onButtonClick !== undefined) {
          onButtonClick(event);
        }
      };

      const mergedButtonClassName = mergeClasses(
        buttonStyles.base,
        buttonStyles.variants[variant][theme][color],
        buttonClassName

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
