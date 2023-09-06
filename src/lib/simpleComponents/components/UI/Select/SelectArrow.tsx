import React, { forwardRef } from 'react';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';

interface SelectArrowProps extends IconProps {
  open: boolean;
}

const SelectArrow = forwardRef<SVGSVGElement, SelectArrowProps>(({ open, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = selectConfig.styles.arrow;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

  return (
    <Icon
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <path d="m7 14 5-5 5 5z" />
    </Icon>
  );
});

SelectArrow.displayName = 'SelectArrow';

export default SelectArrow;
