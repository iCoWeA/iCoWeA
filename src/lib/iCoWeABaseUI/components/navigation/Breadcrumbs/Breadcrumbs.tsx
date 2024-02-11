/* --- ARIA ---
 * aria-current="page"
 */

import React, { type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { cutTextColor, isLast } from '../../../utils/utils';
import ListItem, { type ListItemProps } from '../../data-display/ListItem/ListItem';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import Navigation, { type NavigationProps } from '../../layouts/Navigation/Navigation';
import breadcrumbsConfig from './breadcrumbsConfig';

export type BreadcrumbsDefaultProps = {
  block?: boolean;
  color?: TextColors;
  gap?: Gaps;
};

export type BreadcrumbsProps = Omit<NavigationProps, 'color'> &
BreadcrumbsDefaultProps & {
  separator?: ReactNode;
  itemsProps?: Record<number, ListItemProps>;
  separatorsProps?: Record<number, MarkProps>;
};

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  const { block, color, gap, separator, itemsProps, separatorsProps, children, ...restProps } =
    useConfig('breadcrumbs', breadcrumbsConfig.defaultProps, props);

  /* --- Set items --- */
  let itemNodes;

  if (children && !Array.isArray(children)) {
    itemNodes = (
      <ListItem
        spacing="none"
        variant="default"
        color="inherit"
        border={false}
        radius="none"
        justify="start"
        align="stretch"
        gap={gap}
        {...itemsProps?.[0]}
      >
        {children}
      </ListItem>
    );
  }

  if (children && Array.isArray(children)) {
    itemNodes = [];

    for (let i = 0; i < children.length; i++) {
      itemNodes[i] = (
        <ListItem
          key={i}
          spacing="none"
          variant="default"
          color="inherit"
          border={false}
          radius="none"
          justify="start"
          align="stretch"
          gap={gap}
          {...itemsProps?.[i]}
        >
          {children[i]}
          {!isLast(children, i) && (
            <Mark
              size="sm"
              variant="default"
              color="inherit"
              border={false}
              {...separatorsProps?.[i]}
            >
              {separator}
            </Mark>
          )}
        </ListItem>
      );
    }
  }

  return (
    <Navigation
      vertical={false}
      block={block}
      variant={color.startsWith('on') ? 'default' : 'text'}
      color={cutTextColor(color)}
      border={false}
      justify={block ? 'center' : 'start'}
      align="center"
      gap={gap}
      aria-label="breadcrumbs"
      ref={ref}
      {...restProps}
    >
      {itemNodes}
    </Navigation>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
