/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */

import React, { forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { reverseColor } from '../../../utils/utils';
import Ripple, { type RippleProps } from '../../utils/Ripple/Ripple';
import ListItem, { type ListItemProps } from '../ListItem/ListItem';
import listButtonConfig from './listButtonConfig';

export type ListButtonDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: Borders;
  radius?: Radiuses;
  noRipple?: boolean;
};

export type ListButtonProps = ListItemProps &
ListButtonDefaultProps & {
  selected?: boolean;
  selectedVariant?: Variants;
  selectedColor?: DefaultColors;
  rippleProps?: RippleProps;
  disabled?: boolean;
};

const ListButton = forwardRef<HTMLLIElement, ListButtonProps>((props, ref) => {
  const {
    size,
    variant,
    color,
    border,
    noRipple,
    selected,
    selectedVariant,
    selectedColor,
    rippleProps,
    defaultClassName,
    className,
    disabled,
    children,
    ...restProps
  } = useConfig('listButton', listButtonConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes--- */
  const stateVariant = (selected && selectedVariant) || variant;
  const stateColor = (selected && selectedColor) || color;
  const reversedColor = reverseColor(stateVariant, stateColor);

  const mergedClassName = useMemo(() => {
    const styles = listButtonConfig.styles;

    return mergeClasses(
      styles.base,
      selected && styles.selected,
      !noRipple && !disabled && styles.ripple,
      styles.variants[theme][reversedColor],
      defaultClassName,
      className
    );
  }, [selected, noRipple, disabled, theme, reversedColor, defaultClassName, className]);

  return (
    <ListItem
      spacing={size}
      variant={stateVariant}
      color={stateColor}
      border={border}
      col={false}
      justify="start"
      align="center"
      gap={size}
      className={mergedClassName}
      disabled={disabled}
      role="button"
      tabIndex={disabled ? undefined : 0}
      ref={ref}
      {...restProps}
    >
      {children}
      {!noRipple && !disabled && (
        <Ripple
          color={reversedColor}
          border={!!border}
          sibling={false}
          {...rippleProps}
        />
      )}
    </ListItem>
  );
});

ListButton.displayName = 'ListButton';

export default ListButton;
