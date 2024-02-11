import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
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
  const mergedClassName = useMemo(() => {
    const styles = avatarGroupConfig.styles;
    const orientation = vertical ? 'vertical' : 'horizontal';

    return mergeClasses(styles.orientations[orientation], defaultClassName, className);
  }, [vertical, defaultClassName, className]);

  return (
    <Flex
      direction={vertical ? 'col' : 'row'}
      wrap="nowrap"
      justify="start"
      align="center"
      gap="none"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AvatarGroup.displayName = 'AvatarGroup';

export default AvatarGroup;
