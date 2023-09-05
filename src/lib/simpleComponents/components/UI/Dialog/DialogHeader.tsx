import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dialogHeaderConfig from '../../../configs/dialogHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface DialogHeaderProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>((props, ref) => {
  /* --- Set default props --- */
  const { defaultProps, styles } = dialogHeaderConfig;
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

DialogHeader.displayName = 'DialogHeader';

export default DialogHeader;
