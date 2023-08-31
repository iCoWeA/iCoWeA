import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import themeContext from '../../../contexts/theme';
import labelConfig from '../../../configs/labelConfig';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  color?: Colors;
  className?: string;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const { defaultProps, styles } = labelConfig;
  const { color, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <label
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Label.displayName = 'Label';

export default Label;
