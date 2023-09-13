import React, { type BaseHTMLAttributes, forwardRef, useContext, type ImgHTMLAttributes } from 'react';
import avatarConfig from '../../configs/avatarConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  size: Sizes;
  color: Colors;
  withBorder: boolean;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ size, color, withBorder, className, ...restProps }, ref) => {
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

Container.displayName = 'Container';

/********************************************************************************
 *
 *   Avatar
 *
 */
export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: Sizes;
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

    childrenNode = string.length === 1 ? string[0].slice(0, 2) : string[0][0] + string[1][0];
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
    <Container
      size={size}
      color={color}
      withBorder={withBorder}
      ref={ref}
      {...containerProps}
    >
      {childrenNode}
    </Container>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
