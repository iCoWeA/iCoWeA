import React, { type LiHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import listButtonConfig from './listButtonConfig';

export type ListButtonDefaultProps = {
  unselectVariant?: Variants;
  variant?: Variants;
  unselectColor?: Colors;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
  block?: boolean;
  shadow?: boolean;
  noRipple?: boolean;
};

export type ListButtonProps = LiHTMLAttributes<HTMLLIElement> &
ListButtonDefaultProps & {
  rippleProps?: RippleProps;
  selected?: boolean;
  disabled?: boolean;
};

const ListButton = forwardRef<HTMLLIElement, ListButtonProps>((props, ref) => {
  const {
    unselectVariant,
    variant,
    unselectColor,
    color,
    size,
    bordered,
    block,
    shadow,
    noRipple,
    rippleProps,
    selected,
    disabled,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('listButton', listButtonConfig.defaultProps, props);
  const theme = useTheme();

  /* --- Set classes--- */
  const styles = listButtonConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    !selected && !disabled && styles.variants[unselectVariant][theme][unselectColor],
    !selected && !disabled && styles.unselectVariants[unselectVariant][theme][unselectColor],
    selected && !disabled && styles.variants[variant][theme][color],
    selected && styles.selected,
    bordered && styles.border,
    block && styles.block,
    shadow && styles.shadow,
    disabled && styles.disabled[theme],
    defaultClassName,
    className
  );

  return (
    <li
      role="button"
      aria-pressed={selected}
      tabIndex={disabled ? -1 : 0}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {!noRipple && (
        <Ripple
          variant={selected ? variant : unselectVariant}
          color={selected ? color : unselectColor}
          sibling={false}
          {...rippleProps}
        />
      )}
    </li>
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
