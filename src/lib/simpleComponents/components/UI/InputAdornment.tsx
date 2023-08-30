import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface InputAdornmentProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  className?: string;
}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>((props, ref) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.inputAdornment;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

InputAdornment.displayName = 'InputAdornment';

export default InputAdornment;
