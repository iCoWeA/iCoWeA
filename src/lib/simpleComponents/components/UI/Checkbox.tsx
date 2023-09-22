import React, { type FC, useContext, type BaseHTMLAttributes, forwardRef, type InputHTMLAttributes, type MutableRefObject, useRef, useCallback } from 'react';
import BaseIcon, { type IconProps as BaseIconProps } from './Icon';
import checkboxConfig from '../../configs/checkboxConfig';
import themeContext from '../../contexts/theme';
import useAddEventListener from '../../hooks/useAddEventListener';
import { mergeClasses } from '../../utils/propsHelper';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

/********************************************************************************
 *
 *   Icon
 *
 */
interface IconProps extends BaseIconProps {
  color: Colors;
  valid: boolean;
  invalid: boolean;
  checked: boolean;
  disabled: boolean;
}

const Icon: FC<IconProps> = ({ color, valid, invalid, checked, disabled, className, children, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.icon;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.border[theme],
    checked && !disabled && styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    disabled && !checked && styles.disabled[theme],
    disabled && checked && styles.disabledChecked[theme],
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
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  checked: boolean;
  disabled: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ checked, disabled, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = checkboxConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

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
  stateLayerProps?: BaseHTMLAttributes<HTMLSpanElement>;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.input;
  const { color, valid, invalid, containerProps, iconProps, stateLayerProps, inputRef, checked, disabled, type, className, ...restProps } = {
    ...checkboxConfig.defaultProps,
    ...props
  };

  /* --- Set refs --- */
  const checkboxRef = useRef<HTMLInputElement | null>(null);

  /* --- Set click event --- */
  const clickHandler = useCallback(() => {
    checkboxRef.current?.blur();
  }, []);

  useAddEventListener(checkboxRef, 'click', clickHandler);

  /* --- Set props --- */
  const setRef = (element: HTMLInputElement): void => {
    checkboxRef.current = element;

    if (inputRef !== undefined) {
      inputRef.current = element;
    }
  };

  const mergedClassName = mergeClasses(styles.base, !checked && styles.color[theme], checked && styles.checked[theme][color], className);

  return (
    <Container
      checked={checked}
      disabled={disabled}
      {...containerProps}
      ref={ref}
    >
      <input
        checked={checked}
        disabled={disabled}
        type={type}
        className={mergedClassName}
        ref={setRef}
        {...restProps}
      />
      <Icon
        color={color}
        valid={valid}
        invalid={invalid}
        checked={checked}
        disabled={disabled}
        {...iconProps}
      />
    </Container>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
