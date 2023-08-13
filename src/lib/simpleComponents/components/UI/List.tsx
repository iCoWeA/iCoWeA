import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface ListProps extends BaseHTMLAttributes<HTMLUListElement> {
  row?: boolean;
  disableGap?: boolean;
}

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
