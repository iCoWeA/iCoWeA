import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import Image, { type ImageProps } from '../Image/Image';
import avatarConfig from './avatarConfig';

export type AvatarDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  bordered?: boolean;
};

export type AvatarProps = StackProps &
AvatarDefaultProps & {
  src?: string;
  alt?: string;
  imageProps?: ImageProps;
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    size,
    bordered,
    imageProps,
    src,
    alt,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('avatar', avatarConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = avatarConfig.styles;
  const sizeVariant = bordered ? 'bordered' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[sizeVariant][size],
    bordered && styles.border,
    defaultClassName,
    className
  );

  return (
    <Stack
      justify="center"
      align="center"
      gap="base"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {src && src !== '' && (
        <Image
          block
          src={src}
          alt={alt}
          {...imageProps}
        />
      )}
    </Stack>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
