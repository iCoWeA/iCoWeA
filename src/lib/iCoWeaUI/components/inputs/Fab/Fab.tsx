import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Button, { type ButtonProps } from '../Button/Button';
import fabConfig from './fabConfig';

export type FabDefaultProps = {
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  icon?: boolean;
  bordered?: boolean;
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
  const styles = fabConfig.styles;

  const mergedClassName = mergeClasses(styles.base, styles.shadow, defaultClassName, className);

  return (
    <Button
      inner={false}
      block={false}
      shadow
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Fab.displayName = 'Fab';

export default Fab;
