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

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <SwitchContainer
      theme={theme}
      color={color}
      size={size}
      disabled={disabled}
      defaultClassName={defaultClassName}
      checked={checked}
      ref={ref}
      {...containerProps}
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
        size={size}
        checked={checked}
        {...dotProps}
      >
        {children}
      </SwitchDot>
    </SwitchContainer>
  );
});

Switch.displayName = 'Switch';

export default Switch;