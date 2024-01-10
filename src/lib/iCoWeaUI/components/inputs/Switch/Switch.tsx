import React, {
  type InputHTMLAttributes,
  type ReactElement,
  type MutableRefObject,
  forwardRef
} from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import SwitchContainer, { type SwitchContainerDefaultProps } from './SwitchContainer';
import SwitchDot, { type SwitchDotDefaultProps } from './SwitchDot';
import switchConfig from './switchConfig';

export type SwitchDefaultProps = {
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
};

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
SwitchDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
  containerProps?: SwitchContainerDefaultProps;
  dotProps?: SwitchDotDefaultProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    color,
    size,
    bordered,
    containerProps,
    dotProps,
    inputRef,
    checked,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('switch', switchConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = switchConfig.styles.input;

  const mergedClassName = mergeClasses(
    styles.base,
    !checked && !disabled && styles.color[theme],
    checked && !disabled && styles.checkedColors[theme][color],
    disabled && styles.disabled[theme],
    bordered && styles.border,
    className
  );

  return (
    <SwitchContainer
      size={size}
      checked={checked}
      defaultClassName={defaultClassName}
      ref={ref}
    >
      <input
        className={mergedClassName}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        role="switch"
        ref={inputRef}
        {...restProps}
      />
      <SwitchDot
        theme={theme}
        color={color}
        checked={checked}
        disabled={disabled}
      >
        {children}
      </SwitchDot>
    </SwitchContainer>
  );
});

Switch.displayName = 'Switch';

export default Switch;
