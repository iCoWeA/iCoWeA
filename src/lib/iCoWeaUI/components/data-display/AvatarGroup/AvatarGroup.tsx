import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Flex, { type FlexProps } from '../../layouts/Flex/Flex';
import avatarGroupConfig from './avatarGroupConfig';

export type AvatarGroupDefaultProps = {
  vertical?: boolean;
};

export type AvatarGroupProps = FlexProps & AvatarGroupDefaultProps;

const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>((props, ref) => {
  const { vertical, defaultClassName, className, ...restProps } = useConfig(
    'avatarGroup',
    avatarGroupConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = avatarGroupConfig.styles;
  const orientation = vertical ? 'vertical' : 'horizontal';

  const mergedClassName = mergeClasses(
    styles.orientations[orientation],
    defaultClassName,
    className
  );

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="start"
      align="center"
      gap="none"
      grow={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
