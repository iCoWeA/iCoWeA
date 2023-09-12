import React, { type BaseHTMLAttributes, type FC, useContext, type LiHTMLAttributes, type OlHTMLAttributes, type ReactNode, forwardRef } from 'react';
import breadcrumbsConfig from '../../configs/breadcrumbsConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Separator
 *
 */
interface SeparatorProps extends BaseHTMLAttributes<HTMLSpanElement> {
  color: Colors;
}

const Separator: FC<SeparatorProps> = ({ color, className, ...restProps }) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.separator;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, styles.colors[theme][color], className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Item
 *
 */
interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {}

const Item: FC<ItemProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.item;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <li
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   List
 *
 */
interface ListProps extends OlHTMLAttributes<HTMLOListElement> {}

const List: FC<ListProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.list;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <ol
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Breadcrumbs
 *
 */
export interface BreadcrumbsProps extends BaseHTMLAttributes<HTMLElement> {
  color?: Colors;
  separator?: ReactNode;
  fullwidth?: boolean;
  listProps?: OlHTMLAttributes<HTMLOListElement>;
  itemsProps?: Record<number, LiHTMLAttributes<HTMLLIElement>>;
  separatorsProps?: Record<number, BaseHTMLAttributes<HTMLSpanElement>>;
}

const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = breadcrumbsConfig.styles.container;
  const { color, separator, fullwidth, listProps, itemsProps, separatorsProps, className, children, ...restProps } = {
    ...breadcrumbsConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, fullwidth && styles.fullwidth, className);

  /* --- Set items props --- */
  const childrenNodes = Array.isArray(children) ? [...children] : [children];
  const itemNodes: ReactNode[] = [];

  for (let i = 0; i < childrenNodes.length; i++) {
    /* --- Set separator props --- */
    let separatorNode: ReactNode;

    if (i !== childrenNodes.length - 1) {
      separatorNode = (
        <Separator
          color={color}
          {...(separatorsProps[i] ?? {})}
        >
          {separator}
        </Separator>
      );
    }

    /* --- Set item props --- */
    itemNodes[i] = (
      <Item
        key={i}
        {...(itemsProps[i] ?? {})}
      >
        {childrenNodes[i]}
        {separatorNode}
      </Item>
    );
  }

  return (
    <nav
      aria-label="breadcrumb"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <List {...listProps}>{itemNodes}</List>
    </nav>
  );
});

Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
