import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from './Collapse';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  rootProps?: CollapseProps;
  className?: string;
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>((bodyProps, rootRef) => {
  const { open, duration } = useContext(accordionContext);
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionBody;
  const { rootProps, className: bodyClassName, ...restBodyProps } = mergeProps(defaultProps, bodyProps);

  /* Set root props */
  const { open: rootOpen = open, transitionConfig: rootTransitionConfig, ...restRootProps } = rootProps;
  const mergedRootTransitionConfig = mergeProps({ enterDuration: duration, exitDuration: duration }, rootTransitionConfig ?? {});

  /* Set body props */
  const bodyStyles = styles.body;
  const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

  return (
    <Collapse
      open={rootOpen}
      transitionConfig={mergedRootTransitionConfig}
      ref={rootRef}
      {...restRootProps}
    >
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      />
    </Collapse>
  );
});

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
