import React, { forwardRef, useContext, type BaseHTMLAttributes, type ReactElement, type ReactNode, cloneElement } from 'react';
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
  children?: ReactElement[];
}

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((containerProps, containerRef) => {
  /* --- Set default props --- */
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

  /* --- Set container props --- */
  const containerStyles = styles.container;
  const mergedContainerClassName = mergeClasses(containerStyles.base, fullwidth && containerStyles.fullwidth, containerClassName);

  /* --- Set buttons props --- */
  const buttonNodes: ReactNode[] = [];

  for (let i = 0; i < containerChildren.length; i++) {
    const buttonStyles = styles.button;

    const mergedButtonClassName = mergeClasses(
      buttonStyles.base,
      buttonStyles.variants[variant][theme][color],
      buttonStyles.sizes[size],
      elevated && buttonStyles.elevated[theme],
      i === 0 && buttonStyles.first,
      isLast(containerChildren, i) && buttonStyles.last[variant],
      containerChildren[i].props.clasName
    );

    const buttonType = containerChildren[i].props.type ?? type;

    buttonNodes[i] = cloneElement(containerChildren[i], { className: mergedButtonClassName, key: i, type: buttonType });
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
