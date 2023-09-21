import React, { forwardRef } from 'react';
import iconButtonConfig from '../../configs/iconButtonConfig';
import { mergeClasses } from '../../utils/propsHelper';
import Button, { type ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  borderShape?: Shapes;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = iconButtonConfig.styles;
  const { variant, size, borderShape, className, ...restProps } = {
    ...iconButtonConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.borderShapes[borderShape],
    styles.sizes[size],
    variant === 'outlined' && styles.outlineSizes[size],
    className
  );

  return (
    <Button
      variant={variant}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
