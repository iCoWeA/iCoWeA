/* --- ARIA ---
 * aria-current="page"
 */

import React, { type BaseHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses, isLast } from '../../../utils/utils';
import List, { type ListProps } from '../../data-display/List/List';
import ListItem, { type ListItemProps } from '../../data-display/ListItem/ListItem';
import Mark, { type MarkProps } from '../../data-display/Mark/Mark';
import breadcrumbsConfig from './breadcrumbsConfig';

export type BreadcrumbsDefaultProps = {
  color?: TextColors;
  block?: boolean;
  gap?: Gaps;
};

export type BreadcrumbsProps = BaseHTMLAttributes<HTMLElement> &
BreadcrumbsDefaultProps & {
  separator?: ReactNode;
  listProps?: ListProps;
  itemsProps?: Record<number, ListItemProps>;
  separatorsProps?: Record<number, MarkProps>;
};

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  const {
    color,
    block,
    gap,
    separator,
    listProps,
    itemsProps,
    separatorsProps,
    defaultClassName,
    className,
    children,
    ...restProps
  } = useConfig('breadcrumbs', breadcrumbsConfig.defaultProps, props);

  /* --- Set classes --- */
  const styles = breadcrumbsConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    block && styles.block,
    defaultClassName,
    className
  );

  /* --- Set items --- */
  let itemNodes;

  if (children && !Array.isArray(children)) {
    itemNodes = (
      <ListItem
        spacing="none"
        divider={false}
        block={false}
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
          divider={false}
          block={false}
          gap={gap}
          {...itemsProps?.[i]}
        >
          {children[i]}
          {!isLast(children, i) && (
            <Mark
              variant="default"
              color={color}
              size="sm"
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
    <nav
      className={mergedClassName}
      aria-label="breadcrumbs"
      ref={ref}
      {...restProps}
    >
      <List
        spacing="none"
        gap={gap}
        row
        block
        {...listProps}
      >
        {itemNodes}
      </List>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
