import React, { type BaseHTMLAttributes, forwardRef, useContext, type ImgHTMLAttributes } from 'react';
import avatarConfig from '../../configs/avatarConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

interface AvatarContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  size: Sizes;
  color: Colors;
  withBorder: boolean;
}

const AvatarContainer = forwardRef<HTMLDivElement, AvatarContainerProps>(({ size, color, withBorder, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = avatarConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.sizes[size], styles.colors[theme][color], withBorder && styles.withBorder, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AvatarContainer.displayName = 'AvatarContainer';

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: Size;
  color?: Colors;
  withBorder?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = avatarConfig.styles.image;
  const { size, color, withBorder, containerProps, className, children, ...restProps } = { ...avatarConfig.defaultProps, ...props };

  /* --- Set props --- */
  let childrenNode = children;

  if (typeof childrenNode === 'string' && childrenNode !== '') {
    const string = childrenNode.toUpperCase().split(' ');

    childrenNode = string.length === 1 ? string[0][0] + string[0][1] : string[0][0] + string[1][0];
  }

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
      size={size}
      color={color}
      withBorder={withBorder}
      ref={ref}
      {...containerProps}
    >
      {childrenNode}
    </AvatarContainer>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
