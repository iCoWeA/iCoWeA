import { type ReactElement, type FC, cloneElement } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { type ToggleButtonProps } from '../ToggleButton/ToggleButton';
import toggleButtonGroupConfig from './toggleButtonGroupConfig';

export type ToggleButtonGroupButtonProps = {
  position: ContainerPositions;
  vertical: boolean;
  variant: Variants;
  color: Colors;
  size: Sizes;
  icon: boolean;
  border: boolean;
  block: boolean;
  shadow: boolean;
  noRipple: boolean;
  checkedVariant?: Variants;
  checkedColor?: Colors;
  element: ReactElement<ToggleButtonProps>;
};

const ToggleButtonGroupButton: FC<ToggleButtonGroupButtonProps> = ({
  position,
  vertical,
  variant,
  color,
  size,
  icon,
  border,
  block,
  shadow,
  noRipple,
  checkedVariant,
  checkedColor,
  element
}) => {
  /* --- Set classes --- */
  const styles = toggleButtonGroupConfig.styles.button;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.orientations[orientation][position],
    border && styles.border[orientation][position],
    element.props.className
  );

  return cloneElement(element, {
    className: mergedClassName,
    variant,
    color,
    size,
    icon,
    border,
    block,
    shadow,
    noRipple,
    checkedVariant,
    checkedColor
  });
};

export default ToggleButtonGroupButton;