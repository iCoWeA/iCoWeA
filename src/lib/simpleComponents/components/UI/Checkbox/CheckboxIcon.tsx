import React, { forwardRef, useContext } from 'react';
import checkboxConfig from '../../../configs/checkboxConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';

interface CheckboxProps extends IconProps {
  color: Colors;
}

const CheckboxIcon = forwardRef<SVGSVGElement, CheckboxProps>(({ color, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = checkboxConfig.styles.icon;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <Icon
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

CheckboxIcon.displayName = 'CheckboxIcon';

export default CheckboxIcon;
