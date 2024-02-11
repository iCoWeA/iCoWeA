import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import Image, { type ImageProps } from '../Image/Image';
import avatarConfig from './avatarConfig';

export type AvatarDefaultProps = {
  size?: Spacings;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
};

export type AvatarProps = FlexProps &
AvatarDefaultProps & {
  imageProps?: ImageProps;
  alt?: string;
  src?: string;
};

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const {
    size,
    border,
    radius,
    imageProps,
    defaultClassName,
    alt,
    src,
    className,
    children,
    ...restProps
  } = useConfig('avatar', avatarConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = avatarConfig.styles;
    const sizeVariant = border ? 'border' : 'default';

    return mergeClasses(
      styles.base,
      border && styles.border,
      styles.sizes[sizeVariant][size],
      defaultClassName,
      className
    );
  }, [border, size, defaultClassName, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="center"
      align="center"
      gap="none"
      border={border}
      radius={radius}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {src && src !== '' && (
        <Image
          radius={radius}
          alt={alt}
          src={src}
          {...imageProps}
        />
      )}
    </Flex>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
