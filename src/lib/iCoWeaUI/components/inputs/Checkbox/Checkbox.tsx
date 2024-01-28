/* --- ARIA ---
 * 3 state
 */

import React, {
  type InputHTMLAttributes,
  type ReactElement,
  type MutableRefObject,
  forwardRef
} from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import CheckboxContainer, { type CheckboxContainerDefaultProps } from './CheckboxContainer';
import CheckboxIcon, { type CheckboxIconDefaultProps } from './CheckboxIcon';
import checkboxConfig from './checkboxConfig';

export type CheckboxDefaultProps = {
  color?: Colors;
  size?: Sizes;
  border?: boolean;
  valid?: boolean;
  invalid?: boolean;
  noRipple?: boolean;
};

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
CheckboxDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
  containerProps?: CheckboxContainerDefaultProps;
  iconProps?: CheckboxIconDefaultProps;
  rippleProps?: RippleProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
};

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    color,
    size,
    border,
    valid,
    invalid,
    noRipple,
    containerProps,
    iconProps,
    rippleProps,
    inputRef,
    checked,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('checkbox', checkboxConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = checkboxConfig.styles.input;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <CheckboxContainer
      size={size}
      noRipple={noRipple}
      checked={checked}
      {...containerProps}
    >
      <input
        className={mergedClassName}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        ref={inputRef}
        {...restProps}
      />
      {!noRipple && (
        <Ripple
          variant="default"
          color={checked ? color : valid ? 'success' : invalid ? 'error' : 'neutral'}
          sibling
          {...rippleProps}
        />
      )}
      <CheckboxIcon
        theme={theme}
        color={color}
        size={size}
        border={border}
        valid={valid}
        invalid={invalid}
        checked={checked}
        disabled={disabled}
        {...iconProps}
      >
        {children}
      </CheckboxIcon>
    </CheckboxContainer>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
