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
  bordered?: boolean;
  invisible?: boolean;
};

export type BadgeProps = Omit<FlexProps, 'content'> &
BadgeDefaultProps & {
  anchorProps?: BadgeAnchorDefaultProps;
  content?: ReactNode;
};

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    position,
    size,
    bordered,
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
  const sizeVariant = !content ? 'empty' : bordered ? 'bordered' : 'default';

  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    styles.sizes[sizeVariant][size],
    bordered && styles.border,
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
        justify="center"
        align="center"
        wrap="wrap"
        gap="base"
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
