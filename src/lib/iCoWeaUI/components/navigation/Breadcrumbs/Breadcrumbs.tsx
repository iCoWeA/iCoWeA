/* ARIA
 *
 * Set aria-current="page" to current page
 *
 */

import React, { type BaseHTMLAttributes, type ReactNode, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import useTheme from '../../../hooks/useTheme';
import { mergeClasses, isLast } from '../../../utils/utils';
import List, { type ListProps } from '../../data-display/List/List';
import BreadcrumbsContainer, {
  type BreadcrumbsContainerDefaultProps
} from './BreadcrumbsContainer';
import BreadcrumbsItem, { type BreadcrumbsItemDefaultProps } from './BreadcrumbsItem';
import BreadcrumbsSeparator, {
  type BreadcrumbsSeparatorDefaultProps
} from './BreadcrumbsSeparator';
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
  itemsProps?: Record<number, BreadcrumbsItemDefaultProps>;
  containerProps?: Record<number, BreadcrumbsContainerDefaultProps>;
  separatorsProps?: Record<number, BreadcrumbsSeparatorDefaultProps>;
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
  const theme = useTheme();

  /* --- Set classes --- */
  const styles = breadcrumbsConfig.styles.root;

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
      <BreadcrumbsItem
        gap={gap}
        {...itemsProps?.[0]}
      >
        <BreadcrumbsContainer>{children}</BreadcrumbsContainer>
      </BreadcrumbsItem>
    );
  }

  if (children && Array.isArray(children)) {
    itemNodes = [];

    for (let i = 0; i < children.length; i++) {
      itemNodes[i] = (
        <BreadcrumbsItem
          key={i}
          gap={gap}
          {...itemsProps?.[i]}
        >
          <BreadcrumbsContainer>{children[i]}</BreadcrumbsContainer>
          {!isLast(children, i) && (
            <BreadcrumbsSeparator
              theme={theme}
              color={color}
              {...separatorsProps?.[i]}
            >
              {separator}
            </BreadcrumbsSeparator>
          )}
        </BreadcrumbsItem>
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
        justify="center"
        align="center"
        gap={gap}
        row
        {...listProps}
      >
        {itemNodes}
      </List>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
