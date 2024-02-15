import React, { type FC, useRef } from 'react';

import useMoveAxisToCursor from '../../hooks/useMoveAxisToCursor';
import Avatar, {
  type AvatarProps
} from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Image from '../../lib/iCoWeABaseUI/components/data-display/Image/Image';

export type MovableAvatarProps = AvatarProps & {
  distance?: number;
  reverse?: boolean;
};

const MovableAvatar: FC<MovableAvatarProps> = ({
  distance = 10,
  reverse = false,
  imageProps,
  alt,
  src,
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useMoveAxisToCursor(ref, imageRef, distance, reverse);

  return (
    <Avatar
      border
      className="aspect-square h-auto w-full max-w-[25rem] border-8"
      ref={ref}
      {...restProps}
    >
      <Image
        alt={alt}
        className="relative"
        src={src}
        style={{
          width: distance === 0 ? '100%' : `calc(100% + ${2 * distance}px`,
          height: distance === 0 ? '100%' : `calc(100% + ${2 * distance}px`
        }}
        ref={imageRef}
        {...imageProps}
      />
    </Avatar>
  );
};

export default MovableAvatar;
