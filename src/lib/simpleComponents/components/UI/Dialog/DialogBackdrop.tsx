import React, { forwardRef } from 'react';
import dialogConfig from '../../../configs/dialogConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface DialogBackdropProps extends BackdropProps {}

const DialogBackdrop = forwardRef<HTMLDivElement, DialogBackdropProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = dialogConfig.styles.backdrop;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Backdrop
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

DialogBackdrop.displayName = 'DialogBackdrop';

export default DialogBackdrop;
