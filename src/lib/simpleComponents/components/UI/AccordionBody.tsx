import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AccordionBodyDefaultProps {
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface AccordionBodyProps
  extends AccordionBodyDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (
    {
      className: bodyClassName,
      children: bodyChildren,
      rootProps,
      containerProps,
      ...restBodyProps
    },
    rootRef
  ) => {
    const { isOpen } = useContext(accordionContext);
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordionBody;
    const rootStyles = styles.root;
    const containerStyles = styles.constainer;
    const bodyStyles = styles.body;

    rootProps = rootProps ?? defaultProps.rootProps;
    containerProps = containerProps ?? defaultProps.containerProps;

    /* Set root props */
    const { className: rootClassName, ...restRootProps } = rootProps;

    const mergedRootClassName = twMerge(
      mergeClasses(rootStyles.base, isOpen && rootStyles.open, rootClassName)
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      containerProps;

    const mergedContainerClassName = twMerge(
      mergeClasses(containerStyles.base, containerClassName)
    );

    /* Set body props */
    const mergedBodyClassName = twMerge(
      mergeClasses(bodyStyles.base, bodyClassName)
    );

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        <div
          className={mergedContainerClassName}
          {...restContainerProps}
        >
          <div
            className={mergedBodyClassName}
            {...restBodyProps}
          >
            {bodyChildren}
          </div>
        </div>
      </div>
    );
  }
);

AccordionBody.displayName = 'AccordionBody';

export default AccordionBody;
