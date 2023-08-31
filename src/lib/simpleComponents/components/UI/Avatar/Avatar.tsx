import React, { forwardRef, useContext, type ImgHTMLAttributes } from 'react';
import avatarConfig, { type AvatarVariants, type AvatarSizes } from '../../../configs/avatarConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses, mergeProps } from '../../../utils/propsHelper';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: AvatarVariants;
  size?: AvatarSizes;
  color?: Colors;
  withBorder?: boolean;
  className?: string;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  /* --- Set context props --- */
  const { theme } = useContext(themeContext);

  /* --- Set default props --- */
  const { defaultProps, styles } = avatarConfig;
  const { variant, size, color, withBorder, className, ...restProps } = mergeProps(defaultProps, props);

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    styles.colors[theme][color],
    withBorder && styles.withBorder[theme],
    className
  );

  return (
    <img
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
