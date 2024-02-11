import React, { type MutableRefObject, type ReactNode, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import badgeConfig from './badgeConfig';

export type BadgeDefaultProps = {
  placement?: CornerPlacements;
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  invisible?: boolean;
};

export type BadgeProps = Omit<FlexProps, 'content'> &
BadgeDefaultProps & {
  anchorProps?: FlexProps;
  badgeRef?: MutableRefObject<HTMLDivElement> | null;
  content?: ReactNode;
  disabled?: boolean;
};

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    placement,
    size,
    border,
    invisible,
    anchorProps,
    badgeRef,
    defaultClassName,
    className,
    content,
    children,
    ...restProps
  } = useConfig('badge', badgeConfig.defaultProps, props);

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = badgeConfig.styles;
    const sizeVariant = !content ? 'empty' : border ? 'border' : 'default';

    return mergeClasses(
      styles.base,
      border && styles.border,
      invisible && styles.invisible,
      styles.placements[placement],
      styles.sizes[sizeVariant][size],
      defaultClassName,
      className
    );
  }, [!!content, border, invisible, placement, size, defaultClassName, className]);

  return (
    <Flex
      direction="row"
      wrap="nowrap"
      justify="start"
      align="stretch"
      gap="none"
      position="relative"
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
        position="absolute"
        border={border}
        radius="circular"
        className={mergedClassName}
        ref={badgeRef}
        {...restProps}
      >
        {content}
      </Flex>
    </Flex>
  );
});

Badge.displayName = 'Badge';

export default Badge;
