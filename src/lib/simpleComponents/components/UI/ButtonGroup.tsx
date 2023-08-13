import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type ReactNode,
  cloneElement
} from 'react';
import {
  type ButtonGroupColors,
  type ButtonGroupSizes,
  type ButtonGroupVariants
} from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { isLast, mergeClasses } from '../../utils/styleHelper';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariants;
  size?: ButtonGroupSizes;
  color?: ButtonGroupColors;
  elevated?: boolean;
  fullwidth?: boolean;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      variant,
      size,
      color,
      elevated,
      fullwidth,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const {
      defaultProps,
      styles: { root: rootStyles, button: buttonStyles }
    } = config.buttonGroup;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    elevated = elevated ?? defaultProps.elevated;
    fullwidth = fullwidth ?? defaultProps.fullwidth;

    /* Set root props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        fullwidth && rootStyles.fullwidth,
        rootClassName
      )
    );

    /* Set buttons props */
    const buttonNodes: ReactNode[] = [];
    const childrenNodes = Array.isArray(rootChildren)
      ? [...rootChildren]
      : [rootChildren];

    for (let i = 0; i < childrenNodes.length; i++) {
      const mergedButtonClassName = twMerge(
        mergeClasses(
          buttonStyles.base,
          buttonStyles.variants[variant][theme][color],
          buttonStyles.sizes[size],
          elevated && buttonStyles.elevated[theme],
          i === 0 && buttonStyles.first,
          isLast(childrenNodes, i) && buttonStyles.last[variant]
        )
      );

      buttonNodes[i] = cloneElement(childrenNodes[i], {
        className: mergedButtonClassName,
        key: i
      });
    }

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        {buttonNodes}
      </div>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
