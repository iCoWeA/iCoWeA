import React, { type BaseHTMLAttributes, type FC, type ReactNode, forwardRef, useContext } from 'react';
import alertConfig from '../../configs/alertConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';
import Fade, { type FadeProps } from './Fade';

/********************************************************************************
 *
 *   Start decorator container
 *
 */
interface StartDecoratorContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const StartDecoratorContainer: FC<StartDecoratorContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.startDecoratorContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Body container
 *
 */
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

/********************************************************************************
 *
 *   End decorator container
 *
 */
interface EndDecoratorContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  closable: boolean;
}

const EndDecoratorContainer: FC<EndDecoratorContainerProps> = ({ closable, className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = alertConfig.styles.endDecoratorContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, closable && styles.closable, className);

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Container
 *
 */
export interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: AlertVariant;
  color: Colors;
  closeButton: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  startDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  endDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      variant,
      color,
      closeButton,
      startDecorator,
      endDecorator,
      startDecoratorContainerProps,
      bodyContainerProps,
      endDecoratorContainerProps,
      className,
      children,
      ...restProps
    },
    ref
  ) => {
    /* --- Set context props --- */
    const theme = useContext(themeContext).theme;

    /* --- Set default props --- */
    const styles = alertConfig.styles.container;

    /* --- Set props --- */
    const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], className);

    /* --- Set startDecorator container props --- */
    let startDecoratorContainerNode: ReactNode;

    if (startDecorator !== undefined) {
      startDecoratorContainerNode = <StartDecoratorContainer {...startDecoratorContainerProps}>{startDecorator}</StartDecoratorContainer>;
    }

    /* --- Set button container props --- */
    let endDecoratorContainerNode: ReactNode;

    if (endDecorator !== undefined) {
      endDecoratorContainerNode = (
        <EndDecoratorContainer
          closable={closeButton}
          {...endDecoratorContainerProps}
        >
          {endDecorator}
        </EndDecoratorContainer>
      );
    }

    return (
      <div
        role="alert"
        className={mergedClassName}
        ref={ref}
        {...restProps}
      >
        {startDecoratorContainerNode}
        <BodyContainer {...bodyContainerProps}>{children}</BodyContainer>
        {endDecoratorContainerNode}
      </div>
    );
  }
);

Container.displayName = 'Container';

/********************************************************************************
 *
 *   Alert
 *
 */
export type AlertVariant = 'text' | 'filled' | 'ghost' | 'outlined';

export interface AlertProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  variant?: AlertVariant;
  color?: Colors;
  closeButton?: boolean;
  position?: InnerPositions;
  open?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  startDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  endDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fadeProps?: FadeProps;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  /* --- Set default props --- */
  const {
    onClose,
    variant,
    color,
    closeButton,
    position,
    open,
    startDecorator,
    endDecorator,
    startDecoratorContainerProps,
    bodyContainerProps,
    endDecoratorContainerProps,
    fadeProps,
    ...restProps
  } = {
    ...alertConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  if (onClose !== undefined) {
    const styles = alertConfig.styles.fade;
    const mergedClassName = mergeClasses(position !== undefined && styles.positions[position]);

    return (
      <Fade
        onClose={onClose}
        open={open}
        className={mergedClassName}
        ref={ref}
        {...fadeProps}
      >
        <Container
          variant={variant}
          color={color}
          closeButton={closeButton}
          startDecorator={startDecorator}
          endDecorator={endDecorator}
          startDecoratorContainerProps={startDecoratorContainerProps}
          bodyContainerProps={bodyContainerProps}
          endDecoratorContainerProps={endDecoratorContainerProps}
          {...restProps}
        />
      </Fade>
    );
  }

  return (
    <Container
      variant={variant}
      color={color}
      closeButton={closeButton}
      startDecorator={startDecorator}
      endDecorator={endDecorator}
      startDecoratorContainerProps={startDecoratorContainerProps}
      bodyContainerProps={bodyContainerProps}
      endDecoratorContainerProps={endDecoratorContainerProps}
      ref={ref}
      {...restProps}
    />
  );
});

Alert.displayName = 'Alert';

export default Alert;
