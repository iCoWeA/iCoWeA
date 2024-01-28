import React, { type SVGAttributes, type ReactElement, type FC, cloneElement } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import iconConfig from './iconConfig';

export type IconDefaultProps = {
  variant?: Variants;
  color?: TextColors;
  size?: Sizes;
  spacing?: Spacing;
  border?: boolean;
};

export type IconProps = SVGAttributes<SVGSVGElement> &
IconDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
};

const Icon: FC<IconProps> = (props) => {
  const {
    variant,
    color,
    size,
    spacing,
    border,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('icon', iconConfig.defaultProps, props);

  const theme = useTheme();

  /* --- Set classes --- */
  const styles = iconConfig.styles;
  const sizeVariant = spacing === 'none' ? 'default' : 'space';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[sizeVariant][size],
    spacing !== 'none' && styles.spacing[size][spacing],
    color !== 'inherit' && styles.variants[variant][theme][color],
    border && styles.border,
    defaultClassName,
    className
  );

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
