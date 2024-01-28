import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import BadgeAnchor, { type BadgeAnchorDefaultProps } from './BadgeAnchor';
import badgeConfig from './badgeConfig';

export type BadgeDefaultProps = {
  position?: CornerPositions;
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  border?: boolean;
  invisible?: boolean;
};

export type BadgeProps = Omit<FlexProps, 'content'> &
BadgeDefaultProps & {
  anchorProps?: BadgeAnchorDefaultProps;
  content?: ReactNode;
  disabled?: boolean;
};

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    position,
    size,
    border,
    invisible,
    content,
    anchorProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('badge', badgeConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = badgeConfig.styles.root;
  const sizeVariant = !content ? 'empty' : border ? 'border' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    styles.sizes[sizeVariant][size],
    border && styles.border,
    invisible && styles.invisible,
    defaultClassName,
    className
  );

  return (
    <BadgeAnchor
      ref={ref}
      {...anchorProps}
    >
      {children}
      <Flex
        direction="row"
        wrap="nowrap"
        justify="center"
        align="center"
        gap="base"
        grow={false}
        className={mergedClassName}
        {...restProps}
      >
        {content}
      </Flex>
    </BadgeAnchor>
  );
});

Badge.displayName = 'Badge';

export default Badge;
