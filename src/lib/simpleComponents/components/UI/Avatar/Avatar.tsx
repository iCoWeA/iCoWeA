import React, { type ImgHTMLAttributes, type BaseHTMLAttributes, forwardRef } from 'react';
import avatarConfig from '../../../configs/avatarConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import AvatarContainer from './AvatarContainer';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: Borders;
  size?: Sizes;
  color?: Colors;
  withBorder?: boolean;
  borderColor?: Colors;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = avatarConfig.styles.image;
  const { variant, size, color, withBorder, borderColor, containerProps, className, children, ...restProps } = { ...avatarConfig.defaultProps, ...props };

  /* --- Set props --- */
  let childrenNode = children;

  if (childrenNode === undefined) {
    const mergedClassName = mergeClasses(styles.base, className);

    childrenNode = (
      <img
        className={mergedClassName}
        {...restProps}
      />
    );
  }

  return (
    <AvatarContainer
      variant={variant}
      size={size}
      color={color}
      withBorder={withBorder}
      borderColor={borderColor}
      ref={ref}
      {...containerProps}
    >
      {childrenNode}
    </AvatarContainer>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
