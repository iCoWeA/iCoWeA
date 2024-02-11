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
import RadioContainer, { type RadioContainerDefaultProps } from './RadioContainer';
import RadioDot, { type RadioDotDefaultProps } from './RadioDot';
import radioConfig from './radioConfig';

export type RadioDefaultProps = {
  size?: Sizes;
  color?: DefaultTextColors;
  border?: boolean;
  noRipple?: boolean;
};

export type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
RadioDefaultProps & {
  valid?: boolean;
  invalid?: boolean;
  containerProps?: RadioContainerDefaultProps;
  iconProps?: RadioDotDefaultProps;
  rippleProps?: RippleProps;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  children?: ReactElement<SVGSVGElement>;
};

const Radio = forwardRef<HTMLDivElement, RadioProps>((props, ref) => {
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
  } = useConfig('radio', radioConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = radioConfig.styles.input;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <RadioContainer
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
        type="radio"
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
      <RadioDot
        theme={theme}
        size={size}
        variant={color.startsWith('on') ? 'default' : 'text'}
        color={cutTextColor(color)}
        border={border}
        valid={valid}
        invalid={invalid}
        checked={checked}
        disabled={disabled}
        {...iconProps}
      >
        {children}
      </RadioDot>
    </RadioContainer>
  );
});

Radio.displayName = 'Radio';

export default Radio;
