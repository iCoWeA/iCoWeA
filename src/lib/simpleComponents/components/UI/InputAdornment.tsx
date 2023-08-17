import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import { type InputAdornmentProps } from '../../configs/inputAdornmentConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
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
