import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CardBodyDefaultProps {
  columns?: boolean;
  fullwidht?: boolean;
}

export interface CardBodyProps
  extends CardBodyDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ columns, fullwidht, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.cardBody;

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

CardBody.displayName = 'CardBody';

export default CardBody;
