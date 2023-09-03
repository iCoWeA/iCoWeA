import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode, type ButtonHTMLAttributes } from 'react';
import alertConfig, { type AlertVariants } from '../../../configs/alertConfig';
import Icon, { type IconProps } from '../Icon/Icon';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import AlertIconContainer from './AlertIconContainer';
import AlertBodyContainer from './AlertBodyContainer';
import AlertButton from './AlertButton';
import AlertButtonContainer from './AlertButtonContainer';

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  variant?: AlertVariants;
  color?: Colors;
  invisible?: boolean;
  icon?: ReactNode;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonIconProps?: IconProps;
  buttonContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertConfig.styles.container;
  const {
    onClose,
    variant,
    color,
    invisible,
    icon,
    iconContainerProps,
    bodyContainerProps,
    buttonProps,
    buttonIconProps,
    buttonContainerProps,
    className,
    children,
    ...restProps
  } = { ...alertConfig.defaultProps, ...props };

  /* --- Set container props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], invisible && styles.invisible, className);

  /* --- Set icon container props --- */
  let iconContainerNode: ReactNode;

  if (icon !== undefined) {
    iconContainerNode = <AlertIconContainer {...iconContainerProps}>{icon}</AlertIconContainer>;
  }

  /* --- Set button icon props --- */
  let buttonIconNode: ReactNode;

  if (onClose !== undefined) {
    buttonIconNode = (
      <Icon {...buttonIconProps}>
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </Icon>
    );
  }

  /* --- Set button props --- */
  let buttonNode: ReactNode;

  if (onClose !== undefined) {
    buttonNode = (
      <AlertButton
        onClose={onClose}
        variant={variant}
        color={color}
        {...buttonProps}
      >
        {buttonIconNode}
      </AlertButton>
    );
  }

  /* --- Set button container props --- */
  let buttonContainerNode: ReactNode;

  if (buttonNode !== undefined) {
    buttonContainerNode = <AlertButtonContainer {...buttonContainerProps}>{buttonNode}</AlertButtonContainer>;
  }

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {iconContainerNode}
      <AlertBodyContainer {...bodyContainerProps}>{children}</AlertBodyContainer>
      {buttonContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
