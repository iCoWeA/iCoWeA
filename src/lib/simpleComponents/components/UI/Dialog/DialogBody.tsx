import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dialogBodyConfig from '../../../configs/dialogBodyConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface DialogBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  columns?: boolean;
  fullwidht?: boolean;
}

const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = dialogBodyConfig.styles;
  const { columns, fullwidht, className, ...restProps } = { ...dialogBodyConfig.defaultProps, ...props };

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

DialogBody.displayName = 'DialogBody';

export default DialogBody;
