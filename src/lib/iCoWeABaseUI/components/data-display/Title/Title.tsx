import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import titleConfig from './titleConfig';

export type TitleDefaultProps = {
  size?: TitleSizes;
  gutter?: boolean;
  color?: TextColors;
  align?: Aligns;
};

export type TitleProps = BaseHTMLAttributes<HTMLHeadingElement> & TitleDefaultProps;

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { size, gutter, color, align, defaultClassName, className, ...restProps } = useConfig(
    'title',
    titleConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = titleConfig.styles;

    return mergeClasses(
      styles.base,
      styles.sizes[size],
      gutter && styles.gutters[size],
      align !== 'left' && styles.aligns[align],
      color !== 'inherit' && styles.colors[theme][color],
      defaultClassName,
      className
    );
  }, [size, gutter, align, theme, color, defaultClassName, className]);

  if (size === '1') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (size === '2') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (size === '3') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (size === '4') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (size === '5') {
    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  return (
    <h6
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Title.displayName = 'Title';

export default Title;
