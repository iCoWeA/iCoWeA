import React, { type BaseHTMLAttributes, type ReactElement, type FC, useContext, cloneElement, forwardRef, type ReactNode } from 'react';
import buttonGroupConfig from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, isLast } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

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
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: ReactElement;
}

const Button: FC<ButtonProps> = ({ isFirst, isLast, variant, size, color, fullwidth, stateLayerProps, disabled, type, className, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant][theme][color],
    styles.sizes[size],
    variant === 'outlined' && styles.outlineSizes[size],
    fullwidth && styles.fullwidth,
    isFirst && styles.first,
    isLast && styles.last,
    variant === 'outlined' && isFirst && styles.firstOutline,
    variant === 'outlined' && isLast && styles.lastOutline,
    className
  );

  const childrenNode = <>{children.props.children}</>;

  return <>{cloneElement(children, { disabled, type, className: mergedClassName, children: childrenNode })}</>;
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
  stateLayerProps?: Record<number, BaseHTMLAttributes<HTMLSpanElement>>;
  tabIndex?: number;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children: ReactElement | ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, stateLayerProps, tabIndex, disabled, type, className, children, ...restProps } = {
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
        stateLayerProps={stateLayerProps?.[i]}
        fullwidth={fullwidth}
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
