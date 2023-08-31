import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import inputAdornmentConfig from '../../../configs/inputAdornmentConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface InputAdornmentProps extends BaseHTMLAttributes<HTMLDivElement> {
  color?: Colors;
  className?: string;
}

const InputAdornment = forwardRef<HTMLDivElement, InputAdornmentProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = inputAdornmentConfig.styles;
  const { color, className, ...restProps } = { ...inputAdornmentConfig.defaultProps, ...props };

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
