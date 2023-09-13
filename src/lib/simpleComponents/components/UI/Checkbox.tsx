import React, { type FC, useContext, type BaseHTMLAttributes, forwardRef, type InputHTMLAttributes, type MutableRefObject } from 'react';
import BaseIcon, { type IconProps as BaseIconProps } from './Icon/Icon';
import checkboxConfig from '../../configs/checkboxConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Icon
 *
 */
interface IconProps extends BaseIconProps {
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const Icon: FC<IconProps> = ({ color, valid, invalid, className, children, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.icon;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.border[theme],
    styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    className
  );

  const childrenNode = children === undefined ? <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /> : children;

  return (
    <BaseIcon
      className={mergedClassName}
      {...restProps}
    >
      {childrenNode}
    </BaseIcon>
  );
};

/********************************************************************************
 *
 *   Layer
 *
 */
interface LayerProps extends BaseHTMLAttributes<HTMLSpanElement> {
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const Layer: FC<LayerProps> = ({ color, valid, invalid, className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.layer;

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], valid && styles.valid[theme], invalid && styles.invalid[theme], className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    ></span>
  );
};

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled: boolean;
  color: Colors;
  valid: boolean;
  invalid: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ checked, disabled, color, valid, invalid, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = checkboxConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, checked && styles.checked, disabled && styles.disabled, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  iconProps?: IconProps;
  layerProps?: BaseHTMLAttributes<HTMLSpanElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = checkboxConfig.styles.input;
  const { color, valid, invalid, containerProps, iconProps, layerProps, inputRef, checked, disabled, type, className, ...restProps } = {
    ...checkboxConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Container
      checked={checked}
      disabled={disabled}
      color={color}
      valid={valid}
      invalid={invalid}
      {...containerProps}
      ref={ref}
    >
      <input
        checked={checked}
        disabled={disabled}
        type={type}
        className={mergedClassName}
        ref={inputRef}
        {...restProps}
      />
      <Icon
        color={color}
        valid={valid}
        invalid={invalid}
        {...iconProps}
      />
      <Layer
        color={color}
        valid={valid}
        invalid={invalid}
        {...layerProps}
      />
    </Container>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
