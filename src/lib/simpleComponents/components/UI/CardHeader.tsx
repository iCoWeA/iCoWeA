import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CardHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ columns, fullwidht, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.cardHeader;

    columns = columns ?? defaultProps.columns;
    fullwidht = fullwidht ?? defaultProps.fullwidht;

    const mergedClassName = twMerge(
      mergeClasses(
        styles.base,
        columns && styles.columns,
        fullwidht && styles.fullwidth,
        className
      )
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

CardHeader.displayName = 'CardHeader';

export default CardHeader;
