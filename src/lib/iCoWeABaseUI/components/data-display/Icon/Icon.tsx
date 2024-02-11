import React, {
  type SVGAttributes,
  type ReactElement,
  type FC,
  useMemo,
  cloneElement
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import { getBorderVariant } from '../../../utils/utils';
import iconConfig from './iconConfig';

export type IconDefaultProps = {
  size?: Sizes;
  spacing?: IconSpacing;
  variant?: Variants;
  color?: Colors;
  border?: boolean;
  radius?: Radiuses;
};

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, 'spacing'> &
IconDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
};

const Icon: FC<IconProps> = (props) => {
  const {
    size,
    spacing,
    variant,
    color,
    border,
    radius,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('icon', iconConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = iconConfig.styles;
    const spacingVariant =
      spacing === 'icon' && border ? 'bordered' : spacing === 'text' ? 'text' : 'default';
    const borderVariant = getBorderVariant(variant);

    return mergeClasses(
      styles.base,
      border && styles.border,
      spacing === 'icon' && styles.spacing[size],
      radius !== 'none' && styles.radiuses[radius],
      styles.sizes[spacingVariant][size],
      color !== 'inherit' && styles.variants[variant][theme][color],
      border && color !== 'inherit' && styles.borderVariants[borderVariant][theme][color],
      defaultClassName,
      className
    );
  }, [spacing, border, variant, size, radius, theme, color, defaultClassName, className]);

  if (children) {
    return cloneElement(children, {
      'aria-hidden': true,
      className: mergedClassName,
      ...restProps
    });
  }

  return <svg />;
};

Icon.displayName = 'Icon';

export default Icon;
