import React, { forwardRef } from 'react';
import drawerConfig from '../../../configs/drawerConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Backdrop, { type BackdropProps } from '../Backdrop/Backdrop';

interface DrawerBackdropProps extends BackdropProps {}

const DrawerBackdrop = forwardRef<HTMLDivElement, DrawerBackdropProps>(({ className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = drawerConfig.styles.backdrop;

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

DrawerBackdrop.displayName = 'DrawerBackdrop';

export default DrawerBackdrop;
