import React, { type BaseHTMLAttributes, type FC, useContext, type ReactElement, cloneElement, forwardRef, type ReactNode } from 'react';
import buttonGroupConfig from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, isLast } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Layer
 *
 */
interface LayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  isFirst: boolean;
  isLast: boolean;
  variant: ButtonGroupVariants;
  color: Colors;
}

const Layer: FC<LayerProps> = ({ isFirst, isLast, variant, color, className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.layer;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    isFirst && styles.first,
    isLast && styles.last,
    variant !== 'outlined' && isFirst && styles.firstBorder,
    variant !== 'outlined' && isLast && styles.lastBorder,
    className
  );

  return (
    <span
      className={mergedClassName}
      {...restProps}
    ></span>
  );
};

/********************************************************************************
 *
 *   Button
 *
 */
interface ButtonProps {
  isFirst: boolean;
  isLast: boolean;
  variant: ButtonGroupVariants;
  size: Sizes;
  color: Colors;
  fullwidth: boolean;
  spanProps?: BaseHTMLAttributes<HTMLSpanElement>;
  tabIndex: number;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: ReactElement;
}

const Button: FC<ButtonProps> = ({ isFirst, isLast, variant, color, size, fullwidth, spanProps, tabIndex, disabled, type, className, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    fullwidth && styles.fullwidth,
    isFirst && styles.first,
    isLast && styles.last,
    className
  );

  const childrenNode = (
    <>
      {children.props.children}
      <Layer
        variant={variant}
        color={color}
        isFirst={isFirst}
        isLast={isLast}
        {...spanProps}
      />
    </>
  );

  return <>{cloneElement(children, { tabIndex, disabled, type, className: mergedClassName, children: childrenNode })}</>;
};

/********************************************************************************
 *
 *   Button group
 *
 */
export type ButtonGroupVariants = 'plain' | 'text' | 'outlined' | 'filled';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  spanProps?: Record<number, BaseHTMLAttributes<HTMLSpanElement>>;
  tabIndex?: number;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children: ReactElement | ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, spanProps, tabIndex, disabled, type, className, children, ...restProps } = {
    ...buttonGroupConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, elevated && styles.elevated, fullwidth && styles.fullwidth, className);

  /* --- Set buttons props --- */
  const childrenNode: ReactElement[] = Array.isArray(children) ? children : [children];
  const buttonNodes: ReactNode[] = [];

  for (let i = 0; i < childrenNode.length; i++) {
    buttonNodes[i] = (
      <Button
        key={i}
        isFirst={i === 0}
        isLast={isLast(childrenNode, i)}
        variant={variant}
        size={size}
        color={color}
        spanProps={spanProps?.[i]}
        fullwidth={fullwidth}
        tabIndex={childrenNode[i].props.tabIndex ?? tabIndex}
        disabled={childrenNode[i].props.disabled ?? disabled}
        type={childrenNode[i].props.type ?? type}
        className={childrenNode[i].props.className}
      >
        {childrenNode[i]}
      </Button>
    );
  }

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {buttonNodes}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
