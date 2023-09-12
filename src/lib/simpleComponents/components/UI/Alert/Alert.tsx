import React, { type BaseHTMLAttributes, type FC, type ReactNode, forwardRef, useContext } from 'react';
import alertConfig from '../../../configs/alertConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

interface IconContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const IconContainer: FC<IconContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.iconContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

interface BodyContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const BodyContainer: FC<BodyContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.bodyContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

interface ActionContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  closable: boolean;
}

const ActionContainer: FC<ActionContainerProps> = ({ closable, className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.actionContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, closable && styles.closable, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariants;
  color?: Colors;
  invisible?: boolean;
  closable?: boolean;
  icon?: ReactNode;
  action?: ReactNode;
  iconContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  actionContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = alertConfig.styles.container;
  const { variant, color, invisible, closable, icon, action, iconContainerProps, bodyContainerProps, actionContainerProps, className, children, ...restProps } =
    {
      ...alertConfig.defaultProps,
      ...props
    };

  /* --- Set container props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], invisible && styles.invisible, className);

  /* --- Set icon container props --- */
  let iconContainerNode: ReactNode;

  if (icon !== undefined) {
    iconContainerNode = <IconContainer {...iconContainerProps}>{icon}</IconContainer>;
  }

  /* --- Set button container props --- */
  let actionContainerNode: ReactNode;

  if (action !== undefined) {
    actionContainerNode = (
      <ActionContainer
        closable={closable}
        {...actionContainerProps}
      >
        {action}
      </ActionContainer>
    );
  }

  return (
    <div
      role="alert"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {iconContainerNode}
      <BodyContainer {...bodyContainerProps}>{children}</BodyContainer>
      {actionContainerNode}
    </div>
  );
});

Alert.displayName = 'Alert';

export default Alert;
