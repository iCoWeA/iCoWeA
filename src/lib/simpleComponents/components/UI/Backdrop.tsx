import React, { forwardRef, type BaseHTMLAttributes, useContext } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface BackdropDefaultProps {
  invisible?: boolean;
}

interface BackdropProps
  extends BackdropDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ invisible, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.backdrop;

    invisible = invisible ?? defaultProps.invisible;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, invisible && styles.invisible, className)
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

Backdrop.displayName = 'Backdrop';

export default Backdrop;
