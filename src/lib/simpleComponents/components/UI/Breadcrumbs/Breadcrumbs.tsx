import React, { forwardRef, type BaseHTMLAttributes, type ReactNode, type LiHTMLAttributes } from 'react';
import breadcrumbsConfig from '../../../configs/breadcrumbsConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import BreadcrumbsSeparator from './BreadcrumbsSeparator';
import BreadcrumbsItem from './BreadcrumbsItem';

export interface BreadcrumbsProps extends BaseHTMLAttributes<HTMLUListElement> {
  separator?: ReactNode;
  color?: Colors;
  fullwidth?: boolean;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, BaseHTMLAttributes<HTMLSpanElement>>;
}

const Breadcrumbs = forwardRef<HTMLUListElement, BreadcrumbsProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.list;
  const { separator, color, fullwidth, itemsProps, separatorsProps, className, children, ...restProps } = { ...breadcrumbsConfig.defaultProps, ...props };

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
    <ul
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {itemNodes}
    </ul>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
