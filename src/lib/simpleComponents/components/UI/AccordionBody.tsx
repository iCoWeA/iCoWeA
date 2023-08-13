import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent
} from 'react';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AccordionBodyDefaultProps {
  componentsProps: {
    root?: BaseHTMLAttributes<HTMLDivElement>;
    container?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

export interface AccordionBodyProps
  extends AccordionBodyDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (
    {
      className: bodyClassName,
      children: bodyChildren,
      componentsProps,
      ...restBodyProps
    },
    rootRef
  ) => {
    const { isMounted, isOpen, unmountOnExit, unmount } =
      useContext(accordionContext);
    const { config } = useContext(themeContext);

    if (unmountOnExit && !isMounted) {
      return <></>;
    }

    const { defaultProps, styles } = config.accordionBody;
    const rootStyles = styles.root;
    const containerStyles = styles.constainer;
    const bodyStyles = styles.body;

    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set root props */
    const {
      className: rootClassName,
      onTransitionEnd: onRootTransitionEnd,
      ...restRootProps
    } = componentsProps.root ?? {};

    const transitionEndRootHandler = (
      event: TransitionEvent<HTMLDivElement>
    ): void => {
      if (unmountOnExit && !isOpen) {
        unmount();
      }

      if (onRootTransitionEnd !== undefined) {
        onRootTransitionEnd(event);
      }
    };

    const mergedRootClassName = twMerge(
      mergeClasses(rootStyles.base, isOpen && rootStyles.open, rootClassName)
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      componentsProps.container ?? {};

    const mergedContainerClassName = twMerge(
      mergeClasses(containerStyles.base, containerClassName)
    );

    /* Set body props */
    const mergedBodyClassName = twMerge(
      mergeClasses(bodyStyles.base, bodyClassName)
    );

    return (
      <div
        onTransitionEnd={transitionEndRootHandler}
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
