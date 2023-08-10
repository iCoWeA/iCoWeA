import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ListDefaultProps {
  row?: boolean;
  disableGap?: boolean;
}

export interface ListProps
  extends ListDefaultProps,
  BaseHTMLAttributes<HTMLUListElement> {}

const List = forwardRef<HTMLUListElement, ListProps>(
  ({ row, disableGap, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.list;

    row = row ?? defaultProps.row;
    disableGap = disableGap ?? defaultProps.disableGap;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        row && styles.row,
        disableGap && styles.disableGap,
        className
      )
    );

    return (
      <ul
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

List.displayName = 'List';

export default List;
