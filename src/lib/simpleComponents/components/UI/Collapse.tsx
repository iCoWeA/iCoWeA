import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CollapseDefaultProps {
  open?: boolean;
  openTransition?: string;
  closeTransition?: string;
  componentsProps?: {
    container?: BaseHTMLAttributes<HTMLDivElement>;
  };
}

export interface CollapseProps
  extends CollapseDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      open,
      openTransition,
      closeTransition,
      componentsProps,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.collapse;
    const rootStyles = styles.root;
    const containerStyles = styles.container;

    open = open ?? defaultProps.open;
    openTransition = openTransition ?? defaultProps.openTransition;
    closeTransition = closeTransition ?? defaultProps.closeTransition;
    componentsProps = componentsProps ?? defaultProps.componentsProps;

    /* Set root props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        open && rootStyles.open,
        open ? openTransition : closeTransition,
        rootClassName
      )
    );

    /* Set container props */
    const { className: containerClassName, ...restContainerProps } =
      componentsProps.container ?? {};

    const mergedContainerClassName = twMerge(
      mergeClasses(containerStyles.base, containerClassName)
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
          {rootChildren}
        </div>
      </div>
    );
  }
);

Collapse.displayName = 'Collapse';

export default Collapse;
