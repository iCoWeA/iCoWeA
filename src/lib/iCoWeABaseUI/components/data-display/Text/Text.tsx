import React, { type BaseHTMLAttributes, forwardRef, useMemo } from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import textConfig from './textConfig';

export type TextDefaultProps = {
  size?: Sizes;
  gutter?: boolean;
  color?: TextColors;
  align?: Aligns;
};

export type TextProps = BaseHTMLAttributes<HTMLParagraphElement> & TextDefaultProps;

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const { size, gutter, color, align, defaultClassName, className, ...restProps } = useConfig(
    'text',
    textConfig.defaultProps,
    props
  );

  const theme = useTheme();

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = textConfig.styles;

    return mergeClasses(
      styles.base,
      gutter && styles.gutter,
      styles.sizes[size],
      align !== 'left' && styles.aligns[align],
      color !== 'inherit' && styles.colors[theme][color],
      defaultClassName,
      className
    );
  }, [gutter, size, align, theme, color, defaultClassName, className]);

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
