import React, { type SVGAttributes, type ReactElement, type FC, cloneElement } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import iconConfig from './iconConfig';

export type IconDefaultProps = {
  variant?: IconVariants;
  color?: TextColors;
  size?: Sizes;
  spacing?: boolean;
  border?: boolean;
};

export type IconProps = Omit<SVGAttributes<SVGSVGElement>, 'spacing'> &
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
  const sizeVariant = spacing ? (border ? 'bordered' : 'spaced') : 'default';
  const colorVariant = variant === 'default' || variant === 'text' ? 'default' : variant;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[sizeVariant][size],
    spacing && styles.spacing[size],
    color !== 'inherit' && styles.variants[colorVariant][theme][color],
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
