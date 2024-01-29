import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Card, { type CardProps } from '../../surfaces/Card/Card';
import popoverConfig from './popoverConfig';

export type PopoverDropdownDefaultProps = CardProps & {
  variant?: Variants;
};

export type PopoverDropdownProps = PopoverDropdownDefaultProps & {
  variant: Variants;
  color: Colors;
  spacing: Spacing;
};

const PopoverDropdown: FC<PopoverDropdownProps> = ({ spacing, className, ...restProps }) => {
  /* --- Set classes --- */
  const styles = popoverConfig.styles.dropdown;

  const mergedClassName = mergeClasses(
    styles.base,
    spacing !== 'none' && styles.spacings[spacing],
    className
  );

  return (
    <Card
      spacing="none"
      border={false}
      shadow
      className={mergedClassName}
      {...restProps}
    />
  );
};

export default PopoverDropdown;
