import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import { type InputAdornmentColor } from '../../configs/inputAdornmentConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface InputAdornmentProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: InputAdornmentColor;
  className?: string;
}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.inputAdornment;
  const { color, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
