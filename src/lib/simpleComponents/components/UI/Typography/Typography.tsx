import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import typographyConfig, { type TypographyVariants } from '../../../configs/typographyConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';

export interface TypographyProps extends BaseHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement> {
  variant?: TypographyVariants;
  align?: Aligns;
  color?: Colors;
}

const Typography = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TypographyProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const styles = typographyConfig.styles;
  const { variant, align, color, className, ...restProps } = { ...typographyConfig.defaultProps, ...props };

  /* --- Set props --- */
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
