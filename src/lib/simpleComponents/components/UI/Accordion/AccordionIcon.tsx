import React, { type ReactNode, forwardRef } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';

export interface AccordionIconProps extends IconProps {
  open: boolean;
  icon: ReactNode;
}

const AccordionIcon = forwardRef<SVGSVGElement, AccordionIconProps>(({ open, icon, className, ...restProps }, ref) => {
  if (icon !== undefined) {
    return icon;
  }

  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.icon;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

  return (
    <Icon
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

AccordionIcon.displayName = 'AccordionIcon';

export default AccordionIcon;
