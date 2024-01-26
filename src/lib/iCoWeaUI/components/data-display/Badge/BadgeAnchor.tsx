import React, { forwardRef } from 'react';

import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import badgeConfig from './badgeConfig';

export type BadgeAnchorDefaultProps = FlexProps;

export type BadgeAnchorProps = BadgeAnchorDefaultProps;

const BadgeAnchor = forwardRef<HTMLDivElement, BadgeAnchorProps>(
  ({ className, ...restProps }, ref) => {
    /* --- Set classes --- */
    const styles = badgeConfig.styles.anchor;

    const mergedClassName = mergeClasses(styles.base, className);

    return (
      <Flex
        direction="row"
        wrap="wrap"
        justify="start"
        align="stretch"
        gap="base"
        grow={false}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

BadgeAnchor.displayName = 'BadgeAnchor';

export default BadgeAnchor;
