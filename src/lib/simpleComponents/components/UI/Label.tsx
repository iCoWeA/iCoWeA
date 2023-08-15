import React, { forwardRef, useContext, type LabelHTMLAttributes } from 'react';
import { type LabelDefaultProps } from '../../configs/labelConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface LabelProps extends LabelDefaultProps, LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.label;
  const { color, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
