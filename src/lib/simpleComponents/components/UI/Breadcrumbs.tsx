import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useContext,
  type LiHTMLAttributes,
  type ReactNode
} from 'react';
import { type BreadcrumbsColors } from '../../configs/breadcrumbsConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface BreadcrumbsDefaultProps {
  separator?: ReactNode;
  color?: BreadcrumbsColors;
  fullwidth?: boolean;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
}

export interface BreadcrumbsProps
  extends BreadcrumbsDefaultProps,
  BaseHTMLAttributes<HTMLUListElement> {}

const Breadcrumbs = forwardRef<HTMLUListElement, BreadcrumbsProps>(
  (
    {
      separator,
      color,
      fullwidth,
      itemsProps,
      separatorsProps,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.breadcrumbs;
    const rootStyles = styles.root;
    const itemStyles = styles.item;
    const separatorStyles = styles.separator;

    separator = separator ?? defaultProps.separator;
    color = color ?? defaultProps.color;
    fullwidth = fullwidth ?? defaultProps.fullwidth;
    itemsProps = itemsProps ?? defaultProps.itemsProps;
    separatorsProps = separatorsProps ?? defaultProps.separatorsProps;

    /* Set list props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        fullwidth && rootStyles.fullwidth,
        rootClassName
      )
    );

    /* Set items props */
    const childrenNodes = Array.isArray(rootChildren)
      ? [...rootChildren]
      : [rootChildren];
    const itemNodes: ReactNode[] = [];

    for (let i = 0; i < childrenNodes.length; i++) {
      let separatorNode: ReactNode;

      /* Set item props */
      const { className: itemClassName, ...restItemProps } =
        itemsProps[i] ?? {};

      const mergedItemClassName = twMerge(
        mergeClasses(itemStyles.base, itemClassName)
      );

      /* Set separator props */
      if (i !== childrenNodes.length - 1) {
        const { className: separatorClassName, ...restSeparatorProps } =
          separatorsProps[i] ?? {};

        const mergedSeparatorClassName = twMerge(
          mergeClasses(
            separatorStyles.base,
            separatorStyles.colors[theme][color],
            separatorClassName
          )
        );

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
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
