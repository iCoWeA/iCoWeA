/* --- ARIA ---
 * 3 state
 */

import React, {
  type InputHTMLAttributes,
  type MutableRefObject,
  type ReactElement,
  forwardRef,
  useMemo
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { cutTextColor } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import CheckboxContainer, { type CheckboxContainerDefaultProps } from './CheckboxContainer';
import CheckboxIcon, { type CheckboxIconDefaultProps } from './CheckboxIcon';
import checkboxConfig from './checkboxConfig';

export type CheckboxDefaultProps = {
  size?: Sizes;
  color?: DefaultTextColors;
  border?: boolean;
  noRipple?: boolean;
};

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
CheckboxDefaultProps & {
  valid?: boolean;
  invalid?: boolean;
  containerProps?: CheckboxContainerDefaultProps;
  iconProps?: CheckboxIconDefaultProps;
  rippleProps?: RippleProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  children?: ReactElement<SVGSVGElement>;
};

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((props, ref) => {
  const {
    size,
    color,
    border,
    noRipple,
    valid,
    invalid,
    containerProps,
    iconProps,
    rippleProps,
    inputRef,
    defaultClassName,
    checked,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('checkbox', checkboxConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = checkboxConfig.styles.input;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <CheckboxContainer
      size={size}
      noRipple={noRipple}
      checked={checked}
      ref={ref}
      {...containerProps}
    >
      <input
        checked={checked}
        className={mergedClassName}
        disabled={disabled}
        type="checkbox"
        ref={inputRef}
        {...restProps}
      />
      {!noRipple && !disabled && (
        <Ripple
          color={invalid ? 'error' : valid ? 'success' : checked ? color : 'neutral'}
          border={false}
          sibling
          {...rippleProps}
        />
      )}
      <CheckboxIcon
        theme={theme}
        size={size}
        variant={color.startsWith('on') ? 'plain' : 'solid'}
        color={cutTextColor(color)}
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
