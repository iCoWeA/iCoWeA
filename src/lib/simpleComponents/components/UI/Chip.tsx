import React, { type BaseHTMLAttributes, type FC, type ReactNode, forwardRef, useContext } from 'react';
import chipConfig from '../../configs/chipConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Start decorator container
 *
 */
interface StartDecoratorContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const StartDecoratorContainer: FC<StartDecoratorContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = chipConfig.styles.startDecoratorContainer;

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
  const styles = chipConfig.styles.bodyContainer;

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
  const styles = chipConfig.styles.endDecoratorContainer;

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
 *   Chip
 *
 */
export type ChipVariants = 'filled' | 'ghost' | 'outlined';

export interface ChipProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ChipVariants;
  borderShape?: Shapes;
  color?: Colors;
  closeButton?: boolean;
  startDecorator?: ReactNode;
  endDecorator?: ReactNode;
  startDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  endDecoratorContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = chipConfig.styles.container;
  const {
    variant,
    borderShape,
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
  } = {
    ...chipConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], styles.borderShapes[borderShape], className);

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
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {startDecoratorContainerNode}
      <BodyContainer {...bodyContainerProps}>{children}</BodyContainer>
      {endDecoratorContainerNode}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;
