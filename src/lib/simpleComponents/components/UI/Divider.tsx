import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import dividerConfig from '../../configs/dividerConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface DividerProps extends BaseHTMLAttributes<HTMLHRElement> {
  orientation?: Orientations;
  margin?: boolean;
}

const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = dividerConfig.styles;
  const { orientation, margin, className, ...restProps } = { ...dividerConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.orientations[orientation], margin && styles.margin[orientation], styles.color[theme], className);

  return (
    <hr
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Divider.displayName = 'Divider';

export default Divider;
