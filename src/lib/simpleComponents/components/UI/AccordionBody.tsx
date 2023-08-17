import React, { type BaseHTMLAttributes, forwardRef, useContext } from 'react';
import Collapse, { type CollapseProps } from './Collapse';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  rootProps?: CollapseProps;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, AccordionBodyProps>((bodyProps, rootRef) => {
  const { open, duration } = useContext(accordionContext);
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.accordionBody;
  const {
    rootProps,
    className: bodyClassName,
    ...restBodyProps
  } = setDefaultProps(bodyProps, { ...defaultProps, rootProps: { open, transitionConfig: { enterDuration: duration, exitDuration: duration } } });

  /* Set body props */
  const bodyStyles = styles.body;
  const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

  return (
    <Collapse
      ref={rootRef}
      {...rootProps}
    >
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      />
    </Collapse>
  );
});

Card.displayName = 'Card';

export default Card;
