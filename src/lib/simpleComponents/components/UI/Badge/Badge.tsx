import React, { type BaseHTMLAttributes, type ReactNode, forwardRef, useContext } from 'react';
import badgeConfig from '../../../configs/badgeConfig';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import BadgeContainer from './BadgeContainer';

export interface BadgeProps extends BaseHTMLAttributes<HTMLSpanElement> {
  badgeContent?: ReactNode;
  position?: CornerPositions;
  color?: ContainerColors;
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
    <BadgeContainer
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
    </BadgeContainer>
  );
});

Badge.displayName = 'Badge';

export default Badge;
