import React, { type SVGAttributes, type ReactElement, type FC, cloneElement } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import iconConfig from './iconConfig';

export type IconDefaultProps = {
  color?: TextColors;
  size?: Sizes;
};

export type IconProps = SVGAttributes<SVGSVGElement> &
IconDefaultProps & {
  children?: ReactElement<SVGSVGElement>;
};

const Icon: FC<IconProps> = (props) => {
  const { size, color, defaultClassName, className, children, ...restProps } = useConfig(
    'icon',
    iconConfig.defaultProps,
    props
  );
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = iconConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    color !== 'inherit' && styles.colors[theme][color],
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
