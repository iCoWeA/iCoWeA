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
import SwitchContainer, { type SwitchContainerDefaultProps } from './SwitchContainer';
import SwitchDot, { type SwitchDotDefaultProps } from './SwitchDot';
import switchConfig from './switchConfig';

export type SwitchDefaultProps = {
  size?: Sizes;
  color?: DefaultTextColors;
};

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
SwitchDefaultProps & {
  containerProps?: SwitchContainerDefaultProps;
  dotProps?: SwitchDotDefaultProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  children?: ReactElement<SVGSVGElement>;
};

const Switch = forwardRef<HTMLDivElement, SwitchProps>((props, ref) => {
  const {
    size,
    color,
    containerProps,
    dotProps,
    inputRef,
    defaultClassName,
    checked,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('switch', switchConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = switchConfig.styles.input;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <SwitchContainer
      theme={theme}
      size={size}
      color={color}
      checked={checked}
      disabled={disabled}
      ref={ref}
      {...containerProps}
    >
      <input
        checked={checked}
        className={mergedClassName}
        disabled={disabled}
        role="switch"
        type="checkbox"
        ref={inputRef}
        {...restProps}
      />
      <SwitchDot
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
