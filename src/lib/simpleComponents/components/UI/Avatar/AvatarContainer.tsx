import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import avatarConfig from '../../../configs/avatarConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';

interface AvatarContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant: Borders;
  size: Sizes;
  color: Colors;
  withBorder: boolean;
  borderColor: Colors;
}

const AvatarContainer = forwardRef<HTMLDivElement, AvatarContainerProps>(({ variant, size, color, withBorder, borderColor, className, ...restProps }, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = avatarConfig.styles.contanier;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    styles.colors[theme][color],
    withBorder && styles.withBorder[theme],
    withBorder && styles.borderColors[theme][borderColor],
    className
  );

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AvatarContainer.displayName = 'AvatarContainer';

export default AvatarContainer;
