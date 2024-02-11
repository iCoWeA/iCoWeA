import { type ReactElement, type FC, useMemo, cloneElement } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { type ToggleButtonProps } from '../ToggleButton/ToggleButton';
import toggleButtonGroupConfig from './toggleButtonGroupConfig';

export type ToggleButtonGroupButtonProps = {
  placement: ContainerPlacements;
  vertical: boolean;
  size: Sizes;
  block: boolean;
  icon: boolean;
  variant: Variants;
  color: DefaultColors;
  border: boolean;
  radius: Radiuses;
  noRipple: boolean;
  checkedVariant?: Variants;
  checkedColor?: DefaultColors;
  element: ReactElement<ToggleButtonProps>;
};

const ToggleButtonGroupButton: FC<ToggleButtonGroupButtonProps> = ({
  placement,
  vertical,
  size,
  block,
  icon,
  variant,
  color,
  border,
  radius,
  noRipple,
  checkedVariant,
  checkedColor,
  element
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = toggleButtonGroupConfig.styles.button;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(
      styles.base,
      !block && styles.width,
      styles.orientations[orientation][placement],
      border && styles.border[orientation][placement],
      element.props.className
    );
  }, [vertical, block, placement, border, element.props.className]);

  return cloneElement(element, {
    size,
    block,
    icon,
    variant,
    color,
    border,
    radius,
    noRipple,
    checkedVariant,
    checkedColor,
    className: mergedClassName
  });
};

export default ToggleButtonGroupButton;
