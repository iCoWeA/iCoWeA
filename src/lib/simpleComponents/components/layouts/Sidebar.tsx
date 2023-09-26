import React, { type HTMLAttributes, forwardRef, type BaseHTMLAttributes } from 'react';
import sidebarConfig from '../../configs/sidebarConfig';
import { mergeClasses } from '../../utils/utils';
import Box, { type BoxProps } from '../UI/Box';

/* ARIA
 *
 * Set aria-labeledby to multiple region (aria-label)
 *
 */

/********************************************************************************
 *
 *   Body container
 *
 */

interface ContainerProps extends HTMLAttributes<HTMLElement> {}

const Container = forwardRef<HTMLElement, ContainerProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = sidebarConfig.styles.container;

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <aside
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Container.displayName = 'Container';

export interface SidebarProps extends BoxProps {
  divider?: 'left-text' | 'right-text' | 'both-text' | 'left-solid' | 'right-solid' | 'both-solid';
  containerProps?: BaseHTMLAttributes<HTMLElement>;
}

const Sidebar = forwardRef<HTMLElement, SidebarProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = sidebarConfig.styles.box;
  const { divider, containerProps, className, ...restProps } = { ...sidebarConfig.defaultProps.box, ...props };
  const mergedContainerProps = { ...sidebarConfig.defaultProps.container, ...containerProps };

  /* --- Set classes --- */
  const mergedClassName = mergeClasses(
    (divider === 'left-text' || divider === 'left-solid' || divider === 'both-text' || divider === 'both-solid') && styles.leftDivider,
    (divider === 'right-text' || divider === 'right-solid' || divider === 'both-text' || divider === 'both-solid') && styles.rightDivider,
    className
  );

  return (
    <Container
      ref={ref}
      {...mergedContainerProps}
    >
      <Box
        outlined={divider === 'both-solid' || divider === 'left-solid' || divider === 'right-solid' ? 'solid' : 'plain'}
        className={mergedClassName}
        {...restProps}
      />
    </Container>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
