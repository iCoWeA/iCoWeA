import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Button, { type ButtonProps } from '../../inputs/Button/Button';
import listButtonConfig from './listButtonConfig';

export type ListButtonDefaultProps = {
  unselectVariant?: Variants;
  variant?: Variants;
  unselectColor?: Colors;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
  block?: boolean;
  noRipple?: boolean;
};

export type ListButtonProps = ButtonProps &
ListButtonDefaultProps & {
  leftDecorator?: ReactNode;
  rightDecorator?: ReactNode;
  selected?: boolean;
  disabled?: boolean;
};

const ListButton = forwardRef<HTMLButtonElement, ListButtonProps>((props, ref) => {
  const {
    unselectVariant,
    variant,
    unselectColor,
    color,
    size,
    block,
    selected,
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
      variant={selected ? variant : unselectVariant}
      color={selected ? color : unselectColor}
      size={size}
      icon={false}
      block
      shadow={false}
      loading={false}
      aria-pressed={selected}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
