import React, { type BaseHTMLAttributes, type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import popoverConfig from './popoverConfig';

export type PopoverArrowDefaultProps = BaseHTMLAttributes<HTMLDivElement> & {
  color?: Colors;
};

export type PopoverArrowProps = PopoverArrowDefaultProps & {
  theme: Themes;
  position: OuterPositions;
  variant: Variants;
  color: Colors;
};

const PopoverArrow: FC<PopoverArrowProps> = ({
  theme,
  position,
  variant,
  color,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = popoverConfig.styles.arrow;
  const splitedPosition = position.split('-')[0] as Positions;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[splitedPosition],
    styles.variants[variant][theme][color],
    className
  );

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default PopoverArrow;
