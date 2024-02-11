import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import LinkButton, { type LinkButtonProps } from '../../navigation/LinkButton/LinkButton';
import listLinkConfig from './listLinkConfig';

export type ListLinkDefaultProps = {
  size?: Sizes;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type ListLinkProps = LinkButtonProps &
ListLinkDefaultProps & {
  disabled?: boolean;
};

const ListLink = forwardRef<HTMLAnchorElement, ListLinkProps>((props, ref) => {
  const { size, defaultClassName, className, ...restProps } = useConfig(
    'listLink',
    listLinkConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = listLinkConfig.styles;

    return mergeClasses(styles.base, styles.sizes[size], defaultClassName, className);
  }, [size, defaultClassName, className]);

  return (
    <LinkButton
      size={size}
      block
      icon={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

ListLink.displayName = 'ListLink';

export default ListLink;
