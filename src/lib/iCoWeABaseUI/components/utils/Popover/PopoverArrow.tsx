import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import popoverConfig from './popoverConfig';

export type PopoverArrowDefaultProps = BaseHTMLAttributes<HTMLDivElement> & {
  color?: DefaultColors;
};

export type PopoverArrowProps = PopoverArrowDefaultProps & {
  theme: Themes;
  variant: Variants;
  color: DefaultColors;
};

const PopoverArrow = forwardRef<HTMLDivElement, PopoverArrowProps>(
  ({ theme, variant, color, className, children, ...restProps }, ref) => {
    /* --- Set classes --- */
    const mergedClassName = useMemo(() => {
      const styles = popoverConfig.styles.arrow;

      return mergeClasses(styles.base, styles.variants[variant][theme][color], className);
    }, [variant, theme, color, className]);

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

PopoverArrow.displayName = 'PopoverArrow';

export default PopoverArrow;
