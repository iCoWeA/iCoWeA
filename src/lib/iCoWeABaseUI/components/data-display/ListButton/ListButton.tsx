/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Button, { type ButtonProps } from '../../inputs/Button/Button';
import listButtonConfig from './listButtonConfig';

export type ListButtonDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: boolean;
  block?: boolean;
  noRipple?: boolean;
};

export type ListButtonProps = ButtonProps &
ListButtonDefaultProps & {
  selected?: boolean;
  selectedVariant?: Variants;
  selectedColor?: Colors;
};

const ListButton = forwardRef<HTMLButtonElement, ListButtonProps>((props, ref) => {
  const {
    variant,
    color,
    size,
    block,
    selected,
    selectedVariant,
    selectedColor,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('listButton', listButtonConfig.defaultProps, props);

  /* --- Set classes--- */
  const styles = listButtonConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    selected && styles.selected,
    block && styles.block,
    defaultClassName,
    className
  );

  return (
    <Button
      variant={(selected && selectedVariant) || variant}
      color={(selected && selectedColor) || color}
      size={size}
      icon={false}
      block
      shadow={false}
      loading={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
