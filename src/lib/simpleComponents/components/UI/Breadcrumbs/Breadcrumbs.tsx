import React, { type BaseHTMLAttributes, type ReactNode, type OlHTMLAttributes, type LiHTMLAttributes, forwardRef } from 'react';
import breadcrumbsConfig from '../../../configs/breadcrumbsConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import BreadcrumbsItem from './BreadcrumbsItem';
import BreadcrumbsSeparator from './BreadcrumbsSeparator';

export interface BreadcrumbsProps extends BaseHTMLAttributes<HTMLElement> {
  separator?: ReactNode;
  color?: Colors;
  fullwidth?: boolean;
  listProps?: OlHTMLAttributes<HTMLOListElement>;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, BaseHTMLAttributes<HTMLSpanElement>>;
}

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.container;
  const { separator, color, fullwidth, listProps, itemsProps, separatorsProps, className, children, ...restProps } = {
    ...breadcrumbsConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidth && styles.fullwidth, className);

  /* --- Set items props --- */
  const itemNodes: ReactNode[] = [];
  const childrenNodes = Array.isArray(children) ? [...children] : [children];

  for (let i = 0; i < childrenNodes.length; i++) {
    /* --- Set separator props --- */
    let separatorNode: ReactNode;

    if (i !== childrenNodes.length - 1) {
      separatorNode = (
        <BreadcrumbsSeparator
          color={color}
          {...(separatorsProps[i] ?? {})}
        >
          {separator}
        </BreadcrumbsSeparator>
      );
    }

    /* --- Set item props --- */
    itemNodes[i] = (
      <BreadcrumbsItem
        key={i}
        {...(itemsProps[i] ?? {})}
      >
        {childrenNodes[i]}
        {separatorNode}
      </BreadcrumbsItem>
    );
  }

  return (
    <nav
      aria-label="breadcrumb"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <ul {...listProps}>{itemNodes}</ul>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
