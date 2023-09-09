import React, { type BaseHTMLAttributes, type ReactNode, forwardRef, useContext, useRef, useImperativeHandle, useEffect } from 'react';
import alertConfig, { type AlertVariants } from '../../../configs/alertConfig';
import themeContext from '../../../contexts/theme';
import useTransition, { type TransitionConfig } from '../../../hooks/useTransition';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';
import IconButton, { type IconButtonProps } from '../IconButton/IconButton';
import AlertActionContainer from './AlertActionContainer';
import AlertBodyContainer from './AlertBodyContainer';
import AlertIconContainer from './AlertIconContainer';

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  open?: boolean;
  variant?: AlertVariants;
  color?: Colors;
  shadow?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  actionContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonProps?: IconButtonProps;
  buttonIconProps?: IconProps;
  transitionConfig?: TransitionConfig;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertConfig.styles.container;
  const {
    onClose,
    open,
    variant,
    color,
    shadow,
    icon,
    action,
    iconContainerProps,
    bodyContainerProps,
    actionContainerProps,
    buttonProps,
    buttonIconProps,
    transitionConfig,
    className,
    children,
    ...restProps
  } = { ...alertConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const containerRef = useRef<HTMLDivElement>(null);

  /* --- Set states --- */
  const {
    state: transitionState,
    enter,
    exit,
    transitionEndHandler,
    animationEndHandler
  } = useTransition<HTMLDivElement>(containerRef.current, open, transitionConfig.onEnter, transitionConfig.onExit);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => containerRef.current, []);

  /* --- Set open state --- */
  useEffect(() => {
    if (open && transitionState.exit) {
      enter(transitionConfig.onEntering);
    }

    if (!open && transitionState.enter) {
      exit(transitionConfig.onExiting);
    }
  }, [open, transitionState.enter, transitionState.exit, transitionConfig.onEntering, transitionConfig.onExiting]);

  /* --- Set container props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    transitionState.enter && styles.open,
    shadow && styles.shadow[theme],
    className
  );

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
      <IconButton
        color={alertConfig.styles.button.variants[variant][color]}
        variant="text"
        size="sm"
        onClick={onClose}
        {...buttonProps}
      >
        {buttonIconNode}
      </IconButton>
    );
  }

  /* --- Set button container props --- */
  let actionContainerNode: ReactNode;

  if (action !== undefined || buttonNode !== undefined) {
    actionContainerNode = (
      <AlertActionContainer
        button={buttonNode !== undefined}
        {...actionContainerProps}
      >
        {action}
        {buttonNode}
      </AlertActionContainer>
    );
  }

  return (
    <div
      onTransitionEnd={transitionEndHandler}
      onAnimationEnd={animationEndHandler}
      role="alert"
      className={mergedClassName}
      ref={containerRef}
      {...restProps}
    >
      {iconContainerNode}
      <AlertBodyContainer
        icon={icon !== undefined}
        action={action !== undefined || buttonNode !== undefined}
        {...bodyContainerProps}
      >
        {children}
      </AlertBodyContainer>
      {actionContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
