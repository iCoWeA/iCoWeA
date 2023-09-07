import React, { forwardRef } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import Icon, { type IconProps } from '../Icon/Icon';

export interface AccordionIconProps extends IconProps {
  open: boolean;
}

const AccordionIcon = forwardRef<SVGSVGElement, AccordionIconProps>(({ open, className, ...restProps }, ref) => {
  /* --- Set default props --- */
  const styles = accordionHeaderConfig.styles.icon;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

  return (
    <Icon
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </Icon>
  );
});

AccordionIcon.displayName = 'AccordionIcon';

export default AccordionIcon;
