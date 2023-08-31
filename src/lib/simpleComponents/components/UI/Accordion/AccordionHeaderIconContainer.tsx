import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import accordionHeaderConfig from '../../../configs/accordionHeaderConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface AccordionHeaderIconContainerProps extends BaseHTMLAttributes<HTMLDivElement> {
  open: boolean;
  transitionDuration: number;
}

const AccordionHeaderIconContainer = forwardRef<HTMLDivElement, AccordionHeaderIconContainerProps>(
  ({ open, transitionDuration, style, className, children, ...restProps }, ref) => {
    /* --- Set default props --- */
    const styles = accordionHeaderConfig.styles.iconContainer;

    /* --- Set props --- */
    const mergedStyle = { transitionDuration: `${transitionDuration}ms`, ...style };

    const mergedClassName = mergeClasses(styles.base, open && styles.open, className);

    return (
      <div
        style={mergedStyle}
        className={mergedClassName}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

AccordionHeaderIconContainer.displayName = 'AccordionHeaderIconContainer';

export default AccordionHeaderIconContainer;
