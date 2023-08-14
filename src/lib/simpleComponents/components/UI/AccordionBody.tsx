import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type TransitionEvent
} from 'react';
import accordionContext from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses, mergeStyles } from '../../utils/styleHelper';
import { States } from '../../hooks/useTransition';

export interface AccordionBodyProps extends BaseHTMLAttributes<HTMLDivElement> {
  componentsProps?: {
    root?: BaseHTMLAttributes<HTMLDivElement>;
    container?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  (
    {
      componentsProps,
      className: bodyClassName,
      children: bodyChildren,
      ...restBodyProps
    },
    rootRef
  ) => {
    const { state, duration, unmountOnExit, enterTransition, onTransitionEnd } =
      useContext(accordionContext);
    const { config } = useContext(themeContext);
    const {
      defaultProps,
      styles: {
        root: rootStyles,
        constainer: containerStyles,
        body: bodyStyles
      }
    } = config.accordionBody;

    if (unmountOnExit && state === States.EXITED) {
      return <></>;
    }

    /* Set root props */
    const {
      onTransitionEnd: onRootTransitionEnd,
      style: rootStyle,
      className: rootClassName,
      ...restRootProps
    } = componentsProps?.root ?? defaultProps.componentsProps.root;

    const transitionEndRootHandler = (
      event: TransitionEvent<HTMLDivElement>
    ): void => {
      onTransitionEnd();

      if (onRootTransitionEnd !== undefined) {
        onRootTransitionEnd(event);
      }
    };

    const mergedRootStyle = mergeStyles(
      { transitionDuration: `${duration}ms` },
      rootStyle
    );

    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        (state === States.ENTERING || state === States.ENTERED) &&
          rootStyles.open,
        (state === States.ENTERING || state === States.ENTERED) &&
          enterTransition,
        rootClassName
      )
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      componentsProps?.container ?? defaultProps.componentsProps.container;

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
        style={mergedRootStyle}
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
