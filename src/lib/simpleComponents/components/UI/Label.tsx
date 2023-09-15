import React, { type LabelHTMLAttributes, forwardRef, useContext } from 'react';
import labelConfig from '../../configs/labelConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  color?: Colors;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = labelConfig.styles;
  const { color, className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, color === undefined ? styles.color[theme] : styles.colors[theme][color], className);

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
