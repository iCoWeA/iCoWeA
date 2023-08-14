import React, { forwardRef, useContext, type ImgHTMLAttributes } from 'react';
import { type AvatarDefaultProps } from '../../configs/avatarConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

interface AvatarProps extends AvatarDefaultProps, ImgHTMLAttributes<HTMLImageElement> {}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.avatar;
  const { variant, size, color, withBorder, className, ...restProps } = setDefaultProps(props, defaultProps);

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
