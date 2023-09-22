import React, { type FC, useContext, type BaseHTMLAttributes, forwardRef, type ReactElement, type ReactNode, Fragment } from 'react';
import buttonGroupConfig from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, isLast } from '../../utils/propsHelper';
import BaseButton, { type ButtonProps as BaseButtonProps, type ButtonVariants } from './Button';
import BaseDivider, { type DividerProps as BaseDividerProps, type DividerVariants } from './Divider';

/********************************************************************************
 *
 *   Divider
 *
 */
interface DividerProps extends BaseDividerProps {
  disabled: boolean;
  nextDisabled: boolean;
  variant: DividerVariants;
  size: Sizes;
  color: Colors;
}

const Divider: FC<DividerProps> = ({ disabled, nextDisabled, variant, size, color, className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.divider;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    variant === 'filled' && styles.color[theme][color],
    variant === 'filled' && styles.after,
    (disabled || nextDisabled) && variant === 'filled' && styles.disabled[theme],
    className
  );

  return (
    <BaseDivider
      orientation="vertical"
      variant={variant}
      color={color}
      disabled={disabled && nextDisabled}
      className={mergedClassName}
      {...restProps}
    />
  );
};

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
interface ButtonProps extends BaseButtonProps {
  isFirst: boolean;
  isLast: boolean;
  variant: ButtonVariants;
  size: Sizes;
  color: Colors;
  elevated: boolean;
  fullwidth: boolean;
}

const Button: FC<ButtonProps> = ({ isFirst, isLast, variant, size, color, elevated, fullwidth, className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.button;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    isFirst && styles.first,
    isLast && styles.last,
    variant === 'outlined' && isFirst && styles.firstOutlined,
    variant === 'outlined' && isLast && styles.lastOutlined,
    className
  );

  return (
    <BaseButton
      variant={variant}
      size={size}
      color={color}
      elevated={elevated}
      fullwidth={fullwidth}
      className={mergedClassName}
      {...restProps}
    />
  );
};

/* ARIA
 *
 * Set aria-pressed as toggle button
 *
 */

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = buttonGroupConfig.styles.container;
  const { variant, size, color, elevated, fullwidth, className, children, ...restProps } = {
    ...buttonGroupConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, elevated && styles.elevated, fullwidth && styles.fullwidth, className);

  /* --- Set buttons props --- */
  const childrenNode: ReactElement[] = Array.isArray(children) ? children : [children];
  const buttonNodes: ReactNode[] = [];

  for (let i = 0; i < childrenNode.length; i++) {
    const isLastNode = isLast(childrenNode, i);

    const dividerNode = !isLastNode && (
      <Divider
        disabled={childrenNode[i].props.disabled}
        nextDisabled={childrenNode[i + 1].props.disabled}
        variant={variant}
        size={size}
        color={color}
      />
    );

    buttonNodes[i] = (
      <Fragment key={i}>
        <Button
          isFirst={i === 0}
          isLast={isLastNode}
          variant={variant}
          size={size}
          color={color}
          fullwidth={fullwidth}
          {...childrenNode[i].props}
        />
        {dividerNode}
      </Fragment>
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
