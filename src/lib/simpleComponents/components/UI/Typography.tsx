import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import typographyConfig from '../../configs/typographyConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/utils';

export type TypographyTypes =
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
  const mergedClassName = mergeClasses(styles.base, styles.types[type][theme], styles.variants[variant][theme][color], className);

  if (type === 'display-large' || type === 'display-medium' || type === 'display-small' || type === 'headline-large') {
    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'headline-medium') {
    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'headline-small') {
    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-large') {
    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-medium') {
    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (type === 'title-small') {
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
