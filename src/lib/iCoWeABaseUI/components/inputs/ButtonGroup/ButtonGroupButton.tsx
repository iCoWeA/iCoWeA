import { type ReactElement, type FC, useMemo, cloneElement } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import { type ButtonProps } from '../Button/Button';
import buttonGroupConfig from './buttonGroupConfig';

export type ButtonGroupButtonProps = {
  placement: BoxPlacements;
  theme: Themes;
  vertical: boolean;
  size: Sizes;
  block: boolean;
  icon: boolean;
  variant: Variants;
  color: DefaultColors;
  border: boolean;
  divided: boolean;
  radius: Radiuses;
  loading: boolean;
  noRipple: boolean;
  element: ReactElement<ButtonProps>;
};

const ButtonGroupButton: FC<ButtonGroupButtonProps> = ({
  placement,
  theme,
  vertical,
  size,
  block,
  icon,
  variant,
  color,
  border,
  divided,
  radius,
  loading,
  noRipple,
  element
}) => {
  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = buttonGroupConfig.styles.button;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(
      styles.base,
      !block && styles.width,
      divided && styles.divider,
      styles.orientations[orientation][placement],
      (divided || border) && styles.border[orientation][placement],
      divided && variant === 'solid' && styles.dividers[theme][color],
      element.props.className
    );
  }, [vertical, block, divided, placement, border, variant, theme, color, element.props.className]);

  return cloneElement(element, {
    size,
    block,
    icon,
    variant,
    color,
    border: border || divided,
    radius,
    loading,
    noRipple,
    className: mergedClassName
  });
};

export default ButtonGroupButton;
