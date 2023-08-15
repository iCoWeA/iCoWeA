import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import { type TypographyDefaultProps } from '../../configs/typographyConfig';
import themeContext from '../../contexts/theme';
import { setDefaultProps, mergeClasses } from '../../utils/propsHelper';

export interface TypographyProps extends TypographyDefaultProps, BaseHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement> {}

const Typography = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TypographyProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.typography;
  const { variant, align, color, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant], styles.aligns[align], styles.colors[theme][color], className);

  if (variant === 'h1') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h2') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h3') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h4') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h5') {
    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h6') {
    return (
      <h6
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'lead') {
    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'paragraph') {
    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'small') {
    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  return (
    <span
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Typography.displayName = 'Typography';

export default Typography;
