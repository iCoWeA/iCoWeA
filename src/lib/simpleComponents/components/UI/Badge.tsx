import React, { type BaseHTMLAttributes, forwardRef, type ReactNode, useContext } from 'react';
import badgeConfig from '../../configs/badgeConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Container
 *
 */
interface ContainerProps extends BaseHTMLAttributes<HTMLDivElement> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = badgeConfig.styles.container;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

/********************************************************************************
 *
 *   Badge
 *
 */
export interface BadgeProps extends BaseHTMLAttributes<HTMLSpanElement> {
  badgeContent?: ReactNode;
  position?: CornerPositions;
  color?: Colors;
  withBorder?: boolean;
  invisible?: boolean;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = badgeConfig.styles.badge;
  const { badgeContent, position, color, withBorder, invisible, containerProps, className, children, ...restProps } = {
    ...badgeConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(
    styles.base,
    styles.positions[position],
    styles.colors[theme][color],
    badgeContent === undefined && styles.empty,
    badgeContent !== undefined && styles.translate[position],
    withBorder && styles.withBorder,
    invisible && styles.invisible,
    className
  );

  return (
    <Container
      ref={ref}
      {...containerProps}
    >
      {children}
      <span
        className={mergedClassName}
        {...restProps}
      >
        {badgeContent}
      </span>
    </Container>
  );
});

Badge.displayName = 'Badge';

export default Badge;
