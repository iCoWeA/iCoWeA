import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import typographyConfig from '../../configs/typographyConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

export type TypographyTypes =
  | 'display-lg'
  | 'display-md'
  | 'display-sm'
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'body-lg'
  | 'body-md'
  | 'body-sm';

export interface TypographyProps extends BaseHTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
  type?: TypographyTypes;
  variant?: TextVariants;
  color?: Colors;
}

const Typography = forwardRef<HTMLParagraphElement | HTMLHeadingElement, TypographyProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const styles = typographyConfig.styles;
  const { type, variant, color, className, ...restProps } = { ...typographyConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.types[type], styles.variants[variant][theme][color], className);

  if (type === 'display-lg' || type === 'display-md' || type === 'display-sm' || type === 'headline-lg') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'headline-md') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'headline-sm') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-lg') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-md') {
    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-sm') {
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
