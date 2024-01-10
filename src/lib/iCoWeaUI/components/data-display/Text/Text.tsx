import React, { type BaseHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses } from '../../../utils/utils';
import textConfig from './textConfig';

export type TextDefaultProps = {
  size?: Sizes;
  color?: TextColors;
  align?: Aligns;
  gutter?: boolean;
};

export type TextProps = BaseHTMLAttributes<HTMLParagraphElement> & TextDefaultProps;

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, color, align, gutter, defaultClassName, className, ...restProps } = useConfig(
    'text',
    textConfig.defaultProps,
    props
  );
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = textConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    color !== 'inherit' && styles.colors[theme][color],
    align !== 'left' && styles.aligns[align],
    gutter && styles.gutter,
    defaultClassName,
    className
  );

  return (
    <p
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Text.displayName = 'Text';

export default Text;
