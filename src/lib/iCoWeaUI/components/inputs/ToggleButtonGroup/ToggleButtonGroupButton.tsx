import { type ReactElement, type FC, cloneElement } from 'react';

import { mergeClasses } from '../../../utils/utils';
import { type ToggleButtonProps } from '../ToggleButton/ToggleButton';
import toggleButtonGroupConfig from './toggleButtonGroupConfig';

export type ToggleButtonGroupButtonProps = {
  position: ContainerPositions;
  vertical: boolean;
  uncheckedVariant: Variants;
  variant: Variants;
  uncheckedColor: Colors;
  color: Colors;
  size: Sizes;
  icon: boolean;
  border: boolean;
  block: boolean;
  shadow: boolean;
  noRipple: boolean;
  element: ReactElement<ToggleButtonProps>;
};

const ToggleButtonGroupButton: FC<ToggleButtonGroupButtonProps> = ({
  position,
  vertical,
  uncheckedVariant,
  variant,
  uncheckedColor,
  color,
  size,
  icon,
  border,
  block,
  shadow,
  noRipple,
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
    uncheckedVariant,
    variant,
    uncheckedColor,
    color,
    size,
    icon,
    border,
    block,
    shadow,
    noRipple
  });
};

export default ToggleButtonGroupButton;
