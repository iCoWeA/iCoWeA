import React, { forwardRef, useContext, type BaseHTMLAttributes, type ReactNode } from 'react';
import { type ButtonGroupVariants } from '../../configs/buttonGroupConfig';
import themeContext from '../../contexts/theme';
import { isLast, mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface ButtonGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariants;
  size?: Sizes;
  color?: Colors;
  elevated?: boolean;
  fullwidth?: boolean;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  children?: ReactNode;
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((containerProps, containerRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.buttonGroup;
  const {
    variant,
    size,
    color,
    elevated,
    fullwidth,
    type,
    className: containerClassName,
    children: containerChildren,
    ...restContainerProps
  } = mergeProps(defaultProps, containerProps);

  /* Set container props */
  const containerStyles = styles.container;
  const mergedContainerClassName = mergeClasses(containerStyles.base, fullwidth && containerStyles.fullwidth, containerClassName);

  /* Set buttons props */
  const buttonNodes: ReactNode[] = [];
  const childrenNodes = Array.isArray(containerChildren) ? [...containerChildren] : [containerChildren];

  for (let i = 0; i < childrenNodes.length; i++) {
    const buttonStyles = styles.button;
    const { className: buttonClassName, type: buttonType = type, children: buttonChildren, ...restButtonProps } = childrenNodes[i].props;

    const mergedButtonClassName = mergeClasses(
      buttonStyles.base,
      buttonStyles.variants[variant][theme][color],
      buttonStyles.sizes[size],
      elevated && buttonStyles.elevated[theme],
      i === 0 && buttonStyles.first,
      isLast(childrenNodes, i) && buttonStyles.last[variant],
      buttonClassName
    );

    buttonNodes[i] = (
      <button
        key={i}
        className={mergedButtonClassName}
        type={buttonType}
        ref={childrenNodes[i].ref}
        {...restButtonProps}
      >
        {buttonChildren}
      </button>
    );
  }

  return (
    <div
      className={mergedContainerClassName}
      ref={containerRef}
      {...restContainerProps}
    >
      {buttonNodes}
    </div>
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
