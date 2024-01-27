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
import RadioContainer, { type RadioContainerDefaultProps } from './RadioContainer';
import RadioDot, { type RadioDotDefaultProps } from './RadioDot';
import radioConfig from './radioConfig';

export type RadioDefaultProps = {
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
  valid?: boolean;
  invalid?: boolean;
  noRipple?: boolean;
};

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
RadioDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
  containerProps?: RadioContainerDefaultProps;
  dotProps?: RadioDotDefaultProps;
  rippleProps?: RippleProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
};

const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
  const {
    color,
    size,
    bordered,
    valid,
    invalid,
    noRipple,
    containerProps,
    dotProps,
    rippleProps,
    inputRef,
    checked,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('radio', radioConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = radioConfig.styles.input;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <RadioContainer
      size={size}
      noRipple={noRipple}
      checked={checked}
      {...containerProps}
    >
      <input
        className={mergedClassName}
        checked={checked}
        disabled={disabled}
        type="radio"
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
      <RadioDot
        theme={theme}
        color={color}
        size={size}
        bordered={bordered}
        valid={valid}
        invalid={invalid}
        checked={checked}
        disabled={disabled}
        {...dotProps}
      >
        {children}
      </RadioDot>
    </RadioContainer>
  );
});

Radio.displayName = 'Radio';

export default Radio;
