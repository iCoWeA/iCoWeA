import React, { forwardRef } from 'react';
import popoverConfig from '../../../configs/popoverConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface PopoverBackdropProps extends BackdropProps {}

const PopoverBackdrop = forwardRef<HTMLDivElement, PopoverBackdropProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = popoverConfig.styles.backdrop;

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

PopoverBackdrop.displayName = 'PopoverBackdrop';

export default PopoverBackdrop;
