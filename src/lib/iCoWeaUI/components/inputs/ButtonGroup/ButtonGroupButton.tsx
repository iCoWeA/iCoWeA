import { type ReactElement, type FC, cloneElement } from 'react';

import { mergeClasses } from '../../../utils/utils';
import { type ButtonProps } from '../Button/Button';
import buttonGroupConfig from './buttonGroupConfig';

export type ButtonGroupButtonProps = {
  position: RowPositions;
  vertical: boolean;
  divided: boolean;
  theme: Themes;
  variant: Variants;
  color: Colors;
  size: Sizes;
  inner: boolean;
  icon: boolean;
  bordered: boolean;
  block: boolean;
  shadow: boolean;
  noRipple: boolean;
  element: ReactElement<ButtonProps>;
};

const ButtonGroupButton: FC<ButtonGroupButtonProps> = ({
  position,
  vertical,
  divided,
  theme,
  variant,
  color,
  size,
  inner,
  icon,
  bordered,
  block,
  shadow,
  noRipple,
  element
}) => {
  /* --- Set classes --- */
  const styles = buttonGroupConfig.styles.button;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.orientations[orientation][position],
    (divided || bordered) && styles.divider[orientation][position],
    divided && styles.variants[variant][theme][color],
    block && styles.block,
    element.props.className
  );

  return cloneElement(element, {
    className: mergedClassName,
    variant,
    color,
    size,
    inner,
    icon,
    bordered,
    block,
    shadow,
    noRipple
  });
};

export default ButtonGroupButton;
