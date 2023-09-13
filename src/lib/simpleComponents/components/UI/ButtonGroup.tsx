import React, { type ReactElement, type FC, useContext, cloneElement, type BaseHTMLAttributes, forwardRef, type ReactNode } from 'react';
import buttonGroupConfig from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, isLast } from '../../utils/propsHelper';

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
  tabIndex: number;
  disabled: boolean;
  type: 'submit' | 'reset' | 'button';
  className: string;
  children: ReactElement;
}

const Button: FC<ButtonProps> = ({ isFirst, isLast, variant, color, size, fullwidth, tabIndex, disabled, type, className, children }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const { button: buttonStyles, layer: layerStyles } = buttonGroupConfig.styles;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    buttonStyles.base,
    buttonStyles.variants[variant][theme][color],
    buttonStyles.sizes[size],
    fullwidth && buttonStyles.fullwidth,
    isFirst && buttonStyles.first,
    isLast && buttonStyles.last,
    layerStyles.base,
    layerStyles.variants[variant][theme][color],
    isFirst && layerStyles.first,
    isLast && layerStyles.last,
    variant !== 'outlined' && isFirst && layerStyles.firstBorder,
    variant !== 'outlined' && isLast && layerStyles.lastBorder,
    className
  );

  return <>{cloneElement(children, { tabIndex, disabled, type, className: mergedClassName })}</>;
};

Button.displayName = 'Button';

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
  tabIndex?: number;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  children: ReactElement | ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, tabIndex, disabled, type, className, children, ...restProps } = {
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
