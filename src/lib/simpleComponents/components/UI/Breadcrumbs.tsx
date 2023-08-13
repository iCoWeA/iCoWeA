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
  componentsProps: {
    items?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
    separators?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  };
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
      componentsProps,
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

    /* Set list props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        fullwidth && rootStyles.fullwidth,
        rootClassName
      )
    );

    /* Set items props */
    const itemNodes: ReactNode[] = [];
    const childrenNodes = Array.isArray(rootChildren)
      ? [...rootChildren]
      : [rootChildren];

    for (let i = 0; i < childrenNodes.length; i++) {
      let separatorNode: ReactNode;

      /* Set item props */
      const { className: itemClassName, ...restItemProps } =
        componentsProps?.items?.[i] ?? defaultProps.componentsProps.items;

      const mergedItemClassName = twMerge(
        mergeClasses(itemStyles.base, itemClassName)
      );

      /* Set separator props */
      if (i !== childrenNodes.length - 1) {
        const { className: separatorClassName, ...restSeparatorProps } =
          componentsProps?.separators?.[i] ??
          defaultProps.componentsProps.separators;

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
