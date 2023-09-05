import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dialogFooterConfig from '../../../configs/dialogFooterConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface DialogFooterProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const DialogFooter = forwardRef<HTMLDivElement, DialogFooterProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = dialogFooterConfig;
  const { columns, fullwidht, className, ...restProps } = { ...defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, fullwidht && styles.fullwidth, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

DialogFooter.displayName = 'DialogFooter';

export default DialogFooter;
