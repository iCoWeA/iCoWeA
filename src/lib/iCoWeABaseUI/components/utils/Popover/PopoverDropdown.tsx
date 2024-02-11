import React, { type FC, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Card, { type CardProps } from '../../surfaces/Card/Card';
import popoverConfig from './popoverConfig';

export type PopoverDropdownDefaultProps = CardProps;

export type PopoverDropdownProps = PopoverDropdownDefaultProps & {
  size: Spacings;
  variant: Variants;
  color: DefaultColors;
  border: Borders;
};

const PopoverDropdown: FC<PopoverDropdownProps> = ({ size, className, ...restProps }) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = popoverConfig.styles.dropdown;

    return mergeClasses(styles.base, size !== 'none' && styles.sizes[size], className);
  }, [size, className]);

  return (
    <Card
      spacing="none"
      position="relative"
      shadow
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default PopoverDropdown;
