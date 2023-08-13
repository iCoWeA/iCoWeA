import React, { forwardRef, useContext, type ImgHTMLAttributes } from 'react';
import {
  type AvatarColors,
  type AvatarSizes,
  type AvatarVariants
} from '../../configs/avatarConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: AvatarVariants;
  size?: AvatarSizes;
  color?: AvatarColors;
  withBorder?: boolean;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ variant, size, color, withBorder, className, ...restProps }, ref) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.avatar;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    withBorder = withBorder ?? defaultProps.withBorder;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        styles.variants[variant],
        styles.sizes[size],
        styles.colors[theme][color],
        withBorder && styles.withBorder[theme],
        className
      )
    );

    return (
      <img
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Avatar.displayName = 'Avatar';

export default Avatar;
