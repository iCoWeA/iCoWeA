import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import {
  type TypographyVariants,
  type TypographyAligns,
  type TypographyColors
} from '../../configs/typographyConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface TypographyDefaultProps {
  variant?: TypographyVariants;
  align?: TypographyAligns;
  color?: TypographyColors;
}

export interface TypographyProps
  extends TypographyDefaultProps,
  BaseHTMLAttributes<
  HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > {}

const Typography = forwardRef<
HTMLParagraphElement | HTMLHeadingElement,
TypographyProps
>(({ variant, align, color, className, ...restProps }, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.typography;

  variant = variant ?? defaultProps.variant;
  align = align ?? defaultProps.align;
  color = color ?? defaultProps.color;

  if (variant === 'h1') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h1,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h1
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h2') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h2,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h2
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h3') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h3,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h3
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h4') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h4,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h4
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h5') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h5,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h5
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'h6') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.h6,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <h6
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'lead') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.lead,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'paragraph') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.paragraph,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  if (variant === 'small') {
    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants.small,
        styles.aligns[align],
        styles.colors[theme][color],
        className
      )
    );

    return (
      <p
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }

  const mergedClassName = twMerge(
    mergeClasses(
      styles.base,
      styles.variants.span,
      styles.aligns[align],
      styles.colors[theme][color],
      className
    )
  );

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
