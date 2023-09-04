import React, { forwardRef } from 'react';
import Icon, { type IconProps } from '../Icon/Icon';
import selectConfig from '../../../configs/selectConfig';
import { mergeClasses } from '../../../utils/propsHelper';

interface SelectArrowProps extends IconProps {
  open: boolean;
  transitionConfig: { enterDuration: number; exitDuration: number };
}

const SelectArrow = forwardRef<SVGSVGElement, SelectArrowProps>(({ open, transitionConfig, style, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = selectConfig.styles.arrow;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

  const mergedStyle = { transitionDuration: `${open ? transitionConfig.enterDuration : transitionConfig.exitDuration}ms`, ...style };

  return (
    <Icon
      color="default"
      style={mergedStyle}
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
