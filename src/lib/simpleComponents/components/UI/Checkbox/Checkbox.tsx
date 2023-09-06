import React, { type InputHTMLAttributes, type BaseHTMLAttributes, type MutableRefObject, forwardRef, useContext, type ReactNode } from 'react';
import checkboxConfig from '../../../configs/checkboxConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import { type IconProps } from '../Icon/Icon';
import CheckboxContainer from './CheckboxContainer';
import CheckboxIcon from './CheckboxIcon';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  iconProps?: IconProps;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.input;
  const { color, valid, invalid, containerProps, iconProps, inputRef, checked, disabled, type, className, ...restProps } = {
    ...checkboxConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.after,
    !valid && !invalid && styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    className
  );

  /* --- Set icon props --- */
  let iconNode: ReactNode;

  if (iconNode === undefined) {
    iconNode = (
      <CheckboxIcon
        color={color}
        {...iconProps}
      >
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </CheckboxIcon>
    );
  }

  return (
    <CheckboxContainer
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
      {iconNode}
    </CheckboxContainer>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
