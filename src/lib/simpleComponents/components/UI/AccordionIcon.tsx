import React, { forwardRef, useContext } from 'react';
import accordionIconConfig from '../../configs/accordionIconConfig';
import accordionContext from '../../contexts/accordion';
import { mergeClasses } from '../../utils/propsHelper';
import Icon, { type IconProps } from './Icon/Icon';

export interface AccordionIconProps extends IconProps {
  start?: boolean;
}

const AccordionIcon = forwardRef<SVGSVGElement, AccordionIconProps>((props, ref) => {
  /* --- Set context props --- */
  const { open: isAccordionOpen } = useContext(accordionContext);

  /* --- Set default props --- */
  const styles = accordionIconConfig.styles;
  const { start, className, children, ...restProps } = { ...accordionIconConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, start && styles.start, isAccordionOpen && styles.open, className);

  const childrenNode = children === undefined ? <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /> : children;

  return (
    <Icon
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {childrenNode}
    </Icon>
  );
});

AccordionIcon.displayName = 'AccordionIcon';

export default AccordionIcon;
