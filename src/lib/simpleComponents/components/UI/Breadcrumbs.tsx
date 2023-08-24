import React, { forwardRef, type BaseHTMLAttributes, useContext, type ReactNode, type LiHTMLAttributes } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface BreadcrumbsProps extends BaseHTMLAttributes<HTMLUListElement> {
  separator?: ReactNode;
  color?: Colors;
  fullwidth?: boolean;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  className?: string;
  children?: ReactNode;
}

const Breadcrumbs = forwardRef<HTMLUListElement, BreadcrumbsProps>((rootProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.breadcrumbs;
  const {
    separator,
    color,
    fullwidth,
    itemsProps,
    separatorsProps,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = mergeProps(defaultProps, rootProps);

  /* Set root props */
  const rootStyles = styles.root;
  const mergedRootClassName = mergeClasses(rootStyles.base, fullwidth && rootStyles.fullwidth, rootClassName);

  /* Set items props */
  const itemNodes: ReactNode[] = [];
  const childrenNodes = Array.isArray(rootChildren) ? [...rootChildren] : [rootChildren];

  for (let i = 0; i < childrenNodes.length; i++) {
    let separatorNode: ReactNode;

    /* Set item props */
    const itemStyles = styles.item;
    const { className: itemClassName, ...restItemProps } = itemsProps[i] ?? {};

    const mergedItemClassName = mergeClasses(itemStyles.base, itemClassName);

    /* Set separator props */
    if (i !== childrenNodes.length - 1) {
      const separatorStyles = styles.separator;
      const { className: separatorClassName, ...restSeparatorProps } = separatorsProps[i] ?? {};

      const mergedSeparatorClassName = mergeClasses(separatorStyles.base, separatorStyles.colors[theme][color], separatorClassName);

      separatorNode = (
        <span
          className={mergedSeparatorClassName}
          {...restSeparatorProps}
        >
          {separator}
        </span>
      );
    }

    itemNodes[i] = (
      <li
        className={mergedItemClassName}
        key={i}
        {...restItemProps}
      >
        {childrenNodes[i]}
        {separatorNode}
      </li>
    );
  }

  return (
    <ul
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
    >
      {itemNodes}
    </ul>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
