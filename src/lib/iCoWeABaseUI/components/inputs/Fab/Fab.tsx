import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Button, { type ButtonProps } from '../Button/Button';
import fabConfig from './fabConfig';

export type FabDefaultProps = {
  size?: Sizes;
  icon?: boolean;
  variant?: Variants;
  color?: DefaultColors;
  border?: boolean;
  radius?: Radiuses;
  loading?: boolean;
  noRipple?: boolean;
};

export type FabProps = ButtonProps & FabDefaultProps;

const Fab = forwardRef<HTMLButtonElement, FabProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'fab',
    fabConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = fabConfig.styles;

    return mergeClasses(styles.base, styles.shadow, defaultClassName, className);
  }, [defaultClassName, className]);

  return (
    <Button
      block={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Fab.displayName = 'Fab';

export default Fab;
