import React, { forwardRef, type BaseHTMLAttributes, useContext, type ReactNode } from 'react';
import { type BreadcrumbsProps } from '../../configs/breadcrumbsConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Breadcrumbs = forwardRef<HTMLUListElement, BreadcrumbsProps & BaseHTMLAttributes<HTMLUListElement>>((rootProps, rootRef) => {
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
  } = setDefaultProps(defaultProps, rootProps);

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
    const { className: itemClassName, ...restItemProps } = itemsProps[i];

    const mergedItemClassName = mergeClasses(itemStyles.base, itemClassName);

    /* Set separator props */
    if (i !== childrenNodes.length - 1) {
      const separatorStyles = styles.separator;
      const { className: separatorClassName, ...restSeparatorProps } = separatorsProps[i];

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
