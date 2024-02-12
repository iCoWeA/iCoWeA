import React, { type FC, useRef } from 'react';

import useMoveAxisToCursor from '../../hooks/useMoveAxisToCursor';
import Avatar, {
  type AvatarProps
} from '../../lib/iCoWeABaseUI/components/data-display/Avatar/Avatar';
import Image from '../../lib/iCoWeABaseUI/components/data-display/Image/Image';

export type MovableAvatarProps = AvatarProps & {
  distance: string | number;
  reverse: boolean;
};

const MovableAvatar: FC<MovableAvatarProps> = ({
  distance,
  reverse,
  src,
  alt,
  imageProps,
  ...restProps
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useMoveAxisToCursor(ref, imageRef, typeof distance === 'string' ? +distance : distance, reverse);

  return (
    <Avatar
      ref={ref}
      {...restProps}
    >
      <Image
        alt={alt}
        className="relative"
        src={src}
        style={{
          width: `calc(100% + ${2 * +distance}px)`,
          height: `calc(100% + ${2 * +distance}px)`
        }}
        ref={imageRef}
        {...imageProps}
      />
    </Avatar>
  );
};

export default MovableAvatar;
