import React, { type SVGAttributes, forwardRef, useContext } from 'react';
import iconConfig from '../../configs/iconConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: Sizes;
  color?: Colors;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = iconConfig.styles;
  const { size, color, className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, size !== undefined && styles.sizes[size], color !== undefined && styles.colors[theme][color], className);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Icon.displayName = 'Icon';

export default Icon;
