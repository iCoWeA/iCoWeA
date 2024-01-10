import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import titleConfig from './titleConfig';

export type TitleDefaultProps = {
  variant?: TitleVariants;
  color?: TextColors;
  align?: Aligns;
  gutter?: boolean;
};

export type TitleProps = BaseHTMLAttributes<HTMLHeadingElement> & TitleDefaultProps;

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { variant, color, align, gutter, defaultClassName, className, ...restProps } = useConfig(
    'title',
    titleConfig.defaultProps,
    props
  );
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = titleConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    color !== 'inherit' && styles.colors[theme][color],
    align !== 'left' && styles.aligns[align],
    gutter && styles.gutters[variant],
    defaultClassName,
    className
  );

  if (variant === '1') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === '2') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === '3') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === '4') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === '5') {
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
