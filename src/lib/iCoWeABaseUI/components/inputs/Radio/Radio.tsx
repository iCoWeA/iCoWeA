import React, {
  type InputHTMLAttributes,
  type ReactElement,
  type MutableRefObject,
  forwardRef
} from 'react';

import Ripple, { type RippleProps } from '../../../../iCoWeAUI/components/Ripple/Ripple';
import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import RadioContainer, { type RadioContainerDefaultProps } from './RadioContainer';
import RadioDot, { type RadioDotDefaultProps } from './RadioDot';
import radioConfig from './radioConfig';

export type RadioDefaultProps = {
  color?: Colors;
  size?: Sizes;
  border?: boolean;
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
    border,
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
        border={border}
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