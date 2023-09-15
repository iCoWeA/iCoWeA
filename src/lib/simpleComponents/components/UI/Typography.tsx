import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import typographyConfig from '../../configs/typographyConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

export type TypographyVariants =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-large'
  | 'body-medium'
  | 'body-small';

export interface TypographyProps extends BaseHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  variant?: TypographyVariants;
  color?: Colors;
}

const Typography = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TypographyProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const styles = typographyConfig.styles;
  const { variant, color, className, ...restProps } = { ...typographyConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme], color !== undefined && styles.colors[theme][color], className);

  if (variant === 'display-large' || variant === 'display-medium' || variant === 'display-small' || variant === 'headline-large') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'headline-medium') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'headline-small') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'title-large') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'title-medium') {
    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'title-small') {
    return (
      <h6
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  return (
    <p
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Typography.displayName = 'Typography';

export default Typography;
